# Implementation Plan: Bilal Mahesaniya Portfolio

## 1. Current Project State
- **Status:** Greenfield project initiation.
- **Foundations Established:** Complete product specification, architectural decisions, app flow, visual design system, and backend schema approved across documents 00 through 05.

**Target Repository Structure:**
```
bilal-portfolio/
├── docs/                      # 00-06 specification documents
├── public/                    # Assets, projects, resume PDF
├── src/
│   ├── app/                   # Next.js App Router routes & API
│   │   ├── api/contact/route.ts
│   │   ├── project/[slug]/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/            # Reusable UI components
│   │   ├── layout/            # Navbar, Footer, ThemeToggle
│   │   ├── home/              # Hero, ProjectGrid, Credentials, ContactSection
│   │   ├── project/           # CaseStudyReader, Lightbox, PrototypeEmbed
│   │   └── ui/                # Button, Badge, Modal, Input
│   ├── data/                  # Strongly typed projects & credentials
│   │   ├── projects.ts
│   │   └── credentials.ts
│   ├── lib/                   # Email client, Zod schemas, utils
│   └── styles/                # Tailwind CSS globals
├── tailwind.config.ts
└── package.json
```

## 2. Build Principles
- **Preserve Approved Scope:** Strictly implement the approved 12-project structure, dual UI/UX and graphic design categories, and engineering credentials.
- **Phase-by-Phase Verification:** Never move to the next phase while tests, type checks, or linting errors remain unresolved.
- **Zero Placeholder Syndrome:** Populate real project titles, descriptions, and credentials from seed data rather than generic filler text.
- **Performance & Accessibility First:** Check keyboard focus and image sizes at every phase.

## 3. Ordered Build Phases

### Phase 1: Foundation, Tooling & Design System Setup
- Initialize repository, establish Next.js App Router with TypeScript, configure Tailwind CSS tokens, typography, and base layout.
- Files: `package.json`, `tailwind.config.ts`, `src/styles/globals.css`, `src/app/layout.tsx`, `src/lib/utils.ts`.

### Phase 2: Navigation, Shell & Theme System
- Build responsive header, sticky navigation bar, theme provider, and footer.
- Files: `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, etc.

### Phase 3: Hero Section & Personal Value Proposition
- Present Bilal’s identity, engineering background, Xipra Tech certifications, and dual CTA buttons.
- Files: `src/components/home/Hero.tsx`, `src/components/ui/Badge.tsx`, `src/components/ui/Button.tsx`.

### Phase 4: Filterable 12-Project Showcase Grid
- Implement interactive project gallery with smooth category filtering (All: 12, UI/UX: 7, Graphic Design: 5).
- Files: `src/data/projects.ts`, `src/components/home/ProjectShowcase.tsx`, `src/components/home/ProjectCard.tsx`, `src/components/home/CategoryFilter.tsx`.

### Phase 5: Dynamic Case Study Engine (/project/[slug])
- Dynamic routing and deep-dive case study reader for each project.
- Files: `src/app/project/[slug]/page.tsx`, `src/components/project/CaseStudyHero.tsx`, etc.

### Phase 6: Credentials, Education & Skills Section
- Showcase Diploma in Computer Engineering, 12th Science, and Xipra Tech certifications.
- Files: `src/data/credentials.ts`, `src/components/home/CredentialsSection.tsx`, `src/components/home/SkillsMatrix.tsx`.

### Phase 7: Lead Capture & Contact API Integration
- Validated contact form with email dispatch via Resend API.
- Files: `src/lib/validations/inquiry.ts`, `src/app/api/contact/route.ts`, `src/components/home/ContactSection.tsx`.

### Phase 8: Resume Viewer & Micro-Interactions Pass
- Quick-view modal, direct download link, motion physics.
- Files: `src/components/ui/ResumeModal.tsx`, `public/resume/Bilal_Mahesaniya_Resume.pdf`.

### Phase 9: Performance Optimization, SEO & Production Deployment
- OpenGraph social cards, meta tags, sitemap, Lighthouse audit.
