# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000 (alias: npm run dev)
npm run build      # TypeScript check + Vite build → build/
npm run lint       # ESLint
npm run deploy     # Build then push to GitHub Pages
npm run generate-pdf  # Render cv/index.html → public/pdf/cv-william-nauroy-v2.pdf via WeasyPrint (uv run --directory cv main.py)
npm run db-editor  # Local GUI to edit public/db.json — http://127.0.0.1:5174 (dev tool, not part of the app)
```

There are no tests beyond the placeholder `App.test.tsx`.

## Architecture

### Data layer

All content (articles, projects, experiences) is stored in `public/db.json` — no backend. The `src/utils/dbUtils.ts` module provides async fetch wrappers (`getProjects`, `getArticles`, `getExperiences`, `getExperienceById`) that resolve URLs relative to the Vite `BASE_URL` (`/portfolio/`).

Static assets referenced by db.json entries (project images, article markdown files) live under `public/projects/` and `public/articles/` respectively.

### Dev tool: db.json editor

`devtools/db-editor/` is a standalone local editor for `public/db.json`, decoupled from the React
app (not in `src`, not in `tsconfig.json`'s `include`, never built or deployed). `npm run db-editor`
starts a zero-dependency Node server on `127.0.0.1:5174` (`server.mjs`) serving a single vanilla-JS
page (`index.html`): tabs for the three collections, drag-to-reorder (which rewrites the projects'
`order`), image thumbnails, a markdown preview and pre-save validation.

The writer reproduces the file's exact on-disk format — 2-space indent, non-ASCII escaped as
`\uXXXX`, no trailing newline, keys in the order declared by `SCHEMA` in `index.html` — so saving
without editing anything leaves `git diff` empty. Keep that property when touching either file.
Every save first copies the previous content to `public/db.json.bak` (gitignored via `*.bak`).

### Routing

`App.tsx` mounts a `BrowserRouter` with a fixed `/portfolio/` base (set in `vite.config.ts`). All routes beyond home are lazy-loaded with `React.lazy`. Route structure:

| Path | View |
|------|------|
| `/` or `/portfolio` | Home |
| `/portfolio/about` | About |
| `/portfolio/experience` | Experience |
| `/portfolio/projects` | Projects list |
| `/portfolio/project/:id` | Single project (Project.tsx) |
| `/portfolio/articles` | Articles list |
| `*` (any other) | NotFound (catch-all 404) |

Note: there is **no** `/portfolio/article/:id` route registered in `App.tsx` — an article-detail URL currently falls through to the `NotFound` catch-all.

### Styling

All styling uses **styled-components** (CSS-in-JS). Shared colour tokens are in `src/contantes/color.ts` — keep the `contantes` typo for consistency. The dark-theme palette:

```ts
blue1  = "#90cdf4"  // accent / links
black1 = "#030711"  // page background
black2 = "#09090b"  // command bar background
gray1  = "#e1e7ef"  // primary text
gray2  = "#a0aec0"  // secondary text
```

Font Awesome icons are loaded via CDN in `index.html` (`<link>` tag) — no npm package.

### Key components

- `src/components/CommandBarv2.tsx` — active command palette (`Ctrl/Cmd + K`), loads projects/articles from dbUtils, navigates via react-router
- `src/components/CommandBar.tsx` — legacy version, no longer used
- `src/components/Makdown.tsx` — wrapper around `react-markdown` with `remark-gfm` and `rehype-raw`

### CV

The CV lives as a standalone HTML/CSS file at `cv/index.html` (top-level, outside `public/` — it is *not* served by the app, only used to generate the PDF). `npm run generate-pdf` runs `cv/main.py` via `uv` (Python ≥ 3.14, WeasyPrint) to render it to `public/pdf/cv-william-nauroy-v2.pdf`, which the app *does* serve. The old Puppeteer-based generator is kept as `cv/generate-pdf.js` and exposed via `npm run generate-pdf:old`.

### Analytics

PostHog is initialized in `src/index.tsx` and the app is wrapped in `PostHogProvider` (`@posthog/react`). It reads two Vite env vars at build time — `VITE_PUBLIC_POSTHOG_TOKEN` and `VITE_PUBLIC_POSTHOG_HOST` — so a `.env` (or CI secrets) must define these for analytics to work.

### Build output

Vite outputs to `build/` (not `dist/`) with sourcemaps **disabled** (`sourcemap: false`). The `@` alias resolves to `./src`. `rollupOptions.output.manualChunks` splits vendor code into separate chunks: `analytics` (posthog) and `react-vendor` (react / react-dom / react-router).

### Deployment

`npm run deploy` runs `gh-pages -d build`, pushing to the `gh-pages` branch of the repository. The live site is at `https://edwinalkins.github.io/portfolio/`.
