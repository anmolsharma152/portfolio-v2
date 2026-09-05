# Open Questions & Pending Architectural Decisions

This document tracks all active, undecided questions and pending design choices for `portfolio-v2`. Each item includes technical context, trade-offs, and concrete implementation options so work can resume seamlessly.

---

## 1. The Spotify Shelf vs. Systems/Engineering Shelf (STATUS: PENDING DECISION)

### Context
In Ohshin Bhat's portfolio, the Home page (`/`) features two side-by-side cultural shelves:
1. **Records Shelf** (Spotify playlists)
2. **Reading Stack** (Books)

### The Problem
- In Next.js App Router, in-page embeds (Spotify `<iframe>`) only play 30-second previews for guest users.
- More critically: **Client-side page navigation to `/work` unmounts `page.tsx`**, instantly killing the audio stream mid-track. This creates a broken user experience if someone actually clicks play and then explores your work.

### Options Under Evaluation

#### Option A: Drop Spotify & Replace with an "ArXiv Research Papers" Shelf (Recommended)
- **Concept**: Replace the Spotify embed with an interactive ArXiv papers shelf showcasing the foundational research you study, implement, and benchmark (e.g., *LoRA / QLoRA, FlashAttention-2, Silero VAD, BitNet 1.58b, ReAct Agent Swarms, Mamba*).
- **Alternative within Option A**: A **"Hardware & Systems Rig"** card detailing your local dual-GPU/Mac unified memory setup, Arch/Hyprland dotfiles, local vLLM serving latency benchmarks, and terminal configurations.
- **Why this works**:
  - 100× higher signal for an AI Systems & Low-Level Voice Engineer than a Spotify widget.
  - Zero broken audio expectations or iframe unmounting issues.
  - Complements the Book Shelf perfectly (Books = Mind & Philosophy; ArXiv Papers = Deep Technical Craft).
- **Action Needed**: Create `ArXivShelf.tsx` component and curate 4–6 papers with paper cover badges, arXiv links, and 1-line engineering takeaways in `src/content/site/papers.json`.

#### Option B: Keep Spotify Shelf as Curated Crate Showcase (No In-Page Audio Focus)
- **Concept**: Retain the Spotify cards on Home, but explicitly re-frame them as **"Curated Playlist Crates"** with prominent direct-launch links (`Open in Spotify`), de-emphasizing in-page audio playback.
- **Why this works**:
  - Retains 1-to-1 visual parity with Ohshin's records shelf layout.
  - Fixes user expectation: visitors browse cover art and vibe titles, then open in their native Spotify desktop/mobile client.
- **Trade-off**: Still unmounts if played in-browser; doesn't eliminate the fundamental iframe limitation.

#### Option C: Elevate to a Persistent Root-Layout Audio Engine
- **Concept**: Move an audio engine / mini-player dock widget into `src/app/layout.tsx` (Root Layout), which **never unmounts** during route transitions between `/` and `/work`.
- **Why this works**:
  - Continuous, uninterrupted audio playback as visitors navigate the entire portfolio.
  - Demonstrates high-craft audio state management.
- **Trade-off**: Requires hosting/streaming audio files or integrating an uninterrupted web audio stream (cannot use standard Spotify iframes because iframes inside layout have cross-route persistence and sandboxing constraints).

---

## 2. Work Experience vs. Projects Layout Balance (STATUS: STICKY FIX APPLIED, REVIEW NEEDED)

### Context
- You have **3 Work Experience items** and **8 Deep-Tech Projects**.
- An asymmetric `0.6fr : 1fr` grid caused Experience to end after ~600px, leaving an empty void for the remaining 2,500px of Projects.
- **Current Fix**: Added `lg:sticky lg:top-8` so the Experience card remains anchored in view on desktop.

### Open Questions
- Is the sticky left card sufficient, or would you prefer a **stacked layout** (Full-width Experience Timeline section &rarr; followed by Full-width Projects grid)?
- Should we add expandable/collapsible details or project filter pills (e.g. `All`, `Agentic Systems`, `Speech/VAD`, `PEFT/LLMOps`) to make project discovery faster?

---

## 3. Custom Domain & Vercel Project Setup (STATUS: PENDING USER ACTION)

### Context
- The original repository (`nextjs-portfolio`) remains live on Vercel at `anmolsharma152.vercel.app`.
- The new repository `portfolio-v2` is pushed to GitHub at `anmolsharma152/portfolio-v2`.

### Decisions to Make
- When deploying `portfolio-v2` on Vercel:
  - Do you want to connect a custom root domain (e.g., `anmolsharma.dev`)?
  - Or deploy to a preview subdomain (e.g., `v2.anmolsharma.dev`) until you are 100% ready to switch?
