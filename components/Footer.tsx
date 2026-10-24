import { getContent } from "@/data/content";
import type { Locale } from "@/lib/i18n";

const Footer = ({ locale }: { locale: Locale }) => {
    const data = getContent(locale);
    return (
        <footer className="border-t border-sand-line px-6 py-6 text-center text-sm text-ink-muted">
            © {new Date().getFullYear()} {data.name} · {data.location}
        </footer>
    );
};

export default Footer;
