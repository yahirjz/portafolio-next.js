"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

const links = [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#servicios", label: "Servicios" },
    { href: "#stack", label: "Stack" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled ? "border-b border-sand-line bg-cream/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3 sm:px-6">
                <Link href="/" className="font-heading text-[22px] font-extrabold text-ink">
                    jaime<span className="text-terra">.</span>jair
                </Link>
                <nav aria-label="Principal" className="flex flex-wrap items-center gap-1 sm:gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hidden rounded-full px-3 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink sm:inline-block"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contacto"
                        className="rounded-full bg-ink px-[18px] py-2.5 text-[15px] font-bold text-cream transition-transform hover:-translate-y-0.5"
                    >
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
