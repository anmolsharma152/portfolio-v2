# Portfolio Tasks & Engineering Roadmap

This document tracks completed features, active development items, and upcoming milestones for **nextjs-portfolio**.

---

## 1. Completed Milestones

### Phase 1: Responsive Layout & Tiling System
- [x] **Hyprland/Linux Half-Screen Tiling Support (~940px–960px):**
  - Refined `Navigation.tsx` desktop social link threshold to $\ge 1024\text{px}$ (`hidden lg:flex`).
  - Reduced horizontal padding to `px-2.5 lg:px-4` with `whitespace-nowrap` on nav links to eliminate premature wrapping.
  - Implemented fluid hero typography (`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl`) and dynamic 3D sphere card height (`h-[320px] sm:h-[360px] lg:h-[400px]`).
  - Re-architected `Projects.tsx`, `ReadingStack.tsx`, and `ReachCounter.tsx` into 1-col (<640px), 2-col (~940px tiled), and 3/4-col (>1024px) grids.

### Phase 2: Decoupled JSON Content Architecture
- [x] **Zod Validation Schemas (`src/content/schemas.ts`):** Enforced runtime validation schemas for `Hero`, `About`, `WorkExperience`, `Education`, `CuratedProject`, `BookItem`, `ReachMetric`, and `ContactContent`.
- [x] **Single-Source Data Files (`src/content/site/`):**
  - `hero.json`, `about.json`, `experience.json`, `education.json`, `projects.json`, `personal.json`, `reach.json`, `contact.json`.
- [x] **Singleton Content Loaders (`src/content/loaders.ts`):** Pre-parsed, type-safe singleton exports avoiding runtime file reads.

### Phase 3: Ohshin Visual Language & Typography Overhaul
- [x] **Bespoke Google Fonts Integration:** Injected `Doto` (dot-matrix display font), `IBM Plex Mono` (metadata kickers), and `Tektur` (metrics) via `<head>` in `src/app/layout.tsx`.
- [x] **Tailwind Token Registration:** Configured `fontFamily.doto`, `fontFamily.mono`, and `fontFamily.metric` along with `#D3170A` (red) and `#002855` (cobalt) theme accents in `tailwind.config.js`.
- [x] **Cyberpunk Micro-Interactions:**
  - Built `src/components/widgets/WorkClock.tsx` displaying real-time IST clock (`07:42:15 PM IST`).
  - Built `src/components/widgets/DecryptedText.tsx` character scrambling reveal component.
- [x] **Standardized Section Micro-Headers:**
  - `[ 01 / PROFILE ]` | `ABOUT`
  - `[ 02 / WORK & OUTPUT ]` | `WORK`
  - `[ 03 / TIMELINE & EXPERIENCE ]` | `TIMELINE`
  - `[ 04 / REACH OUT ]` | `CONTACT`

### Phase 4: Static Projects Build Log & Bug Resolutions
- [x] **Eliminated Runtime GitHub API Dependency:** Replaced flaky client-side `fetch('https://api.github.com/...')` with 100% static JSON rendering from `projects.json`.
- [x] **Resolved "System Metrics & Impact" Display Glitch:** Clearly demarcated `[ 01 / VERIFIED SYSTEM BENCHMARKS ]` from `[ 02 / SELECTED PLATFORMS & ENGINES ]`, ensuring project cards render immediately.
- [x] **Verified Spotify Integration:** Replaced mock playlists with verified Spotify Profile Card (`SpotifyShelf.tsx`) using Anmol's real Spotify account (`31fzcv4ts52untro5xsamjhddtre`), real profile avatar, and verified user badge. Also linked in Navigation and Contact channels.
- [x] **Research & Book Stack Expansion:** Added real user library items (DeepSeek-R1, Attention Is All You Need, Constitutional AI, The Party by Richard McGregor) from local documents.
- [x] **Hero Typography & Atmosphere Scale-Up:** Scaled display headline to 8xl `font-doto` with blue-violet ambient glow orbs, meta header strip (`[ 00 / SYSTEM INITIALIZED ]`, Jaipur geo-coordinates, real-time IST clock), and typewriter status line.
- [x] **Fixed Light Mode Contrast Trap:** Removed white-on-white text in `ReadingStack.tsx` and deleted rogue `.text-primary` / `.text-muted` CSS overrides in `globals.css`.
- [x] **Aligned Navigation Titles (`Navigation.tsx`):** Standardized nav links to the 4 core components: `About` (`#about`), `Work` (`#work`), `Timeline` (`#timeline`), and `Contact` (`#contact`). Added backward-compatible aliases for `#projects` and `#resume`.
- [x] **Big Ohshin Portrait Showcase (`About.tsx`):** Transformed the About section from a small centered avatar into a full-height, magazine-style framed portrait card (`min-h-[26rem] sm:min-h-[36rem] lg:min-h-[46rem]`) alongside the editorial narrative and capabilities, with bottom status badge (`ANMOL SHARMA // AI SYSTEMS ENGINEER`), glass sheen, and lightbox zoom.

---

## 2. Active Development & Next Milestones

### Phase 5: Deep-Dive Long-Form Case Study Subpages (from `future-vision.md`)
- [ ] **Dedicated Project Slug Routes (`/work/[slug]`):**
  - Create dynamic route `src/app/work/[slug]/page.tsx` for flagship projects (`CodexEngine`, `Disha`, `vad_processor`, `Fine-tuning-Sarvam-1`).
  - Architecture breakdown diagrams (Mermaid / SVG).
  - Benchmark performance metrics and latency trade-offs.
  - Interactive code snippets and live demo sandbox embeds.

### Phase 6: Smooth Momentum Scrolling & Parallax Depth
- [ ] **Lenis / Motion Smooth Scroll:** Integrate buttery smooth momentum scrolling.
- [ ] **Multi-Layer Ambient Glow Parallax:** Wire subtle scroll-linked parallax to background cobalt and red glow spheres.

### Phase 7: Interactive Terminal / Command Palette
- [ ] **Command K (`Cmd+K` / `Ctrl+K`) Modal:**
  - Quick navigation across sections, external repositories, resume download, and theme toggle.
  - System diagnostics simulator (RAM, latency, model status).
