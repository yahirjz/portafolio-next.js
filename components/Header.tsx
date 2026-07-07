"use client"
import Link from "next/link"
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
    });

    return (
        <motion.header 
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4`}
        >
            <nav className={`flex items-center gap-1 sm:gap-4 px-6 py-3 rounded-full transition-all duration-500 ${
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
        <Link href={href} className="relative group px-3 py-1.5 md:px-4 md:py-2">
            <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors relative z-10">
                {children}
            </span>
            <div className="absolute inset-0 bg-white/10 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out z-0"></div>
        </Link>
    )
}

export default Header
