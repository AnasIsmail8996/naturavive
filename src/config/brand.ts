/** Brand paths under public/assets/naturavive */
export const ASSETS = "/assets/naturavive" as const;

export const brandAssets = {
  logoDark: `${ASSETS}/brand/naturavive-logo-horizontal-dark.webp`,
  logoLight: `${ASSETS}/brand/naturavive-logo-horizontal-light.webp`,
  logoMark: `${ASSETS}/brand/naturavive-logo-mark.webp`,
  favicon: "/favicon.png",
  appleIcon: "/apple-icon.png",
  /** 1200x630 social share preview (WhatsApp, iMessage, Slack, Discord, Facebook) */
  ogImage: "/og-image.jpg",


  /**
   * Hero scene from clear-images pack (stone podium + botanical frame).
   * Copied to hero/ with clean names for stable public URLs.
   */
  heroBackground: `${ASSETS}/hero/hero-section-bg.webp`,
  heroBackgrounds: [
    `${ASSETS}/hero/hero-section-bg.webp`,
    `${ASSETS}/hero/hero-background-01.webp`,
    `${ASSETS}/hero/hero-background-02.webp`,
  ] as const,
  heroBackgroundMobile: [
    `${ASSETS}/mobile/hero-background-mobile-01.webp`,
    `${ASSETS}/mobile/hero-background-mobile-02.webp`,
    `${ASSETS}/mobile/hero-background-mobile-03.webp`,
  ] as const,
  /** Clear product cluster (alpha cutout) for hero right / stone pedestal */
  heroProductCluster: `${ASSETS}/hero/hero-section-products.webp`,
  /** Prefer PNG for crisp alpha on the nature BG */
  heroProductClusterClear: `${ASSETS}/hero/hero-section-products.png`,
  heroScenePedestal: `${ASSETS}/hero/hero-scene-pedestal.jpg`,
  heroSceneStone: `${ASSETS}/hero/hero-scene-stone-slab.jpg`,

  /** Clear pack stone + botanical scene for Benefits ("Real benefits…") */
  benefitsBackground: `${ASSETS}/backgrounds/real-benefits-bg.webp`,
  benefitsBackgroundLegacy: `${ASSETS}/backgrounds/benefits-background.webp`,
  /** Clear pack botanical frame for Best Sellers */
  bestSellersBackground: `${ASSETS}/backgrounds/our-best-sellers-bg.webp`,
  bestSellersBackgroundLegacy: `${ASSETS}/backgrounds/best-sellers-background.webp`,
  botanicalLeft: `${ASSETS}/decorations/botanical-leaves-left.webp`,
  botanicalRight: `${ASSETS}/decorations/botanical-leaves-right.webp`,
  goldDivider: `${ASSETS}/decorations/gold-divider.svg`,
  sectionFrame: `${ASSETS}/backgrounds/section-frame-botanical.jpg`,

  /**
   * Pack transparent webps for product cards (match reference on light cards).
   * Clear studio PNGs (*-clear.png) keep black plates — use only on dark stages.
   */
  products: {
    dailyEssentials: `${ASSETS}/products/daily-essentials.webp`,
    gutBalance: `${ASSETS}/products/gut-balance-probiotic.webp`,
    collagenGlow: `${ASSETS}/products/collagen-glow.webp`,
    greensImmunity: `${ASSETS}/products/greens-immunity.webp`,
  },
  productsClear: {
    dailyEssentials: `${ASSETS}/products/daily-essentials-clear.png`,
    gutBalance: `${ASSETS}/products/gut-balance-probiotic-clear.png`,
    collagenGlow: `${ASSETS}/products/collagen-glow-clear.png`,
    greensImmunity: `${ASSETS}/products/greens-immunity-clear.png`,
  },

  /** Clear pack: stone + leaves scene for Ingredients section */
  ingredientsBackground: `${ASSETS}/ingredients/pure-ingredients-bg.webp`,
  /** Clear pack: ingredient cluster cutout (left visual) */
  ingredientsProducts: `${ASSETS}/ingredients/pure-ingredients-products.webp`,
  ingredientsTabletop: `${ASSETS}/ingredients/pure-ingredients-products.webp`,
  ingredientsTabletopClear: `${ASSETS}/ingredients/pure-ingredients-products.png`,
  ingredientsCopyBackground: `${ASSETS}/ingredients/pure-ingredients-bg.webp`,
  ingredientsTabletopLegacy: `${ASSETS}/ingredients/ingredients-tabletop.webp`,
  /** Clear pack: ingredient scene for Testimonials ("Real people…") */
  testimonialsBackground: `${ASSETS}/backgrounds/real-people-real-results-bg.webp`,
  testimonialsBackgroundLegacy: `${ASSETS}/backgrounds/testimonials-background.webp`,
  testimonials: {
    emily: `${ASSETS}/testimonials/emily-r-avatar.webp`,
    james: `${ASSETS}/testimonials/james-t-avatar.webp`,
    sarah: `${ASSETS}/testimonials/sarah-m-avatar.webp`,
  },

  /** Clear pack: woman left + bright right for Subscribe banner */
  subscribeBackground: `${ASSETS}/subscribe/consistent-wellness-bg.webp`,
  subscribeBackgroundLegacy: `${ASSETS}/subscribe/wellness-lifestyle-woman-clear.jpg`,
  subscribeLifestyle: `${ASSETS}/subscribe/wellness-lifestyle-woman.webp`,
  footerBackground: `${ASSETS}/backgrounds/footer-background.webp`,

  trust: {
    thirdParty: `${ASSETS}/trust/third-party-tested.svg`,
    nonGmo: `${ASSETS}/trust/non-gmo.svg`,
    gmp: `${ASSETS}/trust/gmp-certified.svg`,
    madeInUsa: `${ASSETS}/trust/made-in-usa-flag.svg`,
  },

  icons: {
    search: `${ASSETS}/icons/search.svg`,
    user: `${ASSETS}/icons/user.svg`,
    cart: `${ASSETS}/icons/cart.svg`,
    menu: `${ASSETS}/icons/menu.svg`,
    leaf: `${ASSETS}/icons/leaf.svg`,
    arrowRight: `${ASSETS}/icons/arrow-right.svg`,
    star: `${ASSETS}/icons/star.svg`,
    flask: `${ASSETS}/icons/flask.svg`,
    check: `${ASSETS}/icons/check.svg`,
    beauty: `${ASSETS}/icons/beauty.svg`,
    energy: `${ASSETS}/icons/energy-support.svg`,
    gut: `${ASSETS}/icons/gut-health.svg`,
    immunity: `${ASSETS}/icons/immunity.svg`,
    tag: `${ASSETS}/icons/tag.svg`,
    truck: `${ASSETS}/icons/truck.svg`,
    calendar: `${ASSETS}/icons/calendar.svg`,
    refresh: `${ASSETS}/icons/refresh.svg`,
    instagram: `${ASSETS}/icons/instagram.svg`,
    facebook: `${ASSETS}/icons/facebook.svg`,
    youtube: `${ASSETS}/icons/youtube.svg`,
    pinterest: `${ASSETS}/icons/pinterest.svg`,
  },
} as const;

export const brandTokens = {
  primary: "#1B4332",
  primaryMid: "#2D5A3D",
  primaryDark: "#122A20",
  leaf: "#3D6B4F",
  accent: "#B88916",
  ink: "#1A1A1A",
  muted: "#5C5C5C",
  paper: "#FFFFFF",
  paperSoft: "#F7F5F0",
} as const;
