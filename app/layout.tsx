import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import { getPublicSiteUrl } from "@/lib/public-site-url";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

// Configure this in deployment so Next.js can generate absolute canonical URLs.
const siteUrl = getPublicSiteUrl();
const portfolioDescription =
  "Portafolio de Jaime Jair, desarrollador Full Stack en México. Desarrollo aplicaciones web que resuelven problemas reales de negocio con Next.js, TypeScript, Node.js y FastAPI.";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Jaime Jair | Desarrollador Full Stack",
    template: "%s | Jaime Jair",
  },
  description: portfolioDescription,
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "website",
    locale: "es_MX",
    title: "Jaime Jair | Desarrollador Full Stack",
    description: portfolioDescription,
    ...(siteUrl ? { url: "/" } : {}),
  },
  twitter: {
    card: "summary",
    title: "Jaime Jair | Desarrollador Full Stack",
    description: portfolioDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${dmSans.variable} ${jetbrains.variable} bg-cream font-sans text-ink antialiased selection:bg-terra-soft/60 selection:text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
