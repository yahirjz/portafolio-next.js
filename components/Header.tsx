"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowUpRight, LuMenu, LuX } from "react-icons/lu";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const Header = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<string>(t.ids.home);

    const links = [
        { id: t.ids.home, label: t.nav.home },
        { id: t.ids.projects, label: t.nav.projects },
        { id: t.ids.experience, label: t.nav.experience },
        { id: t.ids.about, label: t.nav.about },
    ];

    // Marca en naranja el enlace de la sección que está a la vista.
    useEffect(() => {
        const ids = [t.ids.home, t.ids.about, t.ids.projects, t.ids.experience];
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActive(visible.target.id);
            },
            { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [t.ids.home, t.ids.about, t.ids.projects, t.ids.experience]);

    const linkClass = (id: string) =>
        `border-b-2 pb-1 text-[15px] transition-colors ${
            active === id ? "border-[#FD9B02] text-[#FD9B02]" : "border-transparent text-white/70 hover:text-white"
        }`;

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0B0D0F]">
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
                <Link href={paths.home(locale)} aria-label="Jair Rodríguez" className="shrink-0">
                    <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} priority className="h-auto w-16 sm:w-[76px]" />
                </Link>

                <nav aria-label={t.nav.label} className="flex items-center gap-3 lg:gap-7">
                    <ul className="hidden items-center gap-7 lg:flex">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} aria-current={active === link.id ? "true" : undefined} className={linkClass(link.id)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitch locale={locale} />
                    <a
                        href={`#${t.ids.contact}`}
                        className="hidden items-center gap-1.5 rounded-full border-2 border-[#FD9B02] px-4 py-2 text-[15px] font-bold text-white transition hover:bg-[#FD9B02]/10 lg:flex"
                    >
                        {t.nav.contact}
                        <LuArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="menu-movil"
                        aria-label={open ? t.nav.close : t.nav.menu}
                        className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
                    >
                        {open ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
                    </button>
                </nav>
            </div>

            {/* Menú en celular */}
            {open && (
                <div id="menu-movil" className="border-t border-white/[0.07] px-4 pb-5 pt-2 lg:hidden">
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setOpen(false)}
                                    className={`block py-3 text-lg ${active === link.id ? "text-[#FD9B02]" : "text-white/85"}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href={`#${t.ids.contact}`}
                        onClick={() => setOpen(false)}
                        className="mt-3 flex items-center justify-center gap-1.5 rounded-full border-2 border-[#FD9B02] py-3 font-bold text-white"
                    >
                        {t.nav.contact}
                        <LuArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
