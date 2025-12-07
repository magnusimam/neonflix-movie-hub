 Neonflix — Movie Hub

A lightweight movie browser built with Vite + React + TypeScript, styled with Tailwind CSS and shadcn-ui primitives. Neonflix lets users search and browse movie details (via OMDb or a configured movie API), view featured content in a responsive carousel, and quickly navigate to movie pages.

Quick links
- Project root: c:\Users\HomePC\ALX assignment\neonflix-movie-hub
- Main app entry: src/main.tsx
- App shell & routes: src/App.tsx
- Movie details page: src/pages/MovieDetailsPage.tsx
- Carousel & hooks: src/components/ui/carousel.tsx, src/components/ui/Carousel.tsx

Table of contents
- About
- Features
- Tech stack
- Requirements
- Environment / Configuration
- Install & run (dev)
- Build & preview
- Scripts
- Project structure
- Development notes
- Testing
- Troubleshooting
- Contributing
- License & acknowledgements

About
Neonflix is intended as a minimal, extensible movie hub for browsing, searching, and viewing movie metadata. It focuses on a clean UI, responsive carousel components, and straightforward integration with a movie data provider.

Features
- Search movies and view details (title, year, ratings, runtime, cast, synopsis).
- Responsive carousel for featured or trending movies.
- Client-side fetching with caching patterns (React Query or plain fetch depending on implementation).
- TypeScript types across UI and service layers.
- Tailwind CSS + shadcn-ui primitive usage for consistent design tokens.

Tech stack
- Vite
- React (TSX)
- TypeScript
- Tailwind CSS
- Optional: React Query (for data caching)
- Optional: shadcn-ui components (UI primitives)

Requirements
- Node.js 18+ recommended
- npm or yarn
- Git (for repository workflows)
- OMDb API key or other movie API if the project requires external data

Environment / Configuration
Create a .env file in the project root for runtime keys. Example for Vite:
Vite:
```
VITE_OMDB_API_KEY=your_omdb_key_here
```
If the code expects other names (check src/services or environment usage), adapt accordingly.

Install & run (development)
1. From project root:
   - npm install
2. Start dev server:
   - npm run dev
3. Open the URL shown by Vite (usually http://localhost:5173)

Build & preview
- Build production bundle:
  - npm run build
- Preview built bundle locally:
  - npm run preview
Output will be in dist/ by default.

Common scripts
- npm run dev — start dev server
- npm run build — production build
- npm run preview — preview production build
- npm run lint — run linter (if configured)
- npm test — run tests (if configured)

Project structure (high level)
- src/
  - main.tsx — app bootstrap
  - App.tsx — routes & layout
  - pages/ — page components (Home, Search, MovieDetails)
  - components/ — UI components (Carousel, MovieCard, Header, etc.)
  - services/ — API integration helpers (OMDb or other)
  - hooks/ — custom hooks (e.g., useCarousel)
  - lib/ — utility helpers (cn, formatters)
- public/ — static assets
- package.json, tsconfig.json, vite.config.ts

Development notes
- Check src/components/ui/carousel.tsx and useCarousel for keyboard & responsive behavior.
- Type definitions for API responses are in src/services or near the calling code — adapt if you switch APIs.
- Tailwind config is the source of design utilities; update tailwind.config.ts for theming.

Testing
- Add unit tests alongside components or in a tests/ folder.
- If using Vitest/Jest, add scripts and config in package.json.
- Run tests: npm test (if configured)

Troubleshooting
- If build fails, run:
  - rm -rf node_modules dist package-lock.json
  - npm install
- If environment variables don’t load, verify they’re prefixed correctly for Vite (VITE_*) and restart the dev server.
- Check console and terminal output (IDE output pane) for stack traces.

Contributing
- Fork, create a feature branch, make changes, and open a PR.
- Run linting and type checks locally before submitting.
- Keep changes scoped and include tests for logic-heavy changes.

License & acknowledgements
- See package.json for license information.
- Acknowledge external services (OMDb) and UI libraries used in the project.
