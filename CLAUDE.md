# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (TypeScript check + Vite production build)
- **Preview production build**: `npm run preview`

There are no tests or linting configured.

## Architecture

Single-page personal portfolio built with **Lit** (Web Components) + **Vite** + **TypeScript**.

- `index.html` — entry point, loads `<granze-app>` and global styles/meta/fonts
- `src/main.ts` — imports the root component
- `src/components/granze-app.ts` — shell component rendering `<nav-bar>` + `<main>` with all section components
- `src/components/*.ts` — each section is a self-contained LitElement (hero, what-i-do, recognition, community, hobbies, contact)
- `src/styles/shared.ts` — design tokens (colors, fonts, spacing) and base styles as a Lit `css` template, imported by section components
- `public/` — static assets (images, favicon, robots.txt, sitemap.xml)

Key patterns:
- All components use Shadow DOM (Lit default). Cross-component styling is done via CSS custom properties defined on `:host` in `shared.ts` and on `html` in `index.html`.
- `--navbar-height` is defined in `index.html` on `html` and used by `granze-app`, `hero-section`, and `nav-bar` for layout offsets.
- Navigation uses `IntersectionObserver` to track active section and `window.scrollTo` for smooth scrolling (not native anchor jumps, to account for fixed navbar offset).
- Imports use `.js` extensions (e.g., `import './nav-bar.js'`) even though source files are `.ts` — this is intentional for TypeScript's module resolution with `"moduleResolution": "bundler"`.

## Deployment

Deploys to **GitHub Pages** via GitHub Actions on push to `main`. Build output in `dist/` is pushed to `gh-pages` branch. Custom domain via `CNAME` file.
