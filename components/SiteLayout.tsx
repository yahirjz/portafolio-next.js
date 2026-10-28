import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { getPublicSiteUrl } from "@/lib/public-site-url";
import { getDictionary, locales, paths, type Locale } from "@/lib/i18n";

// Configure this in deployment so Next.js can generate absolute canonical URLs.
const siteUrl = getPublicSiteUrl();

export function siteMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: {
      default: t.meta.title,
      template: "%s | Jaime Jair",
    },
    description: t.meta.description,
    ...(siteUrl
      ? {
          alternates: {
            canonical: paths.home(locale),
            languages: Object.fromEntries(locales.map((l) => [l, paths.home(l)])),
          },
        }
      : {}),
    openGraph: {
      type: "website",
      locale: t.ogLocale,
      title: t.meta.title,
      description: t.meta.description,
      ...(siteUrl ? { url: paths.home(locale) } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#faf7f2",
};

/** Estructura <html> compartida: cada idioma tiene su propio layout raíz con el lang correcto. */
export default function SiteLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={getDictionary(locale).htmlLang} className="scroll-smooth">
      <body className={`${fontVariables} bg-cream font-sans text-ink antialiased selection:bg-terra-soft/60 selection:text-ink`}>
        {children}
      </body>
    </html>
  );
}
