## Music for Games page

Replace the current `/music` route (which uses generic `CategoryPage`) with a dedicated page modeled after the singing page.

### Route
- In `src/App.tsx`, change `/music` to render new `<MusicForGames />` instead of `<CategoryPage category="music" ... />`. Leave `/music/:slug` detail route as-is.

### Assets to upload
Steam header images → Lovable Assets:
- `Sorelle.jpeg`, `check_it_out.jpeg`, `equinox.jpeg`, `Sinking_Inn.jpeg` → `src/assets/*.asset.json`

Sinking Inn MP3s → Lovable Assets:
- `Dark_Waters.mp3`, `The_Deep_End.mp3`, `The_Shallow_End.mp3`, `underwater_exploration.mp3`, `Returning_Home.mp3` → `src/assets/*.asset.json`

### New file: `src/pages/MusicForGames.tsx`
Same header/back-arrow/padding pattern as `ACappella.tsx`. Title "Music for Games" in `#E8687B`.

Four game sections. Each section: two-column grid (`lg:grid-cols-5`, left `col-span-2`, right `col-span-3`, `gap-8`, stacking on mobile).

**Left column (all four):** Steam header image, game name (h2), synopsis paragraph, and a "Play the game!" / "Download the game!" link to Steam.

**Right column:**
- **Sorelle** — 2 responsive 16:9 YouTube iframes (`HFQ8h0Fu4yQ`, `VAGBZJB5JoQ`), stacked.
- **Check it Out** — 1 YouTube iframe (`BIOUK3mxIHU`).
- **Equinox** — 2 YouTube iframes (`h8s-j_0GXSk`, `lfRgeg3e2gA`), stacked.
- **Sinking Inn** — custom layout matching the reference image:
  1. `Dark Waters` audio player (single, full width of the right column area — top row).
  2. Short blurb (no "The Idea" heading): "Entering the pool transports you to another dimension. The tracks *The Deep End*/*The Shallow End* and *Underwater Exploration*/*Returning Home* are parallel tracks, meaning they have the same motifs and melodies but with different instrumentation to denote the environment change."
  3. 2×2 grid of audio players, paired horizontally so parallel tracks sit next to each other:
     - Row 1: `The Deep End` | `Underwater Exploration`
     - Row 2: `The Shallow End` | `Returning Home`

Audio player: dark rounded card (`bg-neutral-900 text-neutral-100 rounded-md p-4 flex items-center gap-4`) containing a native `<audio controls>` element plus track title + "Jasmine Liao" label, styled to loosely evoke the reference screenshot.

Includes `<SiteFooter />` at bottom.

### Not touched
Other pages, `/music/:slug` detail route, and any shared `music` category data remain unchanged.
