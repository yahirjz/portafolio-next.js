import Image from "next/image";
import { LuArrowRight, LuChevronDown, LuDownload } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const Hero = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.home} className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-night text-white">
            {/* Fondo: luces azul marino y curvas luminosas */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -right-[10%] -top-[20%] h-[80%] w-[70%] rounded-full bg-navy/70 blur-[120px]" />
                <div className="absolute -bottom-[30%] -left-[10%] h-[60%] w-[50%] rounded-full bg-navy/50 blur-[120px]" />
                <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    <path pathLength={1} className="line-draw" d="M-20 860 C 420 760, 820 820, 1460 420" fill="none" stroke="#5b7bbd" strokeOpacity="0.35" strokeWidth="1.2" />
                    <path pathLength={1} className="line-draw" d="M300 920 C 700 800, 1100 760, 1460 560" fill="none" stroke="#5b7bbd" strokeOpacity="0.22" strokeWidth="1" />
                    <path pathLength={1} className="line-draw" d="M-20 700 C 360 640, 640 760, 1000 940" fill="none" stroke="#fca311" strokeOpacity="0.35" strokeWidth="1.2" />
                </svg>
            </div>

            <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 px-5 pb-24 pt-28 sm:px-10 lg:grid-cols-[1.25fr_1fr] lg:gap-0 lg:px-14 lg:py-24">
                <div className="flex flex-col">
                    {/* Nombre y rol */}
                    <div className="rise">
                        <p className="m-0 font-heading text-[13px] font-bold uppercase tracking-[0.3em] text-white">{data.name}</p>
                        <p className="eyebrow m-0 mt-2 flex items-center gap-4 text-white/60">
                            {t.hero.role}
                            <span aria-hidden="true" className="h-[2px] w-16 rounded-full bg-gold" />
                        </p>
                    </div>

                    <h1 className="rise rise-2 m-0 mt-8 font-heading text-[clamp(40px,4.6vw,68px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
                        {t.hero.titleStart} <span className="text-gold">{t.hero.titleHighlight}</span>
                    </h1>
                    <p className="rise rise-2 m-0 mt-6 max-w-[540px] text-[17px] leading-relaxed text-white/70 sm:text-lg">{t.hero.subtitle}</p>

                    <div className="rise rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={`#${t.ids.projects}`}
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gold px-7 py-3.5 font-bold text-night shadow-[0_10px_30px_-10px_rgba(252,163,17,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-gold-hover"
                        >
                            {t.hero.ctaProjects}
                            <LuArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href={data.cv}
                            download
                            className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/35 px-7 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/[0.04]"
                        >
                            <LuDownload aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                            {t.hero.ctaCv}
                        </a>
                    </div>
                </div>

                {/* Pieza protagonista */}
                <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[600px]">
                    {/* Resplandor detrás del cubo */}
                    <div aria-hidden="true" className="absolute inset-[12%] rounded-full bg-gold/15 blur-[80px]" />
                    {/* Marcas técnicas en las esquinas */}
                    <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute -inset-[4%] h-[108%] w-[108%]">
                        <g stroke="#fff" strokeOpacity="0.25" strokeWidth="0.3" fill="none" vectorEffect="non-scaling-stroke">
                            <path d="M0 0 h5 M0 0 v5 M100 0 h-5 M100 0 v5 M0 100 h5 M0 100 v-5 M100 100 h-5 M100 100 v-5" vectorEffect="non-scaling-stroke" />
                        </g>
                    </svg>
                    <Image
                        src="/cubo-jr.webp"
                        alt=""
                        aria-hidden="true"
                        width={1112}
                        height={1022}
                        priority
                        sizes="(min-width: 1024px) 600px, (min-width: 640px) 460px, 360px"
                        className="cube-float relative h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                    />
                </div>
            </div>

            {/* Indicador: sección y desplazarse */}
            <a
                href={`#${t.ids.projects}`}
                className="group absolute bottom-7 left-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-white/50 transition-colors hover:text-white sm:left-10 lg:left-14"
            >
                <span className="font-mono tracking-normal text-gold">01</span>
                <span aria-hidden="true" className="h-px w-10 bg-white/30" />
                {t.hero.scroll}
                <LuChevronDown aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
        </section>
    );
};

export default Hero;
