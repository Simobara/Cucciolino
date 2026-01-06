"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function LunchDinnerSection() {
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
        }, 350); // ✅ ritardo reale (cinematic)
      },
      {
        threshold: 0.45, // ✅ deve essere ben dentro lo schermo
        rootMargin: "0px 0px -35% 0px", // ✅ trigger più tardi
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
          {/* IMAGE PARALLAX */}
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
              <Image
                src="/img/lunch.png"
                alt="Lunch & Dinner"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "340ms" }}
          >
            <h2 className="text-[#0F5B63] font-semibold leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              LUNCH <br /> &amp; DINNER
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              From stone-baked pizzas to handcrafted cocktails, our menu is
              designed to impress any time of day.
            </p>

            <div className="mt-12">
              <Link
                href="/menu"
                className="bg-[#0F5B63] text-white px-12 py-4 text-lg font-semibold hover:brightness-110 transition"
              >
                FOOD MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
