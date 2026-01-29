"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function LunchDinnerSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    ref: parallaxRef,
    y,
    prefersReducedMotion,
  } = useParallax<HTMLDivElement>({
    strength: 70,
    max: 90,
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // ✅ MOBILE: molto più calmo
  const TEXT_MULT = isMobile ? -2.0 : -2.2;
  const TEXT_MAX = isMobile ? 55 : 140;

  const yTextRaw = y * TEXT_MULT;
  const yText = Math.max(-TEXT_MAX, Math.min(TEXT_MAX, yTextRaw));
  const disableTextParallax = isMobile || prefersReducedMotion;

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
        "bg-[#cadcf2]",
        // ✅ MOBILE: non tagliare con vh fisso
        "h-auto py-8",
        // ✅ DESKTOP: come prima
        "md:h-[50vh] md:py-0",
      ].join(" ")}
    >
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* ✅ IMMAGINE: bordo fisso 10px */}
          <div
            ref={parallaxRef}
            className={[
              "relative w-full",
              "h-[42vh] min-h-75", // ✅ mobile stabile
              "md:h-full md:min-h-0", // ✅ desktop h-full
              "order-1",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            {/* ✅ cornice (colore bordo) */}
            <div className="absolute inset-0 bg-white">
              {/* ⬇️ bordo SEMPRE 10px */}
              <div className="absolute inset-[40px] overflow-hidden">
                <div
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transform: prefersReducedMotion
                      ? "translate3d(0,0,0) scale(1.15)"
                      : `translate3d(0, ${y}px, 0) scale(1.15)`,
                  }}
                >
                  <Image
                    src="/img/pizzapizza1.png"
                    alt="Pizza"
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ✅ TESTO */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-6 flex flex-col justify-center",
              "order-2",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "340ms" }}
          >
            <div
              className={[
                "md:max-w-200 will-change-transform",
                "ml-0 sm:ml-6 md:ml-20",
              ].join(" ")}
              style={{
                transform: disableTextParallax
                  ? "translate3d(0,0,0)"
                  : `translate3d(0, ${yText}px, 0)`,
              }}
            >
              <h2
                className="
                text-[#ef4136]
                font-oswald
                font-bold
                uppercase
                tracking-widest
                leading-none
                inline-block
                origin-center
                scale-y-[1.25]
                text-5xl
                sm:text-6xl
                md:text-6xl
                lg:text-6xl
              "
              >
                COMBO
              </h2>

              <p
                className="
                mt-6 md:mt-10
                text-[#2e3192]
                font-medium
                leading-tight
                text-lg sm:text-xl md:text-2xl
                max-w-[320px]
                sm:max-w-105
                md:max-w-200
              "
              >
                Get the best tasty <br />
                food experience <br />
                with the Combo <br />
                Pizza + Gelato
              </p>

              <div className="mt-12">{/* CTA */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
