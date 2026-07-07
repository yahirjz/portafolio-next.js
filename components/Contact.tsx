"use client"

import { useState } from "react";   
import { data } from "@/data/data";
import { motion } from "framer-motion";

const Contact = () => {
    const [ nombre, setNombre ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const URL_API = "/api/contacto";

    const sendForm = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true);
        
        try {
            const respuesta = await fetch(URL_API , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nombre, email, mensaje })
            })

            if(!respuesta.ok){
                alert("Error de envío. Status: 500");
            } else {
                alert("Mensaje enviado exitosamente.");
                setNombre("");
                setEmail("");
                setMensaje("");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Excepción capturada en la petición HTTP.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contacto" className="py-32 px-6 w-full relative z-10 bg-transparent">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full mb-16 flex flex-col items-center text-center"
                >
                    <span className="text-brand-400 font-medium text-sm tracking-widest uppercase mb-3">Conexión</span>
                    <h2 className="text-slate-50 font-sans font-bold text-4xl md:text-5xl tracking-tight mb-4"> 
                        Iniciemos una conversación
                    </h2>
                    <p className="text-slate-400 text-lg font-sans max-w-lg mx-auto font-light">
                        Ya sea para una oportunidad laboral, un proyecto colaborativo o simplemente para saludar.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.2 }}
                    className="w-full glass-panel rounded-3xl relative overflow-hidden group hover:border-brand-500/30 transition-colors duration-500"
                >
                    {/* Glowing Accent */}
                    <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-accent-pink/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent-pink/20 transition-colors duration-500"></div>

                    <form onSubmit={sendForm} className="w-full flex flex-col gap-8 relative z-10 p-8 md:p-12">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2 group/input">
                                <label htmlFor="nombre" className="text-sm font-medium text-slate-400 group-focus-within/input:text-white transition-colors">Nombre completo</label>
                                <input 
                                    type="text" 
                                    id="nombre"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 focus:bg-white/[0.05] transition-all text-white font-sans text-base"
                                    placeholder="Jane Doe"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 group/input">
                                <label htmlFor="email" className="text-sm font-medium text-slate-400 group-focus-within/input:text-white transition-colors">Correo electrónico</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 focus:bg-white/[0.05] transition-all text-white font-sans text-base"
                                    placeholder="jane@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 group/input">
                            <label htmlFor="mensaje" className="text-sm font-medium text-slate-400 group-focus-within/input:text-white transition-colors">Tu mensaje</label>
                            <textarea 
                                id="mensaje"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-400 focus:bg-white/[0.05] transition-all text-white font-sans text-base min-h-[140px] resize-none"
                                placeholder="Escribe tu mensaje aquí..."
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
                            <div className="flex gap-6">
                                {Object.entries(data.social).map(([key, value]) =>(
                                    <motion.a whileHover={{ scale: 1.1, y: -2 }} key={key} href={value} target="_blank" className="text-slate-400 hover:text-white transition-colors text-sm font-medium capitalize flex items-center gap-1.5">
                                        {key}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 11-1 9"></path><path d="m19 11-4-7"></path><path d="M2 11h20"></path><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path><path d="M4.5 15.5h15"></path><path d="m5 11 4-7"></path><path d="m9 11 1 9"></path></svg>
                                    </motion.a>   
                                ))}
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-slate-200 text-dark-bg font-sans font-bold rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-300 to-accent-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center gap-2">
                                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"} 
                                    {!isSubmitting && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
                                </span>
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    )
}
export default Contact