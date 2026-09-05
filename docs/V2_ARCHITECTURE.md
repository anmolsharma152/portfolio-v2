# Portfolio v2 — Architecture & Component Guide

## Overview

The v2 portfolio is built on Next.js 14.2 App Router using React 18, Tailwind CSS, Framer Motion, and TypeScript. It implements a dark retro-futuristic aesthetic with frosted glassmorphism, dot-matrix display typography, and smooth micro-interactions.

---

## Directory Structure

```
portfolio-v2/
├── docs/                      # Architecture, decision records, and roadmap
│   ├── DECISIONS.md           # Design choices & unanswered questions
│   ├── STATUS.md              # Project state & quick resume commands
│   └── V2_ARCHITECTURE.md     # Component hierarchy & design system
├── public/                    # Static assets
│   ├── backgrounds/           # Atmosphere overlays & pixel textures
│   ├── images/                # Portraits, project media, book & paper covers
│   └── resume.pdf             # Static downloadable resume asset
├── src/
│   ├── app/
│   │   ├── globals.css        # Obsidian/crimson theme tokens & scanline effects
│   │   ├── layout.tsx         # Root layout, font preloads, navigation dock & metadata
│   │   ├── page.tsx           # Home page route (Hero + About)
│   │   └── work/
│   │       ├── page.tsx       # Work page route definition
│   │       └── WorkView.tsx   # Deliverables, tech marquee, sticky experience & projects
│   ├── components/
│   │   ├── About.tsx          # Personal narrative, portrait card, shelves & CTA
│   │   ├── Hero.tsx           # Display heading, cyber-glitch title, dynamic roles
│   │   ├── Navigation.tsx     # 3D floating glass dock navigation with spring pill
│   │   └── widgets/
│   │       ├── GlassSheen.tsx        # Sweeping specular light keyframe animation
│   │       ├── ReadingStack.tsx      # Interactive 3D stacked book shelf
│   │       ├── SpotifyShelf.tsx      # Curated playlist embed cards
│   │       ├── TechStackSection.tsx  # Infinite auto-scrolling tech stack marquee
│   │       └── WorkClock.tsx         # Live IST timezone clock
│   ├── content/
│   │   ├── loaders.ts         # Type-safe loaders for all JSON content
│   │   ├── schemas.ts         # Zod schemas for validation
│   │   └── site/              # Pure JSON content records
│   │       ├── about.json
│   │       ├── books.json
│   │       ├── contact.json
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

## Design System & Tokens

### Color Palette
- **Background**: `#000000` (Obsidian Deep Space)
- **Work Canvas**: `#94130b` / `#d3170a` (Atmospheric Crimson Glow)
- **Glass Surface**: `rgba(255, 255, 255, 0.075)` with `backdrop-blur-2xl` and `ring-1 ring-white/15`
- **Active Navigation Pill**: `rgba(255, 255, 255, 0.12)` with `border-white/16` and top specular sheen
- **Text**: White with tiered opacities (`text-white`, `text-white/80`, `text-white/60`, `text-white/46`)

### Typography
- **Display / Display Lowercase**: `font-doto` (`Doto`, dot-matrix variable font)
- **Body & Metadata**: `font-mono` (`IBM Plex Mono`)
- **Metric Headers**: `font-metric` (`Tektur`)
- **System Fallback**: `font-sans` (`Inter`), `font-heading` (`Plus Jakarta Sans`)

---

## Key Technical Patterns

### 1. Spring-Animated Dock Navigation (`Navigation.tsx`)
The active tab pill is rendered conditionally using Framer Motion:
```tsx
{!isWork && (
  <motion.span
    layoutId="dock-active-pill"
    className="absolute inset-0 -z-10 rounded-full border border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_24px_rgba(0,0,0,0.22)]"
    transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.35 }}
  />
)}
```
Because both `abt me` and `work` share the same `layoutId`, switching routes smoothly morphs and animates the pill into position.

### 2. Sticky Layout Containment (`WorkView.tsx`)
On desktop (`lg`), the Experience timeline stays anchored while the user scrolls the extensive projects list:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-[minmax(20rem,0.6fr)_minmax(0,1fr)] gap-8 mb-12 items-start">
  <aside className="... lg:sticky lg:top-8">
    {/* Experience Timeline */}
  </aside>
  <main className="...">
    {/* 8 Project Cards */}
  </main>
</div>
```

### 3. Font Preloading (`layout.tsx`)
Eliminates initial layout shift and FOUT by preloading the primary Google variable font:
```html
<link
  rel="preload"
  href="https://fonts.gstatic.com/s/doto/v3/t5t6IRMbNJ6TQG7Il_EKPqP9zTnvqouBWho.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```
