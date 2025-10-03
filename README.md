A small React + Vite demo project that recreates a modern landing page / UI for a resume/profile service. It uses Tailwind CSS for styling and the `lucide-react` icon set for SVG icons. The project is intentionally small and focused on UI structure and styling, suitable as a learning example or a base for building a marketing landing page.

## Features

- Responsive landing page layout with header, hero, features grid, and footer
- Fully built using React components and Tailwind CSS utility classes
- Uses Vite for fast dev server and build
- Lightweight and focused — great for experimenting with Tailwind layouts and responsive design

## Tech stack

- React
- Vite
- Tailwind CSS (via CDN for quick prototyping)
- lucide-react (icons)

Note: This project includes Tailwind via the CDN inside `App.jsx` for quick prototyping. For production or a more robust setup, consider configuring Tailwind via PostCSS and importing the generated CSS in `index.css`.

## Getting started

These instructions assume you have Node.js (16+) and npm or yarn installed.

1. Install dependencies

```powershell
npm install
```

2. Run the development server

```powershell
npm run dev
```

## Scripts (from package.json)

- `dev` — Starts the Vite development server
- `build` — Builds the production bundle
- `preview` — Serves the built production bundle locally

If your `package.json` differs from the above, use the corresponding scripts defined there.

## Notes and suggestions

- The demo includes Tailwind via CDN inside `App.jsx` for simplicity. To use Tailwind with PostCSS properly (recommended for production), move the CDN styles out and follow the Tailwind + Vite installation guide:

  1. Install Tailwind as a dev dependency and configure `tailwind.config.js`.
  2. Import the generated Tailwind CSS into `src/index.css`.

- The `App.jsx` file currently contains inline SVGs and small subcomponents. If you expand the project consider splitting components into their own files under `src/components/`.

## Contributing

This repository is meant as a small demo. If you'd like to contribute:

1. Fork or clone the repo
2. Create a feature branch
3. Run the dev server and implement changes
4. Open a pull request with a clear description