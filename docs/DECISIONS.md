# Architectural & Design Decisions (v2)

This document records the design philosophy, technical choices, resolved issues, and open questions driving the v2 portfolio rebuild.

---

## 1. Repository & Deployment Separation

- **Decision**: Fork the new portfolio into a standalone repository (`anmolsharma152/portfolio-v2`) while preserving the existing repository (`nextjs-portfolio`) untouched at its `main` branch.
- **Rationale**:
  - The original portfolio (v1) was an executive, Three.js porcelain-light build deployed live on Vercel (`anmolsharma152.vercel.app`).
  - Merging v2 into `main` would destroy the historical v1 deployment.
  - Maintaining two radically different visual design systems within branches of the same repository complicates Vercel domain routing, environment variables, and branch hygiene.
  - A clean new repository gives v2 its own git history, issue tracker, and independent Vercel project with zero risk of regression to v1.

---

## 2. Floating Dock Navigation (`Navigation.tsx`)

- **Design Parity**: Re-engineered to achieve 1-to-1 visual and physical parity with Ohshin Bhat's floating dock.
- **Physical Glass Treatment**:
  - Replaced flat gray borders with layered 3D bevels: `shadow-nav-glass` (`0 18px 60px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.06)`).
  - Added specular sheen overlays and physical border rings.
- **Active Pill Spring Physics**:
  - Replaced the harsh red active button on `/work` with an illuminated frosted glass active pill: `border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_24px_rgba(0,0,0,0.22)]`.
  - Driven by Framer Motion's `layoutId="dock-active-pill"` with spring physics (`stiffness: 360, damping: 32, mass: 0.35`).
- **Icon Library & Order**:
  - Switched from Lucide lines to official FontAwesome 6 icons via `react-icons/fa6` (`FaXTwitter`, `FaSpotify`, `FaRegEnvelope`, `FaLinkedinIn`, `FaGithub`).
  - Aligned exact icon order matching the Ohshin layout:
    `[abt me | work]  |  [X  •  Spotify  •  Email  •  LinkedIn  •  GitHub]`
  - Added pixelated Minecraft badges for the primary tabs: Alex skin for `abt me` and Diamond Pickaxe for `work`.

---

## 3. Information Architecture: Home vs. Work

- **The Problem**: The home page had accumulated duplicate technical content (a 4-box "Systems Architecture" section detailing LangGraph, Whisper, QLoRA, and Linux IPC) and a heavy Resend contact form, creating visual redundancy with the `/work` page.
- **The Solution**:
  - **Home (`/`)**: Dedicated purely to personal narrative, background, philosophy, and cultural taste:
    - Flow: Hero Glitch &rarr; Dedicated About Card &rarr; Deep Bio (Origin, Political Science & Economics at SSLA, AI Systems at IIT Mandi) &rarr; Side-by-Side Shelves (Spotify & Reading Stack) &rarr; Gateway CTA Buttons.
    - Removed the Resend form from Home: Direct contact is cleanly covered by the persistent dock mail link, footer action buttons, and social channels.
  - **Work (`/work`)**: Dedicated purely to technical engineering execution:
    - Flow: Work Header with IST Clock &rarr; Deliverables & Reach Metrics &rarr; Tech Stack Marquee &rarr; Two-Column Core (Sticky Experience Timeline + 8 Project Build Cards) &rarr; Open Reach-Out Channels.

---

## 4. Elimination of Font Flash (FOUT)

- **The Problem**: On initial page load, headings rendered in fallback monospace fonts before flashing into Google's `Doto` font 400–800ms later.
- **Root Cause**: Google Fonts loaded via `<link rel="stylesheet">` with `display=swap` explicitly instructs the browser to paint system fallback glyphs while network stylesheets download.
- **The Fix**:
  1. Added a high-priority `<link rel="preload">` in `src/app/layout.tsx` targeting the primary WOFF2 variable font (`t5t6IRMbNJ6TQG7Il_EKPqP9zTnvqouBWho.woff2`).
  2. Changed the stylesheet directive to `display=block` to prevent rendering unstyled text during the initial paint cycle.
  3. Preconnect links configured for both `fonts.googleapis.com` and `fonts.gstatic.com`.

---

## 5. Work Page Layout Void & Sticky Containment

- **The Problem**: The two-column grid on `/work` (`0.6fr : 1fr`) placed 3 Experience timeline items on the left against 8 extensive Project cards on the right. The left column ended abruptly after ~600px, leaving a massive empty void on wide screens for the remaining 2,500px of scroll.
- **The Fix**: Added `lg:sticky lg:top-8` to the left `<aside>`. As the visitor scrolls down the project log, the Experience timeline remains anchored in view, keeping the composition grounded.
- **Dead Link Resolution**: Fixed multiple buttons that previously pointed to `/#contact-form` (a non-existent anchor after removing the home contact form), rewiring them directly to `mailto:anmolsharma152.dev@gmail.com` and `/resume.pdf`.

---

## 6. The Spotify Shelf: Analysis, Purpose & Open Decision

### Why was it used by Ohshin in the original site?
1. **Taste Signaling**: In design engineering, resumes and tech stacks look identical on paper. Curating music and books serves as proof-of-work that the creator is a cultured human with distinct aesthetic standards.
2. **Flow-State Moodboard**: Playlist titles like *"ambient focus"* or *"late night building"* invite the visitor into the creator's mental workshop — the sonic backdrop to shipping systems at 2 AM.
3. **Editorial Rhythm**: Visually balances the text-heavy Reading Stack with rich album art.

### Why does audio break on page change?
Next.js App Router unmounts `page.tsx` when navigating between `/` and `/work`. When `SpotifyShelf` unmounts, the browser garbage-collects the `<iframe>`, instantly terminating the audio buffer.

### The Decision Matrix (Open Choices for Anmol)

| Option | Implementation | Pros | Cons |
|---|---|---|---|
| **Option A: Replace with ArXiv Papers / Homelab Rig** *(Recommended)* | Replace the Spotify card with an **"ArXiv Research & Systems Papers"** shelf (papers studied/implemented: *Attention, LoRA, FlashAttention-2, Silero VAD, BitNet, ReAct*) or a **"Hardware & Systems Rig"** card (Mac unified memory / RTX setup, vLLM metrics, Arch dotfiles). | 100× higher signal for an AI/Systems engineer. Uniquely authentic to Anmol. No broken audio expectations. | Requires designing a clean Paper / Rig card component. |
| **Option B: Pure Curated Crates Showcase** | Keep Spotify on Home, but format it purely as curated crates with direct Spotify launch links, removing the expectation that it serves as an in-page audio player. | Retains Ohshin visual parity. Zero code changes required. | Still unmounts if played; 30-sec limit applies for unauthenticated guests. |
| **Option C: Persistent Audio Engine** | Move an audio controller / mini-player into `src/app/layout.tsx` so audio persists seamlessly across route transitions. | True high-craft engineering flex; uninterrupted background music. | Requires managing global audio state and sourcing non-iframe audio streams (e.g. ambient radio stream or custom tracks). |

---

## 7. Unanswered Questions & Future Roadmap

1. **Which shelf replacement does Anmol want to lock in?** (Option A ArXiv/Rig vs Option B Spotify Crates vs Option C Persistent Audio).
2. **Custom Domain**: What primary domain will be assigned to `portfolio-v2` in Vercel? (`anmolsharma.dev`, `v2.anmolsharma.dev`, etc.)
3. **Asset Self-Hosting**: Evaluate moving Google Fonts WOFF2 files directly into `public/fonts/` for 100% offline self-hosted zero-latency rendering.
