Rebuild `/singing` as a custom "A Cappella" page and shift the accent color from mustard to buttery yellow across the site.

## Page content

**Header**
- h1: "A Cappella"
- Intro: "I've been singing in a cappella groups for 9 years!"

**Section 1 — Yale Citations**
- Small group photo (uploaded citations.jpeg, capped ~360px wide)
- Caption: "Yale's only graduate a cappella group"
- Two video cards (16:9 YouTube embeds, side-by-side on desktop):
  - Honeymoon Avenue — Soloist: Shreya R.
  - Pink Pony Club — Soloist: Jordan P.

**Divider** (thin horizontal rule)

**Section 2 — Trogons**
- Small group photo (uploaded EW-4.14-Trogons-4.jpg, capped ~360px wide)
- Five video cards, 2-col grid on desktop:
  - Fall Showcase 2024
  - Spring Showcase 2024
  - Fall Showcase 2022
  - Spring Showcase 2022
  - Fall 2021

## Color change

Update the current mustard accent `#E5B547` to a softer buttery yellow `#F0CE6E` everywhere it's used (Home nav link hover, page title colors, entry colors in NowPlaying, etc.). Still legible on the cream background.

## Technical notes

- New `src/pages/ACappella.tsx` — layout mirrors `NowPlaying.tsx` (sidebar with name + back link, main column with SiteFooter).
- Upload both group photos via `lovable-assets` CLI → `src/assets/citations.jpeg.asset.json` and `src/assets/trogons.jpg.asset.json`.
- YouTube embeds: `<iframe src="https://www.youtube.com/embed/{id}">` wrapped in `aspect-video` container, `loading="lazy"`.
- `src/App.tsx`: replace `/singing` route element with `<ACappella />`; remove unused `/singing/:slug` detail route.
- `src/pages/Home.tsx`: rename nav link "Singing" → "A Cappella"; keep `/singing` URL.
- `src/data/portfolio.ts`: remove `singingItems` array and its inclusion in the combined list. Leave the `"singing"` category union value in place (unused but harmless — removing it would require touching `PortfolioItem` consumers).
- Global find/replace of `#E5B547` → `#F0CE6E` across `src/` (App.tsx, Home.tsx, NowPlaying.tsx, portfolio.ts, any others).