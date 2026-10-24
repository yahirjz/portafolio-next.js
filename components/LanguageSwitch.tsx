"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath, getDictionary, locales, type Locale } from "@/lib/i18n";

/** Botón ES/EN: lleva a la misma página en el otro idioma. */
const LanguageSwitch = ({ locale }: { locale: Locale }) => {
    const pathname = usePathname() ?? "/";
    const t = getDictionary(locale);

    return (
        <div role="group" aria-label={t.switchLabel} className="flex items-center rounded-full border border-sand-line bg-white p-1 font-mono text-[13px]">
            {locales.map((target) => {
                const active = target === locale;
                return (
                    <Link
                        key={target}
                        href={alternatePath(pathname, target)}
                        hrefLang={target}
                        lang={target}
                        aria-current={active ? "true" : undefined}
                        className={`rounded-full px-2.5 py-1.5 font-bold uppercase transition-colors ${
                            active ? "bg-ink text-cream" : "text-ink-soft hover:text-ink"
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
