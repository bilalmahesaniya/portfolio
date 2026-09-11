# Technical Requirements Document

## 1. Technical Overview
- **Architecture summary:** A static, client-rendered single-page site. No traditional server/database is required — project, skills, and certification content live in structured local data files (JSON/TS); the contact form submits to a third-party form-handling service. This keeps the build simple, free/cheap to host, and fast.
- **Platforms:** Web only, responsive (mobile, tablet, desktop). No native app.
- **Main technical constraints:** No backend team/ops capacity (solo project) → prefer a stack that deploys as static assets with zero server maintenance; must support smooth animation for the "modern/techy" visual direction without hurting load performance.

## 2. Technology Stack

| Layer | Choice | Reason | Rejected alternative |
|---|---|---|---|
| Frontend framework | React 18 + Vite | Fast dev server, component reuse for repeated UI (project cards, timeline items), large ecosystem, easy to hand off to an AI coding agent. | Next.js — rejected for v1: its server-rendering/routing features aren't needed for a single static page and add build complexity. Plain HTML/CSS/JS — rejected: filtering, modals, and animation state are easier to manage with components. |
| Styling | Tailwind CSS | Fast to build a consistent design system (spacing/color tokens) matching the UI/UX Brief; avoids writing large custom CSS files. | Plain CSS/SCSS — rejected: slower to keep consistent across many components for a solo builder. |
| Animation | Framer Motion | Purpose-built for scroll-triggered reveals and hover/tap micro-interactions that fit the "modern/techy" direction; respects reduced-motion easily. | CSS-only animation — rejected: harder to orchestrate staggered scroll reveals cleanly. |
| Icons | Lucide React | Clean line-icon set matching the dark/techy aesthetic; tree-shakeable. | Font Awesome — rejected: heavier, more generic look. |
| Backend | None (static site) | No user accounts, no dynamic server-side data; a backend would add cost/complexity with no product benefit for v1. | Node/Express API — rejected: overkill for content that doesn't change per-request. |
| Database | None for v1 (content as local JSON/TS data files) | Project/skill/certification data is small, owner-edited, and doesn't need querying — a file is simpler and free. | Supabase/Postgres — rejected for v1, noted as an **optional later addition** if Bilal wants to log contact-form submissions or move to a CMS. |
| Authentication | None | No login-gated content in v1. | — |
| Contact form handling | Formspree or EmailJS (pick one; Formspree recommended for simplicity) | Lets a static site send real emails without a custom backend. | Custom serverless function — viable later if more control is needed, but unnecessary for v1. |
| File storage | Static assets in `/public` (images, resume PDF), optionally a CDN/image host (e.g., Cloudinary) if project galleries grow large | Simplest option for a small, mostly-static asset set. | Dedicated object storage (S3) — rejected: unnecessary overhead for a personal site. |
| Hosting | Vercel (or Netlify) | Free tier, git-based auto-deploy, preview URLs per branch, fast global CDN. | Traditional shared hosting — rejected: no auto-deploy, more manual work. |
| Analytics (optional) | Plausible or Vercel Analytics | Lightweight, privacy-respecting; useful to see if recruiters are actually visiting/downloading the resume. | Google Analytics — viable if Bilal prefers it, but heavier and less privacy-friendly. |
| Testing | Vitest + React Testing Library (light coverage), manual QA checklist | Fast unit tests for form validation/filter logic; heavier E2E testing is disproportionate for a portfolio site. | Full Cypress/Playwright E2E suite — optional nice-to-have, not required for v1. |

## 3. System Architecture
- **Client responsibilities:** Render all sections from local data files; handle filtering, modal open/close, scroll navigation, animation, and form validation entirely in the browser.
- **Server responsibilities:** None in v1 — the "server" is just static file hosting via the deploy platform's CDN.
- **Database responsibilities:** None in v1. If added later, would only store contact-form submissions (see Backend Schema, optional section).
- **External service responsibilities:** The form-handling service (Formspree/EmailJS) receives form submissions and forwards them to Bilal's email; the hosting platform serves static assets and handles HTTPS/CDN.

