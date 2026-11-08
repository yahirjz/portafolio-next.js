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
  { title: "Desarrollo Web", description: "Apps modernas, escalables y seguras.", accent: "turquesa" },
  { title: "Inteligencia Artificial", description: "Soluciones inteligentes con IA.", accent: "turquesa" },
  { title: "Sistemas a Medida", description: "Plataformas y herramientas para tu negocio.", accent: "ambar" },
  { title: "Automatización", description: "Optimización de procesos y tareas repetitivas.", accent: "ambar" },
  { title: "APIs e Integraciones", description: "Conexión con servicios y datos externos.", accent: "turquesa" },
];
