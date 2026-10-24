import Link from "next/link";
import { data } from "@/data/data";

const icons: Record<string, React.ReactNode> = {
    app: (
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
    ),
    automation: (
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    calendar: (
        <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M3 11h18" /><path d="m9 16 2 2 4-4" /></svg>
    ),
};

const Services = () => {
    return (
        <section id="servicios" className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 py-24 sm:px-6">
            <div className="flex flex-col gap-2">
                <p className="m-0 font-mono text-sm text-terra">02 — Servicios</p>
                <h2 className="m-0 font-heading text-[clamp(32px,4vw,48px)] font-bold leading-[1.1]">Cómo puedo ayudarte</h2>
            </div>

            <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
                {data.services.map((service) => (
                    <div key={service.title} className="lift flex flex-col gap-3.5 rounded-3xl border border-sand-line bg-white p-7">
                        <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-peach text-terra">
                            {icons[service.icon]}
                        </span>
                        <h3 className="m-0 font-heading text-2xl font-bold leading-tight">{service.title}</h3>
                        <p className="m-0 text-ink-soft">{service.description}</p>
                        <Link
                            href={service.href}
                            className="mt-auto flex items-center gap-2.5 rounded-xl bg-sand px-3.5 py-3 text-[15px] text-ink transition-colors hover:bg-sand-line"
                        >
                            <span className="font-mono text-xs text-ink-soft">{service.referenceLabel}</span>
                            <strong className="flex-1">{service.reference}</strong>
                            <span className="text-terra" aria-hidden="true">→</span>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-8 rounded-[28px] bg-ink p-7 text-cream sm:p-12">
                <div className="flex flex-wrap items-end justify-between gap-3">
                    <h3 className="m-0 font-heading text-[clamp(26px,3vw,34px)] font-bold">Así trabajamos juntos</h3>
                    <p className="m-0 font-mono text-[13px] text-code-key">git log --oneline</p>
                </div>
                <ol className="m-0 grid list-none gap-6 p-0 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                    {data.process.map((step, index) => (
                        <li
                            key={step.title}
                            className={`flex flex-col gap-2.5 border-t-[3px] border-terra pt-[18px] ${index < data.process.length - 1 ? "border-dashed" : "border-solid"}`}
                        >
                            <span className="font-mono text-[13px] text-terra-soft">
                                {String(index + 1).padStart(2, "0")} · {step.hash}
                            </span>
                            <strong className="font-heading text-xl">{step.title}</strong>
                            <span className="text-[15px] text-[#D6D3D1]">{step.detail}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Services;
