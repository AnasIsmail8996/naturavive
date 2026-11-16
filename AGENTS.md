<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Naturavive — agent guide

**Purpose:** Fill brand → run `/think` → ship a fast, quality landing.

---

## Next time: copy-paste prompt

```text
/think fast landing

Brand: Naturavive
Domain: <https://...>
Asset pack: public/naturavive-assets/ (+ SECTION-GUIDE if any)
Reference: screenshots / Figma (section order below)

Build order (section by section):
1. Header + Hero
2. ...
N. Footer
Must ship: 404, scroll chrome, favicon, SEO, fast-loading
Follow: AGENTS.md + landing-known-issues.mdc + section-build-gate.mdc
Do not clone another landing layout unless design matches.
No em/en dashes in copy.
```

**Fix / polish prompt:**

```text
UI Fix: present image(s) = current; requirement image(s) = target.
Landing: <route> · Section: <name>
Keep structure; fix layout/copy/hover only. Mobile 320→1280+.
```

---

## Next time: git branches (must)

**Always work on `dev`.** Never day-to-day commit straight to `main`.

Flow every ship:

```text
1. git checkout dev                 # create from main if missing
2. do work + commit on dev
3. npm run build                    # production build must be green
4. git checkout main
5. git pull origin main
6. git merge dev
7. git push origin main             # only after build OK
8. git checkout dev
9. git merge main && git push origin dev
```

Rules:
- Coding / UI / fixes → **`dev`**
- Verified release → merge + push **`main`**
- After every main push → sync **`dev`** (do not leave `dev` stale)
- Do not push broken builds to `main`
- Never force-push `main` unless user explicitly asks

Full rule: `.cursor/rules/git-branch-workflow.mdc`

---

## Fast start (15 min bootstrap)

| Step | Do |
|------|-----|
| 1 | Fill `.cursor/rules/project.mdc` + `naturavive-brand.mdc` |
| 2 | Map assets → `@/config/brand` + `@/config/site` |
| 3 | Copy → `src/data/<page>.ts` (no em/en dashes) |
| 4 | Thin `src/app/<route>/page.tsx` + `components/<landing|home>/` |
| 5 | Skim `landing-known-issues.mdc` **before** coding sections |
| 6 | Build with `/think`; verify with `/exper` |
| 7 | Must: 404 · scroll chrome · favicon · SEO · fast loading · `npm run build` |

Setup detail: `docs/LANDING_PAGE_SETUP.md`

---

## Stack (approved)

Next.js App Router · React 19 · Tailwind v4 · Motion · Lucide · Swiper · GSAP (complex only) · react-hook-form · Playwright

Do **not** add MUI/Chakra/shadcn dumps unless asked. See `packages.mdc`.

CSS motion helpers live in `src/app/globals.css` (`nv-icon-spin`, `nv-btn-animate`, `nv-orbit-*`, `nv-marquee-track`, …).

---

## Where code goes

| Area | Path |
|------|------|
| Thin page | `src/app/<route>/page.tsx` |
| Sections | `src/components/home/` or `src/components/<landing>/` |
| Header / Footer | `src/components/layout/` |
| Brand / forms / ui / seo | `src/components/brand|forms|ui|seo/` |
| Copy | `src/data/` |
| Tokens | `src/config/brand.ts`, `site.ts` |
| SEO helpers | `src/lib/seo.ts` |
| 404 | `src/app/not-found.tsx` + `src/data/error.ts` |

`"use client"` only for nav, motion, Swiper, forms, measured UI.

---

## Rule index (open when needed)

| Need | File |
|------|------|
| Fast build | `/think` · `fast-landing.mdc` · `.cursor/skills/think/SKILL.md` |
| **Day-0 bootstrap** | **`landing-bootstrap.mdc`** |
| Avoid rework | **`landing-known-issues.mdc`** (read first) |
| Hydration / Image console | `hydration-safe.mdc` |
| Cutout / orbit scenes | `layered-scene.mdc` |
| Section ship | `section-build-gate.mdc` |
| Assets | `assets-workflow.mdc` |
| **Folder / component tree** | **`project-structure.mdc`** |
| Structure / mobile | `structure-components-responsive.mdc` · `section-responsive.mdc` · `ui-responsive.mdc` |
| Icons / hover / motion | `ui-controls.mdc` · `section-icons-motion.mdc` |
| Alignment | `section-alignment.mdc` |
| Header / nav mobile | `header-nav.mdc` |
| Design → code | `design-to-code.mdc` · `visual-fidelity.mdc` |
| Per-landing UI | `per-landing-ui.mdc` |
| Footer CTA anatomy | `footer-anatomy.mdc` |
| Nested glass panels | `nested-panels.mdc` |
| Master UI notes | `landing-page-ui.mdc` |
| Packages | `packages.mdc` |
| Copy punctuation | `copy-punctuation.mdc` |
| **404** | `error-page.mdc` |
| **Scroll chrome** | `scroll-chrome.mdc` |
| **Favicon** | `favicon-brand.mdc` (transparent) |
| **SEO** | `seo.mdc` |
| **Fast loading** | `fast-loading.mdc` |
| Complete / verify | `/exper` · `.cursor/skills/exper/SKILL.md` |
| Workflow | `agent-workflow.mdc` |
| **Git branches** | **`git-branch-workflow.mdc`** (dev → verify → main → sync dev) |
| Brand | `naturavive-brand.mdc` |

---

## Must (every landing)

1. Thin `page.tsx` + section components + data/config
2. Mobile-first **320 → 1280+**; no horizontal scroll
3. Icons + hover + `cursor-pointer` on interactive UI
4. Approved packages only
5. Per-landing UI may differ (do not force Home layout)
6. Themed **404** (`not-found.tsx` + `error.ts`)
7. **Scroll chrome:** scrollbar + `ScrollToTop` + fixed nav active bg after `scrollY > ~64`
8. Brand **favicon** (not Next default)
9. **SEO:** metadata + JSON-LD + robots + sitemap
10. **Fast loading:** hero LCP only, font swap, dynamic below-fold, AVIF/WebP
11. `npm run build` green before claiming done

---

## Skills

| Command | Use |
|---------|-----|
| `/think` | Fast build from screenshots / Figma (includes must ship list) |
| `/exper` | Complete / verify navbar → footer + 404 + chrome + SEO |

---

## Home section order

Header → Hero → About → (fill from design) → Footer

## Per landing page (must)

Each landing page can have a **different UI**. Build from that page’s design. See `.cursor/rules/per-landing-ui.mdc`.

## Copy

No em dash (`—`) or en dash (`–`). Use commas, periods, colons, or ` - `.

## Do not commit

`.env*`, `.next/`, Playwright reports, secrets, oversized duplicate media under `public/`.
