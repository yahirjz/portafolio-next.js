 import Link from "next/link"
const Header = () =>{
    return(
        <nav className="text-white w-full p-6 flex justify-center gap-8 " >
            <Link href="#proyectos" className="hover:text-violet-400 transition-colors"> Projectos</Link>
            <Link href="#contacto" className="hover:text-violet-400 transition-colors"> Contacto </Link>
            <Link href="#contacto" className="hover:text-violet-400 transition-colors"> Habilidades </Link>
        </nav>
    )
}

export default Header