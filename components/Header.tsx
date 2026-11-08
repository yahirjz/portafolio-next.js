"use client"
import Image from "next/image";
import Link from "next/link"
import { LuMail } from "react-icons/lu";
import LanguageSwitch from "@/components/LanguageSwitch";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const BRAND_NAME = "Jair Rodríguez";

const Header = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);

    const links = [
        { href: `#${t.ids.projects}`, label: t.nav.projects },
        { href: `#${t.ids.services}`, label: t.nav.services },
        { href: `#${t.ids.stack}`, label: t.nav.stack },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-white/[0.06] bg-[#0B0D0F]/95 backdrop-blur-md">
            {/* Brochazo naranja en la esquina (decorativo) */}
            <Image
                src="/jr/brochazo-ambar-sup.png"
                alt=""
                aria-hidden="true"
                width={1270}
                height={883}
                className="pointer-events-none absolute -left-4 -top-6 h-auto w-32 select-none opacity-90 sm:w-44"
            />
            <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <Link href={paths.home(locale)} className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} className="h-auto w-14 shrink-0 sm:w-[72px]" />
                    <span aria-hidden="true" className="h-8 w-px shrink-0 bg-white/30 sm:h-10" />
                    <span className="truncate font-heading text-lg font-bold text-white sm:text-[22px]">{BRAND_NAME}</span>
                </Link>
                <nav aria-label={t.nav.label} className="flex items-center gap-1 sm:gap-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hidden rounded-full px-3 py-2.5 text-[15px] font-medium text-white/70 transition-colors hover:text-white lg:inline-block"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <LanguageSwitch locale={locale} />
                    <Link
                        href={`#${t.ids.contact}`}
                        className="ml-1 flex items-center gap-2 rounded-full border-2 border-[#FD9B02] px-3 py-2 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#FD9B02]/10 sm:px-[18px]"
                    >
                        <span className="hidden sm:inline">{t.nav.contact}</span>
                        <LuMail aria-hidden="true" className="size-5" />
                        <span className="sr-only sm:hidden">{t.nav.contact}</span>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
