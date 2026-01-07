"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function BreakfastBrunchSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const images = [
    "/img/breakfast.png",
    "/img/breakfast1.png",
    "/img/breakfast2.png",
    "/img/breakfast3.png",
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
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* TEXT */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "340ms" }}
          >
            <h2 className="text-[#0F5B63] font-semibold leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              BREAKFAST <br /> &amp; BRUNCH
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              Transport yourself to the sun-kissed shores of the Mediterranean
              as you embark on a brunch journey at Cucciolino.
            </p>

            <div className="mt-12 flex flex-col gap-5 max-w-xs">
              <Link
                href="/menu#brunch"
                className="bg-[#0F5B63] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
              >
                BRUNCH MENU
              </Link>

              <Link
                href="/menu#drinks"
                className="bg-[#0F5B63] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
              >
                DRINK MENU
              </Link>
            </div>
          </div>

          {/* IMAGE PARALLAX + FADE SLIDESHOW */}
          <div
            ref={parallaxRef}
            className={[
              "reveal relative min-h-95 md:min-h-160 overflow-hidden",
              visible ? "is-visible" : "",
            ].join(" ")}
          >
            <div
              className="absolute inset-0 will-change-transform"
              style={{
                transform: prefersReducedMotion
                  ? "translate3d(0,0,0)"
                  : `translate3d(0, ${y}px, 0) scale(1.08)`,
              }}
            >
              {/* immagini sovrapposte */}
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
                      "transition-opacity duration-1000 ease-in-out",
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
