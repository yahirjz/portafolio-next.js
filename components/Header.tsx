"use client"
import Link from "next/link"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const Header = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    return (
        <motion.header 
            className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4 sm:top-6"
        >
            <nav className={`grid w-full max-w-xs grid-cols-2 items-center gap-1 rounded-2xl px-2 py-2 transition-all duration-500 sm:flex sm:w-auto sm:max-w-none sm:gap-4 sm:rounded-full sm:px-6 sm:py-3 ${
                scrolled 
                ? 'glass-panel shadow-2xl shadow-brand-900/20' 
                : 'bg-transparent border border-transparent'
            }`}>
                <NavLink href="#sobre-mi">Sobre mí</NavLink>
                <NavLink href="#proyectos">Proyectos</NavLink>
                <NavLink href="#habilidades">Habilidades</NavLink>
                <NavLink href="#contacto">Contacto</NavLink>
            </nav>
        </motion.header>
    )
}

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <Link href={href} className="relative group flex justify-center rounded-full px-2 py-1.5 md:px-4 md:py-2">
            <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors relative z-10">
                {children}
            </span>
            <div className="absolute inset-0 bg-white/10 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></div>
        </Link>
    )
}

export default Header
