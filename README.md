# Personal site

Static site for [snehaamr.github.io/CV](https://snehaamr.github.io/CV/). Built with React and Vite, then deployed as plain HTML/CSS/JS so GitHub Pages can host it for free.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production files land in `dist/`. Vite is configured with `base: '/CV/'` because this repo is a project site, not a user site.

## GitHub Pages

A workflow in `.github/workflows/deploy.yml` builds the app on every push to `main` and publishes `dist/` to the `gh-pages` branch.

After merging this change, set **Settings → Pages → Build and deployment → Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/`**. The live site stays at `https://snehaamr.github.io/CV/`.

Content lives in `src/data/` so you can update jobs, projects, and book notes without copying HTML around.
