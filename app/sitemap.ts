import type { MetadataRoute } from "next";
import { data } from "@/data/data";

function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl);
      if (url.protocol === "https:") return url.origin;
    } catch {
      // An invalid deployment URL must not be emitted to crawlers.
    }
  }

  return process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined;
}

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...data.projects
      .filter((project) => !project.isPrivate)
      .map((project) => ({
        url: `${siteUrl}/proyecto/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
  ];
}
