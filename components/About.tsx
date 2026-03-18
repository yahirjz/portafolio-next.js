import { data } from "@/data/data"

const About = () => {
    return(
        // Agregamos el centrado y max-w para que el texto nunca sea más ancho que 3xl (perfecto para lectura)
        <section id="sobre-mi" className="py-20 px-6 w-full max-w-3xl mx-auto flex flex-col items-center">
            
            <h2 className="text-white font-bold text-3xl mb-8 text-center w-full"> 
                Sobre mí 
            </h2>

            {/* Tarjeta de cristal ahumado que envuelve el texto */}
            <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-lg backdrop-blur-sm hover:border-violet-500/30 transition-colors duration-500 text-center">
                
                {/* Icono decorativo de comillas (opcional, le da un toque de cita elegante) */}
                <span className="text-violet-500 text-4xl block mb-4 opacity-50">"</span>
                
                {/* Texto principal con interlineado holgado (leading-relaxed) */}
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light mb-8">
                    {data.about}
                </p>

                {/* Botón Descargar CV centrado en About */}
                <div className="flex justify-center w-full">
                    <a 
                        href="/Jaime_Jair_CV.pdf" 
                        download="Jaime_Jair_CV.pdf" 
                        className="inline-flex items-center gap-2 bg-violet-600/90 hover:bg-violet-500 text-white px-8 py-3 rounded-xl font-medium transition-colors shadow-lg shadow-violet-900/20 group"
                    >
                        Descargar Currículum
                        {/* Icono de descarga SVG animado */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </a>
                </div>
                
            </div>
            
        </section>
    )
}
export default About
