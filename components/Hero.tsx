"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax values
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-6 pt-20">
            
            {/* Main Content */}
            <motion.div 
                style={{ opacity }}
                className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
            >
                {/* Tech Badge */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                    className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel"
                >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-500"></span>
                    </span>
                    <span className="text-slate-300 text-sm font-medium tracking-wide">Available for hire</span>
                </motion.div>

                {/* Animated Gradient Text */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="text-slate-50 font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6 leading-[1.1] max-w-4xl"
                >
                    Transformando ideas en{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-accent-sky to-accent-pink">
                        experiencias digitales.
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-slate-400 text-lg md:text-xl font-sans max-w-2xl leading-relaxed mb-12 font-light"
                >
                    Hola, soy Jaime Jair. <strong className="text-white font-medium">Software Engineer</strong> especializado en crear arquitecturas escalables, APIs robustas e interfaces con <strong className="text-white font-medium">rendimiento excepcional</strong>.
                </motion.p>

                {/* Action Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 w-full items-center justify-center"
                >
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#proyectos" 
                        className="relative group px-8 py-4 rounded-full bg-white text-dark-bg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-300 to-accent-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <span className="relative z-10 flex items-center gap-2">
                            Explorar Proyectos
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </span>
                    </motion.a>

                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/cv.pdf" 
                        download="Mi_CV.pdf"
                        className="px-8 py-4 rounded-full glass-panel border border-brand-500/20 text-brand-300 font-medium hover:bg-brand-500/10 hover:border-brand-500/40 transition-colors flex items-center justify-center gap-2"
                    >
                        Descargar CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </motion.a>

                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contacto" 
                        className="px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                        Contactar
                    </motion.a>
                </motion.div>
            </motion.div>

        </section>
    )
}

export default Hero