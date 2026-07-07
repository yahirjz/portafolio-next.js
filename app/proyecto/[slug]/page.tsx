import { data } from "@/data/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return { title: `${project.title} | Portafolio` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = data.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Extract stack from description string 
  const descParts = project.description.split("Stack:");
  const mainDesc = descParts[0].trim();
  const stackRaw = descParts.length > 1 ? descParts[1] : "";
  const stack = stackRaw.split("·").map(s => s.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-dark-bg text-slate-50 relative pb-32">
        {/* Floating background effects */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-500/10 blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-pink/10 blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-32 relative z-10">
            <Link href="/#proyectos" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                Volver al portafolio
            </Link>

            <header className="mb-16">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight">{project.title}</h1>
                    {project.isPrivate && (
                        <div className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-sm mt-2 md:mt-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span className="text-rose-400 text-sm font-bold tracking-wider uppercase">Confidencial</span>
                        </div>
                    )}
                </div>

                {stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {stack.map((tech, i) => (
                            <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-brand-300 font-mono shadow-inner">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-4">
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="px-6 py-3 bg-brand-500 text-dark-bg font-bold rounded-xl hover:bg-brand-400 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                            Ver Proyecto <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    )}
                    {(project.github || project.githubBackend) && (
                        <a href={project.github || project.githubBackend} target="_blank" rel="noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                            Ver Código <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        </a>
                    )}
                </div>
            </header>

            <div className="w-full aspect-video md:aspect-[21/9] bg-black rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl relative">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent"></div>
            </div>

            <article className="prose prose-invert prose-lg max-w-none font-sans font-light leading-relaxed text-slate-300">
                <h2 className="text-3xl font-bold text-white mb-6">Acerca del Proyecto</h2>
                <p className="whitespace-pre-line">{mainDesc}</p>
            </article>

            {project.gallery && project.gallery.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-white mb-8">Galería de Imágenes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.map((img, i) => (
                            <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-lg hover:border-brand-500/50 transition-colors">
                                <img src={img} alt={`${project.title} screenshot ${i+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </main>
  );
}
