"use client";

import { useEffect, useRef, useState } from "react";

type UseParallaxOpts = {
  strength?: number; // intensità in px
  offset?: number; // offset iniziale
  max?: number; // clamp massimo
};

export function useParallax<T extends HTMLElement>({
  strength = 60,
  offset = 0,
  max = 90,
}: UseParallaxOpts = {}) {
  const ref = useRef<T | null>(null);

  const [y, setY] = useState(0);

  // ✅ di default FALSE, poi lo calcoliamo in client
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => setPrefersReducedMotion(mq.matches);

    apply();

    // compatibilità
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } else {
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      raf = 0;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // progress 0..1 mentre attraversa viewport
      const progress = (vh - rect.top) / (vh + rect.height);
      const centered = progress - 0.5;

      let next = centered * strength + offset;
      next = Math.max(-max, Math.min(max, next));

      setY(next);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion, strength, offset, max]);

  return { ref, y, prefersReducedMotion };
}