## 4. APIs and Integrations

### Integration: Contact form service (Formspree or EmailJS)
- **Purpose:** Deliver contact-form submissions to Bilal's email without a custom backend.
- **Data sent and received:** Sent — name, email, message (and a honeypot field for spam filtering). Received — success/failure response.
- **Authentication method:** Public form endpoint ID / API key (client-side, service-specific; not a secret that grants broad access).
- **Rate or usage limits:** Free tier limits apply (e.g., Formspree free tier ~50 submissions/month) — acceptable for a portfolio's expected traffic; flag if volume grows.
- **Failure handling:** On network/service error, show an inline retry message and keep the user's entered text (don't clear the form on failure).

### Integration: Analytics (optional, if added)
- **Purpose:** Track visits and resume downloads to gauge recruiter interest.
- **Data sent and received:** Page views, click events (e.g., "resume downloaded"); no personal data beyond standard aggregate analytics.
- **Authentication method:** Site ID / script tag, no user auth.
- **Rate or usage limits:** Free tier limits, not a concern at this scale.
- **Failure handling:** Analytics failure must never block or visibly affect the page (fail silently).

## 5. Security and Privacy
- **Authentication and authorisation:** None required (no accounts, no protected routes).
- **Input validation:** Contact form validates required fields and email format client-side before submission; form service performs basic server-side validation as well.
- **Secrets management:** Any API keys (form service, analytics) are public-safe client keys only; nothing sensitive is stored in the repo. Use environment variables for any values that differ between environments.
- **Sensitive data handling:** No sensitive personal data is collected. Contact form data (name/email/message) is handled entirely by the third-party form service — no custom storage in v1.
- **Abuse prevention:** Honeypot field (hidden input bots tend to fill) and basic client-side rate-limiting (disable submit button briefly after send) to reduce spam.

## 6. Performance Requirements
- **Expected usage:** Low, bursty traffic (spikes when the link is shared with recruiters/on social media) — a static CDN-hosted site comfortably handles this.
- **Loading targets:** First Contentful Paint under ~1.5s, full interactive load under ~2.5s on a typical connection; Lighthouse performance score target of 90+.
- **Caching approach:** Static assets cached via the hosting CDN; cache-busting handled automatically by the build tool's hashed filenames.
- **Media optimisation:** Project images served as compressed WebP/AVIF where possible, with defined width/height to prevent layout shift, and lazy-loaded below the fold.

## 7. Testing and Quality
- **Unit tests:** Form validation logic and project-filter logic (Vitest).
- **Integration tests:** Not required for v1 given no backend; optional if the CMS/DB is added later.
- **End-to-end tests:** Not required for v1; manual QA checklist covers the primary journey instead (see Implementation Plan, Final Verification).
- **Accessibility checks:** Automated check via Lighthouse/axe during development, plus manual keyboard-navigation pass before launch.

## 8. Development and Deployment
- **Environments:** Local development (Vite dev server), Preview (automatic deploy previews per branch/PR on Vercel/Netlify), Production (main branch auto-deploy).
- **Environment variables:** Form service public key/endpoint ID, optional analytics site ID — stored per-environment in the hosting platform's dashboard, not committed to the repo.
- **CI checks:** Lint (ESLint) and unit tests run on every push/PR before merge to main.
- **Deployment approach:** Git-based continuous deployment — pushing to `main` triggers an automatic production build and deploy.

## 9. Technical Risks and Open Questions
- **Open:** Which form service to finalize (Formspree vs. EmailJS) — Formspree recommended as the simpler default.
- **Open:** Which hosting platform (Vercel vs. Netlify) and whether a custom domain will be purchased.
- **Open:** Whether Bilal wants a way to update project content without a code change/redeploy (would require adding a lightweight CMS later — flagged as a "possible later addition" in the PRD, not required for v1).
- **Risk:** If project images are large/unoptimized, load performance targets could be missed — mitigate with an explicit image-compression step in the build/implementation plan.
- **Risk:** Free-tier limits on the form service could be hit if the link goes unexpectedly viral — low likelihood for a personal portfolio, monitor if it becomes an issue.
