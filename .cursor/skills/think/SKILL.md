---
name: think
description: >-
  Fast-builds landing pages (any route) A-Z from screenshots or Figma using
  component folders, mobile-first UI, Motion/icons/badges, and approved packages.
  Use when the user runs /think, asks for a fast landing page, new route landing,
  or rapid section-by-section UI from images.
disable-model-invocation: true
---

# /think — fast landing pages

## Goal

Ship landings **fast** without cutting quality: folders, components, mobile-first, icons/hover, brand tokens, must-ship chrome, build green.

## When invoked

1. Name **landing + route**; UI may differ from Home (`per-landing-ui`)
2. Run **`landing-bootstrap.mdc`** (next.config qualities, shell stubs, transparent favicon)
3. Confirm brand tokens / asset pack (`project.mdc`, `brand.mdc`)
4. **Skim** `landing-known-issues.mdc` + `header-nav.mdc` + `hydration-safe.mdc`
5. Collect screenshots/Figma; if user sends present vs requirement, label each
6. Implement **one section at a time**; run `section-build-gate` before next
7. Cutout scenes → `layered-scene.mdc`
8. Short report: done vs remaining + checklist

## Fast checklist

```
Task Progress:
- [ ] 1. Landing + route; thin page.tsx
- [ ] 2. Bootstrap: next.config qualities, Header/Footer stubs
- [ ] 3. Folders: components/<landing|home|layout|forms|ui>/ + data/ + config/
- [ ] 4. brand.ts / site.ts paths; sample logo/bg pixels if needed
- [ ] 5. Header (header-nav.mdc) + Hero first
- [ ] 6. Remaining sections one file each; reuse ui/*
- [ ] 7. Mobile 320 → 1280+; no horizontal scroll; compact cards
- [ ] 8. Icons + hover + cursor-pointer; Motion/Swiper/forms as needed
- [ ] 9. Eyebrows + scroll-mt; layered bg; hydration-safe clients
- [ ] 10. 404 must (error-page.mdc)
- [ ] 11. Scroll chrome must (scrollY > 64 sticky bg)
- [ ] 12. Favicon must (transparent pad)
- [ ] 13. SEO must (metadata + JSON-LD + robots + sitemap)
- [ ] 14. Fast loading must (LCP / fonts / dynamic below-fold)
- [ ] 15. npm run build green; no Image quality / hydration console spam
```

## Speed rules

- Prefer `ui/*` primitives; Motion over GSAP for simple UI; Swiper for carousels
- Forms: `react-hook-form` in `@/components/forms/`
- Copy in `src/data/<landing>.ts`; no em/en dashes
- Mobile header: logo + hamburger only; portal menu; no `100vw`
- Hero CTAs: `z-30`; Swiper fade must not steal clicks
- Section intros: render eyebrow + flex-1 line when designed
- Opaque grey plates → reject; transparent cutouts preferred
- Do not force Home layout onto other landings
- If comparing worktrees/ports: apply the worktree that matches the **good** preview URL

## Map

| Piece | Path |
|-------|------|
| Page | `src/app/page.tsx` or `src/app/<slug>/page.tsx` |
| Sections | `src/components/home/*` or `src/components/<slug>/` |
| Shell | `src/components/layout/*` |
| Copy | `src/data/home.ts` or `src/data/<slug>.ts` |
| Brand | `src/config/brand.ts`, `site.ts` |
| 404 | `src/app/not-found.tsx`, `src/data/error.ts` |

## Done means

Component-based, mobile-safe, interactive, brand-safe, must-ship list complete, `npm run build` passes. No god `page.tsx`.
