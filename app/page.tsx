import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CommitDivider from "@/components/CommitDivider";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Fondos de cada sección: los separadores se colocan justo en la costura.
const CREAM = "#FAF7F2";
const SAND = "#F3EDE4";

export default function Home() {
    return (
        <>
            <a className="skip-link" href="#contenido-principal">Saltar al contenido principal</a>
            <Header />
            <main id="contenido-principal" className="w-full overflow-hidden">
                <Hero />
                <CommitDivider from={CREAM} to={SAND} hash="a3f9c21" command="git checkout" target="proyectos" label="Inicio de proyectos" showCursor />
                <Projects />
                <CommitDivider from={SAND} to={CREAM} hash="7c0e4b8" command="git merge" target="proyectos → servicios" label="Inicio de servicios" />
                <Services />
                <Stack />
                <CommitDivider from={SAND} to={CREAM} hash="HEAD" command="git push origin" target="tu-proyecto" label="Inicio de contacto" highlight showCursor />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
