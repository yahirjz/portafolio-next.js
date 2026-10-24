"use client"

import { useState } from "react";
import { getContent } from "@/data/content";
import { getDictionary, type Locale } from "@/lib/i18n";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type Feedback =
    | { status: "idle" }
    | { status: "success"; message: string }
    | { status: "error"; message: string };

// Los valores se mandan a la API; las etiquetas salen del diccionario de cada idioma.
const motivos = ["proyecto", "vacante", "saludo"] as const;

type Motivo = (typeof motivos)[number];

const fieldClass =
    "w-full rounded-xl border-2 border-sand-line bg-cream px-3.5 py-3 text-base font-normal text-ink transition-[border-color,box-shadow] placeholder:text-ink-muted focus:border-terra focus:shadow-[0_0_0_4px_rgba(194,65,12,0.18)] focus:outline-none";

const linkClass =
    "lift flex items-center gap-3 rounded-[14px] bg-white/[0.14] px-4 py-3 font-bold text-white hover:bg-white/20";

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
        <section id={ids.contact} className="mx-auto max-w-[1200px] px-4 pb-24 pt-[72px] sm:px-6">
            <div className="relative flex flex-wrap items-start gap-12 overflow-hidden rounded-[32px] bg-terra p-[clamp(24px,5vw,64px)] text-white">
                <div aria-hidden="true" className="spin-slow absolute -bottom-40 -left-36 h-80 w-80 rounded-full border-[48px] border-dashed border-white opacity-[0.08]" />

                <div className="relative flex min-w-0 flex-[1_1_360px] flex-col gap-5">
                    <p className="m-0 font-mono text-sm text-terra-tint">{t.eyebrow}</p>
                    <h2 className="m-0 font-heading text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05]">{t.title}</h2>
                    <p className="m-0 max-w-[440px] text-lg text-terra-tint">
                        {t.intro}
                    </p>
                    <div className="flex flex-col gap-2.5 pt-2">
                        <a href={data.social.linkedin} target="_blank" rel="noreferrer" className={linkClass}>
                            <FaLinkedin aria-hidden="true" size={20} />
                            <span className="flex-1">LinkedIn</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                        <a href={data.social.github} target="_blank" rel="noreferrer" className={linkClass}>
                            <FaGithub aria-hidden="true" size={20} />
                            <span className="flex-1">GitHub</span>
                            <span aria-hidden="true">↗</span>
                        </a>
                        <a href={data.cv} target="_blank" rel="noreferrer" className="lift flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 font-bold text-ink">
                            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
                            <span className="flex-1">{t.cv}</span>
                            <span className="font-mono text-xs text-ink-soft">PDF</span>
                        </a>
                    </div>
                </div>

                <form
                    onSubmit={sendForm}
                    className="relative flex min-w-0 flex-[999_1_420px] flex-col gap-[18px] rounded-3xl bg-white p-[clamp(20px,3vw,36px)] text-ink shadow-[0_30px_60px_-24px_rgba(41,37,36,0.45)]"
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
                                    <span className="inline-block rounded-full border-2 border-sand-line bg-cream px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-code-key peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-terra-soft">
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

                    <div className="flex flex-wrap items-center justify-between gap-3.5">
                        <span className="font-mono text-[13px] text-ink-soft">{t.commitHint}</span>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex cursor-pointer items-center gap-2.5 rounded-xl border-0 bg-ink px-[26px] py-3.5 text-base font-bold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
                        >
                            {isSubmitting ? t.sending : t.send} <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
