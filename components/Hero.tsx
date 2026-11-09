import type { IconType } from "react-icons";
import { LuArrowRight, LuBrainCircuit, LuCodeXml, LuDatabase, LuDownload, LuMonitor, LuServer } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Tarjeta del diagrama de la portada. */
const Node = ({ icon: Icon, title, detail, className }: { icon: IconType; title: string; detail: string; className: string }) => (
    <li className={`absolute flex items-center gap-3 rounded-2xl border border-white/15 bg-[#14171A] px-4 py-3 ${className}`}>
        <Icon aria-hidden="true" className="size-8 shrink-0 text-[#FD9B02]" />
        <span>
            <span className="block font-heading text-[17px] font-bold leading-tight">{title}</span>
            <span className="block text-[13px] text-white/60">{detail}</span>
        </span>
    </li>
);

const Hero = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.home} className="relative overflow-hidden rounded-b-[40px] bg-[#0B0D0F] text-white sm:rounded-b-[64px]">
            {/* Rayos diagonales tenues (decorativos) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <span className="absolute -top-20 right-[22%] h-[140%] w-16 rotate-[35deg] bg-[#FD9B02] opacity-[0.07] sm:w-24" />
                <span className="absolute -top-20 right-[10%] h-[140%] w-10 rotate-[35deg] bg-[#FD9B02] opacity-[0.05] sm:w-16" />
                <span className="absolute -top-20 right-0 h-[140%] w-8 rotate-[35deg] bg-[#FD9B02] opacity-[0.035] sm:w-12" />
            </div>

            <div className="relative mx-auto max-w-[1200px] px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
                <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
                <div className="flex max-w-[760px] flex-col gap-6">
                    <p className="m-0 inline-flex items-center gap-2 self-start rounded-full border border-white/25 px-3.5 py-1.5 text-sm font-medium text-white/90">
                        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                        {t.hero.badge}
                    </p>
                    <h1 className="rise m-0 font-heading text-[clamp(40px,5vw,64px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
                        {t.hero.titleStart} <span className="text-[#FD9B02]">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="rise rise-2 m-0 max-w-[600px] text-xl text-white/80">{t.hero.subtitle}</p>
                    <div className="rise rise-3 flex flex-col gap-3 pt-2 sm:flex-row">
                        <a
                            href={`#${t.ids.projects}`}
                            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FD9B02] px-6 py-3.5 font-bold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:bg-[#FFAE2E]"
                        >
                            {t.hero.ctaProjects}
                            <LuArrowRight aria-hidden="true" className="size-5" />
                        </a>
                        <a
                            href={data.cv}
                            download
                            className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/40 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:border-white/70"
                        >
                            <LuDownload aria-hidden="true" className="size-5" />
                            {t.hero.ctaCv}
                        </a>
                    </div>
                </div>

                {/* Diagrama: áreas en las que trabajo (solo escritorio) */}
                <div className="relative mx-auto hidden h-[400px] w-full max-w-[500px] lg:block" role="img" aria-label={`${t.hero.diagram.label}: ${t.hero.diagram.frontend}, ${t.hero.diagram.backend}, ${t.hero.diagram.data}, ${t.hero.diagram.ai}`}>
                    <svg aria-hidden="true" viewBox="0 0 500 400" className="absolute inset-0 h-full w-full" fill="none">
                        <rect x="95" y="60" width="310" height="280" rx="48" stroke="#FD9B02" strokeOpacity="0.45" strokeWidth="2" />
                    </svg>
                    <div aria-hidden="true" className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-[#FD9B02]/50 bg-[#1A1610]">
                        <LuCodeXml className="size-11 text-[#FD9B02]" />
                    </div>
                    <ul aria-hidden="true" className="m-0 list-none p-0">
                        <Node icon={LuMonitor} title={t.hero.diagram.frontend} detail="Next.js · React · Tailwind" className="left-1/2 top-0 -translate-x-1/2" />
                        <Node icon={LuServer} title={t.hero.diagram.backend} detail="Node.js · FastAPI" className="right-0 top-1/2 -translate-y-1/2" />
                        <Node icon={LuDatabase} title={t.hero.diagram.data} detail="PostgreSQL · Supabase" className="bottom-0 left-1/2 -translate-x-1/2" />
                        <Node icon={LuBrainCircuit} title={t.hero.diagram.ai} detail="Claude API · Python" className="left-0 top-1/2 -translate-y-1/2" />
                    </ul>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
