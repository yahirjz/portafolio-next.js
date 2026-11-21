import ProjectShowcase, { type Slide } from "@/components/ProjectShowcase";
import { getContent } from "@/data/content";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const Projects = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const inphera = data.projects.find((p) => p.slug === "inphera");
    const sc = t.projects.showcase;

    const slides: Slide[] = [];
    if (inphera) {
        slides.push({
            id: "inphera",
            label: sc.inphera.label,
            status: sc.inphera.status,
            title: inphera.title,
            logo: inphera.logo,
            summary: inphera.summary,
            tags: sc.inphera.tags,
            image: { src: inphera.img, alt: inphera.imageAlt, width: 1010, height: 672 },
            caseStudy: { href: paths.project(locale, inphera.slug), label: t.projects.caseStudy },
            live: inphera.live ? { href: inphera.live, label: t.projects.visit } : undefined,
        });
    }
    slides.push({
        id: "market-data-collector",
        label: sc.collector.label,
        status: sc.collector.status,
        title: sc.collector.title,
        summary: sc.collector.summary,
        tags: sc.collector.tags,
        flow: sc.collector.flow,
    });
    const clientflow = data.upcoming[0];
    if (clientflow) {
        slides.push({
            id: "jr-clientflow",
            label: sc.clientflow.label,
            status: clientflow.tag,
            title: clientflow.title,
            summary: clientflow.summary,
            tags: clientflow.stack,
            placeholder: sc.clientflow.note,
        });
    }

    return (
        <section id={t.ids.projects} className="relative isolate overflow-hidden bg-night py-24 text-white sm:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-[15%] top-[10%] h-[70%] w-[55%] rounded-full bg-navy/60 blur-[120px]" />
                <div className="absolute -right-[10%] bottom-0 h-[50%] w-[45%] rounded-full bg-navy/40 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-14">
                <p data-reveal className="eyebrow m-0 mb-12 flex items-center gap-4 text-white/50 sm:mb-16">
                    <span className="font-mono text-[13px] tracking-normal text-gold">02</span>
                    <span aria-hidden="true" className="h-px w-10 bg-white/30" />
                    {t.projects.eyebrow}
                </p>
                <div data-reveal>
                    <ProjectShowcase slides={slides} labels={{ prev: t.projects.prev, next: t.projects.next, goTo: t.projects.goTo }} />
                </div>
            </div>
        </section>
    );
};

export default Projects;
