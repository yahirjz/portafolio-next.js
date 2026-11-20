"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, getDictionary, locales, type Locale } from "@/lib/i18n";

/** Botón ES/EN: lleva a la misma página en el otro idioma. */
const LanguageSwitch = ({ locale }: { locale: Locale }) => {
    const pathname = usePathname() ?? "/";
    const t = getDictionary(locale);

    return (
        <div role="group" aria-label={t.switchLabel} className="flex items-center rounded-full border border-white/25 bg-night/60 p-1 text-[13px] backdrop-blur">
            {locales.map((target) => {
                const active = target === locale;
                return (
                    <Link
                        key={target}
                        href={alternatePath(pathname, target)}
                        hrefLang={target}
                        lang={target}
                        aria-current={active ? "true" : undefined}
                        className={`rounded-full px-3 py-1.5 font-bold uppercase transition-colors duration-300 ${
                            active ? "bg-gold text-night" : "text-white/70 hover:text-white"
                        }`}
                    >
                        {target}
                    </Link>
                );
            })}
        </div>
    );
};

export default LanguageSwitch;
