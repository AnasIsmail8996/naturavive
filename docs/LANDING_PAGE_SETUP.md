# Landing Page UI Setup

## Reusable pack (any landing)

Yeh instructions pack **kisi bhi Next.js landing** ke liye hai. Brand / layout alag ho sakte hain; rules (structure, mobile, icons, known issues) same rehti hain.

1. Is repo se (ya `landing-page-instructions` se) pack copy karo
2. `project.mdc` + `naturavive-brand.mdc` fill karo
3. Naya landing: thin `app/<route>/page.tsx` + `components/<landing>/` + `data/<landing>.ts`
4. Start: open **`AGENTS.md`** → copy **Next time prompt** → `/think`
5. First hour: follow **`landing-bootstrap.mdc`**
6. Before sections: skim `landing-known-issues.mdc` + `header-nav.mdc` + `hydration-safe.mdc`

Detail: `AGENTS.md` (Fast start + rule index).

## 1. Pack already in this repo

```text
AGENTS.md
.cursor/rules/          # includes git-branch-workflow.mdc
.cursor/skills/think + exper
docs/LANDING_PAGE_SETUP.md
src/app/globals.css     # nv-* animation utilities
```

Fill `.cursor/rules/project.mdc` and `.cursor/rules/naturavive-brand.mdc`.

## 2. Install dependencies

Core (typical):

```bash
npm install motion lucide-react swiper gsap @gsap/react react-hook-form
```

Optional (only when needed):

```bash
npm install clsx tailwind-merge zod @hookform/resolvers
npm install -D @playwright/test
```

Recommended `react-hook-form` range:

```json
"react-hook-form": "^7.62.0"
```

Do not install UI kits (MUI, Chakra, shadcn dump) unless the user asks.

## 3. Folder structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    robots.ts
    sitemap.ts
  components/
    layout/       # Header, Footer
    home/         # or <landing>/
    brand/
    forms/
    ui/
    seo/
  data/
  config/         # site.ts, brand.ts
  lib/            # seo.ts, utils
public/
  naturavive-assets/   # logos, photos, icons
  videos/              # optional
e2e/              # Playwright (optional)
```

CSS animations: use classes in `src/app/globals.css` (`nv-icon-spin`, `nv-btn-animate`, `nv-orbit-*`, `nv-marquee-track`, `animate-border-draw`, ...).

New landing route:

```text
src/app/<slug>/page.tsx
src/components/<slug>/
src/data/<slug>.ts
```

## 4. Workflow

1. Provide Figma, screenshots, assets, copy, and style when available.
2. Name the landing + section order; define tokens in `globals.css` / `brand.ts`.
3. Build reusable components navbar → footer (`/think`).
4. Add restrained Motion, card hover, reduced-motion support.
5. Validate forms, responsive, images, a11y, lint, build (`/exper`).

## 5. Done when

- [ ] Thin `page.tsx` + section components
- [ ] Mobile-first 320 → 1440+, no horizontal scroll
- [ ] Icons + hover + `cursor-pointer`
- [ ] Brand tokens/paths from config
- [ ] **404 must:** themed `src/app/not-found.tsx` + `src/data/error.ts` (`error-page.mdc`)
- [ ] **Scroll chrome must:** themed scrollbar + scroll-to-top + sticky nav after `scrollY > ~64` (`scroll-chrome.mdc` · `header-nav.mdc`)
- [ ] **Favicon must:** brand `icon.png` / `favicon.png` (`favicon-brand.mdc`)
- [ ] **SEO must:** `lib/seo` + JSON-LD + robots + sitemap (`seo.mdc`)
- [ ] **Fast loading must:** LCP + fonts + dynamic sections (`fast-loading.mdc`)
- [ ] `npm run lint` and `npm run build` succeed
