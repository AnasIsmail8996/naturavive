export const siteConfig = {
  name: "NaturaVive",
  shortName: "NaturaVive",
  /** Open Graph / social share site_name */
  ogSiteName: "NaturaVive",
  /** Live production site */
  domain: "https://coastalvitality.us",
  phone: {
    display: "",
    href: "tel:",
  },
  email: {
    display: "hello@naturavive.com",
    href: "mailto:hello@naturavive.com",
  },
  emails: {
    info: "hello@naturavive.com",
  },
  contactEmails: [
    {
      label: "Hello",
      display: "hello@naturavive.com",
      href: "mailto:hello@naturavive.com",
    },
  ],
  address: {
    label: "Location",
    street: "",
    cityLine: "",
  },
  tagline: "A Healthier, Happier You. Naturally.",
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
