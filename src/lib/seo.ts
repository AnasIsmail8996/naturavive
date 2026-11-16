import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Live production domain (canonical source of truth) */
export const LIVE_DOMAIN = siteConfig.domain;

const title = "Coastal Vitality | Daily Wellness, Powered by Nature";

/** Short share-friendly description (WhatsApp / iMessage / Slack / Discord) */
const description =
  "Science-backed natural supplements for energy, immunity, gut health, and daily vitality. Feel your best, naturally.";

const ogSiteName = siteConfig.ogSiteName;

/** Absolute public OG image for link previews (1200x630) */
export const OG_IMAGE_URL = `${LIVE_DOMAIN}/og-image.jpg` as const;

const ogImage = {
  url: OG_IMAGE_URL,
  secureUrl: OG_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: "Coastal Vitality - Daily Wellness, Powered by Nature",
  type: "image/jpeg",
} as const;

export const seoConfig = {
  title,
  description,
  ogSiteName,
  keywords: [
    "Coastal Vitality",
    "natural supplements",
    "daily wellness",
    "gut health",
    "collagen",
    "greens immunity",
    "energy support",
    "science backed supplements",
    "coastalvitality.us",
  ],
} as const;

const iconMeta: Metadata["icons"] = {
  icon: [
    { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    { url: "/icon.png", type: "image/png", sizes: "512x512" },
  ],
  shortcut: [{ url: "/favicon.png", type: "image/png" }],
  apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
};

type PageMetaInput = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

function absoluteUrl(path: `/${string}` | "/"): string {
  return path === "/" ? `${LIVE_DOMAIN}/` : `${LIVE_DOMAIN}${path}`;
}

function resolveDocumentTitle(
  pageTitle: string,
  path: `/${string}` | "/",
  absoluteTitle?: boolean,
): Metadata["title"] {
  if (absoluteTitle || path === "/" || pageTitle.includes("|")) {
    return { absolute: pageTitle };
  }
  return pageTitle;
}

/** Shared metadata builder for landing and subpages */
export function buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  noIndex = false,
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(`${LIVE_DOMAIN}/`),
    title: resolveDocumentTitle(pageTitle, path, absoluteTitle),
    description: pageDescription,
    applicationName: ogSiteName,
    alternates: {
      canonical: url,
      languages: {
        en: url,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: ogSiteName,
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [OG_IMAGE_URL],
    },
    icons: iconMeta,
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(`${LIVE_DOMAIN}/`),
  title: {
    default: title,
    template: `%s | ${ogSiteName}`,
  },
  description,
  applicationName: ogSiteName,
  keywords: [...seoConfig.keywords],
  authors: [{ name: ogSiteName, url: LIVE_DOMAIN }],
  creator: ogSiteName,
  publisher: ogSiteName,
  category: "Lifestyle",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: `${LIVE_DOMAIN}/`,
    languages: {
      en: `${LIVE_DOMAIN}/`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${LIVE_DOMAIN}/`,
    siteName: ogSiteName,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: iconMeta,
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#1B4332",
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? {
          "google-site-verification":
            process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        }
      : {}),
  },
};
