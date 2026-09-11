# Product Requirements Document

## 1. Product Overview
- **Product name:** Bilal Mahesaniya — Portfolio
- **One-sentence description:** A single-page, dark-themed portfolio website that showcases Bilal Mahesaniya's UI/UX and graphic design work to help him land a design job or internship.
- **Problem being solved:** Recruiters and hiring managers have no fast, credible, centralized way to evaluate Bilal's design skill, training background, and range of work.
- **Why this product should exist:** A resume alone can't show design taste, craft, or process. A well-designed portfolio *is itself* a work sample — it proves Bilal can design a real interface, not just talk about design.

## 2. Target Users
- **Primary user:** Recruiters, hiring managers, and design leads screening candidates for junior UI/UX designer or graphic designer roles/internships.
- **Their current problem:** Limited time per candidate; need to quickly judge design quality, breadth (UI/UX vs. graphic design), and credibility (training/certification).
- **Their desired outcome:** Decide within ~60 seconds whether to shortlist Bilal, and have an easy way to reach out or save his details.
- **Secondary users, if any:** Freelance clients looking for a designer; students/instructors at Xipra Tech; Bilal himself (as the site owner, for sharing the link).

## 3. Core User Outcome
A visiting recruiter can, within one scroll session, understand **who Bilal is, what he's trained/certified in, and see credible proof of skill across 12 real projects** — then take one clear next action: contact him, download his resume, or visit his social/portfolio profiles.

## 4. Core Features

### Feature: Hero / Intro
- **User need:** Immediately understand who this person is and whether to keep reading.
- **What it does:** Displays name, role/title, a one-line value pitch, and a primary CTA (e.g., "View Work" / "Contact Me" / "Download Resume").
- **Inputs:** None (static content).
- **Expected output:** Clear first impression within 3 seconds; CTA scrolls to Projects or opens Contact/resume.
- **Acceptance criteria:** Name, title, and CTA are visible without scrolling on both desktop and mobile; CTA is clickable and scrolls smoothly to the correct section.
- **Error/empty states:** N/A (static content).

### Feature: About & Education Timeline
- **User need:** Verify Bilal's training is credible and recent/current.
- **What it does:** Short bio plus a timeline: 12th (Science stream) → UI/UX Design course (Xipra Tech, certified) → Graphic Design course (Xipra Tech) → currently pursuing Diploma in Computer Engineering.
- **Inputs:** None (static content, editable via data file).
- **Expected output:** Visitor understands Bilal's educational path and current status at a glance.
- **Acceptance criteria:** All four milestones render in correct chronological order with dates/status where available; timeline is legible on mobile (may stack vertically).
- **Error/empty states:** If a date is unknown, show status only (e.g., "Ongoing") rather than a broken/blank field.

### Feature: Skills & Tools
- **User need:** Quickly scan what Bilal is capable of and which tools he uses.
- **What it does:** Grouped list/grid of skills (e.g., UI Design, UX Research/Wireframing, Prototyping, Visual/Graphic Design, Branding) and tools (e.g., Figma, Adobe XD, Illustrator, Photoshop — **exact tool list TBD from Bilal**).
- **Inputs:** None (static content).
- **Expected output:** A scannable skill/tool set, not a wall of text.
- **Acceptance criteria:** Skills are grouped logically; renders responsively as a grid on desktop, stacked/wrapped list on mobile.
- **Error/empty states:** N/A (static content).

