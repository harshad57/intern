# Spreadsheet UI Clone

A small React + Vite demo that recreates a modern marketing-style landing page (hero, features, header) built with Tailwind CSS and Lucide icons. This repository is a lightweight UI clone intended for experimenting with layout, responsive design, and Tailwind utilities.

This project is not a full spreadsheet app — the name is inherited from the workspace — but a visual clone of a landing page UI.

## Tech stack

- React
- Vite
- Tailwind CSS (via CDN in the demo)
- lucide-react (icons)

## Files of interest

- `index.html` — base HTML used by Vite.
- `package.json` — Node scripts and dependencies.
- `vite.config.js` — Vite configuration.
- `src/App.jsx` — Main React app and all UI components (Header, HeroSection, FeaturesSection).
- `src/main.jsx` — React entrypoint.
- `src/index.css` — Project CSS (Tailwind directives / overrides).

## Setup

1. Install dependencies

   Open PowerShell in the project root and run:

   npm install

2. Run the development server

   npm run dev

   This starts Vite and opens a dev server (usually at http://localhost:5173). Live reload is enabled.

## Notes about the demo

- The project uses Tailwind CSS via the CDN link directly inserted in `src/App.jsx` for quick prototyping. For production or larger projects, prefer installing Tailwind as a PostCSS plugin and generating a compiled stylesheet.
- Icons are provided by `lucide-react`. If you add icons, import them from `lucide-react` at the top of `src/App.jsx`.
- The `App.jsx` file contains inline styles and small illustrative SVGs to keep the demo self-contained.