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
        title: "Jair Rodríguez | Desarrollador Full Stack",
        description:
            "Portafolio de Jair Rodríguez, desarrollador Full Stack en México. Desarrollo aplicaciones web que resuelven problemas reales de negocio con Next.js, TypeScript, Node.js y FastAPI.",
    },
    skipLink: "Saltar al contenido principal",
    ids: { home: "inicio", about: "sobre-mi", projects: "proyectos", experience: "experiencia", process: "como-trabajamos", stack: "stack", contact: "contacto" },
    nav: { label: "Principal", home: "Inicio", projects: "Proyectos", experience: "Experiencia", about: "Sobre mí", contact: "Contacto", menu: "Abrir menú", close: "Cerrar menú" },
    switchLabel: "Cambiar idioma",
    hero: {
        badge: "Full Stack Developer · Disponible",
        titleStart: "Desarrollo productos web que resuelven",
        titleHighlight: "problemas reales.",
        subtitle: "Ingeniería de software, automatización y aplicaciones con datos e IA.",
        ctaProjects: "Ver proyectos",
        ctaCv: "Descargar CV",
        diagram: {
            label: "Áreas en las que trabajo",
            frontend: "Frontend",
            backend: "Backend",
            data: "Base de datos",
            api: "API",
        },
    },
    about: {
        eyebrow: "Sobre mí",
        title: "Ingeniería, producto y tecnología",
        intro: "Soy",
    },
    projects: {
        eyebrow: "Proyectos",
        title: "Proyectos destacados",
        caseStudy: "Ver caso de estudio",
        inDevelopment: "En desarrollo",
    },
    experience: {
        eyebrow: "Experiencia",
        title: "Trayectoria",
        work: "Trabajo",
        education: "Formación",
    },
    process: {
        eyebrow: "Mi forma de trabajar",
        title: "De la idea al producto.",
        intro: "Un proceso estructurado para desarrollar soluciones tecnológicas con enfoque en calidad y resultados.",
    },
    stack: {
        eyebrow: "Stack y herramientas",
        title: "Tecnologías que utilizo",
        build: "Con las que construyo",
        learning: "Aprendiendo ahora",
    },
    contact: {
        eyebrow: "Contacto",
        title: "Platiquemos",
        intro: "Te respondo con una propuesta clara. Trabajo remoto desde México (UTC-6).",
        whatsapp: "WhatsApp",
        cv: "Descargar CV",
        reasonLegend: "¿Qué te trae por aquí?",
        reasons: { proyecto: "Tengo un proyecto", vacante: "Tengo una vacante", saludo: "Solo saludar" },
        name: "Nombre",
        namePlaceholder: "¿Cómo te llamas?",
        email: "Correo",
        emailPlaceholder: "tu@correo.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame qué necesitas resolver…",
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
        evidenceNote: "Capturas de la beta: el resultado de un partido con su pick oficial, las probabilidades por línea que calcula el modelo y las estadísticas del partido.",
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
        title: "Jair Rodríguez | Full Stack Developer",
        description:
            "Portfolio of Jair Rodríguez, a Full Stack developer based in Mexico. I build web applications that solve real business problems with Next.js, TypeScript, Node.js and FastAPI.",
    },
    skipLink: "Skip to main content",
    ids: { home: "home", about: "about", projects: "projects", experience: "experience", process: "how-we-work", stack: "stack", contact: "contact" },
    nav: { label: "Main", home: "Home", projects: "Projects", experience: "Experience", about: "About", contact: "Contact", menu: "Open menu", close: "Close menu" },
    switchLabel: "Change language",
    hero: {
        badge: "Full Stack Developer · Available",
        titleStart: "I build web products that solve",
        titleHighlight: "real problems.",
        subtitle: "Software engineering, automation and applications powered by data and AI.",
        ctaProjects: "See projects",
        ctaCv: "Download résumé",
        diagram: {
            label: "Areas I work in",
            frontend: "Frontend",
            backend: "Backend",
            data: "Database",
            api: "API",
        },
    },
    about: {
        eyebrow: "About me",
        title: "Engineering, product and technology",
        intro: "I'm",
    },
    projects: {
        eyebrow: "Projects",
        title: "Featured projects",
        caseStudy: "Read the case study",
        inDevelopment: "In development",
    },
    experience: {
        eyebrow: "Experience",
        title: "Background",
        work: "Work",
        education: "Education",
    },
    process: {
        eyebrow: "How I work",
        title: "From idea to product.",
        intro: "A structured process to build technology solutions focused on quality and results.",
    },
    stack: {
        eyebrow: "Stack and tools",
        title: "Technologies I use",
        build: "What I build with",
        learning: "Learning now",
    },
    contact: {
        eyebrow: "Contact",
        title: "Let's talk",
        intro: "I'll get back to you with a clear proposal. Working remotely from Mexico (UTC-6).",
        whatsapp: "WhatsApp",
        cv: "Download résumé",
        reasonLegend: "What brings you here?",
        reasons: { proyecto: "I have a project", vacante: "I'm hiring", saludo: "Just saying hi" },
        name: "Name",
        namePlaceholder: "What's your name?",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me what you need to solve…",
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
        evidenceNote: "Screenshots from the beta: a match result with its official pick, the per-line probabilities calculated by the model, and the match statistics.",
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
