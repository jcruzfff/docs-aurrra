# UI Revamp Game Plan

This document outlines the design patterns established in the Video Editor workflow and the plan to apply them consistently across all workflow pages.

---

## Completed: Video Editor Revamp

The video editor (`/workflows/video-edit`) has been refactored into a modular, polished UI that serves as the reference implementation for all other workflows.

### Architecture Changes

**Component Structure:**
```
workflows/video-edit/
├── page.tsx                    # Main orchestrator (state management)
├── queue/page.tsx              # Standalone job history table
└── _components/
    ├── EditorSidebar.tsx       # Left panel: inputs & configuration
    ├── EditorWorkspace.tsx     # Right panel: preview, status, logs
    └── JobsDrawer.tsx          # Slide-over drawer for job history
```

### Key UI Patterns Established

#### 1. Split-Panel Layout
- **Left sidebar** (360px fixed): Configuration, inputs, toggles, action button
- **Right workspace** (flex-1): Preview area, status, results, logs
- Clear visual separation with `border-r border-border-subtle`

#### 2. Floating Slide-Over Drawer (`JobsDrawer`)
A reusable pattern for displaying secondary content without leaving the page:
- Floats with 24px padding from edges (`top-6 right-6 bottom-6`)
- Rounded corners (`rounded-2xl`)
- Smooth spring animation with custom cubic-bezier easing
- Multiple size options: `sm` (400px), `md` (600px), `lg` (75vw), `xl` (90vw)
- Backdrop overlay with click-to-close
- Escape key to close
- Full table integration for job history

#### 3. Animated Expand/Collapse Sections
Using inline styles for reliable CSS transitions:
```tsx
<div
  className="overflow-hidden"
  style={{
    maxHeight: isOpen ? '400px' : '0px',
    opacity: isOpen ? 1 : 0,
    marginTop: isOpen ? '12px' : '0px',
    transition: 'max-height 300ms ease-out, opacity 300ms ease-out, margin-top 300ms ease-out',
  }}
>
  <div style={{
    transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
    transition: 'transform 300ms ease-out 75ms',
  }}>
    {/* Content */}
  </div>
</div>
```

#### 4. Standardized Color Palette
- **Success/Saved**: `bg-emerald-500/20 text-emerald-400` (badges), `bg-emerald-500/10 border-emerald-500/20` (cards)
- **Running/Processing**: `bg-accent/20 text-accent` with animated progress bar
- **Pending**: `bg-yellow-500/20 text-yellow-400`
- **Failed/Error**: `bg-red-500/20 text-red-400`
- **Download buttons**: `bg-white text-zinc-900` (high contrast)

#### 5. Empty States
Minimal, subtle empty states:
```tsx
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
  <svg className="w-8 h-8 text-text-subtle mb-4" ... />
  <p className="text-sm text-text-subtle max-w-xs">
    Import a video from the sidebar to start editing
  </p>
</div>
```

#### 6. ToggleSwitch with Info Tooltips
- Fixed positioning tooltips that escape `overflow` containers
- `z-[9999]` to appear above all UI elements
- Hover-triggered with smooth fade
- Reverse layout option for sidebar alignment

#### 7. FileInput Enhancements
- Icon-based file picker trigger (no explicit "Browse" button)
- Drag-and-drop support
- URL input with cloud upload capability
- Transparent background by default

#### 8. Job History Table
Full-featured table with:
- Status badges with consistent colors
- Progress bars (determinate for completed, animated for running)
- Duration before/after with time saved badge
- Clickable rows to select and view job details
- Inline stats bar (Total • Processing • Completed • Failed)

#### 9. Props Naming Convention
All callback props end with `Action` to satisfy Next.js TypeScript rules:
```tsx
interface Props {
  videoPathAction: (path: string) => void;
  runAction: () => void;
  closeAction: () => void;
  // etc.
}
```

---

## Pages to Revamp

### Priority 1: Script Generators
These pages have similar input/output patterns to the video editor.

#### `/workflows/youtube-script`
- [ ] Extract into `_components/` structure
- [ ] Add `ScriptSidebar.tsx` for topic, style, length inputs
- [ ] Add `ScriptWorkspace.tsx` for generated script display
- [ ] Add job history drawer for past generations
- [ ] Apply animated expand/collapse to "Generate Hooks Only" section

#### `/workflows/shortform-script`
- [ ] Same component extraction pattern
- [ ] Sidebar for topic, variations, hooks-only toggle
- [ ] Workspace for displaying generated scripts
- [ ] Job history integration

### Priority 2: Research Workflows

#### `/research` (YouTube + Instagram tabs)
- [ ] Refactor `InstagramResearchTab.tsx` into modular components
- [ ] Apply floating drawer pattern for video detail modals
- [ ] Standardize table styling to match job history table
- [ ] Add consistent loading states and empty states

### Priority 3: Thumbnail Generator

#### `/workflows/thumbnail`
- [ ] Complex page with multiple modes (Generate vs Edit)
- [ ] Extract sidebar and workspace components
- [ ] Apply consistent input styling
- [ ] Add generation history drawer

### Priority 4: Channel Management

#### `/channels`
- [ ] Apply consistent card/table styling
- [ ] Use floating drawer for channel details
- [ ] Standardize modal patterns

---

## Component Extraction Checklist

When refactoring each page:

1. **Create `_components/` directory** under the workflow folder
2. **Extract Sidebar component**:
   - All inputs, toggles, configuration
   - Action button at bottom
   - Props end with `Action` suffix
3. **Extract Workspace component**:
   - Preview/results area
   - Status indicators
   - Logs/console (if applicable)
4. **Add JobsDrawer** (or equivalent):
   - History of past runs
   - Clickable to restore/view
   - Consistent table styling
5. **Apply animation patterns**:
   - Expand/collapse sections with inline `style` transitions
   - Drawer slide-in with spring easing
6. **Standardize colors**:
   - Use emerald for success
   - Use accent for running
   - Use yellow for pending
   - Use red for errors
7. **Simplify empty states**:
   - Remove feature cards
   - Subtle icon + brief message

---

## Files Modified in This Revamp

### New Files
- `src/app/(app)/workflows/video-edit/_components/EditorSidebar.tsx`
- `src/app/(app)/workflows/video-edit/_components/EditorWorkspace.tsx`
- `src/app/(app)/workflows/video-edit/_components/JobsDrawer.tsx`

### Modified Files
- `src/app/(app)/workflows/video-edit/page.tsx` - Refactored to orchestrator pattern
- `src/app/(app)/workflows/video-edit/queue/page.tsx` - Restored full table UI
- `src/components/ToggleSwitch.tsx` - Fixed tooltips, renamed props
- `src/components/FileInput.tsx` - Removed browse button, icon trigger
- `src/components/research/InstagramResearchTab.tsx` - Updated ToggleSwitch usage
- `src/app/(app)/workflows/youtube-script/page.tsx` - Updated ToggleSwitch usage
- `src/app/(app)/workflows/shortform-script/page.tsx` - Updated ToggleSwitch usage
- `src/app/(app)/workflows/thumbnail/page.tsx` - Updated ToggleSwitch usage

---

## Next Steps

1. Review this game plan and prioritize which pages to tackle first
2. Start with YouTube Script Generator (closest to video editor pattern)
3. Gradually roll out to other pages
4. Update `DESIGN_SYSTEM.md` with new component patterns
