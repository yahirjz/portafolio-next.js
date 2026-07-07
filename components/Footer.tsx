import { data } from "@/data/data";

const Footer = () => {
    return (
        <footer className="w-full py-10 border-t border-dark-border bg-dark-bg relative z-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <p className="text-slate-400 text-sm font-sans">
                    © {new Date().getFullYear()} {data.name}. Todos los derechos reservados.
                </p>

                <nav className="flex gap-6 text-sm text-slate-400 font-sans">
                    <a href="#sobre-mi" className="hover:text-white transition-colors">Perfil</a>
                    <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;
