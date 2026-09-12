<div align="center">

# Anmol Sharma — Portfolio (v2)

**A multi-page personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.**  
Features a dark retro-futuristic obsidian aesthetic with Google's `Doto` dot-matrix typography, physical frosted glassmorphism, an interactive floating dock navigation, and decoupled JSON content management.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.18-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[Pages & Routes](#-pages--routes) • [Components & UI Features](#-components--ui-features) • [Design System](#-design-system--styling) • [Getting Started](#-getting-started) • [Documentation](#-documentation)

</div>

---

## ✦ Overview

This repository contains the v2 rebuild of my personal portfolio website. The goal of this redesign was to move from a generic single-page layout to an editorial, multi-page site with tactile UI elements, rich typography, and clean separation between personal background and work output.

---

## 📄 Pages & Routes

### 1. Home (`/`)
- **Hero Section (`Hero.tsx`)**: Minimalist headline with a dynamic roles ticker and atmospheric crimson backlight glow.
- **About Card (`About.tsx`)**: Dedicated profile header card (`profile / anmol` • `jaipur, india`), personal bio narrative, and a high-resolution portrait with an interactive zoom/lightbox modal.
- **Cultural Shelves**:
  - **Reading Stack (`ReadingStack.tsx`)**: An interactive 3D perspective shelf showing current and influential books.
  - **Records Shelf (`SpotifyShelf.tsx`)**: Embed cards for curated focus and flow-state music playlists.
- **Gateway Actions**: Direct buttons to navigate to `/work` or dispatch an email.

### 2. Work (`/work`)
- **Work Header (`WorkView.tsx`)**: Displays page title with live Indian Standard Time (`WorkClock.tsx`).
- **Deliverables & Impact Strip**: 4 benchmark cards highlighting project reach, performance numbers, and scale.
- **Tech Stack Marquee (`TechStackSection.tsx`)**: Hardware-accelerated infinite auto-scrolling ticker grouping Core AI, Systems/Edge, and Backend infrastructure.
- **Two-Column Work Core**:
  - **Left Column**: Work Experience timeline with `lg:sticky lg:top-8` desktop positioning so the timeline stays in view as you scroll through projects.
  - **Right Column**: 8 detailed project build cards with descriptions, key highlights, tech badges, and source links.
- **Open Channels**: Direct reach-out cards for team hiring (email + resume download), advisory inquiries, and casual DMs on X.

---

## 🧩 Components & UI Features

| Component | File | Description |
|---|---|---|
| **Floating Dock Navigation** | `src/components/Navigation.tsx` | Screen-anchored glass dock with physical bevels (`shadow-nav-glass`), Framer Motion `layoutId` spring-physics active pill, Minecraft status badges, and official FontAwesome 6 icons. |
| **Tech Stack Marquee** | `src/components/widgets/TechStackSection.tsx` | Infinite auto-scrolling ticker with pause-on-hover and categorized technology badges. |
| **Reading Stack** | `src/components/widgets/ReadingStack.tsx` | CSS perspective 3D book spine stack with book covers and metadata. |
| **Records Shelf** | `src/components/widgets/SpotifyShelf.tsx` | Responsive grid of embedded Spotify playlist cards with direct profile link. |
| **Live IST Clock** | `src/components/widgets/WorkClock.tsx` | Client-side second-accurate digital clock tracking Indian Standard Time (IST). |
| **Glass Sheen** | `src/components/widgets/GlassSheen.tsx` | Sweeping keyframe specular light reflection effect across glass cards. |

---

## 🎨 Design System & Styling

- **Color Palette**:
  - Background: Pure obsidian black (`#000000`)
  - Work Canvas Accent: Deep crimson glow (`#94130b` / `#d3170a`)
  - Glass Panels: `rgba(255, 255, 255, 0.075)` with `backdrop-blur-2xl` and `ring-1 ring-white/15`
  - Active Dock Pill: `rgba(255, 255, 255, 0.12)` with `border-white/16` and top specular sheen
- **Typography**:
  - Display: Google's `Doto` (dot-matrix display font used for titles and tabs)
  - Body & Code: `IBM Plex Mono` (monospace font for all body copy and timestamps)
  - Metrics: `Tektur` (angular display font for numbers)
- **Zero-FOUT Font Loading**: Primary WOFF2 variable font (`Doto`) is preloaded directly via `<link rel="preload">` in `layout.tsx` with `display=block` to eliminate font flash on initial paint.

---

## 🗄 Content Management

All site content is completely decoupled from React components into pure JSON files located in `src/content/site/`:

```
src/content/
├── schemas.ts         # Zod schemas for all content types
├── loaders.ts         # Type-safe loaders importing JSON files
└── site/
    ├── about.json
    ├── books.json
    ├── personal.json
    ├── projects.json
    ├── reach-metrics.json
    ├── spotify.json
    ├── tech-stack.json
    └── work-experience.json
```

Updating content (adding a project, changing experience, editing books) only requires editing the corresponding JSON file.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm, pnpm, or bun

### Setup

```bash
# 1. Clone repository
git clone https://github.com/anmolsharma152/portfolio-v2.git
cd portfolio-v2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) to view the site.

### Verification Commands

```bash
npm run lint      # Run ESLint check and auto-fixes
npx tsc --noEmit  # Run strict TypeScript compiler check
npm run build     # Test production Next.js build
```

---

## 📖 Documentation

Detailed architectural notes and open decision logs are maintained in the [`docs/`](./docs) directory:
- [**`docs/DECISIONS.md`**](./docs/DECISIONS.md) — Technical decision records covering dock navigation parity, FOUT elimination, layout void fixes, and styling choices.
- [**`docs/OPEN_QUESTIONS.md`**](./docs/OPEN_QUESTIONS.md) — Tracks active, undecided design questions (such as evaluating whether to keep the Spotify shelf or replace it with an ArXiv research / systems shelf).
- [**`docs/STATUS.md`**](./docs/STATUS.md) — Current build status, verified environments, and quick-resume commands.
- [**`docs/V2_ARCHITECTURE.md`**](./docs/V2_ARCHITECTURE.md) — Component hierarchy, CSS animation tokens, and Framer Motion spring physics specs.

---

## 📄 License

MIT © [Anmol Sharma](https://github.com/anmolsharma152)
