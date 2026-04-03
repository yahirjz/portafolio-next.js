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
            { name: "HTML", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"},
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  },
            {name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"},
            {name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
        ],
        
        backend: [
            { name: "Node.js", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"},
            { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},
            { name: "Python", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
            { name: "FatAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"},
            { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
            { name: "Sequelize", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg"},
        ],
        
        herramientas: [
            {name: "Postman", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"},
            {name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
            { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"},
            { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg"},
            { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"},
            {name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"},
            {name: "Algolia", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/algolia/algolia-original.svg"},
            {name: "Mapbox", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Mapbox_logo_2019.svg"},
            {name: "railway", logo: "https://cdn.simpleicons.org/railway/white"}
        ]
    },

    // <--- PROYECTOS   
    projects: [
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1774497463/Captura_de_pantalla_2026-03-25_a_la_s_9.57.30_p.m._nxqccf.png",
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
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1775230193/Captura_de_pantalla_2026-04-02_a_la_s_11.43.20_p.m._yxcsbt.png",
            title: "Dashboard de Análisis Crypto",
            description: "Red social fullstack construida con React, TypeScript y Node.js" + 
                "Express. Implementa autenticación JWT desde cero con bcryptjs para el manejo seguro de contraseñas, sistema de seguimiento entre usuarios y feed personalizado basado en las conexiones del usuario." +
                "El backend sigue arquitectura MVC con rutas protegidas mediante middleware de autenticación." +
                "La base de datos PostgreSQL es gestionada con Sequelize ORM con relaciones entre entidades." + 
                "El frontend consume la API REST propia con axios, manejo de estado con React Hooks y navegación con React Router." +
                "Stack: React · TypeScript · Node.js · Express · PostgreSQL · Sequelize · JWT · Tailwind CSS",

            github: "https://github.com/yahirjz/crypto-dashboard-frontend", 
            githubBackend: "https://github.com/yahirjz/crypto-dashboard-backend", 
            live: "https://crypto-dashboard-frontend-tau.vercel.app/"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1775230193/Captura_de_pantalla_2026-04-02_a_la_s_11.52.24_p.m._bzzera.png",
            title: "Porfolio",
            description: "Plataforma web personal interactiva construida con Next.js 16, React 19 y TypeScript." + 
                "Diseñada con un enfoque moderno y responsivo utilizando Tailwind CSS v4 para una experiencia de usuario fluida." + 
                "Incluye una integración eficiente con la API de Resend para proveer un canal de contacto directo y confiable." +
                "El proyecto aplica buenas prácticas de UI/UX, arquitectura basada en componentes reutilizables y tipado fuerte para asegurar escalabilidad." +
                "Stack: Next.js · React · TypeScript · Tailwind CSS · Resend.",
            github: "https://github.com/yahirjz/portafolio-next.js", 
            githubBackend: "", 
            live: ""
        },
    ]
}