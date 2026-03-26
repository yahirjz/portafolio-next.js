"use client";
import { useState } from "react";

type ProyectsCardProps = {
    img: string,
    title: string,
    description: string,
    github?: string,
    githubBackend?: string,
    live: string
}

const ProjectsCard = ({ title, img, description, github, githubBackend, live }: ProyectsCardProps) => {
    const [showGithubMenu, setShowGithubMenu] = useState(false);

    return(
        <div className="bg-slate-900/40 border border-slate-700/50 hover:border-violet-500/50 transition-colors duration-300 rounded-xl overflow-hidden flex flex-col h-full shadow-lg shadow-black/20 backdrop-blur-sm">
            {/* Contenedor de la Imagen */}
            <div className="relative aspect-video w-full overflow-hidden">
                <img src={img} alt={title} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"/>
                {/* Velo oscuro para oscurecer un poco la imagen y que no brille tanto */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            </div>

            {/* Contenedor del Texto */}
            <div className="flex flex-col flex-grow p-6 text-white">
                <h1 className="text-xl font-bold mb-3 text-slate-100"> { title } </h1>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow"> { description } </p>
                
                {/* Botones */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-slate-700/50 flex-wrap relative">
                    {/* Logica para cuando hay dos repositorios */}
                    {github && githubBackend ? (
                        <div className="flex-1 relative">
                            <button 
                                onClick={() => setShowGithubMenu(!showGithubMenu)}
                                className="w-full h-full text-center bg-white/5 hover:bg-white/10 text-slate-200 border border-slate-600/50 rounded-lg px-2 py-2 text-sm font-medium transition-colors"
                            > 
                                Git ▼
                            </button>
                            
                            {/* Menú Desplegable */}
                            {showGithubMenu && (
                                <div className="absolute bottom-full left-0 mb-2 w-full bg-slate-800 border border-slate-600 rounded-lg shadow-xl overflow-hidden flex flex-col z-10 animate-fade-in">
                                    <a href={github} target="_blank" className="px-4 py-2 text-sm text-slate-200 hover:bg-violet-600 hover:text-white transition-colors border-b border-slate-700/50">
                                        Frontend
                                    </a>
                                    <a href={githubBackend} target="_blank" className="px-4 py-2 text-sm text-slate-200 hover:bg-violet-600 hover:text-white transition-colors">
                                        Backend
                                    </a>
                                </div>
                            )}
                        </div>
                    ) : (
                        /* Lógica original para cuando solo hay un repo */
                        github && (
                            <a href={github} target="_blank" className="flex-1 text-center bg-white/5 hover:bg-white/10 text-slate-200 border border-slate-600/50 rounded-lg px-2 py-2 text-sm font-medium transition-colors"> 
                                GitHub
                            </a>
                        )
                    )}

                    <a href={live} target="_blank" className="flex-1 text-center bg-violet-600 hover:bg-violet-500 text-white rounded-lg px-2 py-2 text-sm font-medium transition-colors shadow-md shadow-violet-900/20"> 
                        Ver Demo 
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ProjectsCard