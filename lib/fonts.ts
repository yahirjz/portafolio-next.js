import { JetBrains_Mono, Manrope, Sora } from "next/font/google";

// Sora: títulos. Manrope: textos e interfaz.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

export const fontVariables = `${sora.variable} ${manrope.variable} ${jetbrains.variable}`;
