import { data } from "@/data/data";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
    return(
        <section id="proyectos" className="flex flex-col items-center py-50 px-20">
            <h1 className="text-white font-bold text-3xl"> Proyectos </h1>

            <div className="flex gap-4 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto ">
            {data.projects.map((p)=>( 
                <ProjectsCard
                    key={p.title}
                    img={p.img}
                    title={p.title}
                    description={p.description}
                    tech={p.tech}
                    github={p.github}
                    live={p.live}
                />
                ))
            }
            </div>
        </section>
    )
}
export default Projects;