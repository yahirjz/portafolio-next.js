import SideNav from "@/components/SideNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getDictionary, type Locale } from "@/lib/i18n";

export default function HomePage({ locale }: { locale: Locale }) {
    const t = getDictionary(locale);

    return (
        <>
            <a className="skip-link" href="#contenido-principal">{t.skipLink}</a>
            <SideNav locale={locale} />
            <div className="bg-night lg:pl-[112px]">
                <main id="contenido-principal" className="w-full overflow-hidden">
                    <Hero locale={locale} />
                    <Projects locale={locale} />
                    <Stack locale={locale} />
                    <About locale={locale} />
                    <Experience locale={locale} />
                    <Contact locale={locale} />
                </main>
                <Footer locale={locale} />
            </div>
            <ScrollReveal />
        </>
    );
}
