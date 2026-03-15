# Docs Dark Mode — Color & Component Standards

Derived from the Content OS design system. Use these values to keep documentation visually consistent with the application.

---

## Page Colors

| Surface          | Hex       | Usage                        |
| ---------------- | --------- | ---------------------------- |
| Page background  | `#09090B` | `<body>` / main canvas       |
| Content area     | `#0F0F11` | Article body, content well   |
| Sidebar / nav    | `#121212` | Side navigation panel        |
| Card / callout   | `#121212` | Info boxes, code blocks bg   |
| Raised surface   | `#1F1F23` | Tooltips, popovers, dropdowns|

## Borders

| Role      | Hex       | Usage                              |
| --------- | --------- | ---------------------------------- |
| Faint     | `#1F1F23` | Hairline dividers between sections |
| Default   | `#27272A` | Card borders, sidebar edge         |
| Strong    | `#3F3F46` | Input outlines, focused elements   |
| Emphasis  | `#52525B` | Table headers, active borders      |

## Text

| Role      | Hex       | Usage                              |
| --------- | --------- | ---------------------------------- |
| Primary   | `#FAFAFA` | Headings, titles                   |
| Secondary | `#F4F4F5` | Body paragraphs, main content      |
| Muted     | `#A1A1AA` | Descriptions, metadata, captions   |
| Subtle    | `#71717A` | Breadcrumbs, timestamps            |
| Faint     | `#52525B` | Placeholders, disabled text        |

## Accent (Purple — Sparingly)

| Role       | Value                     | Usage                        |
| ---------- | ------------------------- | ---------------------------- |
| Primary    | `#A78BFA`                 | Links, active nav, highlights|
| Hover      | `#8B5CF6`                 | Link hover                   |
| Soft bg    | `rgba(167,139,250,0.1)`   | Active nav tint, callout bg  |
| Soft hover | `rgba(167,139,250,0.15)`  | Hover tint on accent bg      |

## Semantic

| Type    | Text      | Background                   | Border                       |
| ------- | --------- | ---------------------------- | ---------------------------- |
| Success | `#22C55E` | `rgba(34, 197, 94, 0.1)`    | `rgba(34, 197, 94, 0.3)`    |
| Warning | `#EAB308` | `rgba(234, 179, 8, 0.1)`    | `rgba(234, 179, 8, 0.3)`    |
| Error   | `#EF4444` | `rgba(239, 68, 68, 0.1)`    | `rgba(239, 68, 68, 0.3)`    |
| Info    | `#3B82F6` | `rgba(59, 130, 246, 0.1)`   | `rgba(59, 130, 246, 0.3)`   |

---

## Component Styles

### Navigation

```
Sidebar bg:        #121212
Sidebar border:    1px solid #27272A (right edge)

Nav item default:  text #A1A1AA
Nav item hover:    text #FAFAFA, bg #27272A
Nav item active:   text #F4F4F5, bg #27272A

Section label:     text #52525B, 10px, uppercase, tracking wide
```

### Code Blocks

```
Background:   #121212
Border:       1px solid #27272A
Text:         #F4F4F5
Corner:       8px radius

Inline code:
  Background: #1F1F23
  Text:       #F4F4F5
  Padding:    2px 6px
  Corner:     4px radius
```

### Callout / Admonition Boxes

```
Info:     bg rgba(59,130,246,0.1)   border-l 3px #3B82F6   text #F4F4F5
Warning:  bg rgba(234,179,8,0.1)    border-l 3px #EAB308   text #F4F4F5
Error:    bg rgba(239,68,68,0.1)    border-l 3px #EF4444   text #F4F4F5
Success:  bg rgba(34,197,94,0.1)    border-l 3px #22C55E   text #F4F4F5
Corner:   8px radius
```

### Tables

```
Header bg:     #1F1F23
Header text:   #FAFAFA, font-weight 600
Row bg:        transparent
Row alt bg:    #0F0F11
Row border:    1px solid #1F1F23
Cell text:     #F4F4F5
```

### Buttons

```
Primary:     bg #FAFAFA, text #09090B, hover bg #E4E4E7
Secondary:   bg #121212, border #3F3F46, text #FAFAFA, hover bg #27272A
Ghost:       bg transparent, text #A1A1AA, hover bg #27272A, hover text #FAFAFA
```

### Links

```
Default:   #A78BFA (purple)
Hover:     #8B5CF6
Visited:   #A78BFA (same as default — no shift)
```

### Inputs / Search

```
Background:   #121212
Border:       1px solid #3F3F46
Text:         #FAFAFA
Placeholder:  #52525B
Focus border: #52525B
Corner:       6px radius
```

### Badges / Tags

```
Neutral:   bg #27272A, text #A1A1AA, border #27272A
Accent:    bg rgba(167,139,250,0.1), text #A78BFA, border #A78BFA
```

### Scrollbar

```
Track:   #121212
Thumb:   #27272A
Hover:   #71717A
Width:   8px
```

---

## Typography Quick Ref

| Element        | Size | Weight | Spacing   | Color     |
| -------------- | ---- | ------ | --------- | --------- |
| Page title     | 24px | 600    | -0.025em  | `#FAFAFA` |
| Section head   | 18px | 600    | -0.025em  | `#FAFAFA` |
| Subsection     | 16px | 600    | -0.01em   | `#FAFAFA` |
| Body           | 14px | 400    | 0         | `#F4F4F5` |
| Small body     | 13px | 400    | 0         | `#A1A1AA` |
| Label          | 12px | 500    | 0.025em   | `#A1A1AA` |
| Caption        | 11px | 400    | 0.01em    | `#71717A` |