### Feature: Project Showcase (Grid + Filter)
- **User need:** Browse Bilal's actual work, filtered by the type of role they're hiring for.
- **What it does:** Displays all 12 projects as cards (cover image, title, category tag). A filter control toggles between **All / UI/UX Design / Graphic Design**.
- **Inputs:** Filter selection (click/tap).
- **Expected output:** Grid updates instantly to show only matching projects; project count is clear.
- **Acceptance criteria:** All 12 projects are represented; filtering is instant (no page reload); selected filter state is visually indicated; grid is responsive (e.g., 3 columns desktop → 1 column mobile).
- **Error/empty states:** If a filtered category has zero projects (shouldn't happen at launch, but must be handled defensively), show a friendly empty-state message rather than a blank grid.

### Feature: Project Detail View
- **User need:** See more than a thumbnail — understand the brief, role, process, and outcome of a specific project.
- **What it does:** Clicking a project card opens a detail view (modal or expandable panel) with a larger image/gallery, description, role, tools used, and optional external link (live site/Behance case study).
- **Inputs:** Click/tap on a project card; close action.
- **Expected output:** Detail view opens without losing the visitor's place in the page; closes cleanly back to the grid.
- **Acceptance criteria:** Keyboard-dismissible (Esc) and clickable-outside-to-close; images have alt text; works on mobile without breaking layout.
- **Error/empty states:** Missing gallery image falls back to the cover image rather than a broken image icon.

### Feature: Certifications
- **User need:** Confirm formal credentials, not just self-reported skill.
- **What it does:** Lists certifications (e.g., UI/UX Design certification from Xipra Tech) with issuer and date; optionally a "view credential" link.
- **Inputs:** None (static content).
- **Expected output:** A short, credible credentials list.
- **Acceptance criteria:** At minimum shows the UI/UX certification; supports adding more later without redesign.
- **Error/empty states:** If no credential URL is available, omit the link rather than showing a dead button.

### Feature: Contact Section
- **User need:** A frictionless way to reach out.
- **What it does:** A contact form (name, email, message) plus direct email address and social/portfolio links (LinkedIn, Behance, etc. — **links TBD from Bilal**).
- **Inputs:** Name, email, message.
- **Expected output:** Submitted message reaches Bilal (via a form service); visitor sees a success confirmation.
- **Acceptance criteria:** Client-side validation on required fields and email format; success and error states are visually distinct; no page reload on submit.
- **Error/empty states:** Invalid email → inline error; failed submission (network/service error) → retry message, not a silent failure.

### Feature: Resume Download
- **User need:** Recruiters often want a portable resume, not just a webpage.
- **What it does:** A button/link (in Hero and/or Contact) that opens or downloads Bilal's resume PDF.
- **Inputs:** Click/tap.
- **Expected output:** PDF opens in a new tab or downloads directly.
- **Acceptance criteria:** Link works on desktop and mobile; file is a reasonably sized PDF (not a placeholder).
- **Error/empty states:** Until Bilal supplies the file, this must render as an obviously-disabled/"coming soon" state rather than a broken link.

## 5. Scope

### Included in version one
- Single scrolling page: Hero, About/Education, Skills, Projects (filterable, 12 total), Project Detail view, Certifications, Contact, Footer
- Fully responsive layout (mobile/tablet/desktop)
- Resume download
- Contact form with third-party form handling (no custom backend/database)
- Dark, modern/techy visual design (see UI/UX Brief)

### Explicitly excluded from version one
- User accounts / login
- CMS or admin dashboard for editing content without a code change
- Blog / articles section
- Multi-language support
- Light/dark theme toggle (dark is the default and only theme for v1)
- Long-form individual case-study pages (project detail is a modal/panel, not a separate routed page)

### Possible later additions
- Long-form case study pages for 2–3 flagship projects
- Headless CMS (e.g., Notion-as-CMS or Sanity) so Bilal can update projects without touching code
- Testimonials/recommendations section
- Visitor analytics dashboard
- Light/dark toggle

## 6. User Stories
- As a **recruiter**, I want to see Bilal's name, role, and a strong first impression immediately, so that I decide within seconds whether to keep reading.
- As a **recruiter**, I want to filter projects by UI/UX vs. Graphic Design, so that I only see work relevant to the role I'm hiring for.
- As a **recruiter**, I want to see Bilal's education and certifications, so that I can verify his training is real and current.
- As a **recruiter**, I want to download Bilal's resume in one click, so that I can share it internally.
- As a **recruiter**, I want a simple way to contact Bilal, so that I can follow up without hunting for an email address.
- As a **mobile visitor**, I want the site to work well on my phone, so that I can browse it on the go.
- As **Bilal**, I want the project grid to clearly separate UI/UX work from graphic design work, so that visitors don't assume I only do one or the other.

## 7. Functional Requirements
- The site must render all core sections in a single scrollable page with a persistent/sticky navigation bar linking to each section.
- The project grid must support filtering by category with no full page reload.
- The contact form must validate required fields and email format before allowing submission.
- The resume must be downloadable/viewable from at least one persistent location (e.g., Hero and/or Nav).
- All interactive elements (nav, filters, project cards, form, modal) must be operable via mouse, touch, and keyboard.
- The site must degrade gracefully if JavaScript animations fail to load (content must still be visible and readable).

## 8. Non-Functional Requirements
- **Performance:** Initial page load under ~2 seconds on a typical broadband/4G connection; images optimized (WebP/compressed); Lighthouse performance score of 90+ as a target.
- **Accessibility:** WCAG 2.1 AA color contrast; full keyboard navigability; visible focus states; descriptive alt text on all images; semantic HTML structure.
- **Privacy:** No sensitive personal data is collected; only name/email/message from the contact form, sent to a third-party form service or Bilal's inbox.
- **Security:** Contact form protected against basic spam/bot submissions (e.g., honeypot field); no secrets exposed in client-side code.
- **Browser/device support:** Latest two versions of Chrome, Safari, Firefox, Edge; iOS and Android mobile browsers; responsive from ~360px width up.

## 9. Success Criteria
- All 12 projects are represented, correctly categorized, and viewable in detail.
- A recruiter can identify Bilal's role, training, and skills without scrolling past 2–3 sections.
- Contact form successfully delivers a test message end-to-end.
- Resume is downloadable on both desktop and mobile.
- Site passes a basic accessibility audit (no critical issues) and loads acceptably fast on mobile.

## 10. Assumptions and Open Questions
- **Assumed:** Dark, modern/techy visual direction (confirmed by Bilal) and single-scrolling-page structure (confirmed by Bilal).
- **Open:** Exact content/images for all 12 projects — currently unknown; placeholders will be used in early build phases.
- **Open:** Contact email address and social/portfolio links (LinkedIn, Behance, Dribbble, etc.).
- **Open:** Final resume PDF file.
- **Open:** Exact tool list for the Skills section (e.g., which software Bilal is proficient in).
- **Open:** Deadline and budget/hosting preference.
- **Assumed:** No CMS/admin panel in v1 — all content is updated via code (acceptable since Bilal has technical/coding background as a Computer Engineering diploma student).
