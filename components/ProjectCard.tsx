type ProyectsCardProps = {
    img: string,
    title: string,
    description: string,
    tech: string[],
    github: string,
    live: string
}

const ProjectsCard = ({ title, img, description, tech, github, live }: ProyectsCardProps) => {
    return(
        <div className="relative group w-80 h-64 overflow-hidden flex items-center ">
            <img src={ img } alt={title}  className="w-full h-48 "/>

            {/* contenedor y contenido del Overlay */}
            <div className="absolute inset-0 hidden group-hover:flex bg-black/70 flex-col items-center justify-center text-gray-200 p-4 text-sm">

                <h1 className="text-lg font-bold"> { title } </h1>
                <p className="p-2"> { description } </p>
                <div className="flex gap-2 flex-wrap">
                    {tech.map((t) => ( <span key={t} className="border rounded-full px-2 py-1 text-xs " > {t} </span> ))}
                </div>
                <div className="flex gap-2 p-4">
                    <a href={ github} target="_blank" className=" border rounded-full px-2 py-1 bg-violet-500 "> GitHub </a>
                    <a href={ live } target="_blank" className=" border rounded-full px-2 py-1 "> live </a>
                </div>
              
            </div>
        </div>
    )
}
export default ProjectsCard