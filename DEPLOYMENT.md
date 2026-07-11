# Deploying Theia to GitHub Pages

The site is a **static export** (`output: 'export'` → `out/`) deployed by GitHub
Actions. Base path and canonical URL are detected automatically, so it works both
at a user/org root (`you.github.io`) and at a project path (`you.github.io/repo`).

---

## 1. Create the repository

This project is designed to be the **root of its own repository**. Copy the
`theia-website/` folder to a new repo (or move its contents to a repo root):

```bash
cd theia-website
git init
git add .
git commit -m "Theia website"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

> The `.github/workflows/deploy.yml` file must sit at the repository root to run.
> If you instead keep the site in a subfolder of a larger repo, add
> `working-directory: theia-website` to the workflow's `run` steps and set
> `cache-dependency-path` accordingly.

## 2. Enable Pages

On GitHub: **Settings → Pages → Build and deployment → Source = "GitHub Actions".**

That's it. No branch to pick — the workflow publishes directly.

## 3. Push to deploy

Every push to `main` (or a manual **Actions → Deploy → Run workflow**) will:

1. `actions/configure-pages` detects your `base_path` and `base_url`.
2. `npm ci` / `npm run build` produces `out/` with the correct sub-path.
3. The artifact is uploaded and deployed to Pages.

Your site appears at `https://<you>.github.io/<repo>/` within a minute or two.

---

## Base path — how it "just works"

For a project site the app must be served from `/<repo>`. The workflow feeds the
detected values into the build:

```yaml
env:
  NEXT_PUBLIC_BASE_PATH: ${{ steps.pages.outputs.base_path }}   # e.g. /theia-website
  NEXT_PUBLIC_SITE_URL:  ${{ steps.pages.outputs.base_url }}    # full origin
```

`next.config.mjs` applies `basePath`/`assetPrefix` when `NEXT_PUBLIC_BASE_PATH`
is set. Internal `<Link>`s and assets are prefixed automatically. A `.nojekyll`
file is included so the `_next/` folder is served correctly.

To build locally for a project path:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo NEXT_PUBLIC_SITE_URL=https://you.github.io/your-repo npm run build
```

---

## Custom domain

1. Add your domain in **Settings → Pages → Custom domain** (creates a `CNAME`).
2. Point DNS at GitHub Pages (`CNAME` to `you.github.io`, or the four A records).
3. Set the canonical URL for SEO:

```bash
# repo → Settings → Secrets and variables → Actions → Variables
NEXT_PUBLIC_SITE_URL = https://www.yourdomain.com
```

Then reference it in the workflow build step (replace `steps.pages.outputs.base_url`
with `${{ vars.NEXT_PUBLIC_SITE_URL }}` and clear `NEXT_PUBLIC_BASE_PATH`, since a
custom domain serves from root).

---

## Local preview of the production build

```bash
npm run build
npm run serve        # serves ./out at http://localhost:3000
```

---

## Troubleshooting

**CSS/JS 404s on a project page.** The base path wasn't applied. Confirm Pages
Source is "GitHub Actions" and that `NEXT_PUBLIC_BASE_PATH` is set in the build
step. Rebuild.

**`npm ci` fails (no lockfile).** The workflow falls back to `npm install`.
Commit `package-lock.json` for reproducible installs.

**Local `npm install` / build fails behind a corporate proxy (SSL interception).**
Point Node/npm at your proxy's root CA:

```bash
setx NODE_EXTRA_CA_CERTS "C:\path\to\corporate-root-ca.pem"
npm config set proxy http://your-proxy:port
npm config set https-proxy http://your-proxy:port
```

The site uses **system fonts** specifically so the build has no Google Fonts
network dependency — the CI deploy is unaffected regardless.

**OG image build error.** `src/app/opengraph-image.tsx` uses `next/og`. If your
environment can't build it, delete that file and add a static `public/og.png`
referenced via `openGraph.images` in `src/lib/seo.ts`.

**404 on refresh of a sub-page.** Ensure `trailingSlash: true` (already set) so
each route exports as `route/index.html`.
