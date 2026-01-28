"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function BreakfastBrunchSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const {
    ref: parallaxRef,
    y,
    prefersReducedMotion,
  } = useParallax<HTMLDivElement>({
    strength: 70,
    max: 90,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let timeout: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        timeout = window.setTimeout(() => {
          setVisible(true);
          observer.disconnect();
        }, 150);
      },
      { threshold: 0.25, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={[
        "bg-[#cadcf2] mt-0 mb-0",
        // ✅ mobile: niente altezza fissa che taglia
        "h-auto py-8",
        // ✅ desktop: IDENTICO a prima
        "md:h-[50vh] md:py-0",
      ].join(" ")}
    >
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* 🔴 RED BLOCK WITH IMAGE INSIDE */}
          <div
            ref={parallaxRef}
            className={[
              "relative w-full",
              // ✅ mobile: altezza reale per far funzionare h-full dentro
              "h-[42vh] min-h-[300px]",
              // ✅ desktop: come prima
              "md:h-full md:min-h-0",
              "order-1 md:order-2",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            <div className="absolute inset-0 bg-red-500 p-4 sm:p-6 md:p-10">
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transform: prefersReducedMotion
                      ? "translate3d(0,0,0)"
                      : `translate3d(0, ${y}px, 0) scale(1.2)`,
                  }}
                >
                  <Image
                    src="/img/pizzapizza1.png"
                    alt="Pizza"
                    fill
                    priority
                    className="object-contain p-3 sm:p-4"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div
            className={[
              // ✅ tolto min-h aggressivo: su mobile la section cresce in base al contenuto
              "reveal flex flex-col justify-center",
              // ✅ spazi: desktop come prima, mobile più morbido
              "mr-2 md:mr-12 px-6 sm:px-8 md:px-16",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "280ms" }}
          >
            <div className="md:max-w-200 ml-0 sm:ml-6 md:ml-20">
              <h2 className="text-[#b42f26] font-oswald uppercase tracking-widest leading-none scale-y-[1.25] text-5xl sm:text-6xl md:text-6xl">
                SPECIALS
              </h2>

              <p className="mt-6 md:mt-10 text-[#2e3192] font-medium leading-tight text-lg sm:text-xl md:text-xl max-w-[320px] sm:max-w-105">
                Transport yourself to the <br />
                sun-kissed shores of <br />
                the Mediterranean <br />
                as you embark on a <br />
                lunch journey at Cucciolino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
