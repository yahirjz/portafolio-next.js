import { getContent } from "@/data/content";
import type { Locale } from "@/lib/i18n";

const Footer = ({ locale }: { locale: Locale }) => {
    const data = getContent(locale);
    return (
        <footer className="border-t border-white/[0.07] bg-[#0B0D0F] px-4 py-6 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-2 text-sm text-white/60">
                <span>© {new Date().getFullYear()} {data.name} · {data.location}</span>
                <span>jaimejair.dev</span>
            </div>
        </footer>
    );
};

export default Footer;
