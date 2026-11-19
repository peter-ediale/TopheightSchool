# Topheight Schools website

Official website of **Topheight Schools**, Akwofor, Asaba, Delta State:
Topheight Academy (Nursery & Primary) and Topheight College (Secondary).

- `site/` holds the website (Astro + React + Tailwind + Motion)
- `PLAN.md` holds the project plan, decisions and checklist

## Run locally

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # production build in site/dist
```

School facts (phones, address, hours, WAEC figures) live in `site/src/data/school.ts`.

## Deploy

Cloudflare Pages builds from this repo automatically. Settings:
root directory `site`, build command `npm run build`, output directory `dist`.
