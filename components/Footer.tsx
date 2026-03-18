import { data } from "@/data/data";

const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-slate-800/50 bg-slate-900/40 backdrop-blur-sm mt-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                
                {/* Copyright / Creador */}
                <p className="text-slate-400 text-sm font-medium">
                    © {new Date().getFullYear()} {data.name}. Todos los derechos reservados.
                </p>

                {/* Mensaje de amor/tecnología (Opcional pero da un toque pro) */}
                <p className="text-slate-500 text-xs flex items-center gap-1">
                    Construido con <span className="text-violet-500 animate-pulse">❤</span> en Next.js & Tailwind
                </p>

                {/* Enlaces de ancla rápidos para regresar arriba */}
                <nav className="flex gap-4 text-sm text-slate-400">
                    <a href="#sobre-mi" className="hover:text-violet-400 transition-colors">Sobre mí</a>
                    <a href="#proyectos" className="hover:text-violet-400 transition-colors">Proyectos</a>
                    <a href="#habilidaes" className="hover:text-violet-400 transition-colors">Habilidades</a>
                </nav>

            </div>
        </footer>
    );
};

export default Footer;
