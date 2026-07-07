export const data = {
    name: "Jaime Jair",
    role: "Full stack Developer",
    about: "Soy desarrollador enfocado en el desarrollo web moderno. Me especializo en JavaScript y tecnologías como React, y actualmente estoy ampliando mis conocimientos hacia el backend con Node.js y bases de datos como MySQL. Me gusta aprender de forma práctica, construyendo proyectos propios y analizando ejemplos para entender cómo funcionan realmente las cosas. Disfruto mejorar constantemente mi código y aplicar buenas prácticas en cada proyecto que desarrollo. Actualmente estoy enfocado en fortalecer mi perfil como desarrollador full-stack, creando proyectos completos y preparándome para integrarme a un entorno profesional donde pueda seguir creciendo y aportando valor.",
    social: {
        github: "https://github.com/yahirjz/",
        linkedin: "https://www.linkedin.com/in/jaime-jair-rodriguez-juarez-82494b317/", // <-- falta completar
    },

    //<-- HABILIDADES 
    skills: {
        frontend: [
            { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/white" },
            { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/white" },
            { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/white" },
            { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/white" },
            { name: "React", logo: "https://cdn.simpleicons.org/react/white" },
            { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/white" }
        ],
        backend: [
            { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/white" },
            { name: "Express", logo: "https://cdn.simpleicons.org/express/white" },
            { name: "Python", logo: "https://cdn.simpleicons.org/python/white" },
            { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi/white" },
            { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/white" },
            { name: "Sequelize", logo: "https://cdn.simpleicons.org/sequelize/white" },
            { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/white" },
        ],
        herramientas: [
            { name: "Postman", logo: "https://cdn.simpleicons.org/postman/white" },
            { name: "Git", logo: "https://cdn.simpleicons.org/git/white" },
            { name: "GitHub", logo: "https://cdn.simpleicons.org/github/white" },
            { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" },
            { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/white" },
            { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/white" },
            { name: "Docker", logo: "https://cdn.simpleicons.org/docker/white" }
        ],
        cloud: [
            { name: "AWS", logo: "https://cdn.simpleicons.org/amazonaws/white" },
            { name: "DynamoDB", logo: "https://cdn.simpleicons.org/amazondynamodb/white" },
            { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/white" }
        ]
    },

    // <--- PROYECTOS   
    projects: [
        {
            slug: "football-ai-analytics",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.18_p.m._f8etcd.png",
            gallery: [
                "https://res.cloudinary.com/deyjebm1c/image/upload/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.30_p.m._d6dlzq.png",
                "https://res.cloudinary.com/deyjebm1c/image/upload/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.38_p.m._kd0vuo.png"
            ],
            title: "Football AI Analytics",
            description: "Plataforma de análisis de partidos de fútbol potenciada por Inteligencia Artificial. " +
                "Integra múltiples APIs deportivas para la recopilación de estadísticas y cuenta con un sistema de respaldo (fallback) que rastrea datos históricos si las APIs fallan, garantizando un flujo de datos ininterrumpido. " +
                "Arquitectura dividida: Servidor externo en Python diseñado específicamente para procesar y ejecutar análisis predictivos intensivos, enviando los resultados optimizados a la aplicación principal para no sobrecargar el modelo de IA base ni la UI de los usuarios. " +
                "Stack: Python · IA/Machine Learning · React · Arquitectura Distribuida · APIs REST",
            isPrivate: true
        },
        {
            slug: "reportes-tisax",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1776461350/Captura_de_pantalla_2026-04-17_a_la_s_3.10.17_p.m._zsuwkj.png",
            gallery: [],
            title: "Sistema de reportes TISAX",
            description: "Plataforma Integral de Reportes TISAX. " +
                "Proyecto final de carrera diseñado para resolver la eficiencia operativa mediante una arquitectura moderna. " +
                "Esta plataforma permite la gestión dinámica de información con una experiencia de usuario fluida y segura. " +
                "Destaca por su tipado fuerte en todo el flujo de datos y un diseño minimalista optimizado para dispositivos móviles y escritorio. " +
                "Stack: Next.js · React · TypeScript · Tailwind CSS · Supabase",
            github: "https://github.com/yahirjz/reportes", 
            githubBackend: "", 
            live: "https://reportes-ebon.vercel.app/"
        },
    ]
}