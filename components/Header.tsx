"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const Header = ({ locale }: { locale: Locale }) => {
    const [scrolled, setScrolled] = useState(false);
    const t = getDictionary(locale);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { href: `#${t.ids.projects}`, label: t.nav.projects },
        { href: `#${t.ids.services}`, label: t.nav.services },
        { href: `#${t.ids.stack}`, label: t.nav.stack },
    ];

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
                scrolled ? "border-b border-sand-line bg-cream/90 backdrop-blur-md" : "border-b border-transparent bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3 sm:px-6">
                <Link href={paths.home(locale)} className="font-heading text-[22px] font-extrabold text-ink">
                    jaime<span className="text-terra">.</span>jair
                </Link>
                <nav aria-label={t.nav.label} className="flex flex-wrap items-center gap-1 sm:gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hidden rounded-full px-3 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:text-ink md:inline-block"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitch locale={locale} />
                    <Link
                        href={`#${t.ids.contact}`}
                        className="rounded-full bg-ink px-[18px] py-2.5 text-[15px] font-bold text-cream transition-transform hover:-translate-y-0.5"
                    >
                        {t.nav.contact}
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
