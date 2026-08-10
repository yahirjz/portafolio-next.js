export const data = {
    name: "Jaime Jair",
    role: "Full stack Developer",
    about: `
    
            Construyo APIs y microservicios escalables con IA para startups.
            Especializado en arquitecturas distribuidas que procesan datos 
            en tiempo real. Full-Stack: Next.js, 
            Node.js/Express, FastAPI, React.

            Experiencia en:
            - Integración de múltiples APIs con fallback automático
            - Microservicios que escalan independientemente
            - Backend que aguanta carga sin perder performance
            - Machine Learning integrado en producción

            Si necesitas un sistema que funcione sin downtime, construcción 
            rápida de MVP, o arquitectura que crezca con tu startup: estoy disponible.
            `,
    
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

        // PROYECTO DE ANALISIS DE PARTIDOS 
        {
            slug: "sportixa",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto,f_auto/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.18_p.m._f8etcd.png",
            gallery: [
                "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto,f_auto/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.30_p.m._d6dlzq.png",
                "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto,f_auto/v1783456294/Captura_de_pantalla_2026-07-07_a_la_s_1.00.38_p.m._kd0vuo.png"
            ],
            title: "Sportixa",
            description: `
                Sportixa es una beta privada en desarrollo para explorar contexto y datos de fútbol en una interfaz clara.
                El producto no ofrece garantías ni resultados de apuestas; las capacidades de IA y aprendizaje automático permanecen en evaluación para fases futuras.

                Estado: Beta privada · En desarrollo
                `,
            isPrivate: true
        },

        // PROJECTO DE REPORTES TIXAS
        {
            slug: "reportes-tisax",
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/q_auto/f_auto/v1776461350/Captura_de_pantalla_2026-04-17_a_la_s_3.10.17_p.m._zsuwkj.png",
            gallery: [],
            title: "Sistema de reportes TISAX",
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
    ]
}
