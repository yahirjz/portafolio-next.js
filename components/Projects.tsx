import { data } from "@/data/data";
import ProjectsCard from "./ProjectCard";

const Projects = () => {
    return(
        <section id="proyectos" className="flex flex-col items-center py-20 px-6 ">
            <h2 className="text-white font-bold text-3xl mb-8"> Proyectos </h2>

            <div className="flex gap-4 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto p-8  ">
            {data.projects.map((p)=>( 
                <ProjectsCard
                    key={p.title}
                    img={p.img}
                    title={p.title}
                    description={p.description}
                    github={p.github}
                    githubBackend={(p as any).githubBackend}
                    live={p.live}
                />
                ))
            }
            </div>
        </section>
    )
}
export default Projects;