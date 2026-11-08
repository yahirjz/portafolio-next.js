import { data } from "@/data/data";

export type Accent = "turquesa" | "ambar";

/** Datos de contacto confirmados para la tarjeta /jr. */
export const contact = {
  name: "Jair Rodríguez",
  role: "Software Engineer",
  email: "yahir.rod137@gmail.com",
  /** Formato internacional sin "+" ni espacios, como lo pide wa.me. */
  whatsapp: "522283151037",
  site: "https://jaimejair.dev",
  github: data.social.github,
  linkedin: data.social.linkedin,
};

export const services: { title: string; description: string; accent: Accent }[] = [
  { title: "Desarrollo de software", description: "Aplicaciones y plataformas a medida.", accent: "turquesa" },
  { title: "Mejora de procesos", description: "Soluciones digitales más eficientes.", accent: "ambar" },
  { title: "Inteligencia Artificial", description: "Herramientas inteligentes para la toma de decisiones.", accent: "turquesa" },
  { title: "Automatización de tareas", description: "Conecta y optimiza tus sistemas.", accent: "ambar" },
];
