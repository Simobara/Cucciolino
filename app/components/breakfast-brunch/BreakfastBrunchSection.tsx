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
    if (!visible) return;

    const id = window.setInterval(() => {
      setActiveImg((i) => (i + 1) % images.length);
    }, 800);

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
    <section ref={sectionRef} className="bg-[#F6E6D4] h-full mt-90">
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* ✅ MOBILE IMAGE FIRST (PC unchanged via md:order) */}
          <div
            ref={parallaxRef}
            className={[
              "reveal relative w-full overflow-hidden",
              // mobile height so image shows first properly
              "h-[44vh] min-h-[320px] md:h-full",
              // order: image first on mobile, right column on PC
              "order-1 md:order-2",
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
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                );
              })}
            </div>
          </div>

          {/* ✅ TEXT SECOND ON MOBILE (PC layout kept) */}
          <div
            className={[
              // PC original classes stay, but ml-24 becomes md:ml-24
              "reveal px-4 sm:px-8 py-6 flex flex-col justify-center",
              "md:ml-24", // ✅ only desktop
              // order: text second on mobile, left on PC
              "order-2 md:order-1",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "280ms" }}
          >
            {/* (PC sizes unchanged; mobile can be a bit smaller without affecting PC) */}
            <h2 className="text-[#b42f26] font-semibold leading-[0.9] text-4xl sm:text-7xl md:text-5xl text-shadow-soft">
              APPETIZER <br /> & BRUNCH
            </h2>

            <p className="mt-6 md:mt-10 text-[#76aad8] text-base sm:text-xl leading-relaxed max-w-xl text-justify text-balance md:pr-12">
              Transport yourself to the sun-kissed shores of the Mediterranean
              as you embark on a brunch journey at Cucciolino. Immerse yourself
              in the vibrant flavours of Mediterranean spices, house-made
              breads, and freshly brewed hot coffee.
            </p>

            <div className="mt-8 md:mt-12 flex flex-col gap-6 max-w-sm">
              <Link
                href="/menu#brunch"
                className="bg-[#76aad8] text-white px-10 py-4 text-base sm:text-lg font-semibold hover:brightness-110 transition"
              >
                BRUNCH MENU
              </Link>

              <Link
                href="/menu#drinks"
                className="bg-[#76aad8] text-white px-10 py-4 text-base sm:text-lg font-semibold hover:brightness-110 transition"
              >
                DRINK MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
