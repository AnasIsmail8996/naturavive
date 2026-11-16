export const siteConfig = {
  name: "Coastal Vitality",
  shortName: "Coastal Vitality",
  /** Open Graph / social share site_name */
  ogSiteName: "Coastal Vitality",
  /**
   * GoDaddy Node.js app domain (this Next.js site).
   * Keep WordPress on coastalvitality.us separate - do not point that host here.
   */
  domain: "https://coastalvitalitys.com",
  phone: {
    display: "",
    href: "tel:",
  },
  email: {
    display: "hello@coastalvitalitys.com",
    href: "mailto:hello@coastalvitalitys.com",
  },
  emails: {
    info: "hello@coastalvitalitys.com",
  },
  contactEmails: [
    {
      label: "Hello",
      display: "hello@coastalvitalitys.com",
      href: "mailto:hello@coastalvitalitys.com",
    },
  ],
  address: {
    label: "Location",
    street: "",
    cityLine: "",
  },
  tagline: "Daily Wellness. Powered by Nature.",
  social: {
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    pinterest: "https://www.pinterest.com/",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
] as const;
