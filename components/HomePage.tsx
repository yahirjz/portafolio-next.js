import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommitDivider from "@/components/CommitDivider";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, type Locale } from "@/lib/i18n";

// Fondos de cada sección: los separadores se colocan justo en la costura.
const CREAM = "#FAF7F2";
const SAND = "#F3EDE4";

export default function HomePage({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);
    const d = t.dividers;

    return (
        <>
            <a className="skip-link" href="#contenido-principal">{t.skipLink}</a>
            <Header locale={locale} />
            <main id="contenido-principal" className="w-full overflow-hidden">
                <Hero locale={locale} />
                <CommitDivider from={CREAM} to={SAND} hash="a3f9c21" command="git checkout" target={d.projects.target} label={d.projects.label} showCursor />
                <Projects locale={locale} />
                <CommitDivider from={SAND} to={CREAM} hash="7c0e4b8" command="git merge" target={d.services.target} label={d.services.label} />
                <Services locale={locale} />
                <Stack locale={locale} />
                <CommitDivider from={SAND} to={CREAM} hash="HEAD" command="git push origin" target={d.contact.target} label={d.contact.label} highlight showCursor />
                <Contact locale={locale} />
            </main>
            <Footer locale={locale} />
        </>
    );
}
