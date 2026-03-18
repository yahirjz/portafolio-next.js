"use client"
import Link from "next/link"
import { useState, useEffect } from "react";

const Header = () => {
    const [hasScrolled, setHasScroll] = useState(false);

    useEffect(() => {
        //función para  ver si se movio el scroll 
        const checkScroll = () => {
            if(window.scrollY > 10){
                setHasScroll(true)
            }else{
                setHasScroll(false);
            }
        }
        // Activamos el escuchador 
        window.addEventListener("scroll", checkScroll);
        //limpiamos el escuchador
        return() => { window.removeEventListener("scroll", checkScroll) }
    }, [])

    return (
        <header className={`w-full relative sticky top-0 z-50 transition-colors duration-300 ${hasScrolled ? 'bg-[#0d0d1a]/80 backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className="text-white w-full p-6 flex justify-center gap-8">
                <Link href="#sobre-mi" className="hover:text-violet-400 transition-colors"> Sobre mi </Link>
                <Link href="#proyectos" className="hover:text-violet-400 transition-colors"> Proyectos</Link>
                <Link href="#habilidaes" className="hover:text-violet-400 transition-colors"> Habilidades </Link>
                <Link href="#contacto" className="hover:text-violet-400 transition-colors"> Contacto </Link>
            </nav>
            {/*Linea del degradado */}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-opacity duration-300 ${hasScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
        </header>
    )
}

export default Header
