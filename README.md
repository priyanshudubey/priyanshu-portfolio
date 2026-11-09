# priyanshudubey.com

Personal portfolio of Priyanshu Dubey — software engineer building AI products and the systems behind them.

**Stack:** React 18 · Vite · Tailwind CSS · prerendered to static HTML · deployed to Hostinger via GitHub Actions.

## Getting started

```bash
nvm use        # Node 22 (see .nvmrc)
npm install
npm run dev    # http://localhost:5173
```

## Updating content

All text, jobs, projects, skills and links live in **[`src/data/content.js`](src/data/content.js)**. Components only handle layout, so you rarely need to touch JSX.

- **Résumé:** drop the PDF at `public/Priyanshu_Dubey_Resume.pdf`. The "Download résumé" button appears automatically; without the file it stays hidden (and the build prints a warning).
- **Project screenshots:** put images in `public/projects/` and set `image: "/projects/<file>.png"` on the project.
- **Hero video:** set in [`src/data/youtube.json`](src/data/youtube.json). With `"pinned": true` (the default) the hero always shows that video; change its `id`, `title`, `published`, `duration`, `url` and `thumbnail` to feature a different one. Set `"pinned": false` and every build shows the channel's latest upload instead (`npm run youtube` refreshes it). Shorts appear on an upright phone, regular videos on a landscape device.
- **Social preview / icons:** `public/og-image.png` (1200×630), `public/logo192.png`, `public/logo512.png`, `public/favicon.svg`.

## Scripts

| Command            | What it does                                                 |
| ------------------ | ------------------------------------------------------------ |
| `npm run dev`      | Dev server with hot reload                                   |
| `npm run build`    | Production build + prerender to static HTML in `dist/`       |
| `npm run preview`  | Serve `dist/` on <http://localhost:4173>                     |
| `npm run lint`     | ESLint (React, hooks, jsx-a11y), zero warnings allowed       |
| `npm run format`   | Prettier                                                     |
| `npm test`         | Vitest unit tests                                            |
| `npm run test:e2e` | Playwright e2e + axe accessibility tests (run `build` first) |
| `npm run lhci`     | Lighthouse budgets against `dist/`                           |

## How it works

- **Prerendering:** `npm run build` builds the client, then an SSR bundle of `src/entry-server.jsx`; `scripts/prerender.mjs` renders the app to HTML and injects it into `dist/index.html`. The client hydrates it. Crawlers, link previews and no-JS visitors see the full page.
- **Theming:** colours are CSS variables in `src/index.css`, exposed as Tailwind tokens (`bg-paper`, `text-ink`, `text-accent`, …) in `tailwind.config.js`. Dark mode follows the OS and can be toggled; the choice is saved in `localStorage`.
- **Motion:** scroll reveals and animations are disabled for `prefers-reduced-motion`, and content is never hidden unless JS is running.

## CI/CD

- **`ci.yml`** — on every PR / branch push: lint, format check, unit tests, build, Playwright + axe, Lighthouse budgets.
- **`deploy.yml`** — on push to `main`: runs the same checks, then uploads `dist/` to Hostinger over **FTPS**. Secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.
