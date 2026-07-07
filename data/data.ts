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
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
            gallery: [],
            title: "Football AI Analytics",
            description: "Plataforma de análisis de partidos de fútbol potenciada por Inteligencia Artificial. " +
                "Integra múltiples APIs deportivas para la recopilación de estadísticas y cuenta con un sistema de respaldo (fallback) que rastrea datos históricos si las APIs fallan, garantizando un flujo de datos ininterrumpido. " +
                "Arquitectura dividida: Servidor externo en Python diseñado específicamente para procesar y ejecutar análisis predictivos intensivos, enviando los resultados optimizados a la aplicación principal para no sobrecargar el modelo de IA base ni la UI de los usuarios. " +
                "Stack: Python · IA/Machine Learning · React · Arquitectura Distribuida · APIs REST",
            isPrivate: true
        },
        {
            slug: "social-app",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1774497463/Captura_de_pantalla_2026-03-25_a_la_s_9.57.30_p.m._nxqccf.png",
            gallery: [],
            title: "Social app",
            description: "Red social fullstack construida con React, TypeScript y Node.js + Express." +
                "Implementa autenticación JWT desde cero con bcryptjs para el manejo seguro de contraseñas, sistema de seguimiento entre usuarios y feed personalizado basado en las conexiones del usuario." +
                "El backend sigue arquitectura MVC con rutas protegidas mediante middleware de autenticación. La base de datos PostgreSQL es gestionada con Sequelize ORM con relaciones entre entidades." +
                "El frontend consume la API REST propia con axios, manejo de estado con React Hooks y navegación con React Router." +
                "Stack: React · TypeScript · Node.js · Express · PostgreSQL · Sequelize · JWT · Tailwind CSS",
            github: "https://github.com/yahirjz/social-app-frontend", 
            githubBackend: "https://github.com/yahirjz/social-app-backend", 
            live: "https://social-app-frontend-mocha.vercel.app/"
        },
        {
            slug: "crypto-dashboard",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1775230193/Captura_de_pantalla_2026-04-02_a_la_s_11.43.20_p.m._yxcsbt.png",
            gallery: [],
            title: "Dashboard de Análisis Crypto",
            description: "Panel interactivo de criptomonedas en tiempo real construido con React, TypeScript y FastAPI." +
                "Consume la API pública de CoinGecko para mostrar precios, tendencias y historial de mercado con visualizaciones dinámicas mediante Recharts." + 
                "El backend implementa un sistema de caché con SQLAlchemy para optimizar las peticiones y reducir la latencia." +
                "Incluye filtros por activo y rango de tiempo, tipado estricto en TypeScript y arquitectura limpia con separación de responsabilidades entre routers y services."+
                "Stack: React · TypeScript · FastAPI · SQLAlchemy · Recharts · Python",
            github: "https://github.com/yahirjz/crypto-dashboard-frontend", 
            githubBackend: "https://github.com/yahirjz/crypto-dashboard-backend", 
            live: "https://crypto-dashboard-frontend-tau.vercel.app/"
        },
        {
            slug: "portafolio-v1",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1775230193/Captura_de_pantalla_2026-04-02_a_la_s_11.52.24_p.m._bzzera.png",
            gallery: [],
            title: "Porfolio",
            description: "Plataforma web personal interactiva construida con Next.js 16, React 19 y TypeScript." + 
                "Diseñada con un enfoque moderno y responsivo utilizando Tailwind CSS v4 para una experiencia de usuario fluida." + 
                "Incluye una integración eficiente con la API de Resend para proveer un canal de contacto directo y confiable." +
                "Arquitectura basada en componentes reutilizables y tipado fuerte para asegurar escalabilidad." +
                "Stack: Next.js · React · TypeScript · Tailwind CSS · Resend.",
            github: "https://github.com/yahirjz/portafolio-next.js", 
            githubBackend: "", 
            live: ""
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