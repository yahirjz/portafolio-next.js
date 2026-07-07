"use client"
import { data } from "@/data/data"
import { motion } from "framer-motion"

const About = () => {
    return(
        <section id="sobre-mi" className="py-32 px-6 w-full max-w-6xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full mb-16 flex flex-col items-center text-center"
            >
                <span className="text-brand-400 font-medium text-sm tracking-widest uppercase mb-3">Conóceme</span>
                <h2 className="text-slate-50 font-sans font-bold text-4xl md:text-5xl tracking-tight"> 
                    Sobre Mí
                </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Main Text Card */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.2 }}
                    className="md:col-span-2 glass-panel rounded-3xl overflow-hidden group hover:border-brand-500/30 transition-colors duration-500 relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    
                    <div className="p-8 md:p-12 h-full relative z-10 flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-lg text-white group-hover:text-brand-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                        </div>
                        <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-sans font-light">
                            {data.about}
                        </p>
                    </div>
                </motion.div>

                {/* Stats / Info */}
                <div className="flex flex-col gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                        className="flex-1 glass-panel rounded-3xl overflow-hidden group hover:border-accent-sky/30 transition-colors relative"
                    >
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-sky/20 rounded-full blur-[40px] pointer-events-none"></div>
                        <div className="p-8 h-full flex flex-col justify-center relative z-10">
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Experiencia</span>
                            <span className="text-6xl font-sans font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">2+<span className="text-3xl">años</span></span>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                        className="flex-1 glass-panel rounded-3xl overflow-hidden group hover:border-brand-500/30 transition-colors relative"
                    >
                        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500/20 rounded-full blur-[40px] pointer-events-none"></div>
                        <div className="p-8 h-full flex flex-col justify-center relative z-10">
                            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">Ubicación</span>
                            <span className="text-4xl font-sans font-bold text-white mb-4">México</span>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span> 
                                <span className="text-xs text-slate-300 font-medium">Disponible Remoto</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default About
