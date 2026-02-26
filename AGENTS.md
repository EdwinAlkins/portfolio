# Portfolio - Project Context

## Project Overview

This is a **personal portfolio website** built with **React** and **TypeScript**, bootstrapped using Create React App. The portfolio showcases:

- **Home page** with introduction and social links
- **About page** for personal/professional background
- **Experience page** for work history
- **Projects page** with individual project detail views
- **Articles page** with individual article views

The application features a command bar (cmdk) for quick navigation using keyboard shortcuts (Ctrl/Cmd + K), styled with **styled-components** and uses **react-router-dom** for client-side routing.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript 4.9 |
| Styling | styled-components 6 |
| Routing | react-router-dom 6 |
| UI Components | cmdk (command palette) |
| Markdown | react-markdown, remark-gfm, rehype-raw |
| Build Tool | react-scripts (Create React App) |
| Deployment | gh-pages (GitHub Pages) |

## Project Structure

```
portfolio/
├── public/
│   ├── db.json              # Mock data for articles/projects
│   ├── index.html           # HTML template
│   ├── pdf/                 # Resume PDF files
│   └── articles/            # Markdown article files
├── src/
│   ├── components/          # Reusable components
│   │   ├── CommandBar.tsx
│   │   ├── CommandBarv2.tsx
│   │   └── Makdown.tsx
│   ├── contantes/           # Constants (note: typo in folder name)
│   │   └── color.ts         # Color palette definitions
│   ├── utils/               # Utility functions
│   ├── views/               # Page components
│   │   ├── About/
│   │   ├── Articles/
│   │   ├── Experience/
│   │   ├── Header/
│   │   ├── Home/
│   │   └── Projects/
│   ├── App.tsx              # Main app with routing
│   ├── type.d.ts            # TypeScript type definitions
│   └── index.tsx            # Entry point
├── package.json
├── tsconfig.json
└── README.md
```

## Building and Running

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Start development server at http://localhost:3000
npm start
```

### Testing

```bash
# Run tests in watch mode
npm test
```

### Production Build

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Key Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm test` | Run tests in interactive watch mode |
| `npm run build` | Create production build in `/build` folder |
| `npm run deploy` | Deploy to GitHub Pages |
| `npm run eject` | Eject from Create React App (one-way operation) |

## Development Conventions

### Code Style

- **TypeScript**: Strict mode enabled with `strict: true`
- **Naming**: PascalCase for components, camelCase for variables/functions
- **File extensions**: `.tsx` for React components, `.ts` for utilities/types

### Architecture Patterns

- **Component-based**: Views are organized by page/route in `src/views/`
- **Styled-components**: All styling uses styled-components with CSS-in-JS
- **Type definitions**: Centralized in `src/type.d.ts` for shared types
- **Constants**: Color palette defined in `src/contantes/color.ts`

### Color Palette

```typescript
blue1  = "#90cdf4"  // Accent/highlight color
black1 = "#030711"  // Primary background
black2 = "#09090b"  // Secondary background (command bar)
gray1  = "#e1e7ef"  // Text color
```

### Routing Structure

| Path | Component |
|------|-----------|
| `/` | Home |
| `/portfolio` | Home |
| `/portfolio/about` | About |
| `/portfolio/experience` | Experience |
| `/portfolio/projects` | Projects list |
| `/portfolio/project/:id` | Single project detail |
| `/portfolio/articles` | Articles list |
| `/portfolio/article/:id` | Single article detail |

## Key Features

1. **Command Bar**: Press `Ctrl/Cmd + K` to open a command palette for quick navigation
2. **Responsive Design**: Mobile-friendly with hamburger menu on small screens
3. **Markdown Support**: Articles are rendered from Markdown files using react-markdown
4. **GitHub Pages Deployment**: Configured for deployment via `npm run deploy`

## Notes

- The folder `src/contantes/` contains a typo (should be `constants`) - maintain consistency with existing naming
- The app uses a dark theme by default
- Social links and personal info are hardcoded in the Home component
- Articles and projects data is loaded from `public/db.json`
