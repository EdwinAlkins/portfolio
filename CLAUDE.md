# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at http://localhost:3000 (alias: npm run dev)
npm run build      # TypeScript check + Vite build → build/
npm run lint       # ESLint
npm run deploy     # Build then push to GitHub Pages
npm run generate-pdf  # Convert public/cv/index.html → public/pdf/cv-william-nauroy-v2.pdf via Puppeteer
```

There are no tests beyond the placeholder `App.test.tsx`.

## Architecture

### Data layer

All content (articles, projects, experiences) is stored in `public/db.json` — no backend. The `src/utils/dbUtils.ts` module provides async fetch wrappers (`getProjects`, `getArticles`, `getExperiences`, `getExperienceById`) that resolve URLs relative to the Vite `BASE_URL` (`/portfolio/`).

Static assets referenced by db.json entries (project images, article markdown files) live under `public/projects/` and `public/articles/` respectively.

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
| `/portfolio/article/:id` | Single article |

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

The CV lives as a standalone HTML file at `public/cv/index.html` (self-contained, no bundler dependency). `npm run generate-pdf` runs `public/cv/generate-pdf.js` with Puppeteer to produce `public/pdf/cv-william-nauroy-v2.pdf`.

### Build output

Vite outputs to `build/` (not `dist/`) with sourcemaps enabled. The `@` alias resolves to `./src`.

### Deployment

`npm run deploy` runs `gh-pages -d build`, pushing to the `gh-pages` branch of the repository. The live site is at `https://edwinalkins.github.io/portfolio/`.
