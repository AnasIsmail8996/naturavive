# Source layout (Next.js App Router)

```
src/
  app/                    # layout, page, globals, icon, robots, sitemap
  components/
    brand/                # BrandLogo / NavbarLogo / FooterLogo
    home/                 # Hero and other Home sections
    layout/               # Header, Footer
    seo/                  # JSON-LD
    ui/                   # ButtonLink, ScrollToTop, SectionSkeleton, …
    forms/                # react-hook-form
  config/                 # site, brand
  data/                   # home copy bundles
  lib/                    # seo metadata helpers
  hooks/                  # usePrefersReducedMotion, etc.
public/
  assets/naturavive/      # brand, hero, products, icons, …
  favicon.png
.cursor/
  rules/                  # agent project rules (incl. fast-landing)
  skills/
    think/                # /think fast landing pages
    exper/                # /exper home landing complete
```

## Where code goes

| Folder | Put here | Avoid |
|--------|----------|--------|
| `components/home/` | Landing sections | Config / secrets |
| `data/` | Static marketing copy | Secrets |
| `config/` | Brand paths, nav, contact | Large JSX |
| `app/` | Metadata, thin composition | Section markup dumps |

Import via `@/` alias.

## Agent rules

**Must:** folder structure · component-based UI · mobile-first · animations/hover/icons/badges · approved packages · fast landings via `/think`  
(`.cursor/rules/structure-components-responsive.mdc`, `ui-responsive.mdc`, `ui-controls.mdc`, `packages.mdc`, `fast-landing.mdc`, `per-landing-ui.mdc`).

Also: `design-to-code`, `visual-fidelity`, `agent-workflow`.  
Skills: `/think` (fast any landing), `/exper` (Home complete).  
Flow: section image/Figma → correct folders → components → motion/icons → responsive → build.
