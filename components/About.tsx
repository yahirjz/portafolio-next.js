import { LuArrowRight } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Composición geométrica: planos inclinados superpuestos (sin fotos). */
const Composition = () => (
    <div aria-hidden="true" className="relative mx-auto aspect-[5/4] w-full max-w-[440px]">
        {/* Plano marino */}
        <div className="absolute left-[6%] top-[8%] h-[78%] w-[58%] -skew-x-[16deg] rounded-[28px] bg-gradient-to-br from-[#22345e] to-navy shadow-[0_30px_60px_-25px_rgba(20,33,61,0.9)]">
            {/* Retícula técnica */}
            <div className="absolute inset-0 rounded-[28px] bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>
        {/* Plano dorado */}
        <div className="absolute left-[30%] top-[22%] h-[66%] w-[44%] -skew-x-[16deg] rounded-[24px] bg-gradient-to-br from-[#ffc04d] via-gold to-[#b86e00] opacity-95 shadow-[0_24px_50px_-20px_rgba(252,163,17,0.8)]" />
        {/* Plano de vidrio */}
        <div className="absolute left-[50%] top-[4%] h-[70%] w-[40%] -skew-x-[16deg] rounded-[24px] border border-white/80 bg-gradient-to-br from-white/70 to-white/20 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.45)]" />
        {/* Línea luminosa */}
        <svg viewBox="0 0 100 80" className="absolute inset-0 h-full w-full overflow-visible">
            <path d="M-4 70 C 30 66, 60 40, 104 10" fill="none" stroke="#fca311" strokeWidth="0.6" />
            <circle cx="62" cy="37.5" r="1.4" fill="#fca311" />
        </svg>
        {/* Marcas */}
        <span className="absolute bottom-0 left-[4%] font-mono text-[11px] tracking-wider text-navy/50">JR — 04</span>
        <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-navy/30" />
        <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-navy/30" />
    </div>
);

const About = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);
    const [first, ...rest] = data.name.split(" ");

    return (
        <section id={t.ids.about} className="relative isolate overflow-hidden bg-night py-10 sm:py-16">
            <div className="relative mx-auto max-w-[1320px] px-3 sm:px-6 lg:px-10">
                {/* Banda clara inclinada */}
                <div aria-hidden="true" className="absolute inset-y-0 -left-[10%] -right-[10%] -skew-x-[6deg] rounded-[40px] bg-mist lg:-left-[4%] lg:right-[2%]" />

                <div className="relative grid items-center gap-10 px-4 py-14 sm:px-8 lg:grid-cols-[0.9fr_1fr_1.2fr] lg:gap-10 lg:px-6 lg:py-20">
                    <div data-reveal>
                        <Composition />
                    </div>

                    <div data-reveal data-reveal-delay="100">
                        <p className="eyebrow m-0 flex items-center gap-3 text-navy/70">
                            <span className="font-mono text-[13px] tracking-normal text-navy">04</span>
                            <span aria-hidden="true" className="h-px w-8 bg-gold" />
                            {t.about.eyebrow}
                        </p>
                        <h2 className="m-0 mt-5 font-heading text-[clamp(44px,5vw,72px)] font-extrabold leading-[0.98] tracking-[-0.04em] text-night">
                            {first}
                            <br />
                            {rest.join(" ")}
                        </h2>
                    </div>

                    <div data-reveal data-reveal-delay="200" className="lg:border-l lg:border-night/15 lg:pl-10">
                        <p className="m-0 text-[17px] leading-relaxed text-[#2b2f38]">
                            {t.about.intro} {data.about.intro}
                        </p>

                        <ol aria-label={t.about.focusLabel} className="m-0 mt-7 grid list-none grid-cols-1 gap-x-6 gap-y-3 p-0 sm:grid-cols-2">
                            {data.about.focus.map((item, i) => (
                                <li key={item.label} className="flex items-baseline gap-3 border-b border-night/10 pb-3 text-[15px] font-semibold text-night">
                                    <span className="font-mono text-[12px] text-[#b06f00]">{String(i + 1).padStart(2, "0")}</span>
                                    {item.label}
                                </li>
                            ))}
                        </ol>

                        <a
                            href={`#${t.ids.experience}`}
                            className="group mt-8 inline-flex items-center gap-2.5 rounded-xl border-2 border-gold px-6 py-3 font-bold text-night transition duration-300 hover:bg-gold"
                        >
                            {t.about.cta}
                            <LuArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
