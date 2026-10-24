# CLAUDE.md

Personal portfolio site for Anmol Sharma (`anmolsharma152.vercel.app`). Not the Ozyman product app.
@AGENTS.md

See also: [docs/OPEN_QUESTIONS.md](./docs/OPEN_QUESTIONS.md).

Default scope is **content/design edits**. Touch infra (CI, build config, deps) only when asked.

## Stack

- Next.js 14.2 (App Router), React 18.3, TypeScript 5.8 (`strict: true`)
- Tailwind CSS 3.4, Framer Motion 10
- Zod 3 for content validation; icons from `lucide-react` and `react-icons` (`fa6`, `si`, `ri`)
- Package manager: **npm** (`package-lock.json`). Deployed on Vercel (`@vercel/analytics`).
- Node: `.nvmrc` pins 18.17.0 and CI uses 18.x; Next 14.2 also runs on newer Node.

## Build & Dependencies

```bash
npm ci                 # clean install from lockfile (preferred)
npm install            # when changing deps
npm run build          # next build (also runs Next's lint + typecheck)
make clean             # rm -rf node_modules .next out
```

No environment variables are required. `.env.local.example` is stale (references a removed Resend contact route).

## Run

```bash
npm run dev            # http://localhost:3000
npm run build && npm run start   # production server
```

Routes: `/` (Hero + About), `/work` (WorkStation), plus generated `/robots.txt`, `/sitemap.xml`, `/opengraph-image`.

## Testing & Verification

There is **no test runner or test suite**. Verification is static checks + build:

```bash
npx tsc --noEmit       # typecheck
npx eslint .           # lint, check only
npm run lint           # NOTE: runs `eslint . --fix` — it rewrites files
npm run build          # production build
```

Content schemas are enforced at module load: a bad JSON edit in `src/content/site/` throws a `ZodError` during build/render, so `npm run build` is the content test.

## Code Style

- Prettier (`.prettierrc`): single quotes, semicolons, 2-space indent, `printWidth: 100`, `trailingComma: es5`; `npm run format` writes all files.
- ESLint: `eslint.config.mjs` (flat) and a legacy `.eslintrc.json` both exist; ESLint 8.57 is installed. Import order is enforced (builtin → external → internal, alphabetized, blank lines between groups).
- Components: PascalCase filenames, default export, `'use client'` only where hooks/motion are used.
- Imports via `@/*` → `src/*`.
- Styling is Tailwind utilities inline; shared surfaces are global classes in `src/app/globals.css` (`.work-panel`, `.work-card`). Fonts: `font-doto` (display), `font-mono` (IBM Plex Mono body), `font-sans` (Inter). All are self-hosted via `next/font` in `layout.tsx`; Doto is vendored at `src/app/fonts/` because Next 14's Google list lacks it. Don't add Google Fonts `<link>`s: the CSP blocks third-party fonts.
- Readability floor: text at least `0.68rem`/11px, and readable text no fainter than `text-white/60`.
- Always respect reduced motion: animations use `motion-safe:` prefixes.
- Error handling: none at runtime beyond Zod `.parse()` (fail-fast at build). No API routes.

## Architecture

```
src/
  app/            layout.tsx (fonts, metadata, JSON-LD, Navigation dock, Analytics)
                  page.tsx (/) · work/page.tsx
                  robots.ts · sitemap.ts · opengraph-image.tsx (static) · viewport.ts
  components/     Hero, About, Navigation (bottom floating dock)
    work/         WorkStation → WorkHeader, ProjectsSection, ExperienceSection,
                  DeliverablesSection, TechStackSection, ReachOutSection (server components)
    widgets/      DecryptedText, GlassSheen, PanelEffects (shared glass layers), WorkClock,
                  SpotifyShelf, ReadingStack, TechStackSection
  content/
    site/*.json   all editable copy/data (about, projects, experience, education, personal = books + spotify, reach)
    schemas.ts    Zod schemas + inferred types
    loaders.ts    parses JSON → typed constants consumed by components
  lib/utils.ts    cn()
```

Security headers (CSP, HSTS, COOP, etc.) and `/public` cache headers live in `next.config.js`. The CSP allows only same-origin resources plus the `open.spotify.com` iframe, and all images must be local (no `remotePatterns`). A new third-party embed or asset needs a CSP update.

Data flow: `content/site/*.json` → `loaders.ts` (Zod parse at import) → components import constants directly. Everything is statically rendered; there is no server data fetching, state store, or API.

To edit copy, prefer changing JSON in `src/content/site/` over component code. Some copy is still hardcoded in components (About bio, WorkHeader intro, ReachOut copy, Honors, tech stack lists).

Content rules: the resume is the source of truth, and every project claim or metric must be verifiable in the matching repo under `~/Projects` or on GitHub. Feature exactly four projects. Avoid entrance fades that start content at opacity 0; they made navigation feel slow.
