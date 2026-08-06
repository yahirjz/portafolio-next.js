import { useEffect, useState } from "react";

const getInitial = () =>
  typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(getInitial);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
};
