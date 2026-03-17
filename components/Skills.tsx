import { data } from "@/data/data";

const Skills = () => {
    return (
        <section id="habilidaes" className="flex flex-col items-center gap-10 py-16 px-6 w-full max-w-7xl mx-auto">
            <h2 className="text-white font-bold text-3xl mb-4 text-center w-full"> Habilidades </h2>

            {/** Front */}
            <div className="w-full max-w-4xl mx-auto" >
                <h2 className="text-slate-300 border-b border-slate-700/50 pb-2 mb-6 font-semibold uppercase tracking-widest text-sm"> Frontend </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.skills.frontend.map((s) => (
                        <span key={s.name} className="flex items-center gap-3 border border-slate-700/50 rounded-full px-5 py-3 text-sm bg-slate-800/50 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20 cursor-pointer"> 
                            <img src={s.logo} alt={s.name}  className="w-6 h-6 flex-shrink-0" />
                            <span className="font-medium">{s.name}</span> 
                        </span>
                    ))}
                </div>
            </div>

            {/** Backend */}
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-slate-300 border-b border-slate-700/50 pb-2 mb-6 font-semibold uppercase tracking-widest text-sm"> Backend </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.skills.backend.map((s) => (
                        <span key={s.name} className="flex items-center gap-3 border border-slate-700/50 rounded-full px-5 py-3 text-sm bg-slate-800/50 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20 cursor-pointer"> 
                            {/* Logo placeholder - the user can add the real logos to data.ts later */}
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex-shrink-0"></div>
                            <span className="font-medium">{s.name}</span> 
                        </span>
                    ))}
                </div>
            </div>

            {/** Herramientas */}
            <div className="w-full max-w-4xl mx-auto">
                <h2 className="text-slate-300 border-b border-slate-700/50 pb-2 mb-6 font-semibold uppercase tracking-widest text-sm"> Herramientas </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.skills.herramientas.map((s) => (
                        <span key={s.name} className="flex items-center gap-3 border border-slate-700/50 rounded-full px-5 py-3 text-sm bg-slate-800/50 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-900/20 cursor-pointer"> 
                            {/* Logo placeholder */}
                            <div className="w-6 h-6 rounded-full bg-slate-700 flex-shrink-0"></div>
                            <span className="font-medium">{s.name}</span> 
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills