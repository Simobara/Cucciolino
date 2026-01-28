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
      {
        threshold: 0.25,
        rootMargin: "0px 0px -15% 0px",
      },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#cadcf2] md:h-[50vh] mt-90 mb-0">
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* 🔴 RED BLOCK WITH IMAGE INSIDE */}
          <div
            ref={parallaxRef}
            className={[
              "relative w-full",
              "h-full", // IMPORTANT: usa h-full (non 20vh/min-h)
              "order-1 md:order-2",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            {/* ✅ CORNICE ROSSA FISSA (sempre visibile) */}
            <div className="absolute inset-0 bg-red-500 p-10">
              {/* ✅ BOX IMMAGINE (qui fai overflow hidden) */}
              <div className="relative w-full h-full overflow-hidden">
                {/* ✅ PARALLAX SOLO SULL’IMMAGINE (non sulla cornice) */}
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
                    className="object-contain p-4"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div
            className={[
              "reveal md:mr-12 mr-2 md:px-16 px-8 flex flex-col justify-center min-h-[44vh] md:min-h-0",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "280ms" }}
          >
            <div className="md:max-w-200 ml-20">
              <h2 className="text-[#b42f26] font-oswald uppercase tracking-widest leading-none scale-y-[1.25] text-6xl">
                SPECIALS
              </h2>

              <p className="mt-6 md:mt-10 text-[#2e3192] font-medium leading-tight text-xl max-w-105">
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
