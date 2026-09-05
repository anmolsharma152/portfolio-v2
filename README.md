<div align="center">

# ⚡ Anmol Sharma — Portfolio (v2)

**A retro-futuristic, high-craft personal portfolio and systems engineering showcase.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.18-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Architecture Overview](#-architecture--surfaces) • [Design System](#-design-system--tokens) • [Quick Start](#-quick-start) • [Documentation](#-project-documentation)

</div>

---

## ✦ Overview

Designed as a **digital atelier** rather than a conventional resume. This platform pairs low-level systems engineering—multi-agent graphs, sub-150ms speech loops, PEFT adaptation, and Linux socket daemons—with tactile retro-futuristic craft inspired by brutalist terminal aesthetics, physical frosted glass, and dot-matrix typography.

### Highlights
- **Obsidian & Crimson Glassmorphism**: Physical 3D layered glass bevels with sweeping specular light sheens (`glass-sheen`), ambient atmospheric breathing glows, and 28px dot-matrix grid rasters.
- **Physical Floating Dock Navigation**: Framer Motion spring-physics pill (`layoutId="dock-active-pill"`), 3D glass sheen, official FontAwesome 6 icons, and pixelated Minecraft status badges.
- **Sticky Production Work Canvas (`/work`)**: A 2-column layout pairing a sticky Experience timeline with 8 deep-tech project build cards, live IST timezone clock, reach proof metrics, and an infinite auto-scrolling tech marquee.
- **Zero-FOUT Font Optimization**: WOFF2 variable font preloading (`Doto` & `IBM Plex Mono`) with zero layout shifts or font flash on frame 1.
- **Type-Safe Content Layer**: All portfolio content (projects, experience, metrics, books, playlists) is decoupled into pure JSON schemas validated via Zod.

---

## 🏛 Architecture & Surfaces

### 1. Home Surface (`/`) — *Narrative & Taste*
- **Hero Display**: High-impact cyber-glitch title with dynamic roles ticker and atmospheric crimson backlight.
- **Profile Narrative**: Personal journey spanning foundational Linux tearing down in Jaipur &rarr; political science and economics at the Symbiosis School for Liberal Arts (SSLA) &rarr; deep AI systems and autonomous agent orchestration at IIT Mandi.
- **High-Res Portrait**: Dynamic aspect card with interactive full-screen lightbox zoom modal.
- **Cultural Shelves**: Side-by-side 2-column shelves balancing the interactive 3D **Reading Stack** with the **Records Shelf**.
- **Gateway CTAs**: Physical direct buttons routing to `/work` and direct email dispatch.

### 2. Work & Systems Surface (`/work`) — *Engineering Output*
- **Work Header**: Monospace metadata row featuring a live, second-accurate IST timezone clock (`WorkClock.tsx`).
- **Deliverables & Impact Strip**: 4 production benchmark cards (`45K+` synthetic tokens, `120ms` speech loop, `4-bit` QLoRA, `500+` concurrent agents).
- **Infinite Tech Marquee**: Dual-row hardware-accelerated auto-scrolling ticker grouping Core AI, Systems/Edge, and Backend infrastructure.
- **Two-Column Work Core**:
  - **Left**: Work Experience timeline with `lg:sticky lg:top-8` desktop containment to anchor the screen.
  - **Right**: 8 detailed Project build cards with architecture breakdowns, impact metrics, and repository links.
- **Open Reach-Out Channels**: Direct communication lanes for Team Hiring (`mailto:` + Resume download), Advisory/Contracts, and Casual DMs on X.

### 3. Floating Dock Navigation (`Navigation.tsx`)
A tactile, screen-anchored dock matching Ohshin Bhat's physical glass aesthetic:
- **Tabs**: `[abt me]` (Alex skin badge) • `[work]` (Diamond pickaxe badge)
- **Glass Divider**: `h-7 w-px bg-white/10`
- **Social & Contact Hub**: `X` &bull; `Spotify` &bull; `Email` &bull; `LinkedIn` &bull; `GitHub`

---

## 🎨 Design System & Tokens

| Token | Value | Purpose |
|---|---|---|
| **Canvas Dark** | `#000000` | Pure obsidian deep space background |
| **Canvas Crimson** | `#94130b` / `#d3170a` | Atmospheric work glow and accent highlights |
| **Glass Surface** | `rgba(255, 255, 255, 0.075)` | High-refraction card background with `backdrop-blur-2xl` |
| **Nav Glass Shadow** | `0 18px 60px rgba(0,0,0,0.34)` | Physical 3D dock elevation with dual inset bevels |
| **Display Font** | `Doto` (Google Fonts) | Dot-matrix lowercase headings |
| **Code & Body Font** | `IBM Plex Mono` | Monospace narrative, metadata, and timestamps |
| **Metric Font** | `Tektur` | Angular, high-legibility impact numbers |

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14.2](https://nextjs.org/) (App Router, Server & Client Components)
- **Language**: [TypeScript 5.8](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/), [`tailwindcss-animate`](https://github.com/jamiebuilds/tailwindcss-animate)
- **Animation**: [Framer Motion 10.18](https://www.framer.com/motion/) (Spring physics, layoutId transitions)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa6`), [Lucide React](https://lucide.dev/)
- **Validation**: [Zod 3.22](https://zod.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (tested on Node v20/v26)
- npm, pnpm, or bun

### Local Setup

```bash
# 1. Clone repository
git clone https://github.com/anmolsharma152/portfolio-v2.git
cd portfolio-v2

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [`http://localhost:3000`](http://localhost:3000) in your browser.

### Quality Verification

```bash
# Lint check and code style formatting
npm run lint

# Strict TypeScript verification
npx tsc --noEmit

# Production build bundle check
npm run build
```

---

## 📂 Project Structure

```
portfolio-v2/
├── docs/                      # Architectural specs and decision records
│   ├── DECISIONS.md           # Technical & design decision log
│   ├── OPEN_QUESTIONS.md      # Active open questions (Spotify vs Systems shelf)
│   ├── STATUS.md              # Project status & resume commands
│   └── V2_ARCHITECTURE.md     # Component hierarchy & token guide
├── public/                    # Static assets
│   ├── backgrounds/           # Atmosphere overlays & pixel textures
│   ├── images/                # High-res portraits, book & paper covers
│   └── resume.pdf             # Direct resume download asset
├── src/
│   ├── app/
│   │   ├── globals.css        # Theme variables, glass keyframes, scanlines
│   │   ├── layout.tsx         # Root layout, font preloads, dock nav & SEO
│   │   ├── page.tsx           # Home route (Hero + About)
│   │   └── work/
│   │       ├── page.tsx       # Work route definition
│   │       └── WorkView.tsx   # Deliverables, tech marquee, sticky experience & projects
│   ├── components/
│   │   ├── About.tsx          # Personal narrative, portrait card, shelves & CTA
│   │   ├── Hero.tsx           # Display heading, cyber-glitch title, dynamic roles
│   │   ├── Navigation.tsx     # 3D floating glass dock navigation with spring pill
│   │   └── widgets/
│   │       ├── GlassSheen.tsx        # Specular light keyframe animation
│   │       ├── ReadingStack.tsx      # Interactive 3D stacked book shelf
│   │       ├── SpotifyShelf.tsx      # Curated playlist embed cards
│   │       ├── TechStackSection.tsx  # Infinite auto-scrolling tech marquee
│   │       └── WorkClock.tsx         # Live IST timezone clock
│   ├── content/
│   │   ├── loaders.ts         # Type-safe content loaders
│   │   ├── schemas.ts         # Zod schemas for site content
│   │   └── site/              # Pure JSON content records
│   │       ├── about.json
│   │       ├── books.json
│   │       ├── personal.json
│   │       ├── projects.json
│   │       ├── reach-metrics.json
│   │       ├── spotify.json
│   │       ├── tech-stack.json
│   │       └── work-experience.json
│   └── context/
│       └── ThemeContext.tsx   # Dark mode context provider
├── tailwind.config.js         # Theme extensions, glass animations, custom fonts
└── package.json
```

---

## 📖 Project Documentation

Detailed technical documentation is maintained in the `docs/` directory:
- [**`docs/DECISIONS.md`**](./docs/DECISIONS.md) — Architectural records: repository separation, floating dock parity, FOUT elimination, layout void fixes.
- [**`docs/OPEN_QUESTIONS.md`**](./docs/OPEN_QUESTIONS.md) — Active roadmap decisions, notably the evaluation matrix for replacing the Spotify shelf with an ArXiv research / systems rig shelf.
- [**`docs/STATUS.md`**](./docs/STATUS.md) — Active build status, routes, and verified environments.
- [**`docs/V2_ARCHITECTURE.md`**](./docs/V2_ARCHITECTURE.md) — Deep-dive into component lifecycles, spring physics, and CSS tokens.

---

## 📄 License

MIT © [Anmol Sharma](https://github.com/anmolsharma152)
