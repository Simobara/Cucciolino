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
          setStep(1);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (step === 0 || step >= 3) return;

    const id = window.setTimeout(() => {
      setStep((s) => Math.min(3, s + 1));
    }, 520);

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
            px-4 sm:px-6
            md:pl-10 lg:pl-20
            py-10 sm:py-14 md:py-20
            text-left
            overflow-hidden
          "
        >
          {/* BLOCCO TITOLI */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-2 pl-2 sm:pl-4 md:pl-0">
            {/* ---- LINEA 1 ---- */}
            <h2
              className={`
    text-white uppercase font-oswald font-bold
    text-[clamp(1.55rem,5.2vw,2.55rem)]
    leading-[1] md:leading-[1.15]   // 👈 QUI
    md:scale-y-[1.35]
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
    leading-[1] md:leading-[1.15]   // 👈 QUI
    md:scale-y-[1.35]
    ${baseAnim}
    ${step >= 2 ? show : hide}
  `}
            >
              {/* mobile / tablet stretto: righe controllate manualmente */}
              <span className="block md:hidden">
                <span className="block">MADE WITH TRADITIONAL</span>
                <span className="block mt-3 sm:mt-4">METHODS AND LOVE</span>
              </span>

              {/* desktop: tutto su una riga normale */}
              <span className="hidden md:block">
                MADE WITH TRADITIONAL METHODS AND LOVE
              </span>
            </h2>
          </div>

          {/* ---- SOTTOTITOLO ---- */}
          <p
            className={`
              mt-5 sm:mt-7 md:mt-8
    pl-2 sm:pl-4 md:pl-0
              text-[#2e3192]
              font-sofiapro
              text-[clamp(1.05rem,3.6vw,2rem)]
              leading-[1.1]
              max-w-[42ch] md:max-w-[46ch] lg:max-w-none
              ${baseAnim}
              ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            In a welcoming modern environment,
            <br className="hidden md:block lg:hidden" />
            where everybody feels at home
          </p>
        </div>
      </div>
    </section>
  );
}
