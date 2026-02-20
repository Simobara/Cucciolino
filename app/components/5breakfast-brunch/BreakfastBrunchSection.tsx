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
      className={["mt-0 mb-0", "h-auto py-8", "md:h-[50vh] md:py-0"].join(" ")}
      style={{
        backgroundImage: `
      linear-gradient(rgba(202,220,242,0.45), rgba(202,220,242,0.45)),
      url('/iconsss/picsAzzurra2.png')
    `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* 🔴 RED BLOCK WITH IMAGE INSIDE */}
          <div
            ref={parallaxRef}
            className={[
              "relative w-full",
              "h-[42vh] min-h-75",
              "md:h-full md:min-h-0",
              "order-1 md:order-2",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            {/* ✅ niente rosso: l'immagine copre tutto */}
            <div className="absolute inset-0 overflow-hidden">
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
                  className="object-cover object-center"
                />
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
              <h2
                className="text-[#ef4136]
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
                SPECIALS
              </h2>

              <p
                className="mt-6 md:mt-10 text-[#2e3192] font-sofiapro 
              leading-tight text-lg sm:text-xl md:text-2xl max-w-[320px] sm:max-w-105  md:max-w-200"
              >
                {/* font-medium  */}
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
