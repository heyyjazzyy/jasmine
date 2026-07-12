## Revamp: Jasmine Supper Club page

Full restructure of `src/pages/JasmineSupperClub.tsx`. Same header/sidebar/footer chrome; new body.

### New content structure

1. **Intro paragraph** (replaces the current two-paragraph letter):
   > My love language is making elaborate meals nobody asked for, insisting that it's not my best work, then staring at you until you tell me it's the best thing you've ever eaten. Welcome to Jasmine Supper Club, serving up childhood nostalgia, comfort classics, and culinary experiments straight from my dreams.

2. **Three menu sections**, each with a medium-large heading (`display-heading`, teal accent) + theme subtitle, a simple dish list, and one illustration. Alternating layout:

   - **Supper Club 1 — Fusion** *(illustration right)*
     - Japanese-Peruvian Ceviche
     - Gochujang Carbonara
     - Earl Grey Crème Brûlée
     - Image: `JSC1.PNG`

   - **Supper Club 2 — Hometown Classics** *(illustration left)*
     - Cucumber Salad
     - Crab Rangoon Garlic Bread
     - Tomato and Egg
     - Braised Pork Belly
     - Filipino Mango Ice Box Cake
     - Image: `JSC2.PNG`

   - **Supper Club 3 — New Faves** *(illustration right)*
     - Whipped Ricotta with Homemade Focaccia
     - Rigatoni alla Vodka
     - Ina Garten's Brownie Pudding
     - Image: `JSC3.PNG`

   `md:grid-cols-2` two-column layout; stacks image-above-text on mobile; image order swapped per section.

3. **Video section** at the bottom — heading "Desserts", inline `autoplay muted loop playsinline` `<video>` from the uploaded `.MOV`, **rotated 90° clockwise** so it plays in the correct orientation. Rounded, max-width contained.

### Removed
- Existing "To Start / Mains / Desserts" menu with per-dish blurbs
- Existing Photos grid (savory / sweet / prep) and their asset imports
- Original two-paragraph letter

### Assets to add
- `src/assets/supper-club/jsc-1-fusion.png.asset.json` ← `JSC1.PNG`
- `src/assets/supper-club/jsc-2-classics.png.asset.json` ← `JSC2.PNG`
- `src/assets/supper-club/jsc-3-new-faves.png.asset.json` ← `JSC3.PNG`
- `src/assets/supper-club/desserts.mp4.asset.json` ← ffmpeg-converted mp4 (h264 + aac stripped) from uploaded `.MOV` for cross-browser playback

### Technical notes
- Video rotation: apply via `ffmpeg -vf "transpose=1"` at encode time (baked into the file) rather than CSS transform — avoids layout math issues with a rotated element inside a normal flex/grid box. The output mp4 renders upright.
- Keep `useImagesLoaded` gate updated to the 3 new illustration URLs.
- Keep teal `ACCENT` (#2D8A9E), display font, and existing sidebar/back-to-home patterns unchanged.
- Section theme labels use existing ui-caps style; section titles use `display-heading`.
