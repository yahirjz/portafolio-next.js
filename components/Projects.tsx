import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";

const Tag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <span
        className={`rounded-md px-2.5 py-1 font-mono text-[13px] ${
            dark ? "border border-ink-soft text-code-text" : "bg-sand text-ink"
        }`}
    >
        {children}
    </span>
);

const getStack = (description: string) => {
    const parts = description.split("Stack:");
    return parts.length > 1 ? parts[1].split("·").map((s) => s.trim()).filter(Boolean) : [];
};

const Projects = () => {
    const featured = data.projects.find((p) => p.featured);
    const rest = data.projects.filter((p) => !p.featured);

    return (
        <section id="proyectos" className="bg-sand px-4 py-24 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <p className="m-0 font-mono text-sm text-terra">01 — Proyectos</p>
                    <h2 className="m-0 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.1]">Lo que he construido</h2>
                </div>

                {featured && (
                    <article className="flex flex-wrap items-stretch gap-8 rounded-[28px] bg-ink p-6 text-cream sm:p-8">
                        <div className="relative min-h-[260px] min-w-0 flex-[1_1_420px] -rotate-[1.5deg] overflow-hidden rounded-[18px] bg-ink-line shadow-[0_20px_40px_-16px_rgba(0,0,0,0.5)]">
                            <Image
                                src={featured.img}
                                alt={featured.imageAlt}
                                fill
                                sizes="(max-width: 900px) 100vw, 560px"
                                className={featured.imageContain ? "object-contain" : "object-cover"}
                            />
                        </div>
                        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-4">
                            <p className="m-0 self-start rounded-md bg-terra px-2.5 py-1 font-mono text-[13px] text-white">★ {featured.tag}</p>
                            <h3 className="m-0 font-heading text-[44px] font-extrabold leading-[1.05]">{featured.title}</h3>
                            <p className="m-0 text-[19px] text-[#D6D3D1]">{featured.summary}</p>
                            <div className="flex flex-col gap-3 border-t border-ink-soft pt-4">
                                <p className="m-0"><strong className="text-terra-soft">Resultado:</strong> {featured.result}</p>
                                <p className="m-0"><strong className="text-terra-soft">Técnico:</strong> {featured.technical}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {getStack(featured.description).map((tech) => <Tag key={tech} dark>{tech}</Tag>)}
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-1">
                                <Link href={`/proyecto/${featured.slug}`} className="py-2.5 font-bold text-terra-soft hover:text-white">
                                    Ver caso de estudio →
                                </Link>
                                {featured.live && (
                                    <a href={featured.live} target="_blank" rel="noreferrer" className="py-2.5 font-bold text-terra-soft hover:text-white">
                                        Visitar inphera.com.mx ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                )}

                <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
                    {rest.map((project) => (
                        <article key={project.slug} className="lift flex flex-col gap-3.5 rounded-3xl bg-white p-4 pb-7 shadow-[0_2px_0_#E7E0D6]">
                            <div className="relative mb-2 h-40 overflow-hidden rounded-2xl bg-peach">
                                <Image
                                    src={project.img}
                                    alt={project.imageAlt}
                                    fill
                                    sizes="(max-width: 700px) 100vw, 400px"
                                    className={project.imageContain ? "object-contain" : "object-cover object-top"}
                                />
                            </div>
                            <div className="flex flex-col gap-3.5 px-3">
                                <p className="m-0 font-mono text-[13px] text-ink-soft">{project.tag}</p>
                                <h3 className="m-0 font-heading text-2xl font-bold leading-tight">{project.title}</h3>
                                {project.metric && (
                                    <p className="m-0 flex items-baseline gap-2">
                                        <span className="font-heading text-[32px] font-extrabold text-terra">{project.metric.value}</span>
                                        <span className="text-sm text-ink-soft">{project.metric.label}</span>
                                    </p>
                                )}
                                <p className="m-0"><strong className="text-terra">Resultado:</strong> {project.result}</p>
                                <p className="m-0"><strong className="text-terra">Técnico:</strong> {project.technical}</p>
                                <Link href={`/proyecto/${project.slug}`} className="mt-auto py-2.5 font-bold text-terra hover:text-terra-dark">
                                    Ver caso de estudio →
                                </Link>
                            </div>
                        </article>
                    ))}

                    {data.upcoming.map((project) => (
                        <article key={project.title} className="lift flex flex-col gap-3.5 rounded-3xl bg-white p-4 pb-7 shadow-[0_2px_0_#E7E0D6]">
                            <div className="mb-2 flex h-40 items-center justify-center rounded-2xl border-2 border-dashed border-sand-dashed bg-peach text-terra-dark">
                                <svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 11h18" /><path d="m9 16 2 2 4-4" /></svg>
                            </div>
                            <div className="flex flex-col gap-3.5 px-3">
                                <p className="m-0 font-mono text-[13px] text-ink-soft">{project.tag}</p>
                                <h3 className="m-0 font-heading text-2xl font-bold leading-tight">{project.title}</h3>
                                <p className="m-0"><strong className="text-terra">Resultado:</strong> {project.result}</p>
                                <p className="m-0"><strong className="text-terra">Técnico:</strong> {project.technical}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
