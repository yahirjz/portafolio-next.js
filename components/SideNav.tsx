"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { LuChartNoAxesColumn, LuCpu, LuHouse, LuLayers, LuMail, LuMenu, LuUser, LuX } from "react-icons/lu";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

/**
 * Navegación v4.
 * - Escritorio: barra lateral vertical fija, con línea dorada en la sección activa.
 * - Celular: barra superior compacta y menú a pantalla completa.
 */
const SideNav = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>(t.ids.home);

    const links: { id: string; label: string; icon: IconType }[] = [
        { id: t.ids.home, label: t.nav.home, icon: LuHouse },
        { id: t.ids.projects, label: t.nav.projects, icon: LuLayers },
        { id: t.ids.stack, label: t.nav.stack, icon: LuCpu },
        { id: t.ids.about, label: t.nav.about, icon: LuUser },
        { id: t.ids.experience, label: t.nav.experience, icon: LuChartNoAxesColumn },
        { id: t.ids.contact, label: t.nav.contact, icon: LuMail },
    ];
    const ids = links.map((l) => l.id).join("|");

    // Marca la sección que está a la vista.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
        );
        ids.split("|").forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [ids]);

    // Con el menú abierto en celular, la página de atrás no se desplaza.
    useEffect(() => {
        document.documentElement.style.overflow = open ? "hidden" : "";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [open]);

    const activeIndex = Math.max(0, links.findIndex((l) => l.id === active));

    return (
        <>
            {/* ---------- Escritorio: barra lateral ---------- */}
            <aside className="fixed inset-y-0 left-0 z-50 hidden w-[112px] flex-col items-center border-r border-white/[0.08] bg-night py-8 lg:flex">
                <Link href={paths.home(locale)} aria-label="Jair Rodríguez" className="transition-transform duration-300 hover:scale-105">
                    <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} priority className="h-auto w-[72px]" />
                </Link>

                <nav aria-label={t.nav.label} className="mt-14 w-full">
                    <ul className="flex flex-col gap-1">
                        {links.map((link, i) => {
                            const Icon = link.icon;
                            const isActive = active === link.id;
                            return (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        aria-current={isActive ? "true" : undefined}
                                        className={`group relative flex flex-col items-center gap-1.5 px-2 py-3.5 text-[12px] font-semibold transition-colors duration-300 ${
                                            isActive ? "text-gold" : "text-white/55 hover:text-white"
                                        }`}
                                    >
                                        {/* Línea dorada de la sección activa */}
                                        <span
                                            aria-hidden="true"
                                            className={`absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-gold shadow-[0_0_12px_rgba(252,163,17,0.8)] transition-all duration-300 ${
                                                isActive ? "h-10 opacity-100" : "h-0 opacity-0"
                                            }`}
                                        />
                                        <Icon aria-hidden="true" className="size-[22px] transition-transform duration-300 group-hover:-translate-y-0.5" />
                                        <span>{link.label}</span>
                                        <span className="sr-only">{` (${String(i + 1).padStart(2, "0")})`}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Indicador de sección: 01 / 06 */}
                <p aria-hidden="true" className="mt-auto font-mono text-[12px] tracking-wider text-white/40">
                    <span className="text-gold">{String(activeIndex + 1).padStart(2, "0")}</span> / {String(links.length).padStart(2, "0")}
                </p>
            </aside>

            {/* ES/EN arriba a la derecha (escritorio) */}
            <div className="fixed right-8 top-7 z-50 hidden lg:block">
                <LanguageSwitch locale={locale} />
            </div>

            {/* ---------- Celular: barra superior ---------- */}
            <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-night/85 backdrop-blur-md lg:hidden">
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                    <Link href={paths.home(locale)} aria-label="Jair Rodríguez" onClick={() => setOpen(false)}>
                        <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} priority className="h-auto w-[60px]" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <LanguageSwitch locale={locale} />
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="menu-movil"
                            aria-label={open ? t.nav.close : t.nav.menu}
                            className="grid size-11 place-items-center rounded-full text-white transition hover:bg-white/10"
                        >
                            {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Menú a pantalla completa */}
            <div
                id="menu-movil"
                className={`fixed inset-0 z-40 flex flex-col bg-night/95 px-6 pb-10 pt-24 backdrop-blur-lg transition-[opacity,visibility] duration-300 lg:hidden ${
                    open ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <nav aria-label={t.nav.label}>
                    <ul className="flex flex-col">
                        {links.map((link) => {
                            const isActive = active === link.id;
                            return (
                                <li key={link.id} className="relative border-b border-white/[0.08]">
                                    <a
                                        href={`#${link.id}`}
                                        tabIndex={open ? undefined : -1}
                                        onClick={() => setOpen(false)}
                                        className={`group flex items-center gap-4 py-4 font-heading text-[28px] font-semibold transition-colors ${
                                            isActive ? "text-gold" : "text-white hover:text-gold"
                                        }`}
                                    >
                                        {link.label}
                                        {/* Línea dorada: crece en la sección activa al abrir el menú y al tocar otra */}
                                        <span
                                            aria-hidden="true"
                                            className={`absolute -bottom-px left-0 h-[2px] w-full origin-left rounded-full bg-gold shadow-[0_0_10px_rgba(252,163,17,0.7)] transition-transform duration-500 ease-out ${
                                                open && isActive ? "scale-x-100 delay-200" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                        />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default SideNav;
