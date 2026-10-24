import { data } from "@/data/data";

const Footer = () => {
    return (
        <footer className="border-t border-sand-line px-6 py-6 text-center text-sm text-ink-muted">
            © {new Date().getFullYear()} {data.name} · {data.location}
        </footer>
    );
};

export default Footer;
