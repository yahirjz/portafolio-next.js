export type Project = {
    slug: string;
    img: string;
    imageAlt: string;
    imageContain: boolean;
    gallery: string[];
    galleryAlts: string[];
    galleryContain: boolean;
    title: string;
    tag: string;
    result: string;
    technical: string;
    summary: string;
    description: string;
    featured?: boolean;
    metric?: { value: string; label: string };
    live?: string;
    github?: string;
    githubBackend?: string;
    isPrivate?: boolean;
};

const projects: Project[] = [

    // PROYECTO DE ANALISIS DE PARTIDOS 
    {
        slug: "inphera",
        img: "/projects/sportixa/overview.png",
        imageAlt: "Vista general del panel de análisis de Inphera",
        imageContain: true,
        gallery: [
            "/projects/sportixa/analysis-context.png",
            "/projects/sportixa/recommended-markets.png",
            "/projects/sportixa/overview2.png"
        ],
        galleryAlts: [
            "Análisis contextual de un partido presentado en Inphera",
            "Mercados recomendados y probabilidades en Inphera",
            "Vista general adicional del panel de Inphera"
        ],
        galleryContain: true,
        title: "Inphera",
        tag: "Proyecto principal · Beta privada",
        result: "Reúne forma reciente, estadísticas y contexto de un partido en un solo lugar, con análisis trazable.",
        technical: "Modelo de Poisson + Claude API para el análisis, y un filtro determinista que solo muestra mercados con probabilidad ≥ 65%.",
        featured: true,
        live: "https://www.inphera.com.mx",
        summary: "Beta privada para revisar probabilidades matemáticas y contexto de partidos de fútbol con guardrails visibles.",
        description: `
            **El problema**

            Analizar un partido exige contrastar forma reciente, estadísticas y contexto en fuentes separadas. Inphera reúne esas señales en una sola experiencia para que la persona usuaria pueda revisarlas con trazabilidad, sin presentar el análisis como una certeza.

            **Flujo actual de la persona usuaria**

            1. Selecciona un partido disponible.
            2. Revisa los promedios directos de los últimos encuentros y el contexto de ambos equipos.
            3. Consulta las probabilidades por mercado y distingue cuáles superaron el filtro de recomendación.
            4. Lee una síntesis contextual y conserva el criterio final sobre cómo interpretar los datos.

            **Metodología actual**

            - Los promedios de los últimos partidos son una agregación directa del historial disponible.
            - Poisson es el modelo matemático de probabilidad usado para estimar distintos mercados.
            - La auto-calibración ajusta pesos con una heurística basada en resultados observados; no es un modelo de machine learning entrenado.

            **Análisis estructurado con Claude**

            - Claude recibe estadísticas, contexto y señales matemáticas ya calculadas para producir un análisis estructurado.
            - Dentro de esa estructura emite mercados candidatos, probabilidades candidatas y razones. Estas salidas están condicionadas por el contexto suministrado, pero todavía no son recomendaciones visibles.

            **Guardrails deterministas**

            - Después del análisis estructurado, filterRecommendedBets aplica un post-filtro y deja pasar a la interfaz de recomendados únicamente los candidatos con probabilidad mayor o igual a 65%.
            - Claude no puede saltarse esa comparación determinista. El umbral controla la presentación, pero no garantiza aciertos ni elimina la incertidumbre del deporte.

            **Rol y stack**

            - Claude sintetiza el contexto recibido y genera candidatos estructurados; el código de la aplicación decide cuáles se presentan finalmente como recomendados.
            - La experiencia conecta una interfaz en Next.js con un motor matemático en FastAPI, datos persistidos en Supabase y la salida estructurada de Claude.

            **Estado actual: beta privada**

            Inphera está en desarrollo y se prueba con acceso limitado. Sus resultados son informativos y experimentales: no son asesoría financiera ni una promesa de resultados.

            **Hoja de ruta de ML**

            El aprendizaje supervisado es trabajo futuro. Solo se evaluará cuando exista un volumen suficiente de datos históricos etiquetados para entrenar, validar y comparar modelos de forma responsable.

            Stack: Next.js · React · TypeScript · FastAPI · Python · Supabase · Claude API
            `,
        isPrivate: true
    },

    // PROJECTO DE REPORTES TIXAS
    {
        slug: "reportes-tisax",
        img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1776461350/Captura_de_pantalla_2026-04-17_a_la_s_3.10.17_p.m._zsuwkj.png",
        imageAlt: "Vista del sistema de reportes TISAX",
        imageContain: false,
        gallery: [],
        galleryAlts: [],
        galleryContain: false,
        title: "Sistema de reportes TISAX",
        tag: "Caso de estudio",
        metric: { value: "30 → 2 min", label: "por reporte" },
        result: "Reemplazó el copiado manual de Excel a Word por reportes automáticos, sin errores de captura.",
        technical: "Formulario tipado con TypeScript y validación en tiempo real. Next.js + Supabase.",
        summary: "Plataforma que automatiza reportes TISAX, reemplaza el copiado manual y valida los datos en tiempo real.",
        description: 
            `
                La empresa manejaba **reportes TISAX complejos** que requerían múltiples validaciones 
                de seguridad y maduración. Estos reportes son críticos para auditoría.
                
                El proceso manual era:

                1. Completar datos en Excel (números de maduración, puntos a validar)
                2. Copiaban manualmente a plantilla en Word
                3. Alto riesgo de errores humanos: tipográficos, números incorrectos, inconsistencias
                4. Inconsistencias, los mismos datos podian verse diferente entre reportes

                Resultado: Cada reporte tomaba 30+ minutos tenía riesgo de fallos.

                La solucion fue construí una plataforma que automatizara el proceso con un flujo completo para el mejoramiento de los reportes. Genarando mas reportes en el mismo tiempo que se gueneraba antes 1 solo.
                
                - Formulario integrado (reemplaza Excel + Word)
                - Datos se guardan tipados (zero inconsistencias)
                - Reportes se generan automáticamente con formato correcto
                - TypeScript ensures que números y textos no pueden ser mal ingresados

                - ⏱️ Tiempo reporte: 30 min → 2 min (93% más rápido)
                - ✅ Errores humanos: Eliminados (validación en tiempo real)
                - 🎯 Confiabilidad: 100% (sin copiar/pegar manual)

                Stack: Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel


            `,
        github: "https://github.com/yahirjz/reportes", 
        githubBackend: "", 
        live: "https://reportes-ebon.vercel.app/"
    },
    ];

