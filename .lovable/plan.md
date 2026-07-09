Fix the sidebar top padding on work (item detail) pages so the flower icon and "Jasmine Liao" text align vertically with the home page and other sub-pages.

**Current state:**
- `ItemDetail.tsx` (work pages): sidebar uses `p-6 lg:p-8` with no responsive top padding, so the flower/name sit too high/too low compared to the rest of the site.
- `Home.tsx`: sidebar uses `pt-16 md:pt-20 lg:p-8 lg:pt-24`
- `NowPlaying.tsx`: sidebar uses `pt-16 md:pt-20 lg:pt-24` (matches home)
- Other sub-pages (`CategoryPage.tsx`, `MusicForGames.tsx`, `JasmineSupperClub.tsx`, `ACappella.tsx`): sidebar uses `pt-12 lg:pt-20`

**Plan:**
1. Update `src/pages/ItemDetail.tsx` — change the sidebar class from `p-6 lg:p-8` to `p-6 pt-16 md:pt-20 lg:p-8 lg:pt-24` to match the home page sidebar vertical positioning.
2. Optionally verify visually that the flower + name on a work page (e.g. `/work/duolingo`) now aligns with the home page sidebar.