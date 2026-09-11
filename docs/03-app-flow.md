# App Flow

## 1. Journey Summary (plain English)
A visitor (usually a recruiter) arrives at the site — most likely from a shared link, resume, LinkedIn, or QR code. They land on a dark, confident Hero section that immediately states who Bilal is and what he does. As they scroll (or jump via the sticky nav), they move through his education/training story, his skills, and then into the main event: a filterable grid of his 12 projects. Filtering lets them narrow to just UI/UX work or just Graphic Design work depending on what they're hiring for. Clicking any project opens a detail view with more context. Further down, certifications reinforce credibility, and the Contact section gives them a fast way to reach out, download his resume, or visit his LinkedIn/Behance. Because it's a single page, there's no "getting lost" — navigation is just scrolling and anchor jumps, and the only overlay state is the project detail modal.

## 2. Entry Points
- **First visit:** Direct link (shared via email, LinkedIn message, job application, resume footer, QR code on a physical resume/business card).
- **Returning user:** Same URL — no login/session, so every visit behaves like a first visit content-wise (browser may remember scroll position).
- **Shared or deep link:** Anchor links (e.g., `#projects`, `#contact`) allow sharing a link that scrolls directly to a specific section.

## 3. Authentication Flow
Not applicable — the site has no accounts, sign-in, or protected content.

## 4. Screen Inventory
*(Single-page site — "screens" below are the major sections a visitor scrolls through, plus one overlay state.)*

| Section | Route/Anchor | Purpose | Entry conditions | Main content | Primary action | Secondary actions | Loading state | Empty state | Error state | Success state | Next destination |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Nav Bar | `#top` (persistent) | Orientation + quick jump anywhere | Always visible (sticky) | Logo/name, section links, resume button | Jump to a section | Toggle mobile menu | N/A | N/A | N/A | N/A | Any section |
| Hero | `#home` | First impression, state who Bilal is | Page load | Name, title, one-line pitch, photo/illustration | CTA → View Work | CTA → Download Resume | Fade-in on load | N/A | N/A | N/A | Projects or Resume |
| About & Education | `#about` | Establish credibility/background | Scrolled into view | Bio + timeline (12th Science → UI/UX cert → Graphic Design course → Diploma, ongoing) | Continue scrolling | Link to full resume | Scroll-reveal animation | N/A | N/A | N/A | Skills |
| Skills | `#skills` | Show capability areas & tools | Scrolled into view | Grouped skill/tool tags | Continue scrolling | — | Scroll-reveal animation | N/A | N/A | N/A | Projects |
| Projects | `#projects` | Core proof of work | Scrolled into view or nav jump | Filter control + 12 project cards | Click a project → open detail | Change filter (All/UI-UX/Graphic Design) | Skeleton/placeholder cards while images load | "No projects match this filter" (defensive only) | Broken image → fallback cover image | Filter applied / project opened | Project Detail (modal) or Certifications |
| Project Detail (overlay) | N/A (modal, no route change) | Deep-dive on one project | Click on a project card | Gallery, description, role, tools, external link (if any) | Close modal | Click external link (live site/Behance) | Image loading placeholder | N/A | Missing gallery image → fallback to cover image | N/A | Back to Projects grid |
| Certifications | `#certifications` | Reinforce formal credentials | Scrolled into view | Certification name, issuer, date, optional link | Continue scrolling | Click "view credential" (if available) | Scroll-reveal animation | If no link available, button is omitted, not broken | N/A | N/A | Contact |
| Contact | `#contact` | Convert interest into an action | Scrolled into view or nav jump | Form (name/email/message), direct email, social links, resume button | Submit form | Click a social link / download resume | Button shows "Sending…" state | N/A | Inline validation errors; submission failure → retry message | Success confirmation message | End of page / Footer |
| Footer | `#footer` | Wrap-up, repeat key links | Bottom of page | Name, copyright, social icons, back-to-top | Back to top | Social link click | N/A | N/A | N/A | N/A | Top of page |

