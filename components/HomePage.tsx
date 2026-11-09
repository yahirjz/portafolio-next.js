import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);

    return (
        <>
            <a className="skip-link" href="#contenido-principal">{t.skipLink}</a>
            <Header locale={locale} />
            <main id="contenido-principal" className="w-full overflow-hidden">
                <Hero locale={locale} />
                <About locale={locale} />
                <Projects locale={locale} />
                <Experience locale={locale} />
                <Stack locale={locale} />
                <Contact locale={locale} />
            </main>
            <Footer locale={locale} />
        </>
    );
}
