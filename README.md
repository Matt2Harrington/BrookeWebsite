# Brooke McPherson — galaxylens.art

Personal website for Brooke McPherson — content creator, social media manager, and photographer.

Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Pages

| Path              | File                          |
|-------------------|-------------------------------|
| `/`               | `src/pages/index.astro`       |
| `/about`          | `src/pages/about.astro`       |
| `/services`       | `src/pages/services.astro`    |
| `/portfolio`      | `src/pages/portfolio.astro`   |
| `/contact`        | `src/pages/contact.astro`     |

## Where the copy lives

All placeholder copy is marked `[EDIT: ...]`. Search the project for `[EDIT` to find every spot you'll want to fill in. The biggest sources:

- `src/data/site.ts` — name, email, location, social handles
- `src/data/services.ts` — three service descriptions, bullets, "starting at" pricing
- `src/data/portfolio.ts` — gallery descriptions (image URLs are wired to the existing Tumblr CDN)
- `src/components/home/Hero.astro` — homepage headline copy + photo placeholders
- `src/components/home/AboutBlurb.astro` — short about
- `src/pages/about.astro` — full about story, quick facts, press
- `src/pages/services.astro` — process, FAQ
- `src/pages/contact.astro` — contact intro

## Theme

Defined in `tailwind.config.mjs`:

- `cream` `#F7F1EA` — page background
- `cream-deep` `#EFE6DA` — card / divider tint
- `cocoa` `#2B221C` — body text & dark sections
- `cocoa-soft` `#5C4A3E` — secondary text
- `rose` `#C68B7E` — primary accent
- `rose-soft` `#E5C0B6` — accent tint
- `sage` `#8FA382` — secondary accent
- `sage-soft` `#C4D1B7` — secondary tint
- `sand` `#D9C7AF` — neutral warm

Fonts: `Fraunces` (display serif), `IBM Plex Sans` (body), `Waiting for the Sunrise` (script accent).

## Deploy

GitHub Pages serves from the custom domain `galaxylens.art` (CNAME lives in `public/CNAME` and is copied to `dist/CNAME` on build).

Two paths to publish:

1. **Manual:** `npm run build`, then commit the `dist/` output to a `gh-pages` branch (or set up GitHub Pages to serve from `dist`).
2. **GitHub Action:** add `.github/workflows/deploy.yml` using the official `withastro/action` recipe — it runs `npm run build` on push and pushes the result to `gh-pages` automatically.
