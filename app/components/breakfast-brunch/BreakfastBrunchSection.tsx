"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function BreakfastBrunchSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const images = [
    "/img/pizzapizza1.png",
    // "/img/breakfast1.png",
    // "/img/breakfast2.png",
    // "/img/breakfast3.png",
  ];

  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    // parte solo quando la sezione è visibile (così non sprechi risorse)
    if (!visible) return;

    const id = window.setInterval(() => {
      setActiveImg((i) => (i + 1) % images.length);
    }, 800); // durata prima del cambio (ms)

    return () => window.clearInterval(id);
  }, [visible, images.length]);

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

        // ✅ ritardo più lungo dopo che la sezione è davvero entrata
        timeout = window.setTimeout(() => {
          setVisible(true);
          observer.disconnect();
        }, 150); // <-- aumenta/diminuisci qui (es: 500–900)
      },
      {
        // ✅ trigger più tardi: serve più porzione visibile
        threshold: 0.25,

        // ✅ trigger più tardi: considera "intersecting" solo quando è più dentro
        // (valori più negativi = ancora più tardi)
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
    <section ref={sectionRef} className="bg-[#F6E6D4] h-full mt-90">
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* TEXT LEFT */}
          <div
            className={[
              "reveal px-4 ml-24 sm:px-8 py-6 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "280ms" }}
          >
            <h2 className="text-[#b42f26] font-semibold leading-[0.9] text-5xl sm:text-7xl text-shadow-soft">
              APPETIZER <br /> & BRUNCH
            </h2>

            <p className="mt-10 text-[#76aad8] text-xl leading-relaxed max-w-xl text-justify text-balance pr-12">
              Transport yourself to the sun-kissed shores of the Mediterranean
              as you embark on a brunch journey at Cucciolino. Immerse yourself
              in the vibrant flavours of Mediterranean spices, house-made
              breads, and freshly brewed hot coffee.
            </p>

            <div className="mt-12 flex flex-col gap-6 max-w-sm">
              <Link
                href="/menu#brunch"
                className="bg-[#76aad8] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
              >
                BRUNCH MENU
              </Link>

              <Link
                href="/menu#drinks"
                className="bg-[#76aad8] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
              >
                DRINK MENU
              </Link>
            </div>
          </div>

          {/* IMAGE RIGHT – riempie tutta l'altezza della sezione */}
          <div
            ref={parallaxRef}
            className={[
              "reveal relative h-full w-full overflow-hidden",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: prefersReducedMotion
                  ? "translate3d(0,0,0)"
                  : `translate3d(0, ${y}px, 0) scale(1.2)`, // immagine più grande, ma l'altezza la dà il container
              }}
            >
              {images.map((src, idx) => {
                const isActive = idx === activeImg;

                return (
                  <Image
                    key={src}
                    src={src}
                    alt="Breakfast & Brunch"
                    fill
                    priority={idx === 0}
                    className={[
                      "object-cover absolute inset-0",
                      "transition-opacity duration-700 ease-in-out",
                      isActive ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
