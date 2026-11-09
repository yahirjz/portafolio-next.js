import type { IconType } from "react-icons";
import { LuArrowRight, LuCodeXml, LuLayers, LuRocket, LuSearch } from "react-icons/lu";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";

const icons: Record<string, IconType> = { search: LuSearch, layers: LuLayers, code: LuCodeXml, rocket: LuRocket };

/** Bloque "De la idea al producto": cómo trabajo, en 4 pasos. */
const Process = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.process} className="px-4 pt-14 sm:px-6">
            <div data-reveal className="relative mx-auto grid max-w-[1200px] items-center gap-8 overflow-hidden rounded-[28px] bg-ink-deep p-7 text-white sm:p-9 lg:grid-cols-[0.9fr_1px_2fr] lg:gap-10">
                <span aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#FD9B02] opacity-[0.12] blur-3xl" />
                <div>
                    <p className="m-0 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-white/70">
                        <span aria-hidden="true" className="inline-block h-0.5 w-7 bg-[#FD9B02]" />
                        {t.process.eyebrow}
                    </p>
                    <h2 className="m-0 mt-2 font-heading text-[clamp(28px,3vw,36px)] font-bold leading-tight">{t.process.title}</h2>
                    <p className="m-0 mt-3 text-white/70">{t.process.intro}</p>
                </div>
                <span aria-hidden="true" className="hidden h-full bg-white/15 lg:block" />
                <ol className="m-0 grid list-none grid-cols-2 gap-4 p-0 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center lg:gap-0">
                    {data.process.map((step, index) => {
                        const Icon = icons[step.icon];
                        return (
                            <li key={step.title} className="flex lg:contents">
                                <div data-reveal data-reveal-delay={String(200 + index * 130)} className="flex h-full flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-[#FD9B02]/60 bg-gradient-to-b from-[#2A1D0B] to-[#16130F] px-3 py-5 text-center shadow-[0_0_24px_-6px_rgba(253,155,2,0.45),inset_0_1px_0_rgba(255,255,255,0.06)]">
                                    {Icon && <Icon aria-hidden="true" className="size-9 text-[#FD9B02] drop-shadow-[0_0_8px_rgba(253,155,2,0.6)]" />}
                                    <p className="m-0 text-[15px] font-bold leading-tight">
                                        <span className="text-[#FD9B02]">{String(index + 1).padStart(2, "0")}.</span> {step.title}
                                    </p>
                                </div>
                                {index < data.process.length - 1 && (
                                    <LuArrowRight aria-hidden="true" className="mx-2 hidden size-6 shrink-0 text-[#FD9B02] lg:block" />
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default Process;
