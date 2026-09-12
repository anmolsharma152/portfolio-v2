# portfolio-v2 — Status & Project State

| Field | Value |
|---|---|
| **As of** | 2026-09-06 |
| **Repository** | `anmolsharma152/portfolio-v2` |
| **Branch** | `main` |
| **Design Archetype** | Retro-Future Obsidian & Crimson Glassmorphism |
| **Framework** | Next.js 14.2 (App Router), React 18, Tailwind CSS, Framer Motion |
| **Typography** | Doto (Google Dot-Matrix Display), IBM Plex Mono (Body), Inter, Tektur |
| **Iconography** | FontAwesome 6 via `react-icons/fa6`, Lucide React |
| **Status** | Production Ready (0 ESLint errors, 0 TypeScript warnings, Build passes) |

---

## Quick Resume

```bash
cd ~/Projects/portfolio-v2
npm install
npm run dev
```

Server launches on `http://localhost:3000`.

### Key Verification Commands
```bash
# Run lint check and automatic fixes
npm run lint

# Run strict TypeScript compiler verification
npx tsc --noEmit

# Production build test
npm run build
```

---

## Active Page Routes

1. **Home (`/`)**:
   - `Hero.tsx`: Cyber-glitch display title, dynamic roles ticker, high-impact introductory headline.
   - `About.tsx`:
     - Dedicated About header card (`profile / anmol` • `jaipur, india`).
     - Main showcase: personal bio on left, high-res portrait with zoom modal on right.
     - Cultural Shelves: Records Shelf (`SpotifyShelf.tsx`) and Reading Stack (`ReadingStack.tsx`).
     - Gateway actions: `explore work & systems` (leads to `/work`) and `send email`.

2. **Work (`/work`)**:
   - `WorkView.tsx`:
     - Atmospheric crimson backdrop with ambient glow and grid pattern.
     - Work header with live IST time clock (`WorkClock.tsx`).
     - Deliverables & Impact metrics strip (`45K+` synthetic tokens, `120ms` speech loop, `4-bit` QLoRA, `500+` concurrent agents).
     - Infinite marquee tech stack ticker (`TechStackSection.tsx`).
     - Two-column core:
       - **Left**: Experience timeline with `lg:sticky lg:top-8` containment.
       - **Right**: 8 deep-tech project build cards.
     - Open channels reach-out strip: Team Channel (Email / Resume), Advisory Channel, and Casual DM (X).

---

## Key Dependencies & Integrations

- `react-icons`: Official FontAwesome 6 icons (`FaXTwitter`, `FaSpotify`, `FaRegEnvelope`, `FaLinkedinIn`, `FaGithub`).
- `framer-motion`: Smooth layout spring transitions on the dock pill (`layoutId="dock-active-pill"`) and cards.
- `tailwindcss-animate`: Hardware-accelerated keyframe animations (`glass-breathe`, `glass-sheen`, `stack-marquee`).
- `canvas-confetti`: Interactive celebratory triggers on key actions.
