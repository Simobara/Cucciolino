"use client";
import { useEffect, useRef, useState } from "react";

export default function IntermezzoHero1({ bg = "" }) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 0 = nulla, 1 = linea1, 2 = linea2, 3 = sottotitolo
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // avvia sequenza UNA VOLTA
          setStep(1);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // sequenza lenta “piano piano”
  useEffect(() => {
    if (step === 0) return;
    if (step >= 3) return;

    const id = window.setTimeout(() => setStep((s) => Math.min(3, s + 1)), 520);
    return () => window.clearTimeout(id);
  }, [step]);

  const baseAnim =
    "transition-all duration-[1100ms] ease-out motion-reduce:transition-none motion-reduce:transform-none";

  const show = "opacity-100 translate-y-0";
  const hide = "opacity-0 translate-y-10";

  return (
    <section className={`w-full ${bg}`}>
      <div className="w-full">
        <div
          ref={ref}
          className="
            mx-auto w-full max-w-7xl
            px-4 sm:px-6 lg:px-8
            py-10 sm:py-14 md:py-20
            text-left
            overflow-hidden
            md:ml-40
          "
        >
          {/* ---- LINEA 1 ---- */}
          <h2
            className={`
              text-white uppercase font-oswald font-bold
              text-[clamp(1.55rem,5.2vw,2.55rem)]
              leading-[1.06] sm:leading-[0.98] md:leading-[0.9]
              md:scale-y-[1.35]
              pb-3 sm:pb-4
              ${baseAnim}
              ${step >= 1 ? show : hide}
            `}
          >
            TASTE OUR HIGH-QUALITY PIZZA,
          </h2>

          {/* ---- LINEA 2 ---- */}
          <h2
            className={`
              text-white uppercase font-oswald font-bold
              text-[clamp(1.45rem,4.9vw,2.40rem)]
              leading-[1.08] sm:leading-[0.98] md:leading-[0.85]
              md:scale-y-[1.35]
              ${baseAnim}
              ${step >= 2 ? show : hide}
            `}
          >
            MADE WITH TRADITIONAL METHODS AND LOVE
          </h2>

          {/* ---- SOTTOTITOLO ---- */}
          <p
            className={`
              mt-5 sm:mt-7 md:mt-8
              text-[#2e3192]
              font-sofiapro
              text-[clamp(1.05rem,3.6vw,2rem)]
              leading-snug
              max-w-[42ch] md:max-w-[46ch] lg:max-w-none
              ${baseAnim}
              ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            In a welcoming modern environment, where everybody feels at home
          </p>
        </div>
      </div>
    </section>
  );
}
