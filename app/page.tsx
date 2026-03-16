import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col w-full" style={{ background: 'radial-gradient(circle at 50% 50%, #1a1040, #0d0d1a)' }}>
     <Header/>
     <Hero/>
     <Projects/>
     <Contact/>
    </main>
  );
}
