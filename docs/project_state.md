# Project State: nextjs-portfolio

**Current As of**: 2026-09-05  
**Active Working Branch**: `feature/ohshin-inspired-refactor` (isolated from `main`)  
**Production Target**: Executive AI Systems Portfolio & Digital Garden  

---

## 1. System Architecture & Tech Stack

| Layer | Technology | Details |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | React 18, Server & Client Components |
| **Styling** | Tailwind CSS 3.4 + CSS Variables | HSL token design system, Light & Dark themes |
| **Typography** | Google Fonts via `<head>` | `Doto` (Display), `IBM Plex Mono` (Body/Meta), `Tektur` (Metrics), `Plus Jakarta Sans`, `Inter` |
| **Animation** | Framer Motion 10.18 + CSS Keyframes | `glass-breathe`, `glass-sheen`, `reach-pulse`, `DecryptedText` |
| **3D Graphics** | Three.js 0.185 | Sapphire wireframe sphere canvas in Hero |
| **Content Layer** | Decoupled JSON CMS + Zod | `src/content/site/*.json` validated via `src/content/schemas.ts` |
| **Email Delivery** | Resend API 6.17 + React Hook Form | Zod-validated 3-intent channel contact form |
| **Analytics** | Vercel Analytics | Real-time page view and telemetry |

---

## 2. Directory Structure Overview

```
nextjs-portfolio/
├── docs/
│   ├── STATUS.md                     # Executive handoff doc
│   ├── setup.md                      # Local environment setup
│   ├── nextjs_portfolio_master_roadmap.md
│   ├── tasks.md                      # Detailed engineering task checklist
│   ├── project_state.md              # Current architecture & file inventory (this file)
│   ├── session_handoff.md            # Agent-to-agent session handoff
│   └── antigravity/                  # Antigravity task tracking artifacts
├── meta_analysis.md                  # Evolution of signals, detail compaction & UI laws
├── future-vision.md                  # Multi-lakh high-end solopreneur agency vision
├── public/
│   ├── images/                       # Profile and asset imagery
│   ├── resume.pdf                    # Downloadable PDF resume
│   ├── icon.svg                      # Site favicon
│   └── robots.txt / sitemap.xml
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts      # Resend email handler
│   │   ├── globals.css               # Base theme styles, glass variables, scrollbar
│   │   ├── layout.tsx                # Root layout with fonts, ThemeProvider, Toaster
│   │   ├── page.tsx                  # Single-page layout (Hero, About, Projects, Resume, Contact)
│   │   ├── opengraph-image.tsx       # Dynamic OG image generator
│   │   ├── robots.ts & sitemap.ts    # Dynamic SEO manifests
│   │   └── viewport.ts               # Viewport scale & mobile safe area
│   ├── components/
│   │   ├── 3DCard.tsx                # Interactive Three.js sphere container
│   │   ├── About.tsx                 # Profile, mission, capabilities, reading stack
│   │   ├── Contact.tsx               # Intent channels (Hiring, Advisory, OSS) + form
│   │   ├── Hero.tsx                  # Headline, typewriter, status badge, 3D card
│   │   ├── Navigation.tsx            # Fluid navbar with tiling window support (~940px)
│   │   ├── Projects.tsx              # Static Build Log, category filters, project cards
│   │   ├── Resume.tsx                # Timeline with Work Experience & Education tabs
│   │   ├── ThreeSphereBackground.tsx # Three.js canvas implementation
│   │   ├── ui/                       # Toast, Toaster, primitive components
│   │   └── widgets/
│   │       ├── DecryptedText.tsx     # Character-scramble cyberpunk text reveal
│   │       ├── GlassSheen.tsx        # Specular highlight animation
│   │       ├── ReachCounter.tsx      # Count-up metric strip with sessionStorage cache
│   │       ├── ReadingStack.tsx      # Books & influences grid with OpenLibrary covers
│   │       └── WorkClock.tsx         # Real-time IST clock
│   ├── content/
│   │   ├── loaders.ts                # Validated singleton constants
│   │   ├── schemas.ts                # Zod runtime schemas
│   │   └── site/                     # Pure JSON content records (8 files)
│   │       ├── about.json
│   │       ├── contact.json
│   │       ├── education.json
│   │       ├── experience.json
│   │       ├── hero.json
│   │       ├── personal.json
│   │       ├── projects.json
│   │       └── reach.json
│   ├── context/
│   │   └── ThemeContext.tsx          # Light/Dark mode state & system preference sync
│   └── lib/
│       └── utils.ts                  # cn() classnames merger
├── package.json
└── tailwind.config.js
```

---

## 3. Active Branch & Safety Boundaries

- **Active Branch**: `feature/ohshin-inspired-refactor`
- **Main Branch**: `main` (clean at `dad14dad`, completely untouched).
- **Rule**: No direct push or merge to `main` without explicit user review and approval.

---

## 4. Verification & Build Health

- **Production Build**: `npm run build` exits with code 0 (all 8 static routes generated).
- **Linter**: `npm run lint` passes with 0 errors.
- **Formatter**: `npm run format` passes with 0 issues.
- **Local Runtime**: Dev server running on `http://localhost:3000` (`HTTP 200 OK`).
