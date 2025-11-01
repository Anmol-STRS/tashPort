# Tashneet Personality Site

A personality-first single-page website for Tashneet built with React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, and a chocolate-inspired 3D scene powered by react-three-fiber.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Tooling

- `npm run lint` — ESLint for React + TypeScript best practices.
- `npm run typecheck` — TypeScript without emitting files.
- `npm run sitemap` — Generates `public/sitemap.xml`.

## Architecture Overview

- `src/components` — Reusable UI primitives (Card, Chip, Collapsible, Section, Container) and content sections (Hero, Moodboard, Stories, Ambition Ladder, Overthinking Corner, Laugh File, Little Joys, Footer).
- `src/data` — Typed data sources powering storytelling sections.
- `src/styles/index.css` — Tailwind directives plus design tokens (colors, typography, focus styles).
- `public` — Optimized local imagery, Open Graph preview, favicon, WebGL fallback assets, and robots.txt.

The hero chocolate scene lazy-loads a lightweight react-three-fiber canvas with a graceful PNG fallback whenever WebGL is unavailable or reduced motion is preferred. All motion sequences respect `prefers-reduced-motion`. Section entrances animate only once on scroll, and hover interactions stay subtle for 60 fps smoothness.

## Accessibility & Performance

- Semantic landmark structure (`header`, `main`, `footer`) and logical heading hierarchy.
- High-contrast focus states via `.focus-ring`.
- Local images with descriptive `alt` text.
- No analytics or blocking scripts; Vite handles asset optimization.

## Deployment Notes

Run `npm run build` and serve the `dist/` directory with any static host. Update the base URL in `scripts/generate-sitemap.mjs` via `SITEMAP_BASE_URL` before deploying to ensure the sitemap references the correct domain. Lighthouse scores target 95+ across Performance, Accessibility, Best Practices, and SEO.
