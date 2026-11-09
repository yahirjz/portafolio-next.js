"use client"
import { useEffect } from "react";

/**
 * Hace aparecer con un desvanecido los elementos marcados con `data-reveal`
 * cuando entran en pantalla. `data-reveal-delay` (en ms) escalona varios elementos.
 * Si el usuario pide "reducir movimiento" o no hay JavaScript, todo se ve normal.
 */
export default function ScrollReveal() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const root = document.documentElement;
        const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
        items.forEach((el) => {
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
        });
        root.classList.add("reveal-ready");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
        );
        items.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            root.classList.remove("reveal-ready");
        };
    }, []);

    return null;
}
