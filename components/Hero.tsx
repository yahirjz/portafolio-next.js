import { LuArrowRight, LuDownload } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

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

            <div className="relative mx-auto max-w-[1200px] px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-44">
                <div className="flex max-w-[760px] flex-col gap-6">
                    <p className="m-0 inline-flex items-center gap-2 self-start rounded-full border border-white/25 px-3.5 py-1.5 text-sm font-medium text-white/90">
                        <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#22C55E]" aria-hidden="true" />
                        {t.hero.badge}
                    </p>
                    <h1 className="rise m-0 font-heading text-[clamp(40px,6vw,76px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
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
            </div>
        </section>
    );
};

export default Hero;
