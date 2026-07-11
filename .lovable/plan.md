## Plan: Tablet/mobile treatment for Work images

On viewports below `lg`, render each project's hover image directly above its title in the Work list (always visible, no hover). Desktop behavior (hover cross-fade to the right) stays unchanged.

### Changes in `src/pages/Home.tsx`
- Inside each `pmProjects.map` `<li>`, add an `<img>` above the title link:
  - Class: `lg:hidden w-full max-w-[280px] h-auto object-contain mb-3`
  - `src` from `workHoverImages[p.slug]`, `alt=""`
- Keep the existing desktop hover preview block (`hidden lg:block ...`) unchanged.
- Keep list spacing (`space-y-6`) — the image sits inside the same `<li>` so vertical rhythm stays consistent.

No changes to data, routes, or the desktop layout.
