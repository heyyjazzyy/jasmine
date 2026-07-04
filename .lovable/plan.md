Adjust the 'In my free time' paragraph in the main content area so it sits at the bottom of the first section column, vertically aligned (inline) with the sidebar navigation links (About / Work / Contact).

Currently the sidebar uses `flex flex-col justify-between` inside a `min-h-[70vh]` grid cell, which pins the nav links to the bottom of the left column. The main content column flows naturally from the top, so the 'In my free time' paragraph sits much higher than the nav.

**Change:**
- In `src/pages/Home.tsx`, wrap or modify the `<section id="free-time">` so it pushes to the bottom of its flex parent (e.g. `mt-auto`), aligning it horizontally with the sidebar nav links while keeping it inside the first content section.

This is a single layout/CSS tweak with no structural or data changes.