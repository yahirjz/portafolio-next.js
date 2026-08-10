"use client"
import ProjectCard from "./ProjectCard";
import { data } from "@/data/data";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="proyectos" className="py-32 px-6 w-full max-w-6xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full mb-16 flex flex-col items-center text-center"
            >
                <span className="text-brand-400 font-medium text-sm tracking-widest uppercase mb-3">Portafolio</span>
                <h2 className="text-slate-50 font-sans font-bold text-4xl md:text-5xl tracking-tight"> 
                    Proyectos Destacados
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                {data.projects.map((p, index) => (
                    <ProjectCard
                        key={index}
                        slug={p.slug}
                        title={p.title}
                        summary={p.summary}
                        img={p.img}
                        imageAlt={p.imageAlt}
                        imageContain={p.imageContain}
                        github={p.github}
                        githubBackend={"githubBackend" in p ? String(p.githubBackend) : undefined}
                        live={p.live}
                        isPrivate={p.isPrivate}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
