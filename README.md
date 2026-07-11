# Theia — Surgical Intelligence Website

The public website for **Theia**, a surgical AI company. Dark, cinematic, and
built to make surgeons, hospital innovation offices, and research collaborators
feel they are looking at a serious company with a credible long-term vision.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS · Framer Motion**,
statically exported for **GitHub Pages**.

> **Investigational-use disclaimer.** Theia is presented as a research platform.
> The site states clearly that it is not a medical device and not cleared/approved
> by any regulator. Keep that framing if you adapt the copy.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

Build a static site into `out/`:

```bash
npm run build
npm run serve        # preview the exported out/ folder locally
```

Requirements: **Node ≥ 18.18** (developed on Node 20/24).

---

## What's inside

| Area | Highlights |
|------|-----------|
| **Home** | Hero with animated scene-graph visual, stats, "What We Build" (5-step flow), 11-stage **Platform Architecture** timeline, 8-stage **AI Data Factory**, "Why We're Different" comparison, Clinical Applications, Security & Governance, Collaboration, Vision, FAQ, Contact |
| **Pages** | `/technology`, `/research`, `/partnerships`, `/company`, `/careers`, `/contact` |
| **Trust & legal** | `/privacy`, `/terms`, `/cookies`, `/data-governance`, `/security`, `/responsible-ai`, `/regulatory-roadmap`, `/research-collaboration` |
| **SEO** | Metadata + Open Graph + Twitter cards, JSON-LD (`Organization` + `WebSite`), generated `sitemap.xml` and `robots.txt`, build-time OG image |
| **Brand** | Centralized in `src/config/site.ts` + `src/app/globals.css`; see `BRAND.md` |
| **Animation** | Reveal-on-scroll, SVG path drawing, flowing signal, particle field, gradient pans — all `prefers-reduced-motion` aware |

### Project structure

```
src/
├─ app/                      # routes (App Router) + sitemap/robots/og/icon
│  ├─ (pages)/…/page.tsx
│  ├─ layout.tsx globals.css icon.svg opengraph-image.tsx not-found.tsx
├─ components/
│  ├─ layout/                # Navbar, Footer, PageHeader, LegalLayout
│  ├─ sections/              # Hero + every home section, ContactForm
│  └─ ui/                    # Button, Icon, Logo, Reveal, Particles, …
├─ content/                  # platform.ts, company.ts (all copy as data)
├─ config/site.ts            # brand, nav, footer, contact, socials
└─ lib/                      # seo.ts, utils.ts
```

---

## Configuration

### Rebrand in one place

`src/config/site.ts` holds the name, tagline, description, contact emails, social
links, and navigation. Change `siteConfig.name` to rebrand the whole site.
Colors live as CSS variables in `src/app/globals.css`. See `BRAND.md`.

### ⚠️ Before you publish — set a real contact email

Contact CTAs and the contact form open a pre-filled email to `siteConfig.email`
(default `partnerships@theia.surgery`, a placeholder domain). Set it to a mailbox
you control, either by editing `site.ts` or via env:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_EMAIL=you@yourdomain.com
```

### Environment variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for SEO / sitemap / OG | `https://theia.surgery` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path for project Pages (e.g. `/repo`) | `` (root) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact inbox for forms/CTAs | `siteConfig.email` |

On GitHub Actions these are set **automatically** by `actions/configure-pages`
(see `DEPLOYMENT.md`), so a project-page URL like `you.github.io/repo` just works.

### Typography (optional custom fonts)

The site ships with a crafted **system font stack** (no network needed — builds
never break behind SSL-interception proxies). To use custom fonts instead, add to
`src/app/layout.tsx`:

```tsx
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
// add `${display.variable} ${sans.variable} ${mono.variable}` to <html className>
```

Then remove the matching `--font-*` fallbacks in `globals.css`. Requires reliable
Google Fonts access at build time.

---

## Deployment

Push to `main` → GitHub Actions builds and deploys to GitHub Pages. Full
instructions (repo setup, custom domain, troubleshooting) in
[`DEPLOYMENT.md`](./DEPLOYMENT.md).

The contact form is **backend-free**: it composes a message in the visitor's own
email client. To collect submissions on a server instead, wire the form's
`handleSubmit` in `src/components/sections/ContactForm.tsx` to a service such as
Formspree or Web3Forms.

---

## Accessibility & performance

- Semantic landmarks, skip-link, focus-visible styles, `aria` on interactive UI.
- Respects `prefers-reduced-motion` (animations collapse to static).
- Static export, self-hosted-free fonts, inline SVG, capped particle counts, and
  `IntersectionObserver`-paused canvas for a light runtime.

---

## License

© Theia Surgical Intelligence, Inc. All rights reserved. This repository is
provided for the operation of the Theia website. Replace or relicense as needed
for your own company.
