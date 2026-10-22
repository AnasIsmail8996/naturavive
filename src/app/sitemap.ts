import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const base = siteConfig.domain;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
