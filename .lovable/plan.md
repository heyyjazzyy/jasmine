## Goal

Turn the current `/media-log` route into a dedicated **Jasmine Supper Club** page. Hero feature only — no tile grid, no reflection essay. Menu items pair with their dish photos.

## Route change

- Rename `/media-log` → `/jasmine-supper-club` in `src/App.tsx`.
- Update the "host dinners" link in `src/pages/Home.tsx` (`HeroSentence`) to point at the new path.
- Also update `SideNav` if it references `/media-log`.
- Retire the media-log `CategoryPage` usage for that route. The existing `mediaLogItems` data and detail routes can stay untouched for now (not linked from anywhere).

## New page: `src/pages/JasmineSupperClub.tsx`

Same left sticky sidebar pattern as `CategoryPage` (name at top, "← Back to Home" pinned at bottom).

Content, in order:

1. **Hero block**
   - Display title: **Jasmine Supper Club**
   - Tagline: *exploring food, memory, and migration*
   - Accent color matches current media-log teal (`#2D8A9E`).
2. **Letter excerpt** (short, from page 2 of the menu PDF)
   - 2–3 paragraph condensed version of the "Dear friends" letter, signed *— Jasmine*.
3. **Menu sections** — three headings: **To Start**, **Mains**, **Dessert**.
   - Each dish rendered as a card: **square dish photo** on one side, dish name + memory blurb on the other.
   - Alternating image/text sides on desktop; stacked on mobile.
   - Dishes:
     - To Start: Japanese-Peruvian Ceviche, Crab Rangoon Garlic Bread
     - Mains: Gochujang Carbonara, Tomato and Egg, Braised Pork Belly
     - Dessert: Black Sesame Tangyuan Cookie, Earl Grey Crème Brûlée, Filipino Mango Ice Box Cake
   - Blurb text taken verbatim from the menu PDF.
4. **Footer** — reuse `SiteFooter`.

No photo grid, no reflection, no prep/guests photos.

## Photos

Extract the 8 dish photos from `Photos_and_Reflections.pdf` (page 2 has the 5 savory dishes as a strip; page 3 has crème brûlée + mango float). Because they are combined page images, I'll crop the strip into individual square dish images with Python (Pillow) and upload each via `lovable-assets` so no binaries live in the repo. Tangyuan cookie has no photo in the PDF — that card will show a styled placeholder tile in the accent color (same treatment as existing `PolaroidCard` gradient) unless you'd rather I skip that dish visually.

Pointer files land at `src/assets/supper-club/<dish-slug>.jpg.asset.json` and are imported in the page component.

## Content data

Menu copy is small and page-specific, so I'll inline it as a typed array at the top of `JasmineSupperClub.tsx` rather than adding to `portfolio.ts`. Each entry: `{ slug, name, blurb, image }`.

## Files touched

- `src/App.tsx` — route rename + import new page.
- `src/pages/Home.tsx` — update "host dinners" link target.
- `src/components/SideNav.tsx` — update media-log link if present.
- `src/pages/JasmineSupperClub.tsx` — new file.
- `src/assets/supper-club/*.asset.json` — 7 new asset pointers.

## Open question (proceeding with default unless you say otherwise)

Tangyuan cookie has no photo in the PDF. Default: render a warm-accent placeholder tile so the layout stays consistent. Say the word if you'd rather omit the card or skip its image.
