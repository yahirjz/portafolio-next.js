import SiteLayout, { siteMetadata, siteViewport } from "@/components/SiteLayout";
import "../globals.css";

export const metadata = siteMetadata("en");
export const viewport = siteViewport;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
