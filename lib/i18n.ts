export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];

/** Rutas de cada idioma: el español vive en la raíz y el inglés en /en. */
export const paths = {
    home: (locale: Locale) => (locale === "en" ? "/en" : "/"),
    project: (locale: Locale, slug: string) => (locale === "en" ? `/en/project/${slug}` : `/proyecto/${slug}`),
};

/** Devuelve la misma página en el otro idioma (para el botón ES/EN). */
export function alternatePath(pathname: string, target: Locale): string {
    const enProject = pathname.match(/^\/en\/project\/([^/]+)/);
    const esProject = pathname.match(/^\/proyecto\/([^/]+)/);
    const slug = enProject?.[1] ?? esProject?.[1];
    return slug ? paths.project(target, slug) : paths.home(target);
}

const es = {
    htmlLang: "es-MX",
    ogLocale: "es_MX",
    meta: {
        title: "Jaime Jair | Desarrollador Full Stack",
        description:
            "Portafolio de Jaime Jair, desarrollador Full Stack en México. Desarrollo aplicaciones web que resuelven problemas reales de negocio con Next.js, TypeScript, Node.js y FastAPI.",
    },
    skipLink: "Saltar al contenido principal",
    ids: { projects: "proyectos", services: "servicios", stack: "stack", contact: "contacto" },
    nav: { label: "Principal", projects: "Proyectos", services: "Servicios", stack: "Stack", contact: "Contacto" },
    switchLabel: "Cambiar idioma",
    hero: {
        badge: "Disponible para proyectos y empleo remoto",
        titleStart: "Desarrollo aplicaciones web que resuelven",
        titleHighlight: "problemas reales",
        titleEnd: "de negocio.",
        intro: (name: string) =>
            `Soy ${name}, desarrollador full stack en México. Construyo con Next.js, TypeScript, Node.js y FastAPI, desde la base de datos hasta el deploy.`,
        ctaProjects: "Ver proyectos",
        ctaContact: "Hablemos de tu proyecto",
        code: { role: "rol", roleValue: "Fullstack dev", base: "base", experience: "experiencia", building: "construyendo", open: "abierto" },
        badgeBeta: "Inphera · en beta",
    },
    dividers: {
        projects: { label: "Inicio de proyectos", target: "proyectos" },
        services: { label: "Inicio de servicios", target: "proyectos → servicios" },
        contact: { label: "Inicio de contacto", target: "tu-proyecto" },
    },
    projects: {
        eyebrow: "01 — Proyectos",
        title: "Lo que he construido",
        result: "Resultado:",
        technical: "Técnico:",
        caseStudy: "Ver caso de estudio →",
        visit: "Visitar inphera.com.mx ↗",
    },
    services: {
        eyebrow: "02 — Servicios",
        title: "Cómo puedo ayudarte",
        processTitle: "Así trabajamos juntos",
    },
    stack: {
        eyebrow: "03 — Stack",
        title: "Si fuera un paquete de npm…",
        intro: "…estas serían mis dependencias. Las herramientas con las que construyo, del frontend al deploy.",
        experienceKey: "experiencia",
        learningKey: "aprendiendo",
        installed: (n: number) => `added ${n} skills, found 0 vulnerabilities`,
    },
    contact: {
        eyebrow: "04 — Contacto",
        title: "¿Tienes un proyecto o una vacante? Platiquemos.",
        intro: "Cuéntame qué necesitas y te respondo con una propuesta clara. Trabajo remoto desde México (UTC-6).",
        cv: "Descargar CV",
        reasonLegend: "¿Qué te trae por aquí?",
        reasons: { proyecto: "Tengo un proyecto", vacante: "Tengo una vacante", saludo: "Solo saludar" },
        name: "Nombre",
        namePlaceholder: "¿Cómo te llamas?",
        email: "Correo",
        emailPlaceholder: "tu@correo.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame qué necesitas resolver…",
        commitHint: '$ git commit -m "hola"',
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "¡Mensaje enviado! Te respondo pronto.",
        errorInvalid: "No fue posible enviar el mensaje. Revisa los datos e inténtalo de nuevo.",
        errorNetwork: "No fue posible enviar el mensaje. Inténtalo de nuevo más tarde.",
    },
    detail: {
        back: "Volver al portafolio",
        privateBadge: "Beta privada · En desarrollo",
        viewProject: "Ver proyecto",
        viewCode: "Ver código",
        about: "Acerca del proyecto",
        gallery: "Galería de imágenes",
        evidence: "Evidencia visual disponible",
        evidenceNote: "Esta vista documenta el análisis contextual. Solo se publica evidencia compatible con el guardrail vigente de 65% para mercados recomendados.",
        notFound: "Proyecto no encontrado",
        privateMetaSuffix: "Caso de estudio de una beta privada en desarrollo; su contenido es informativo y no constituye asesoría financiera.",
        pipelineEyebrow: "Pipeline actual",
        pipelineTitle: "De candidatos estructurados a recomendaciones",
        pipelineIntro: "Claude propone candidatos dentro del contexto suministrado. El código aplica después el umbral que decide qué llega a la interfaz de recomendados.",
        pipelineSequence: "Secuencia de recomendación",
        pipelineLimitLabel: "Límite explícito:",
        pipelineLimit: "un candidato emitido por Claude no aparece como mercado recomendado si su probabilidad no alcanza 65%.",
        flow: [
            { label: "Entradas estadísticas y matemáticas", detail: "Promedios directos, Poisson y calibración heurística forman el contexto" },
            { label: "Análisis estructurado con Claude", detail: "Emite mercados, probabilidades y razones candidatas, condicionadas por las entradas recibidas" },
            { label: "Post-filtro determinista ≥65%", detail: "filterRecommendedBets evalúa cada candidato después de Claude" },
            { label: "UI de mercados recomendados", detail: "La interfaz presenta solo candidatos que superan el post-filtro" },
        ],
        responsibleTitle: "Beta privada · Uso responsable",
        responsibleText: "Producto experimental en desarrollo. Las probabilidades y explicaciones ayudan a revisar información; no garantizan resultados, no son asesoría financiera y siempre deben interpretarse con criterio propio.",
    },
};

