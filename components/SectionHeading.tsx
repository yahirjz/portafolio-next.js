/** Etiqueta pequeña con raya naranja + título de sección. */
const SectionHeading = ({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) => (
    <div className="flex flex-col gap-2">
        <p className="m-0 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
            <span aria-hidden="true" className="inline-block h-0.5 w-7 bg-[#FD9B02]" />
            {eyebrow}
        </p>
        <h2 id={id} className="m-0 font-heading text-[clamp(30px,4vw,44px)] font-bold leading-[1.1] text-ink">
            {title}
        </h2>
    </div>
);

export default SectionHeading;
