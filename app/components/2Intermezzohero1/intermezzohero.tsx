"use client";
import { useEffect, useRef, useState } from "react";

export default function IntermezzoHero1({ bg = "" }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const anim = visible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-8";

  return (
    <section className={`w-full ${bg}`}>
      {/* wrapper neutro per neutralizzare bg */}
      <div className="w-full">
        <div
          ref={ref}
          className="
            mx-auto w-full max-w-7xl
            px-4 sm:px-6 lg:px-8
            py-14 sm:py-20

            text-left sm:text-left md:text-left

            overflow-hidden
          "
        >
          {/* ---- LINEA 1 ---- */}
          <h2
            className={`
              text-white uppercase font-oswald 
              
              text-[clamp(1.45rem,5vw,2.68rem)]
              leading-[1.08] sm:leading-[0.95] md:leading-[0.9]
              
              tracking-[0.05em] sm:tracking-[0.12em] md:tracking-[0.15em]
              md:scale-y-[1.35]

              transition-all duration-700 ease-out
              motion-reduce:transition-none motion-reduce:transform-none
              ${anim}
              pb-3 sm:pb-4
              `}
            // text-shadow-soft
            style={{ transitionDelay: "150ms" }}
          >
            TASTE OUR HIGH-QUALITY PIZZA,
          </h2>

          {/* ---- LINEA 2 ---- */}
          <h2
            className={`
              text-white uppercase font-oswald 
              
              text-[clamp(1.35rem,4.6vw,2.65rem)]
              leading-[1.1] sm:leading-[0.95] md:leading-[0.85]

              tracking-[0.02em] sm:tracking-tight
              md:scale-y-[1.35]

              transition-all duration-700 ease-out
              motion-reduce:transition-none motion-reduce:transform-none
              ${anim}
              `}
            style={{ transitionDelay: "320ms" }}
          >
            {/* text-shadow-soft */}
            MADE WITH TRADITIONAL METHODS AND LOVE
          </h2>

          {/* ---- SOTTOTITOLO ---- */}
          <p
            className={`
              mt-6 sm:mt-8
              text-[#2e3192]
              font-sofiapro
              text-[clamp(1.1rem,3.2vw,2.25rem)]
              leading-snug
              max-w-[36ch] lg:max-w-none

              transition-all duration-700 ease-out
              motion-reduce:transition-none motion-reduce:transform-none
              ${anim}
            `}
            style={{ transitionDelay: "520ms" }}
          >
            In a welcoming modern environment, where everybody feels at home
          </p>
        </div>
      </div>
    </section>
  );
}
