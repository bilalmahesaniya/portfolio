# UI/UX Design Brief

## 1. Experience Goal
- **Desired feeling:** Confident, precise, and technically credible — like the portfolio of someone who understands systems, not just decoration. The work should feel like the main event; the interface should feel crafted but never loud enough to distract from the projects.
- **Three visual adjectives:** Sharp. Precise. Confident.
- **What the design must avoid:** Generic "AI-gradient-blob" hero backgrounds, glassmorphism overload, more than two accent colors fighting for attention, cluttered spacing, stock-photo energy, anything that reads as a default template.

## 2. Users and Context
- **Primary user:** Recruiters/hiring managers, often scanning quickly on a laptop during work hours; secondary use on mobile (checking a link from a phone).
- **Device and environment:** Desktop-first evaluation, but must be equally strong on mobile since links are frequently opened from email/LinkedIn apps.
- **Accessibility needs:** Must meet WCAG 2.1 AA — this is a job-seeking tool, it cannot exclude anyone or fail basic screen-reader/keyboard use.

## 3. Visual Direction

**Colour palette and roles**

| Token | Hex | Role |
|---|---|---|
| `bg-primary` | `#0B0D12` | Main page background (near-black, not pure black) |
| `bg-surface` | `#14161D` | Cards, nav bar, modal surfaces |
| `bg-surface-alt` | `#1B1E27` | Hover/elevated surface state |
| `text-primary` | `#E7E9EE` | Headings and primary body text (off-white, not pure white) |
| `text-secondary` | `#8B92A3` | Supporting/meta text, captions |
| `accent-primary` | `#4F7CFF` | Electric indigo-blue — links, primary buttons, active states, focus rings |
| `accent-secondary` | `#14F1B2` | Vivid teal/mint — used sparingly for tags, status highlights, small accents only |
| `border-subtle` | `rgba(255,255,255,0.08)` | 1px hairline borders/dividers |
| `success` | `#3DDC84` | Form success state |
| `error` | `#FF5C6C` | Form error state |

Never use pure black (`#000000`) or pure white (`#FFFFFF`) directly — always the near-black/off-white tokens above, which keep contrast comfortable and avoid a harsh, cheap look.

**Typography**
- **Headings:** Space Grotesk — geometric, confident, slightly technical without being a cliché "hacker" mono font.
- **Body text:** Inter — highly legible at small sizes, neutral, professional.
- **Accent/label text (e.g., category tags, section eyebrows like "02 — PROJECTS"):** JetBrains Mono — used only for small UI labels/numerals to reinforce the techy feel, never for paragraph text.

**Icon direction:** Line icons only (Lucide), consistent 1.5px stroke weight, no filled/solid icon mixing.

**Image/illustration direction:** Project images presented as clean device/browser frame mockups on the dark background, generous negative space around each; avoid busy drop shadows — prefer a subtle outer glow in `accent-primary` at low opacity on hover instead of a literal shadow.

**Surface and border treatment:** Flat surfaces with a hairline border (`border-subtle`), 12–16px corner radius throughout for a modern-but-not-childish feel; on hover, elevate with a slightly lighter surface color and a soft accent glow rather than a heavy drop shadow.

## 4. Layout System
- **Content width:** Max-width ~1200px, centered, with responsive side padding (24px mobile → 64–96px desktop).
- **Grid:** 12-column grid on desktop (≥1024px); 4-column on tablet; single column stack on mobile (<640px).
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 (px) — all margins/padding pulled from this scale, nothing arbitrary.
- **Section rhythm:** Generous vertical breathing room between sections — 96–128px on desktop, 64px on mobile — reinforcing a confident, uncluttered feel.
- **Responsive breakpoints:** Mobile `<640px`, Tablet `640–1024px`, Desktop `>1024px`.

## 5. Component Language

**Buttons**
- Primary: filled `accent-primary`, off-white text, 12px radius. Hover: slight brightness lift + soft glow. Focus: 2px `accent-primary` outline offset 2px. Active: slight scale-down (0.98). Disabled: 40% opacity, no hover effects.
- Secondary: transparent background, `border-subtle` outline, `text-primary` label. Hover: border brightens to `accent-primary`.

**Inputs (contact form)**
- Filled dark (`bg-surface`), `border-subtle` by default. Focus: border becomes `accent-primary` with a soft glow ring. Error: border becomes `error` with an inline message below. Placeholder text uses `text-secondary`.

**Navigation**
- Sticky top bar, `bg-surface` at ~85% opacity with backdrop blur, hairline bottom border. Active section link underlined/colored in `accent-primary`. Mobile: collapses to a hamburger icon opening a full-height overlay menu.

**Cards (project cards)**
- `bg-surface`, hairline border, 16px radius, cover image with a subtle zoom (scale 1.03) on hover, category tag rendered in JetBrains Mono as a small pill using `accent-secondary` text on a translucent chip background.

**Modals / overlays (project detail)**
- Dark scrim over the page (black at ~70% opacity) with slight backdrop blur; modal surface is `bg-surface-alt`, 16–20px radius, close button top-right, scrollable content on smaller screens.

**Tables/lists**
- Not heavily used; the Skills section renders as a wrapped tag/chip list rather than a literal table, keeping the dark-techy feel light rather than dense.

**Feedback/status components**
- Form success: inline message in `success` green with a checkmark icon. Form error: inline message in `error` red with an alert icon. Both replace/augment the submit button area without shifting layout abruptly.

*(States required for every interactive component above: default, hover, focus, active, disabled, loading, and error where applicable.)*

## 6. Screen (Section) Direction

- **Hero:** Left-aligned (desktop) large headline with name + role, one-line pitch below, two CTAs (primary "View Work", secondary "Download Resume") side by side. Right side reserved for a subtle abstract graphic/illustration or a stylized portrait — not a generic stock photo. Mobile: stacks to centered or left-aligned single column, CTAs stack or sit side-by-side if they fit.
- **About/Education:** Short paragraph bio on one side, vertical timeline on the other (desktop, two-column); stacks to a single vertical timeline on mobile with a connecting line down the left edge.
- **Skills:** A wrapped grid of tag/chip components grouped under 2–3 subheadings (e.g., "Design", "Tools", "Research/Process" — exact grouping TBD once Bilal's tool list is confirmed).
- **Projects:** Filter tabs (All / UI/UX Design / Graphic Design) above a responsive card grid (3 columns desktop, 2 tablet, 1 mobile).
- **Certifications:** A compact list/row of credential cards, each with issuer + date, optionally a small badge/icon.
- **Contact:** Two-column on desktop — form on one side, direct contact info + social links on the other; single column stacked on mobile, form first.

**Mobile-specific behaviour:** Hamburger nav; hero CTAs may stack vertically if both can't fit on one line comfortably; project grid drops to a single column; timeline and about/skills sections stack vertically in reading order.

## 7. Interaction and Motion
- **Purposeful transitions:** Scroll-triggered fade + slight upward slide (e.g., 16px) as each section/card enters the viewport, staggered slightly across grid items (Framer Motion).
- **Feedback moments:** Button hover glow, card hover lift/zoom, filter tab active-state transition, form submit button showing a brief loading state before success/error.
- **Reduced-motion behaviour:** When `prefers-reduced-motion` is set, disable slide/stagger animation and use simple opacity fades only (or no animation at all) — content must never depend on motion to become visible.

## 8. Accessibility
- **Contrast:** All text meets ≥4.5:1 against its background (≥3:1 for large headings/UI elements) using the token palette above.
- **Keyboard use:** Every interactive element (nav links, filter tabs, project cards, modal close, form fields/submit, social links) must be reachable and operable via Tab/Enter/Space; modal must trap focus while open and return focus to the trigger on close.
- **Focus states:** Visible focus ring in `accent-primary`, never removed via `outline: none` without a replacement.
- **Tap targets:** Minimum 44×44px for all buttons/links on touch devices.
- **Text sizing:** Base font size in rem units, respecting user browser zoom/font-size preferences; no text locked inside fixed-height containers that would clip at larger sizes.

## 9. Consistency Rules

### Always use
- The defined color tokens, spacing scale, and type scale — no one-off hex codes or arbitrary pixel values.
- 12–16px corner radius consistently across buttons, cards, inputs, and modals.
- `accent-primary` for the single dominant interactive/highlight color; `accent-secondary` only for small tag/status accents.

### Never use
- Pure black (`#000000`) or pure white (`#FFFFFF`).
- More than two accent colors visible in the same viewport at once.
- Auto-playing video or sound.
- Decorative motion that delays a user from reading real content (e.g., long intro animations before the Hero text appears).
