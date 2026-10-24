interface CommitDividerProps {
    /** Fondo de la sección de arriba y de abajo: el separador queda justo en la costura. */
    from: string;
    to: string;
    hash: string;
    command: string;
    target: string;
    label: string;
    highlight?: boolean;
    showCursor?: boolean;
}

/**
 * Separador entre secciones con forma de commit de git.
 * La página se lee como un historial: checkout → merge → push.
 */
const CommitDivider = ({ from, to, hash, command, target, label, highlight = false, showCursor = false }: CommitDividerProps) => {
    return (
        <div
            role="separator"
            aria-label={label}
            className="px-4 sm:px-6"
            style={{ background: `linear-gradient(${from} 50%, ${to} 50%)` }}
        >
            <div className="mx-auto flex max-w-[1200px] items-center">
                <span aria-hidden="true" className="branch-line branch-line-left" />
                <div
                    className={`flex min-w-0 items-center gap-2 sm:gap-3 rounded-full px-4 py-2.5 font-mono text-[13px] sm:px-[22px] sm:py-3 sm:text-[15px] shadow-[0_10px_24px_-12px_rgba(41,37,36,0.5)] transition-transform hover:scale-[1.04] ${
                        highlight ? "bg-terra text-white" : "bg-ink text-code-text"
                    }`}
                >
                    <span
                        aria-hidden="true"
                        className={`inline-block h-3 w-3 shrink-0 rounded-full ${highlight ? "bg-white" : "border-2 border-cream bg-terra"} ${showCursor && !highlight ? "pulse-dot" : ""}`}
                    />
                    <span className={`hidden sm:inline ${highlight ? "text-terra-tint" : "text-code-key"}`}>{hash}</span>
                    <span className="truncate">
                        <span className={highlight ? "" : "text-terra-soft"}>{command}</span> {target}
                    </span>
                    {showCursor && <span className="cursor" aria-hidden="true" style={highlight ? { background: "#fff", height: 16 } : { height: 16 }} />}
                </div>
                <span aria-hidden="true" className="branch-line branch-line-right" />
            </div>
        </div>
    );
};

export default CommitDivider;
