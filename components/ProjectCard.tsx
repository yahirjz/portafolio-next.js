"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface ProjectProps {
    slug: string;
    title: string;
    description: string;
    img: string;
    github?: string;
    githubBackend?: string;
    live?: string;
    isPrivate?: boolean;
}

const ProjectCard = ({ slug, title, description, img, github, githubBackend, live, isPrivate }: ProjectProps) => {

    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="group relative flex flex-col w-full h-full"
        >
            <div
                className="relative overflow-hidden rounded-3xl glass-panel flex-grow flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)] hover:border-white/10"
            >
                {/* Image Section */}
                <div className="w-full h-64 bg-black relative overflow-hidden">
                    <Image
                        src={img}
                        alt={title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex-grow flex flex-col relative z-10 -mt-16">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                            </div>
                            <h4 className="text-2xl font-sans font-bold text-white tracking-tight">
                                {title}
                            </h4>
                        </div>
                        {isPrivate && (
                            <div className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                <span className="text-rose-400 text-xs font-bold tracking-wider uppercase">Confidencial</span>
                            </div>
                        )}
                    </div>
                    
                    <p className="text-slate-400 text-base md:text-lg font-sans line-clamp-3 mb-8 leading-relaxed font-light">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-auto">
                        <Link href={`/proyecto/${slug}`}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 bg-white text-dark-bg text-sm font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                Detalles <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                            </motion.div>
                        </Link>
                        {live && (
                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={live} target="_blank" className="px-5 py-2.5 bg-brand-500/10 text-brand-300 border border-brand-500/20 text-sm font-semibold rounded-xl hover:bg-brand-500/20 transition-colors flex items-center gap-2">
                                Visitar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </motion.a>
                        )}
                        {(github || githubBackend) && (
                            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={github || githubBackend} target="_blank" className="px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                                Código <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard