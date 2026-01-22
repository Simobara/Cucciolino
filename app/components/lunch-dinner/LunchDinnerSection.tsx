"use client";

import Image from "next/image";
import Link from "next/link";
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

  // ✅ rileva mobile (solo client)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // ✅ MOBILE: molto più calmo
  const TEXT_MULT = isMobile ? -2.0 : -2.2; // prova -1.0 / -1.2 su mobile
  const TEXT_MAX = isMobile ? 55 : 140; // clamp più basso su mobile

  const yTextRaw = y * TEXT_MULT;
  const yText = Math.max(-TEXT_MAX, Math.min(TEXT_MAX, yTextRaw));

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
    <section ref={sectionRef} className="bg-[#F6E6D4] h-full">
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* IMAGE PARALLAX RIGHT (o left se vuoi invertire) */}
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
                  : `translate3d(0, ${y}px, 0) scale(1.2)`,
              }}
            >
              <Image
                src="/img/lunch1.png"
                alt="Lunch & Dinner"
                fill
                priority={false}
                className="object-cover absolute inset-0"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* TEXT */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-6 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "340ms" }}
          >
            <div
              className="will-change-transform"
              style={{
                transform: prefersReducedMotion
                  ? "translate3d(0,0,0)"
                  : `translate3d(0, ${yText}px, 0)`,
              }}
            >
              <h2 className="text-[#2e3192] font-semibold font-serif leading-[0.9] text-5xl sm:text-6xl md:text-7xl text-shadow-soft">
                LUNCH <br /> &amp; DINNER
              </h2>

              <p className="mt-10 max-w-xl text-[#76aad8] text-lg sm:text-xl leading-relaxed text-justify text-balance">
                From stone-baked pizzas to handcrafted cocktails, our menu is
                designed to impress any time of day. Experience vibrant
                Mediterranean flavours, thoughtfully crafted dishes, and a
                dining atmosphere that feels both warm and unforgettable.
              </p>

              <div className="mt-12">
                <Link
                  href="/menu"
                  className="bg-[#76aad8] text-white px-12 py-4 text-lg font-semibold hover:brightness-110 transition"
                >
                  FOOD MENU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
