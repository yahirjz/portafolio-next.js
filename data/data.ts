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
            { name: "HTML", logo:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
            { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"},
            { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  },
            {name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"},
            {name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
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
           
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Juego de piedra papel o tijera",
            description: " Un juego clasico de piedra papel o tijer", 
        
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Buscador de Mascotas",
            description: "App, para encontra mascotas perdidas mas cerca", 
           
            github: "https://github.com/",
            live: "#"
        },
        {
            img: "https://res.cloudinary.com/deyjebm1c/image/upload/v1773261821/Top_Full_Stack_Developer_Services_in_Sunnyvale_ebfcxz.jpg",
            title: "Mi segundo proyecto",
            description: " Buscador utilizando componentes de React", // <-- falta poner la descripción aqui
            github: "https://github.com/",
            live: "#"
        }
    ]
}