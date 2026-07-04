## Summary
Apply brand-specific hover colors to PM project links, recolor About tool badges with a cycling accent palette, and add progressive color cycling to the homepage hero inline links.

## Plan

### 1. Work Project Hover Colors (Duolingo / Loop / PayPal)
- In `src/pages/Home.tsx`, add hover-specific color styles to each project title link in the Work list.
- On hover, the project title shifts to its brand color:
  - Duolingo: `#58CC02` (vibrant green)
  - Loop: `#DF7FB9` (pink)
  - PayPal: `#003087` (PayPal blue)
- Keep the existing underline/decoration behavior; only the text color changes on hover.

### 2. About Section Tool Badges
- Update the beige `tool-badge` style in `src/index.css` to use a rotating palette of soft accent colors drawn from the inspiration image palette.
- Assign each tool badge a different background color cycling through: coral `#E85D3A`, teal `#2D8A9E`, butter `#F3D68A`, lilac `#C9A0DC`, mint `#A8D5BA`, peach `#F4A261`, sky `#7DD3FC`.
- Keep text dark for readability against the lighter tints.

### 3. Hero Inline Link Color Cycling
- In `src/pages/Home.tsx`, replace the uniform `inline-link` class on the hero sentence links with individual color-specific classes.
- Assign each link a color from a repeating sequence: coral `#E85D3A`, teal `#2D8A9E`, butter `#F3D68A`, lilac `#C9A0DC`, mint `#A8D5BA`.
- Preserve existing hover underline behavior; swap only the default text/underline color per link.

### 4. CSS Updates
- Add the brand colors and cycling palette as utility-friendly custom properties or inline style support in `src/index.css`.
- Do not change the global `--primary` sage green.

## Files to modify
- `src/pages/Home.tsx`
- `src/index.css`

## Out of scope
- Dark-mode variants for new colors (will inherit current dark-mode logic)
- Fridge Board accent colors or fridge-mode styling
- Photography grid or other category pages