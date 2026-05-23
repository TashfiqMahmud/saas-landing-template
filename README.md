# Aether.AI — Premium SaaS Landing Template

A dark, conversion-focused landing page built with **Next.js**, **TypeScript**, **Tailwind CSS v4**, and **Lucide** icons. Designed to sell on marketplaces or deploy for AI/SaaS startups.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you sell

1. **Purchase link** — Edit `src/lib/site.ts` and set `purchaseUrl` to your Gumroad / Lemon Squeezy / Stripe link.
2. **Branding** — Update `SITE.name`, metadata in `src/app/layout.tsx`, and copy in components.
3. **Pricing** — Adjust license prices in `src/components/Pricing.tsx` to match your listing.
4. **Hero visual** — Optional: add `public/assets/images/hero-sphere.png` and restore the image in `Hero.tsx` if you prefer a custom asset.

## Project structure

```
src/
  app/          # Layout, page, global styles
  components/   # Navbar, Hero, Features, Showcase, Pricing, FAQ, Footer
  lib/site.ts   # Site name, purchase URL, contact
```

## Deploy

```bash
npm run build
npm start
```

Deploy to [Vercel](https://vercel.com) with zero config.

## License tiers (suggested)

| Tier        | Suggested price | Use case                          |
|-------------|-----------------|-----------------------------------|
| Personal    | $49             | Your own single project           |
| Commercial  | $99             | Unlimited client work             |
| Agency      | $199            | Resell / bundle in your services  |

Define your actual license terms in your sales platform listing.

## What's included

- Responsive navbar with mobile menu
- Hero with CSS antigravity core (no external image required)
- Features grid
- “What you get” showcase section
- Template license pricing + FAQ accordion
- Footer with section links

## Tech stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- lucide-react
