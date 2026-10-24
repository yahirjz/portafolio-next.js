import type { MetadataRoute } from "next";
import { getContent } from "@/data/content";
import { locales, paths } from "@/lib/i18n";
import { getPublicSiteUrl } from "@/lib/public-site-url";

const siteUrl = getPublicSiteUrl();

const languages = (build: (locale: (typeof locales)[number]) => string) =>
  Object.fromEntries(locales.map((l) => [l, `${siteUrl}${build(l)}`]));

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  const publicProjects = getContent("es").projects.filter((project) => !project.isPrivate);

  return locales.flatMap((locale) => [
    {
      url: `${siteUrl}${paths.home(locale)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: { languages: languages((l) => paths.home(l)) },
    },
    ...publicProjects.map((project) => ({
      url: `${siteUrl}${paths.project(locale, project.slug)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: languages((l) => paths.project(l, project.slug)) },
    })),
  ]);
}
