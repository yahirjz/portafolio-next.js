import type { MetadataRoute } from "next";
import { data } from "@/data/data";

// NEXT_PUBLIC_SITE_URL must be set in deployment. Localhost is used only for
// development metadata routes when a public deployment URL is unavailable.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
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
