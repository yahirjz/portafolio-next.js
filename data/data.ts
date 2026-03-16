export const data = {
    name: "Jaime Jair",
    role: "Full stack Developer",
    about: "Desarrollador web en formación y estudiante de Ingeniería en Sistemas, apasionado por JavaScript y el desarrollo de aplicaciones modernas. Trabajo principalmente con React, TypeScript y Node.js, y me enfoco en construir proyectos prácticos que fortalezcan mis habilidades en desarrollo full-stack, manejo de estado, APIs y bases de datos como MySQL.",
    social: {
        github: "https://github.com/yahirjz/",
        linkedin: "https://www.linkedin.com/in/jaime-jair-rodriguez-juarez-82494b317/", // <-- falta completar
    },

    //<-- HABILIDADES 
    skills: {
        frontend: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript" },
            { name: "TypeScript" },
            { name: "React" },
            {name: "Next.js"}
        ],
        
        backend: [
            { name: "Node.js"},
            { name: "Express"},
            { name: "Python"},
            { name: "FatAPI"},
            { name: "PostgreSQL"},
            { name: "Sequelize"},
        ],
        
         herramientas: [
            {name: "Postman"},
            {name: "Git"},
            { name: "GitHub"},
            { name: "Vercel" },
            { name: "Firebase"},
            {name: "Supabase"},
        ]
    },

    // <--- PROYECTOS   
    projects: [
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Mi primer poyecto",
            description: " Buscador utilizando componentes de React", // <-- falta poner la descripción aqui
            tech: [ "React", "typescript"],
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Juego de piedra papel o tijera",
            description: " Un juego clasico de piedra papel o tijer", 
            tech: [ "React", "Typescript", "NoSQL", "APIRest"],
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Buscador de Mascotas",
            description: "App, para encontra mascotas perdidas mas cerca", 
            tech: [ "React", "Typescript", "SQL", "APIRest","Algolia", "Mapbox"],
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Mi segundo proyecto",
            description: " Buscador utilizando componentes de React", // <-- falta poner la descripción aqui
            tech: [ "React", "typescript"],
            github: "https://github.com/",
            live: "#"
        }
    ]
}