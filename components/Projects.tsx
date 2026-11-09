import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuFileCheck, LuStar, LuUsers } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/data/content";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const getStack = (description: string) => {
    const parts = description.split("Stack:");
    return parts.length > 1 ? parts[1].split("·").map((s) => s.trim()).filter(Boolean) : [];
};

const Tag = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
    <span
        className={`rounded-full px-3 py-1 text-[13px] font-medium ${
            dark ? "border border-white/25 text-white/90" : "border border-sand-line bg-sand text-ink-soft"
        }`}
    >
        {children}
    </span>
);

const Projects = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const featured = data.projects.find((p) => p.featured);
    const rest = data.projects.filter((p) => !p.featured);

    return (
        <section id={t.ids.projects} className="px-4 pb-24 pt-8 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
                <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

                {featured && (
                    <article className="grid items-center gap-8 rounded-[28px] bg-[#16132A] p-5 text-white sm:p-8 lg:grid-cols-[1.15fr_1fr]">
                        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0F0D1E]">
                            <div aria-hidden="true" className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5 font-mono text-xs text-white/50">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#F87171]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#FBBF24]" />
                                <span className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
                                <span className="ml-2">inphera.com.mx</span>
                            </div>
                            <div className="relative aspect-[16/10]">
                                <Image
                                    src={featured.img}
                                    alt={featured.imageAlt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                    className={featured.imageContain ? "object-contain" : "object-cover"}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="m-0 inline-flex items-center gap-1.5 self-start rounded-full bg-[#FD9B02] px-3 py-1 text-sm font-bold text-[#0B0D0F]">
                                <LuStar aria-hidden="true" className="size-4" />
                                {featured.tag}
                            </p>
                            <h3 className="m-0 font-heading text-[clamp(36px,4vw,48px)] font-extrabold leading-none">{featured.title}</h3>
                            <p className="m-0 text-lg text-white/80">{featured.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                {getStack(featured.description).map((tech) => <Tag key={tech} dark>{tech}</Tag>)}
                            </div>
                            <Link
                                href={paths.project(locale, featured.slug)}
                                className="group inline-flex items-center gap-2 self-start py-2 font-bold text-[#FD9B02] hover:text-[#FFB840]"
                            >
                                {t.projects.caseStudy}
                                <LuArrowRight aria-hidden="true" className="size-5 transition group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </article>
                )}

                <div className="grid gap-5 md:grid-cols-2">
                    {rest.map((project) => (
                        <Link
                            key={project.slug}
                            href={paths.project(locale, project.slug)}
                            className="group flex flex-col gap-3 rounded-[22px] border border-sand-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#FD9B02]/60"
                        >
                            <LuFileCheck aria-hidden="true" className="size-8 text-terra" />
                            <div>
                                <h3 className="m-0 font-heading text-2xl font-bold text-ink">{project.title}</h3>
                                <p className="m-0 mt-1 text-sm font-semibold text-ink-soft">{project.tag}</p>
                            </div>
                            <p className="m-0 flex-1 text-ink-soft">{project.result}</p>
                            <div className="flex items-end justify-between gap-3">
                                <div className="flex flex-wrap gap-2">
                                    {getStack(project.description).slice(0, 4).map((tech) => <Tag key={tech}>{tech}</Tag>)}
                                </div>
                                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-terra-tint text-terra transition group-hover:translate-x-1">
                                    <LuArrowRight aria-hidden="true" className="size-5" />
                                </span>
                            </div>
                        </Link>
                    ))}

                    {data.upcoming.map((project) => (
                        <article key={project.title} className="flex flex-col gap-3 rounded-[22px] border-2 border-dashed border-sand-dashed p-6">
                            <LuUsers aria-hidden="true" className="size-8 text-terra" />
                            <div className="flex flex-wrap items-center gap-2">
                                <h3 className="m-0 font-heading text-2xl font-bold text-ink">{project.title}</h3>
                                <span className="rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-ink-soft">{project.tag}</span>
                            </div>
                            <p className="m-0 flex-1 text-ink-soft">{project.summary}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
