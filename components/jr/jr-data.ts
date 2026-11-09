import { data } from "@/data/data";

/** Datos de contacto confirmados para la tarjeta /jr. */
export const contact = {
  name: "Jair Rodríguez",
  role: "Software Engineer",
  email: "yahir.rod137@gmail.com",
  /** Número de trabajo, formato internacional sin "+" ni espacios, como lo pide wa.me. */
  whatsapp: "522283151037",
  site: "https://jaimejair.dev",
  github: data.social.github,
  linkedin: data.social.linkedin,
};

export const intro =
  "Transformo ideas en soluciones digitales, combinando desarrollo, IA y tecnología para resolver problemas reales.";

export const services: { icon: "code" | "ai" | "automation" | "integrations"; title: string; description: string }[] = [
  { icon: "code", title: "Desarrollo de software", description: "Aplicaciones web modernas, escalables y seguras." },
  { icon: "ai", title: "Inteligencia artificial", description: "Productos inteligentes y soluciones basadas en IA." },
  { icon: "automation", title: "Automatización", description: "Optimización de procesos y flujos de trabajo." },
  { icon: "integrations", title: "Arquitectura e integraciones", description: "APIs, bases de datos y sistemas a medida." },
];
