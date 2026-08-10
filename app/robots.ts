import type { MetadataRoute } from "next";

// NEXT_PUBLIC_SITE_URL must be set in deployment. Localhost is used only for
// development metadata routes when a public deployment URL is unavailable.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
