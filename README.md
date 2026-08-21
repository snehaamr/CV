# Personal site

Static site for [snehaamr.github.io/CV](https://snehaamr.github.io/CV/). Built with React and Vite. GitHub Pages serves the built files from the `main` branch root (`index.html`, `assets/`, `images/`).

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

That writes `dist/` and copies the production files to the repo root so Pages can serve them. Commit those generated files (`index.html`, `404.html`, `assets/`, `images/`, `.nojekyll`) with your source changes.

The app lives under `src/`. Vite uses `base: '/CV/'` because this is a project site at `username.github.io/CV/`.

Content lives in `src/data/`.
