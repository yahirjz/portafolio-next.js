import type { Metadata, Viewport } from "next";
import JrCard from "@/components/jr/JrCard";

const title = "Jair Rodríguez · Software Engineer";
const description = "Desarrollo soluciones digitales que resuelven necesidades reales de negocio.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/jr" },
  openGraph: { type: "profile", title, description, url: "/jr" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#0E0E0E" };

export default function JrPage() {
  return <JrCard />;
}
