# Theia — Brand Guide

> The public identity for a surgical AI company. This document is the single
> source of truth for the brand. Everything visual in the site derives from the
> tokens defined in `src/app/globals.css` and the config in `src/config/site.ts`.

---

## 1. The name

**Theia** — the Greek goddess of *sight* and heavenly *light*; mother of the Sun,
the Moon, and the Dawn. In myth she is the one who gives things their glow and
makes them *visible*.

**Why it fits.** Our entire product turns *video* (light) into *sight*, and sight
into *intelligence*. Theia is short, premium, pronounceable (*THAY-uh*), and
cinematic — in the tradition of ambitious deep-tech names (Anduril, Palantir)
rather than generic health-tech blue. The light/sight metaphor also powers the
visual system: luminous gradients, an aperture-eye mark, and a scene-graph glyph.

**Positioning line:** *We give surgery new sight.*

### Alternative directions (if you want to swap)

The name lives in exactly one place — `siteConfig.name` in `src/config/site.ts`.
Change it there and it propagates everywhere. Strong alternatives:

| Name | Meaning / angle | Note |
|------|-----------------|------|
| **Kheiron** | The centaur who taught surgery to Asclepius; root *kheir* = "hand" | Heritage + skill; very ownable spelling |
| **Metis** | Greek *mētis* — the practical, embodied intelligence of a master | Intelligence-forward; check regional sensitivities |
| **Aperia** | From Latin *aperire*, "to reveal / make clear" (root of *aperture*) | Clean coinage; "we reveal the operation" |
| **Axiom** | A self-evident, deterministic truth | Leans into the deterministic runtime |
| **Fovea** | The point of sharpest human vision | Precision/perception; more clinical |

> ⚖️ **Before commercial use**, run a trademark and domain clearance for whichever
> name you ship. "Theia" has minor prior use in vision-AI; it is distinctive
> enough in surgical AI and is centralized for easy change.

---

## 2. Tagline

**Primary:** *The Operating System for Surgical Intelligence.*

**Alternates:**
- *Turning surgical video into clinical intelligence.*
- *See every second. Understand every step.*
- *Deterministic surgical AI — evidence you can trace, decisions you can trust.*

---

## 3. Logo

A geometric **aperture / eye reticle** whose inscribed triangle doubles as a
three-node **scene graph** — the eye that sees, and the structure it builds.

- Component: `src/components/ui/Logo.tsx` (`<Logo />`, `<LogoMark />`)
- Favicon: `src/app/icon.svg`
- Rendered from the brand gradient (mint → cyan → indigo) so it glows on dark.

**Usage.** Keep clear space around the mark equal to the height of the ring. Do
not recolor it off-brand, stretch it, or place it on busy imagery. On light
surfaces, use the dark-chip lockup (as in the favicon).

---

## 4. Color palette

Dark, cinematic, "surgical instrument" precision — deliberately **not** medical
blue. Defined as CSS variables in `src/app/globals.css`.

| Token | Hex | Role |
|-------|-----|------|
| Void | `#06080C` | Page background |
| Surface | `#0A0E14` | Panels |
| Surface 2 | `#0F141C` | Cards / inputs |
| Elevated | `#141B25` | Raised elements |
| Ink | `#E8EDF4` | Primary text |
| Muted | `#96A3B6` | Secondary text |
| Faint | `#606B7C` | Tertiary / labels |
| **Accent — Mint** | `#2DE3C8` | Primary accent (perception) |
| **Accent — Cyan** | `#22D3EE` | Secondary accent (world model) |
| **Iris — Indigo** | `#818CF8` | Intelligence / reasoning |
| Signal — Amber | `#F5B94A` | Evidence / alerts (sparing) |

The accent gradient (mint → cyan → indigo) is the brand's signature. Use it for
one hero element per view — never as a wash behind body text.

---

## 5. Typography

**Shipped default: a crafted system stack** — zero network dependency, so builds
never fail (including behind corporate SSL-interception proxies) and the site
looks native-crisp on every OS (Segoe UI Variable on Windows, SF Pro on macOS).

- Display / headings — `--font-display`
- Body — `--font-sans`
- Technical labels / eyebrows — `--font-mono`

**Optional upgrade to custom fonts.** For a bespoke wordmark feel, swap in
`next/font/google` (e.g. *Sora* for display, *Inter* for body, *JetBrains Mono*
for labels). See `README.md → Typography` for copy-paste code. Only do this if
your build environment has reliable access to Google Fonts.

**Type rules.** Tight tracking on display (`-0.02em`), balanced headlines
(`text-wrap: balance`), monospace + uppercase + wide tracking for eyebrows and
technical tags. Body never below 14px.

---

## 6. Voice & tone

We sound like a **serious engineering company that respects surgeons** — precise,
confident, and honest. Credible over hype.

**Do**
- Lead with substance; back claims with mechanism ("deterministic," "provenance").
- Be honest about stage ("investigational," "where we are — honestly").
- Respect the surgeon as the decision-maker.
- Use concrete surgical language (CVS, phases, anastomosis) correctly.

**Don't**
- Claim clinical performance or regulatory status we don't have.
- Use generic SaaS filler ("revolutionary," "seamless," "game-changing").
- Imply autonomy or that AI replaces the surgeon.
- Use medical-blue / stock-startup aesthetics.

---

## 7. Motion

Tasteful and physical: reveal-on-scroll, SVG path-drawing, flowing signal along
edges, floating particles, gradient pans. Everything respects
`prefers-reduced-motion`. Motion should feel like *precision instruments*, not a
carnival — one focal animation per section.
