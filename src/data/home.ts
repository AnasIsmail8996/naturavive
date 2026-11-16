/** Home landing copy - no em/en dashes */

export const heroContent = {
  eyebrow: "Natural ingredients. Brighter days.",
  titleLead: "Daily Wellness,",
  titleAccent: "Powered by Nature.",
  /** Full title kept for a11y / SEO contexts */
  title: "Daily Wellness, Powered by Nature.",
  subtitle:
    "Science-backed supplements to support your energy, immunity, gut health, and daily vitality - so you can feel your best, naturally.",
  primaryCta: { label: "Shop Best Sellers", href: "/#products" },
  secondaryCta: { label: "Take the Wellness Quiz", href: "/#quiz" },
  productAlt:
    "Coastal Vitality Daily Essentials, Collagen Glow, Gut Balance Probiotic, and Greens + Immunity on a stone ledge",
  trustChips: [
    "Natural Ingredients",
    "Science Backed",
    "A Healthier, Happier You",
  ],
} as const;

export const trustContent = {
  items: [
    { id: "tested", icon: "thirdParty", label: "Third-Party Tested" },
    { id: "nongmo", icon: "nonGmo", label: "Non-GMO" },
    { id: "gmp", icon: "gmp", label: "GMP Certified" },
    { id: "usa", icon: "madeInUsa", label: "Made in USA" },
  ],
} as const;

export const benefitsContent = {
  eyebrow: "Real benefits. A brighter you.",
  title: "Wellness Support for Every Day of Life.",
  items: [
    {
      id: "energy",
      icon: "energy",
      title: "Energy Support",
      body: "Feel naturally energized and focused throughout your day.",
    },
    {
      id: "gut",
      icon: "gut",
      title: "Gut Health",
      body: "Support digestive balance, nutrient absorption and a happier gut.",
    },
    {
      id: "immunity",
      icon: "immunity",
      title: "Immunity",
      body: "Help your body stay strong with powerful, natural defense.",
    },
    {
      id: "beauty",
      icon: "beauty",
      title: "Beauty From Within",
      body: "Nourish your skin, hair and nails with science-backed nutrients.",
    },
  ],
} as const;

export const bestSellersContent = {
  eyebrow: "Customer favorites",
  title: "Our Best Sellers",
  subtitle:
    "Premium, science-backed formulas made with the finest natural ingredients to help you look, feel and live better every day.",
  shopAll: { label: "Shop All Products", href: "/#products" },
  ctaLabel: "Buy Now",
  products: [
    {
      id: "daily-essentials",
      imageKey: "dailyEssentials",
      name: "Daily Essentials",
      benefit: "Energy · Immunity · Focus",
      rating: 4.8,
      reviews: "2.4K",
      price: "$34.99",
    },
    {
      id: "gut-balance",
      imageKey: "gutBalance",
      name: "Gut Balance Probiotic",
      benefit: "Digestive & Immune Support",
      rating: 4.7,
      reviews: "1.9K",
      price: "$32.99",
    },
    {
      id: "collagen-glow",
      imageKey: "collagenGlow",
      name: "Collagen Glow",
      benefit: "Skin · Hair · Nails",
      rating: 4.8,
      reviews: "3.1K",
      price: "$36.99",
    },
    {
      id: "greens-immunity",
      imageKey: "greensImmunity",
      name: "Greens + Immunity",
      benefit: "Superfood Blend",
      rating: 4.7,
      reviews: "2.8K",
      price: "$39.99",
    },
  ],
} as const;

export const ingredientsContent = {
  eyebrow: "Powered by nature. Proven by science.",
  titleLead: "Pure Ingredients for a",
  titleAccent: "Healthier, Happier You.",
  body: "We combine time-honored botanicals with modern science to create high-quality supplements that support your whole body wellness - naturally.",
  imageAlt:
    "Natural ingredients including turmeric, berries, kale, botanicals, and capsules on a stone tabletop",
  points: [
    {
      id: "natural",
      icon: "leaf",
      label: "Premium natural ingredients",
    },
    {
      id: "science",
      icon: "flask",
      label: "Science-backed formulations",
    },
    {
      id: "clean",
      icon: "ban",
      label: "No artificial fillers or additives",
    },
    {
      id: "sourced",
      icon: "sprout",
      label: "Thoughtfully sourced for purity and potency",
    },
  ],
} as const;

export const testimonialsContent = {
  eyebrow: "Real people. Real results.",
  titleLead: "What Our Customers",
  titleAccent: "Are Saying",
  subtitle:
    "Thousands of people are choosing Coastal Vitality to feel healthier, more energized, and more like themselves - naturally.",
  verifiedLabel: "Verified Buyer",
  items: [
    {
      id: "emily",
      avatarKey: "emily",
      name: "Emily R.",
      rating: 5,
      quote:
        "Coastal Vitality has completely changed my daily routine. I have more energy, a happier gut, and I feel so much more like myself.",
    },
    {
      id: "james",
      avatarKey: "james",
      name: "James T.",
      rating: 5,
      quote:
        "The quality is outstanding. I feel stronger, sleep better, and my digestion has improved so much. Coastal Vitality is now a staple in my wellness routine.",
    },
    {
      id: "sarah",
      avatarKey: "sarah",
      name: "Sarah M.",
      rating: 5,
      quote:
        "I love that these supplements are clean, natural and actually work. My immunity is better, I feel more vibrant, and I love that it's made with ingredients I can trust.",
    },
  ],
} as const;

export const subscribeContent = {
  eyebrow: "Consistent wellness. More savings.",
  titleLead: "Subscribe & Save",
  titleAccent: "20%",
  body: "Get your favorite supplements delivered automatically, save 20%, and never run out of the wellness you love.",
  cta: { label: "Start Subscribing", href: "/#products" },
  imageAlt: "Woman enjoying outdoor sunlight in a calm wellness moment",
  perks: [
    { id: "save", icon: "tag", label: "Save 20% on every order" },
    { id: "ship", icon: "truck", label: "Free shipping" },
    { id: "flex", icon: "calendar", label: "Flexible delivery schedule" },
    { id: "cancel", icon: "refresh", label: "Cancel anytime" },
  ],
} as const;
