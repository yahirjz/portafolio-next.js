import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-dark-bg relative overflow-hidden flex flex-col items-center selection:bg-brand-500/30 selection:text-white">
            {/* Aurora Background Effects */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="aurora-bg w-[50vw] h-[50vw] bg-violet-600/20 top-[-10%] left-[-10%]"></div>
                <div className="aurora-bg w-[40vw] h-[40vw] bg-sky-500/20 bottom-[-10%] right-[-10%]"></div>
                <div className="aurora-bg w-[60vw] h-[60vw] bg-fuchsia-500/10 top-[40%] left-[20%]"></div>
            </div>
            
            {/* Sections */}
            <div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Contact />
                <Footer />
            </div>
        </main>
    );
}
