import Link from "next/link";
import type { IconType } from "react-icons";
import { LuArrowRight, LuLayoutDashboard, LuRefreshCw, LuUsers } from "react-icons/lu";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/data/content";
import { getDictionary, paths, type Locale } from "@/lib/i18n";

const icons: Record<string, IconType> = { app: LuLayoutDashboard, automation: LuRefreshCw, clients: LuUsers };

const Services = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale);
    const data = getContent(locale);

    return (
        <section id={t.ids.services} className="px-4 py-20 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
                <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />

                <div className="grid gap-5 md:grid-cols-3">
                    {data.services.map((service) => {
                        const Icon = icons[service.icon];
                        const reference = (
                            <>
                                <span className="text-[13px] text-ink-soft">{service.referenceLabel}</span>
                                <strong className="flex-1 text-ink">{service.reference}</strong>
                                {service.slug && <LuArrowRight aria-hidden="true" className="size-4 text-terra" />}
                            </>
                        );
                        return (
                            <div key={service.title} className="flex flex-col gap-3 rounded-[22px] border border-sand-line bg-white p-6">
                                <span className="grid size-12 place-items-center rounded-xl bg-terra-tint text-terra">
                                    {Icon && <Icon aria-hidden="true" className="size-6" />}
                                </span>
                                <h3 className="m-0 font-heading text-[22px] font-bold leading-tight text-ink">{service.title}</h3>
                                <p className="m-0 flex-1 text-ink-soft">{service.description}</p>
                                {service.slug ? (
                                    <Link
                                        href={paths.project(locale, service.slug)}
                                        className="flex items-center gap-2 rounded-xl bg-sand px-3.5 py-3 transition-colors hover:bg-sand-line"
                                    >
                                        {reference}
                                    </Link>
                                ) : (
                                    <p className="m-0 flex items-center gap-2 rounded-xl bg-sand px-3.5 py-3">{reference}</p>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="rounded-[22px] bg-ink-deep p-6 text-white sm:p-8">
                    <h3 className="m-0 font-heading text-2xl font-bold">{t.services.processTitle}</h3>
                    <ol className="m-0 mt-6 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4">
                        {data.process.map((step, index) => (
                            <li key={step.title} className="flex flex-col gap-1.5 border-t-2 border-[#FD9B02] pt-4">
                                <span className="font-mono text-sm text-[#FD9B02]">{String(index + 1).padStart(2, "0")}</span>
                                <strong className="font-heading text-lg">{step.title}</strong>
                                <span className="text-[15px] text-white/70">{step.detail}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Services;
