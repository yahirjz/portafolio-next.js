"use client"

import { useState } from "react";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { LuArrowRight, LuArrowUpRight, LuDownload, LuMail } from "react-icons/lu";

type Feedback =
    | { status: "idle" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };

// Los valores se mandan a la API; las etiquetas salen del diccionario de cada idioma.
const motivos = ["proyecto", "vacante", "saludo"] as const;

type Motivo = (typeof motivos)[number];

const fieldClass =
    "w-full rounded-xl border-2 border-sand-line bg-cream px-3.5 py-3 text-base font-normal text-ink transition-[border-color,box-shadow] placeholder:text-ink-muted focus:border-[#FD9B02] focus:shadow-[0_0_0_4px_rgba(253,155,2,0.2)] focus:outline-none";

const linkClass =
    "flex items-center gap-3 rounded-[14px] border border-sand-line bg-white px-4 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:border-[#FD9B02]/60";

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

    return (
        <section className="px-4 pb-20 pt-6 sm:px-6">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
                {/* Franja final */}
                <div className="grid items-center gap-5 rounded-[28px] bg-ink-deep p-7 text-white sm:p-9 lg:grid-cols-[1fr_1px_1.2fr_auto] lg:gap-8">
                    <p className="m-0 font-heading text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.1]">
                        {t.ctaTitleStart} <span className="text-[#FD9B02]">{t.ctaTitleHighlight}</span> {t.ctaTitleEnd}
                    </p>
                    <span aria-hidden="true" className="hidden h-16 bg-white/20 lg:block" />
                    <p className="m-0 text-white/75">{t.ctaText}</p>
                    <a
                        href={`#${ids.contact}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FD9B02] px-6 py-3.5 font-bold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:bg-[#FFAE2E]"
                    >
                        <LuMail aria-hidden="true" className="size-5" />
                        {t.ctaButton}
                        <LuArrowUpRight aria-hidden="true" className="size-4" />
                    </a>
                </div>

            <div id={ids.contact} className="grid scroll-mt-24 items-start gap-10 lg:grid-cols-[0.9fr_1.3fr]">
                <div className="flex min-w-0 flex-col gap-4">
                    <p className="m-0 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                        <span aria-hidden="true" className="inline-block h-0.5 w-7 bg-[#FD9B02]" />
                        {t.eyebrow}
                    </p>
                    <h2 className="m-0 font-heading text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] text-ink">{t.title}</h2>
                    <p className="m-0 max-w-[440px] text-lg text-ink-soft">{t.intro}</p>
                    <div className="flex flex-col gap-2.5 pt-2">
                        <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <FaWhatsapp aria-hidden="true" size={20} className="text-[#25D366]" />
                            <span className="flex-1">{t.whatsapp}</span>
                            <LuArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <FaLinkedin aria-hidden="true" size={20} className="text-[#0A66C2]" />
                            <span className="flex-1">LinkedIn</span>
                            <LuArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                        <a href={data.social.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                            <FaGithub aria-hidden="true" size={20} />
                            <span className="flex-1">GitHub</span>
                            <LuArrowUpRight aria-hidden="true" className="size-4" />
                        </a>
                        <a href={data.cv} download className="flex items-center gap-3 rounded-[14px] bg-ink-deep px-4 py-3 font-bold text-white transition hover:-translate-y-0.5">
                            <LuDownload aria-hidden="true" className="size-5" />
                            <span className="flex-1">{t.cv}</span>
                            <span className="font-mono text-xs text-white/60">PDF</span>
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={sendForm}
                    className="flex min-w-0 flex-col gap-[18px] rounded-3xl border border-sand-line bg-white p-[clamp(20px,3vw,36px)] text-ink"
                >
                    <fieldset className="m-0 flex flex-col gap-2.5 border-0 p-0">
                        <legend className="mb-2.5 p-0 text-[15px] font-bold">{t.reasonLegend}</legend>
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
                                    <span className="inline-block rounded-full border-2 border-sand-line bg-cream px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-code-key peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#FD9B02]">
                                        {t.reasons[m]}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
                        <label className="flex flex-col gap-1.5 text-[15px] font-bold">
                            {t.name}
                            <input type="text" name="nombre" autoComplete="name" required maxLength={100} placeholder={t.namePlaceholder} value={nombre} onChange={(e) => setNombre(e.target.value)} className={fieldClass} />
                        </label>
                        <label className="flex flex-col gap-1.5 text-[15px] font-bold">
                            {t.email}
                            <input type="email" name="email" autoComplete="email" required maxLength={254} placeholder={t.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className={fieldClass} />
                        </label>
                    </div>
                    <label className="flex flex-col gap-1.5 text-[15px] font-bold">
                        {t.message}
                        <textarea name="mensaje" rows={5} required maxLength={5000} placeholder={t.messagePlaceholder} value={mensaje} onChange={(e) => setMensaje(e.target.value)} className={`${fieldClass} resize-y`} />
                    </label>

                    <div aria-live="polite" role="status" className="min-h-6 text-sm font-medium">
                        {feedback.status !== "idle" && (
                            <p className={`m-0 ${feedback.status === "success" ? "text-green-700" : "text-red-700"}`}>{feedback.message}</p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border-0 bg-[#FD9B02] px-[26px] py-3.5 text-base font-bold text-[#0B0D0F] transition hover:-translate-y-0.5 hover:bg-[#FFAE2E] disabled:cursor-wait disabled:opacity-60"
                        >
                            {isSubmitting ? t.sending : t.send} <LuArrowRight aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    );
};

export default Contact;
