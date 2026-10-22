import { siteConfig } from "@/config/site";
import { brandAssets } from "@/config/brand";
import { LIVE_DOMAIN, seoConfig } from "@/lib/seo";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${LIVE_DOMAIN}/#org`,
        name: siteConfig.name,
        legalName: siteConfig.shortName,
        url: `${LIVE_DOMAIN}/`,
        logo: {
          "@type": "ImageObject",
          url: `${LIVE_DOMAIN}${brandAssets.logoMark}`,
        },
        description: seoConfig.description,
        email: siteConfig.email.display || undefined,
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
          siteConfig.social.youtube,
          siteConfig.social.pinterest,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${LIVE_DOMAIN}/#website`,
        url: `${LIVE_DOMAIN}/`,
        name: siteConfig.ogSiteName,
        publisher: { "@id": `${LIVE_DOMAIN}/#org` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