export type Dictionary = typeof es;

const en: Dictionary = {
    htmlLang: "en",
    ogLocale: "en_US",
    meta: {
        title: "Jaime Jair | Full Stack Developer",
        description:
            "Portfolio of Jaime Jair, a Full Stack developer based in Mexico. I build web applications that solve real business problems with Next.js, TypeScript, Node.js and FastAPI.",
    },
    skipLink: "Skip to main content",
    ids: { projects: "projects", services: "services", stack: "stack", contact: "contact" },
    nav: { label: "Main", projects: "Projects", services: "Services", stack: "Stack", contact: "Contact" },
    switchLabel: "Change language",
    hero: {
        badge: "Available for freelance projects and remote roles",
        titleStart: "I build web applications that solve",
        titleHighlight: "real business",
        titleEnd: "problems.",
        intro: (name: string) =>
            `I'm ${name}, a full stack developer based in Mexico. I build with Next.js, TypeScript, Node.js and FastAPI, from the database to the deploy.`,
        ctaProjects: "See projects",
        ctaContact: "Let's talk about your project",
        code: { role: "role", roleValue: "Fullstack dev", base: "location", experience: "experience", building: "building", open: "openToWork" },
        badgeBeta: "Inphera · in beta",
    },
    dividers: {
        projects: { label: "Projects section", target: "projects" },
        services: { label: "Services section", target: "projects → services" },
        contact: { label: "Contact section", target: "your-project" },
    },
    projects: {
        eyebrow: "01 — Projects",
        title: "What I've built",
        result: "Result:",
        technical: "Technical:",
        caseStudy: "Read the case study →",
        visit: "Visit inphera.com.mx ↗",
    },
    services: {
        eyebrow: "02 — Services",
        title: "How I can help",
        processTitle: "How we'll work together",
    },
    stack: {
        eyebrow: "03 — Stack",
        title: "If I were an npm package…",
        intro: "…these would be my dependencies. The tools I build with, from frontend to deploy.",
        experienceKey: "experience",
        learningKey: "learning",
        installed: (n: number) => `added ${n} skills, found 0 vulnerabilities`,
    },
    contact: {
        eyebrow: "04 — Contact",
        title: "Have a project or an open role? Let's talk.",
        intro: "Tell me what you need and I'll get back to you with a clear proposal. Working remotely from Mexico (UTC-6).",
        cv: "Download résumé",
        reasonLegend: "What brings you here?",
        reasons: { proyecto: "I have a project", vacante: "I'm hiring", saludo: "Just saying hi" },
        name: "Name",
        namePlaceholder: "What's your name?",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me what you need to solve…",
        commitHint: '$ git commit -m "hello"',
        send: "Send message",
        sending: "Sending…",
        success: "Message sent! I'll get back to you soon.",
        errorInvalid: "Your message couldn't be sent. Please check your details and try again.",
        errorNetwork: "Your message couldn't be sent. Please try again later.",
    },
    detail: {
        back: "Back to portfolio",
        privateBadge: "Private beta · In development",
        viewProject: "View project",
        viewCode: "View code",
        about: "About the project",
        gallery: "Image gallery",
        evidence: "Available visual evidence",
        evidenceNote: "These views document the contextual analysis. Only evidence consistent with the current 65% guardrail for recommended markets is published.",
        notFound: "Project not found",
        privateMetaSuffix: "Case study of a private beta in development; its content is informational and is not financial advice.",
        pipelineEyebrow: "Current pipeline",
        pipelineTitle: "From structured candidates to recommendations",
        pipelineIntro: "Claude proposes candidates within the context it receives. The code then applies the threshold that decides what reaches the recommendations UI.",
        pipelineSequence: "Recommendation sequence",
        pipelineLimitLabel: "Explicit limit:",
        pipelineLimit: "a candidate produced by Claude is not shown as a recommended market if its probability is below 65%.",
        flow: [
            { label: "Statistical and mathematical inputs", detail: "Direct averages, Poisson and heuristic calibration form the context" },
            { label: "Structured analysis with Claude", detail: "Produces candidate markets, probabilities and reasons, conditioned on the inputs it receives" },
            { label: "Deterministic post-filter ≥65%", detail: "filterRecommendedBets evaluates each candidate after Claude" },
            { label: "Recommended markets UI", detail: "The interface shows only candidates that pass the post-filter" },
        ],
        responsibleTitle: "Private beta · Responsible use",
        responsibleText: "Experimental product in development. Probabilities and explanations help you review information; they don't guarantee outcomes, aren't financial advice and should always be interpreted with your own judgment.",
    },
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };
export const getDictionary = (locale: Locale) => dictionaries[locale];
