import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { getPublicSiteUrl } from "@/lib/public-site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// Configure this in deployment so Next.js can generate absolute canonical URLs.
const siteUrl = getPublicSiteUrl();
const portfolioDescription =
  "Portafolio de Jaime Jair, desarrollador Full Stack especializado en APIs, microservicios, inteligencia artificial y experiencias web escalables para startups.";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-dark-bg text-slate-50 font-sans selection:bg-brand-500/30 selection:text-brand-200`}
      >
        {children}
      </body>
    </html>
  );
}
