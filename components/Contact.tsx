"use client"

import { useState } from "react";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight, LuArrowUpRight, LuDownload } from "react-icons/lu";

type Feedback =
    | { status: "idle" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };

// Los valores se mandan a la API; las etiquetas salen del diccionario de cada idioma.
const motivos = ["proyecto", "vacante", "saludo"] as const;

type Motivo = (typeof motivos)[number];

const fieldClass =
    "w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-base font-normal text-white transition-[border-color,box-shadow,background-color] placeholder:text-white/35 hover:border-white/30 focus:border-gold focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(252,163,17,0.18)] focus:outline-none";

const Contact = ({ locale }: { locale: Locale }) => {
    const t = getDictionary(locale).contact;
    const ids = getDictionary(locale).ids;
    const data = getContent(locale);
    const [motivo, setMotivo] = useState<Motivo>("proyecto");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<Feedback>({ status: "idle" });

    const sendForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFeedback({ status: "idle" });

        try {
            const respuesta = await fetch("/api/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, mensaje, motivo }),
            });

            if (!respuesta.ok) {
                setFeedback({
                    status: "error",
                    message: t.errorInvalid,
                });
            } else {
                setFeedback({ status: "success", message: t.success });
                setNombre("");
                setEmail("");
                setMensaje("");
            }
        } catch {
            setFeedback({
                status: "error",
                message: t.errorNetwork,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const links = [
        { href: `https://wa.me/${data.whatsapp}`, label: t.whatsapp, icon: <FaWhatsapp aria-hidden="true" className="size-6" />, external: true },
        { href: data.social.linkedin, label: "LinkedIn", icon: <FaLinkedin aria-hidden="true" className="size-6" />, external: true },
        { href: data.social.github, label: "GitHub", icon: <FaGithub aria-hidden="true" className="size-6" />, external: true },
        { href: data.cv, label: t.cv, icon: <LuDownload aria-hidden="true" className="size-6" />, external: false },
    ];

    return (
        <section id={ids.contact} className="relative isolate overflow-hidden bg-night pb-24 pt-24 text-white sm:pt-28">
            {/* Fondo: luz marina y curvas doradas */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-[10%] top-[10%] h-[60%] w-[50%] rounded-full bg-navy/60 blur-[120px]" />
                <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                    <path d="M-20 820 C 260 700, 420 900, 760 920" fill="none" stroke="#fca311" strokeOpacity="0.45" strokeWidth="1.2" />
                    <path d="M-20 860 C 240 760, 420 930, 700 960" fill="none" stroke="#fca311" strokeOpacity="0.25" strokeWidth="1" />
                    <path d="M600 -20 C 900 160, 1200 120, 1460 300" fill="none" stroke="#5b7bbd" strokeOpacity="0.25" strokeWidth="1" />
                </svg>
            </div>

            <div className="mx-auto max-w-[1320px] px-5 sm:px-10 lg:px-14">
                {/* Cierre */}
                <div data-reveal className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-12">
                    <div>
                        <p className="eyebrow m-0 flex items-center gap-4 text-white/50">
                            <span className="font-mono text-[13px] tracking-normal text-gold">06</span>
                            <span aria-hidden="true" className="h-px w-10 bg-white/30" />
                            {t.eyebrow}
                        </p>
                        <h2 className="m-0 mt-6 font-heading text-[clamp(38px,5vw,76px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
                            {t.closingStart}
                            <br />
                            <span className="text-gold">{t.closingEnd}</span>
                        </h2>
                    </div>
                    <div className="lg:border-l lg:border-white/15 lg:pb-3 lg:pl-10">
                        <p className="m-0 text-lg leading-relaxed text-white/75">{t.closingLead}</p>
                        <p className="m-0 mt-4 flex items-center gap-2 text-[14px] text-white/45">
                            <span aria-hidden="true" className="pulse-gold inline-block size-2 rounded-full bg-gold" />
                            {t.remote}
                        </p>
                    </div>
                </div>

                <div className="mt-14 grid items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
                    {/* Enlaces grandes */}
                    <ul aria-label={t.linksLabel} className="m-0 list-none p-0">
                        {links.map((link, i) => (
                            <li key={link.label} data-reveal data-reveal-delay={String(i * 80)} className="border-b border-white/10">
                                <a
                                    href={link.href}
                                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
                                    className="group flex items-center gap-5 py-6 transition-colors duration-300 hover:text-gold"
                                >
                                    <span className="font-mono text-[12px] text-white/35 transition-colors group-hover:text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="text-white/70 transition-colors group-hover:text-gold">{link.icon}</span>
                                    <span className="flex-1 font-heading text-[clamp(22px,2.4vw,32px)] font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1.5">
                                        {link.label}
                                    </span>
                                    {link.external ? (
                                        <LuArrowUpRight aria-hidden="true" className="size-6 text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
                                    ) : (
                                        <span className="font-mono text-[12px] text-white/40 group-hover:text-gold">PDF</span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Formulario */}
                    <form
                        data-reveal
                        data-reveal-delay="150"
                        onSubmit={sendForm}
                        className="relative flex min-w-0 flex-col gap-5 rounded-[28px] border border-white/10 bg-gradient-to-br from-navy/70 to-navy-deep/60 p-[clamp(20px,3vw,36px)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]"
                    >
                        <span aria-hidden="true" className="absolute left-8 top-0 h-[3px] w-16 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(252,163,17,0.8)]" />
                        <p className="m-0 font-heading text-xl font-semibold">{t.formTitle}</p>
                        <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
                            <legend className="mb-2.5 p-0 text-[14px] font-semibold text-white/70">{t.reasonLegend}</legend>
                            <div className="flex flex-wrap gap-2.5">
                                {motivos.map((m) => (
                                    <label key={m} className="relative cursor-pointer">
                                        <input
                                            type="radio"
                                            name="motivo"
                                            value={m}
                                            checked={motivo === m}
                                            onChange={() => setMotivo(m)}
                                            className="peer absolute h-px w-px opacity-0"
                                        />
                                        <span className="inline-block rounded-full border border-white/20 px-4 py-2 text-[14px] font-semibold text-white/80 transition-colors hover:border-white/50 peer-checked:border-gold peer-checked:bg-gold peer-checked:text-night peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">
                                            {t.reasons[m]}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                            <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-white/80">
                                {t.name}
                                <input type="text" name="nombre" autoComplete="name" required maxLength={100} placeholder={t.namePlaceholder} value={nombre} onChange={(e) => setNombre(e.target.value)} className={fieldClass} />
                            </label>
                            <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-white/80">
                                {t.email}
                                <input type="email" name="email" autoComplete="email" required maxLength={254} placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
                            </label>
                        </div>
                        <label className="flex flex-col gap-1.5 text-[14px] font-semibold text-white/80">
                            {t.message}
                            <textarea name="mensaje" rows={5} required maxLength={5000} placeholder={t.messagePlaceholder} value={mensaje} onChange={(e) => setMensaje(e.target.value)} className={`${fieldClass} resize-y`} />
                        </label>

                        <div aria-live="polite" role="status" className="min-h-6 text-sm font-medium">
                            {feedback.status !== "idle" && (
                                <p className={`m-0 ${feedback.status === "success" ? "text-green-400" : "text-red-400"}`}>{feedback.message}</p>
                            )}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group inline-flex cursor-pointer items-center gap-2.5 rounded-xl border-0 bg-gold px-7 py-3.5 text-base font-bold text-night shadow-[0_10px_30px_-10px_rgba(252,163,17,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-gold-hover disabled:cursor-wait disabled:opacity-60"
                            >
                                {isSubmitting ? t.sending : t.send}
                                <LuArrowRight aria-hidden="true" className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
