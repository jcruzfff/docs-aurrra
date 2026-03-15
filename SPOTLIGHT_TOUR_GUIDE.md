# Spotlight Tour — Implementation Guide

Reusable onboarding pattern for walking users through a page's key actions. A dark overlay highlights one DOM element at a time while a tooltip card explains what it does.

---

## Architecture

```
Page (state owner)
├── Sidebar / Main UI
│   └── elements with data-onboarding="step-id" attributes
└── <SpotlightTour show={bool} onDismiss={fn} steps={[...]} />
```

**State lives in the page** — the page owns `showOnboarding` and passes it down. The tour component is a portal rendered to `document.body`.

---

## Quick Start

### 1. Define your steps

Each step targets a DOM element via its `data-onboarding` attribute value.

```tsx
const STEPS = [
  {
    target: "source-input",        // matches data-onboarding="source-input"
    title: "Provide a source",
    description: "Paste a YouTube URL or drag & drop an image.",
    detail: "Optional secondary context shown with a left-border accent.",  // optional
    placement: "right",            // "right" or "top"
  },
  {
    target: "reference-photos",
    title: "Add your face",
    description: "Upload reference photos for AI face-swapping.",
    placement: "right",
  },
  {
    target: "generate-button",
    title: "Generate & refine",
    description: "Hit generate, then use the inline editor to tweak results.",
    detail: "Your history is saved.",
    placement: "right",
  },
];
```

### 2. Tag your DOM elements

Add `data-onboarding` attributes to the elements you want to highlight:

```tsx
<section data-onboarding="source-input">
  {/* ... */}
</section>

<div data-onboarding="reference-photos">
  {/* ... */}
</div>

<button data-onboarding="generate-button">
  Generate
</button>
```

**Important:** Place the attribute on the tightest possible element — not a padded wrapper. The spotlight measures `getBoundingClientRect()` of the tagged element.

### 3. Add page state + auto-show on first visit

```tsx
const STORAGE_KEY = "my-page-onboarding-seen";

const [showOnboarding, setShowOnboarding] = useState(false);

// Auto-show on first visit
useEffect(() => {
  const seen = localStorage.getItem(STORAGE_KEY);
  if (!seen) {
    const timer = setTimeout(() => setShowOnboarding(true), 400);
    return () => clearTimeout(timer);
  }
}, []);

const dismissOnboarding = useCallback(() => {
  setShowOnboarding(false);
  localStorage.setItem(STORAGE_KEY, "true");
}, []);
```

The 400ms delay ensures the DOM is fully rendered before the tour measures element positions.

### 4. Add a "?" trigger button

Let users re-trigger the tour anytime:

```tsx
<button
  onClick={() => setShowOnboarding(true)}
  className="w-6 h-6 rounded-full flex items-center justify-center text-text-subtle hover:text-text-primary hover:bg-bg-hover transition-colors"
  title="How it works"
>
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</button>
```

### 5. Render the tour

```tsx
<SpotlightTour
  show={showOnboarding}
  onDismiss={dismissOnboarding}
  steps={STEPS}
/>
```

---

## Visual Anatomy

```
┌─────────────────────────────────────────────────┐
│  Dark overlay (rgba 0,0,0,0.6)                  │
│                                                  │
│   ┌──────────────┐    ┌───────────────────┐     │
│   │              │◄───│ ● ●  ━━           │     │
│   │  Highlighted │    │ STEP 1 OF 3       │     │
│   │  element     │    │ Title             │     │
│   │              │    │ Description text   │     │
│   └──────────────┘    │ │ Detail note      │     │
│                       │                   │     │
│                       │ Skip    [Next]    │     │
│                       └───────────────────┘     │
└─────────────────────────────────────────────────┘
```

---

## Spotlight Behavior

| Constant | Value | Purpose |
|---|---|---|
| `SPOTLIGHT_PAD` | `14px` | Breathing room around the highlighted element |
| `TOOLTIP_GAP` | `16px` | Space between spotlight edge and tooltip card |
| `ESTIMATED_TOOLTIP_H` | `300px` | Used for viewport clamping math |
| `VIEWPORT_PAD` | `16px` | Min distance from viewport edges |

### Positioning logic (placement: "right")

1. Find the target element's center Y coordinate
2. Calculate `viewportRatio` = how far down the viewport the target sits (0 = top, 1 = bottom)
3. Interpolate an `anchorRatio` from 0.2 → 0.8 — determines where the arrow sits on the card
4. Clamp within viewport bounds
5. Triangle pointer's `top` percentage adjusts to always point at the target's center

This means:
- **Target near top** → arrow in upper quarter, card extends below
- **Target in middle** → arrow centered
- **Target near bottom** → arrow in lower quarter, card extends above

### Spotlight ring

A subtle `border-white/10` ring sits on the cutout — visible enough to guide attention, not bright enough to distract.

---

## Tooltip Card Design

Uses design system tokens:

- **Background:** `bg-bg-card`
- **Border:** `border-border-subtle`
- **Shadow:** `shadow-2xl`
- **Width:** `w-72` (288px)
- **Border radius:** `rounded-xl`

### Internal structure

```
┌─ Step dots (px-5 pt-4) ──────────────────┐
│  ●  ●  ━━                                │
├─ Body (px-5 pt-3 pb-4) ─────────────────┤
│  STEP 1 OF 3          (10px, uppercase)  │
│  Title                 (14px, semibold)   │
│  Description           (12px, muted)      │
│  │ Detail note         (11px, subtle)     │
├─ Navigation (px-5 py-3, bg-surface/30) ──┤
│  Skip tour              [Back]  [Next]   │
└───────────────────────────────────────────┘
```

### Navigation buttons

- **Next / Done:** `bg-white text-zinc-900` — high contrast CTA
- **Back:** ghost button with `text-text-muted hover:bg-bg-hover`
- **Skip:** small `text-[11px] text-text-subtle` link

### Triangle pointer

Lives **outside** the `overflow-hidden` card container (on the outer positioning div) so it's never clipped. Uses CSS border-triangle technique with an outer border color (`--border-subtle`) and inner fill color (`--bg-card`).

---

## Keyboard Support

| Key | Action |
|---|---|
| `→` or `Enter` | Next step |
| `←` | Previous step |
| `Escape` | Dismiss tour |

Clicking the dark overlay also dismisses.

---

## Props to pass through to the page UI

When the tour is active, you may want to visually override certain elements:

```tsx
// Example: show a disabled button at full opacity during the tour
<button
  disabled={isRunning || !canSubmit}
  className={`... ${tourActive ? "opacity-100" : "disabled:opacity-50"}`}
>
```

Pass `tourActive={showOnboarding}` to the relevant component.

---

## localStorage Keys

Each page should use a unique key:

| Page | Key |
|---|---|
| Thumbnail Generator | `thumbnail-onboarding-seen` |
| Video Editor | `video-editor-onboarding-seen` |
| Voice Avatar | `voice-avatar-onboarding-seen` |
| Scripts Studio | `scripts-onboarding-seen` |

---

## Reference Implementation

See `src/app/(app)/workflows/thumbnail/_components/ThumbnailOnboarding.tsx` for the complete working example. When adding to a new page, copy that file, update the `TOUR_STEPS` array, and wire up the page state as described above.
