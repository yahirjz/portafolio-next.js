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
        img: "/projects/inphera/overview.png",
        imageAlt: "Lista de partidos del día en Inphera, con su estado y si ya tienen análisis",
        imageContain: true,
        gallery: [
            "/projects/inphera/match-result.png",
            "/projects/inphera/line-probabilities.png",
            "/projects/inphera/match-stats.png"
        ],
        galleryAlts: [
            "Resultado de un partido en Inphera y si el pick oficial acertó",
            "Probabilidades por línea calculadas por el modelo, con el pick oficial marcado",
            "Estadísticas de un partido en Inphera: posesión, tiros, córners, faltas y tarjetas"
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
        metric: { value: "0", label: "transcripción manual entre Excel y Word" },
        result: "Eliminó la transcripción manual entre Excel y Word y la pérdida de datos que ocurría en ese proceso.",
        technical: "Formulario tipado con TypeScript y validación en tiempo real. Next.js + Supabase.",
        summary: "Plataforma que automatiza los reportes de cumplimiento TISAX, elimina la transcripción manual entre Excel y Word y valida los datos en tiempo real.",
        description: `
                La empresa manejaba **reportes de cumplimiento TISAX**, que requieren múltiples validaciones de seguridad y madurez y son críticos para las auditorías.

                El proceso manual era:

                1. Capturar los datos en Excel (niveles de madurez, puntos a validar)
                2. Transcribirlos a una plantilla de Word, yendo y viniendo entre los dos programas
                3. Repetirlo en cada reporte, con riesgo de perder datos en la transcripción
                4. Los mismos datos a veces quedaban distintos entre un reporte y otro

                Resultado: un proceso lento y difícil, en el que a veces se perdían datos.

                La solución fue una plataforma que automatiza todo el flujo: los datos se capturan una sola vez, se validan y el reporte se genera solo.

                - Formulario integrado que reemplaza el ir y venir entre Excel y Word
                - Datos guardados con tipos, sin inconsistencias entre reportes
                - Reportes generados automáticamente con el formato correcto
                - Validación en tiempo real con TypeScript para evitar datos mal capturados
                - Modelo relacional en PostgreSQL/Supabase con Row Level Security para proteger los datos de auditoría

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
    name: "Jair Rodríguez",
    role: "Full Stack Developer",
    location: "México",
    experience: "2+ años",
    cv: "/cv/Jaime_Jair_Rodriguez_CV_ES.pdf",

    social: {
        github: "https://github.com/yahirjz/",
        linkedin: "https://www.linkedin.com/in/jaime-jair-rodr%C3%ADguez-ju%C3%A1rez-82494b317/",
    },

    /** WhatsApp para el botón de contacto (formato internacional, sin "+"). */
    whatsapp: "522221602811",

    // <-- SOBRE MÍ
    about: {
        intro: "desarrollador Full Stack en México. Me interesa construir soluciones que automaticen procesos, aprovechen los datos y generen valor real. Estudio Ingeniería en Sistemas Computacionales y estudié la carrera de Ingeniería en Electrónica.",
        focus: [
            { icon: "code", label: "Desarrollo Full Stack" },
            { icon: "automation", label: "Automatización de procesos" },
            { icon: "data", label: "Aplicaciones con datos e IA" },
            { icon: "product", label: "Enfoque en producto" },
        ],
    },

    // <-- EXPERIENCIA
    career: {
        work: [
            {
                date: "jun 2026 — actual",
                title: "Inphera",
                org: "Fundador y desarrollador · Proyecto propio",
                detail: "Diseño y desarrollo de la plataforma completa: interfaz en Next.js, motor estadístico en FastAPI e integración con IA.",
                current: true,
            },
            {
                date: "feb 2026 — jun 2026",
                title: "MBQ Group Business Solutions",
                org: "Practicante de Desarrollo Full Stack · Remoto",
                detail: "Automaticé los reportes de cumplimiento TISAX y eliminé la transcripción manual entre Excel y Word.",
                current: false,
            },
        ],
        education: [
            { date: "en curso", title: "Ingeniería en Sistemas Computacionales", org: "Universidad UK" },
            { date: "2024", title: "Ingeniería en Electrónica", org: "ITSX" },
        ],
    },

    // <-- STACK (íconos: ver components/Stack.tsx)
    tech: {
        build: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "FastAPI", "Python", "PostgreSQL", "Supabase", "Vercel", "Docker", "Git"],
        learning: ["Java", "Spring Boot", "AWS"],
    },

    process: [
        { icon: "search", title: "Análisis y planificación" },
        { icon: "layers", title: "Diseño y arquitectura" },
        { icon: "code", title: "Desarrollo y validación" },
        { icon: "rocket", title: "Despliegue y evolución" },
    ],

    // Proyectos en construcción: se muestran sin página de detalle.
    // Si alguno todavía no arranca, bórralo de esta lista.
    upcoming: [
        {
            title: "JR ClientFlow",
            tag: "En desarrollo",
            summary: "Gestión de prospectos y seguimiento de clientes para pequeños negocios.",
            stack: ["Java", "Spring Boot", "Next.js"],
        },
    ],

    // <--- PROYECTOS (definidos arriba en `projects`)
    projects,
}
