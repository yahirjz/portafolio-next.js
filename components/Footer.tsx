import Image from "next/image";
import { LuArrowUp } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const Footer = ({ locale }: { locale: Locale }) => {
    const data = getContent(locale);
    const t = getDictionary(locale);
    return (
        <footer className="border-t border-white/[0.08] bg-night px-5 py-8 sm:px-10 lg:px-14">
            <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-5 text-sm text-white/50">
                <div className="flex items-center gap-5">
                    <Image src="/jr/monograma.png" alt="" aria-hidden="true" width={1120} height={528} className="h-auto w-14" />
                    <span>© {new Date().getFullYear()} {data.name} · {data.location}</span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="font-mono text-[12px]">jaimejair.dev</span>
                    <a href={`#${t.ids.home}`} className="group inline-flex items-center gap-2 font-semibold text-white/70 transition-colors hover:text-gold">
                        {t.contact.backToTop}
                        <span className="grid size-8 place-items-center rounded-full border border-white/20 transition duration-300 group-hover:-translate-y-0.5 group-hover:border-gold">
                            <LuArrowUp aria-hidden="true" className="size-4" />
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