// Contenido en español. La versión en inglés vive en data.en.ts y debe
// mantener la misma forma (TypeScript avisa si falta algo).
export const data = {
    name: "Jaime Jair",
    role: "Full Stack Developer",
    location: "México",
    experience: "2+ años",
    cv: "/cv/Jaime_Jair_Rodriguez_CV_ES.pdf",

    social: {
        github: "https://github.com/yahirjz/",
        linkedin: "https://www.linkedin.com/in/jaime-jair-rodriguez-juarez-82494b317/",
    },

    // <-- STACK (se muestra como un package.json)
    stack: [
        { key: "frontend", label: "Frontend", detail: "interfaces rápidas y tipadas", color: "#93C5FD", items: ["next", "react", "typescript", "tailwind"] },
        { key: "backend", label: "Backend", detail: "APIs y lógica de negocio, mi fuerte", color: "#FDBA74", items: ["node", "express", "fastapi", "python", "java", "claude-api"] },
        { key: "datos", label: "Datos", detail: "modelado relacional y documental", color: "#86EFAC", items: ["postgresql", "supabase", "mongodb"] },
        { key: "deploy", label: "Deploy", detail: "proyectos en línea, no solo en local", color: "#F9A8D4", items: ["vercel", "railway", "docker", "git"] },
    ],
    learning: ["aws", "ia"],

    // <-- SERVICIOS (cada uno apunta a un proyecto que sirve de referencia)
    services: [
        {
            icon: "app",
            title: "Aplicaciones web a medida",
            description: "Plataformas, paneles y sistemas internos, desde la base de datos hasta el deploy.",
            referenceLabel: "Lo he hecho en",
            reference: "Inphera",
            slug: "inphera",
        },
        {
            icon: "automation",
            title: "Automatización de procesos",
            description: "Convierto tareas manuales y repetitivas, como pasar datos de Excel a reportes, en flujos automáticos.",
            referenceLabel: "Lo he hecho en",
            reference: "Reportes TISAX",
            slug: "reportes-tisax",
        },
        {
            icon: "calendar",
            title: "Reservas y citas para negocios",
            description: "Agenda en línea que administras desde el celular, con confirmación por WhatsApp para tus clientes.",
            referenceLabel: "Lo estoy construyendo en",
            reference: "Sistema de citas",
            slug: null,
        },
    ],

    process: [
        { hash: "e1a2f03", title: "Platicamos", detail: "Me cuentas tu problema y qué quieres lograr." },
        { hash: "9b4c7d1", title: "Propuesta", detail: "Te entrego alcance, tiempos y costo por escrito." },
        { hash: "4f8e2a6", title: "Desarrollo", detail: "Avances que puedes probar, no solo promesas." },
        { hash: "HEAD", title: "Entrega y soporte", detail: "Lo dejo funcionando en línea y te acompaño después." },
    ],

    // Proyectos en construcción: se muestran en la portada sin página de detalle.
    // Si alguno todavía no arranca, bórralo de esta lista.
    upcoming: [
        {
            title: "Sistema de reservas de citas",
            tag: "En desarrollo · Java",
            result: "Cualquier negocio administra servicios y horarios desde el celular; sus clientes reservan por WhatsApp sin instalar nada.",
            technical: "Buffer time por servicio y magic link por WhatsApp para confirmar o reagendar.",
        },
    ],

    // <--- PROYECTOS (definidos arriba en `projects`)
    projects,
}
