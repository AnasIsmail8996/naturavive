---
name: exper
description: >-
  Completes and verifies a landing page from navbar through footer. Use when the
  user runs /exper, asks to finish the landing page, or to verify brand assets,
  SEO, forms, and responsive home sections. Fill section checklist per project.
disable-model-invocation: true
---

# /exper — completed landing page

## Goal

Ship a complete, responsive home (or named landing) from navbar to footer using local assets, brand rules, and SEO.

## Checklist (run in order — edit sections per project)

```
Task Progress:
- [ ] 1. Assets under public/ path from naturavive-brand.mdc
- [ ] 2. Brand in @/config/brand · contact in @/config/site
- [ ] 3. Sections: Header → Hero → (project sections) → Footer
- [ ] 4. Favicon (src/app/icon.png)
- [ ] 5. SEO: @/lib/seo, JSON-LD, robots.ts, sitemap.ts
- [ ] 6. Forms: react-hook-form where needed
- [ ] 7. Responsive pass (320 → 1440+, no horizontal scroll)
- [ ] 8. CTAs: icons, hover, cursor-pointer; carousels touch-friendly
- [ ] 9. **404 must:** themed src/app/not-found.tsx + src/data/error.ts (error-page.mdc)
- [ ] 10. **Scroll chrome must:** themed scrollbar + ScrollToTop + sticky nav after scrollY>~64 (scroll-chrome.mdc)
- [ ] 11. **Favicon must:** brand logo icons; no Next default (favicon-brand.mdc)
- [ ] 12. **SEO must:** lib/seo + JsonLd + robots + sitemap (seo.mdc)
- [ ] 13. **Fast loading must:** hero LCP only, fonts swap, dynamic below-fold (fast-loading.mdc)
- [ ] 14. npm run build succeeds
```

## Source of truth

- Live / Figma / screenshots (see `naturavive-brand.mdc`)
- Config: `@/config/brand`, `@/config/site`
- Rules: `AGENTS.md`, `.cursor/rules/`

## Implementation map

| Piece | Path |
|-------|------|
| Page | `src/app/page.tsx` (or `src/app/<slug>/page.tsx`) |
| Header / Footer | `src/components/layout/` |
| Sections | `src/components/home/` or `src/components/<landing>/` |
| Forms | `src/components/forms/` |
| Copy | `src/data/home.ts` or `src/data/<landing>.ts` |
| SEO | `src/lib/seo.ts`, `src/components/seo/JsonLd.tsx` |
| **404 (must)** | `src/app/not-found.tsx` · `src/data/error.ts` · `error-page.mdc` |
| **SEO (must)** | `src/lib/seo.ts` · `src/components/seo/JsonLd.tsx` · `robots.ts` · `sitemap.ts` |
| **Favicon (must)** | `src/app/icon.png` · `public/favicon.png` |

## When invoked

1. Diff checklist vs repo
2. Fix missing sections, broken paths, overflow
3. Keep assets **local**
4. Report completed vs remaining

## Done means

Navbar → footer is brand-aligned, responsive, SEO-ready, and buildable. **Themed 404 is present.** **Scroll chrome** (scrollbar + scroll-to-top + sticky nav after hero) is present. **Brand favicon**, **SEO**, and **fast-loading** patterns are present. No desktop-only layout. No blank Next default error page.
