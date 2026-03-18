import { data } from "@/data/data"
const Hero = () => {
    return(
        <div className="flex flex-col md:flex-row items-center justify-between py-20 px-6 max-w-7xl mx-auto w-full gap-12">
            <div className="max-w-xl flex flex-col items-center text-center md:items-start md:text-left">
                <span className="text-violet-400 font-medium tracking-wider uppercase text-sm mb-4 bg-violet-900/30 px-4 py-1.5 rounded-full border border-violet-500/30">
                    👋 Bienvenido a mi portafolio
                </span>
                <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl pb-2 tracking-tight">
                    Hola, soy <br/> 
                    <span className="text-white">{data.name}</span>
                </h1>
                <h2 className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-6xl pb-4"> 
                    {data.role} 
                </h2>
                <p className="text-slate-400 text-lg md:text-xl max-w-lg mt-4 leading-relaxed">
                    Transformando ideas en experiencias digitales excepcionales con código limpio y diseños modernos.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    <a href="#proyectos" className="bg-violet-600 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-violet-900/20">
                        Ver Proyectos
                    </a>
                    {/* Botón de Descargar CV reemplazado aquí */}
                    <a 
                        href="/Jaime_Jair_CV.pdf" 
                        download="Jaime_Jair_CV.pdf" 
                        className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white px-8 py-3 rounded-xl font-medium transition-colors border border-slate-700 hover:border-violet-500/50 group"
                    >
                        Descargar CV
                        {/* Icono de descarga SVG animado */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Contenedor de la Imagen con efecto "Glow" */}
            <div className="relative flex justify-center mt-10 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-cyan-500 blur-3xl opacity-20 rounded-full"></div>
                <img 
                    src="https://res.cloudinary.com/deyjebm1c/image/upload/v1773791494/A9760D88-9575-4F07-AABD-E813866585CF_keojbh.png" 
                    alt="Foto de perfil o Código" 
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-2 border-slate-700/50 shadow-2xl z-10"
                />
            </div>
        </div>
    )
}

export default Hero