## 5. Primary User Journey (happy path)
1. Recruiter opens the link → lands on **Hero**, immediately sees Bilal's name, role, and pitch.
2. Clicks **"View Work"** CTA → smooth-scrolls to **Projects**.
3. (Optionally scrolls up first and reads **About/Education** and **Skills** on the way down.)
4. Uses the **filter** to switch to "UI/UX Design" (since they're hiring for that role).
5. Scans project cards, clicks one that looks relevant → **Project Detail modal** opens with more context.
6. Closes the modal, browses 1–2 more projects.
7. Scrolls to **Certifications**, confirms the UI/UX certification is real.
8. Scrolls to **Contact**, fills out the form ("Hi Bilal, we'd like to chat about an internship...") and submits.
9. Sees a **success confirmation** → journey complete.

## 6. Secondary Journeys
- **Direct resume seeker:** Lands on Hero → immediately clicks "Download Resume" without reading further → done.
- **Mobile browser:** Lands on Hero → taps hamburger menu → jumps straight to "Projects" via nav → filters → views 1–2 projects → taps a social link (e.g., LinkedIn) to view more elsewhere.
- **Freelance client:** Lands via a shared social post → browses "Graphic Design" filtered projects specifically → contacts via email link directly (skips the form) or via form.
- **Return visitor sharing the link internally:** Copies a deep link like `.../#projects` to send to a colleague, who lands scrolled directly to Projects.

## 7. Decision Points
| User action | Condition | Result | Destination |
|---|---|---|---|
| Click filter tab ("All" / "UI/UX Design" / "Graphic Design") | Tab not already active | Grid re-renders with matching projects only; tab shows active state | Stays on Projects section |
| Click a project card | Card is not already open | Detail modal opens with that project's content | Project Detail overlay |
| Click outside modal / press Esc / click close (X) | Modal is open | Modal closes | Back to Projects grid, scroll position preserved |
| Submit contact form | All required fields valid | Form sends via form service | Success message shown |
| Submit contact form | A required field is invalid/empty | Submission blocked | Inline error(s) shown next to the offending field(s) |
| Click "Download Resume" | Resume file exists | PDF opens/downloads | New tab or file download |
| Click a social link (LinkedIn/Behance/etc.) | Link is defined | Opens in new tab | External site |
| Click nav link (mobile) | Hamburger menu open | Menu closes, page scrolls to target section | Target section |

## 8. Edge Cases and Recovery
- **Invalid input (contact form):** Inline, field-level error message (e.g., "Enter a valid email"); submit button stays disabled until resolved.
- **Failed request (form submission fails):** Show a clear error state ("Something went wrong — please try again or email me directly at [email]") and preserve the user's typed content.
- **Lost connection:** If images fail to load (e.g., poor connection), show a subtle placeholder/blur-up rather than a broken image icon; retry automatically when connection resumes if feasible.
- **Missing permissions:** Not applicable — no permission-gated features exist.
- **Expired session:** Not applicable — no sessions/auth.
- **Cancelled action:** Closing the project modal without reading everything is a normal, supported action — no confirmation dialog needed (low-stakes action).
- **Missing content (defensive):** If a project is missing an image, tool list, or description at any point during content updates, the site must render a graceful fallback (placeholder image, "details coming soon") rather than a broken layout.

## 9. Navigation Rules
- **Global navigation:** Sticky nav bar (top) with anchor links to Home, About, Skills, Projects, Certifications, Contact, plus a persistent Resume button; on mobile this collapses into a hamburger menu.
- **Back behaviour:** Browser back button is not a primary flow (single page); closing the project modal acts as the effective "back" action within the page.
- **Protected routes:** None — the entire site is public.
- **Deep links:** Section anchors (`#projects`, `#contact`, etc.) must be shareable and scroll to the correct section on load.
