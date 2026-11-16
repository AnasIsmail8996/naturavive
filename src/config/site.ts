export const siteConfig = {
  name: "Coastal Vitality",
  shortName: "Coastal Vitality",
  /** Open Graph / social share site_name */
  ogSiteName: "Coastal Vitality",
  /** Live production site */
  domain: "https://coastalvitality.us",
  phone: {
    display: "",
    href: "tel:",
  },
  email: {
    display: "hello@coastalvitality.us",
    href: "mailto:hello@coastalvitality.us",
  },
  emails: {
    info: "hello@coastalvitality.us",
  },
  contactEmails: [
    {
      label: "Hello",
      display: "hello@coastalvitality.us",
      href: "mailto:hello@coastalvitality.us",
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
