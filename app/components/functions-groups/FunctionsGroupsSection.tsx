"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

export default function FunctionsGroupsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [buttonsIn, setButtonsIn] = useState(false);

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

  useEffect(() => {
    if (!visible) return;

    const el = buttonsRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setButtonsIn(true);
        io.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    io.observe(el);

    return () => io.disconnect();
  }, [visible]);

  const titleWords = ["FUNCTIONS", "&", "GROUPS"];

  return (
    <section ref={sectionRef} className="bg-[#F6E6D4]">
      <div className="mx-auto md:mt-80 mt-30">
        {/* MOBILE: stack (image then text) | MD+: 2 columns like before */}
        <div className="grid md:grid-cols-2 md:items-stretch">
          {/* IMAGE — on mobile FIRST */}
          <div
            ref={parallaxRef}
            className={[
              "reveal relative w-full overflow-hidden",
              // ✅ mobile height: stabile e non gigante
              "h-[44vh] min-h-80 md:h-[120vh] md:min-h-[110vh]",
              // ✅ order: image first on mobile, stays right column on desktop
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
              <Image
                src="/img/pizzapizza3.png"
                alt="Functions and Groups"
                fill
                priority={false}
                className="object-cover absolute inset-0"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* TEXT — on mobile SECOND | desktop IDENTICO */}
          <div
            className={[
              "flex flex-col justify-center",
              // ✅ mobile padding + niente ml-24
              "px-4 py-10 sm:px-8",
              // ✅ desktop rimane come prima
              "md:ml-24 md:px-4 md:sm:px-10 md:pt-0 md:mb-28",
              "mb-28",
              "order-2 md:order-1",
            ].join(" ")}
          >
            <h2 className="text-[#b42f26] font-semibold leading-[0.9] text-4xl sm:text-6xl md:text-7xl text-shadow-soft">
              {titleWords.map((word, i) => (
                <span
                  key={i}
                  className={[
                    "inline-block reveal",
                    visible ? "is-visible" : "",
                  ].join(" ")}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  {word}
                  {word !== "&" && <br />}
                </span>
              ))}
            </h2>

            <div
              className={["reveal", visible ? "is-visible" : ""].join(" ")}
              style={{ transitionDelay: "420ms" }}
            >
              <p className="mt-6 md:mt-10 max-w-xl text-[#76aad8] text-base sm:text-lg md:text-xl leading-relaxed text-justify text-balance md:pr-12">
                From private celebrations to corporate events, our venue adapts
                perfectly to groups of any size, offering a flexible and
                welcoming space designed to elevate every occasion.
              </p>

              <div
                ref={buttonsRef}
                className="mt-8 md:mt-12 flex flex-col gap-5 max-w-xs"
              >
                <Link
                  href="/functions"
                  className={[
                    "bg-[#76aad8] text-white px-10 py-4 text-base sm:text-lg font-semibold hover:brightness-110",
                    "btn-parallax btn-from-left",
                    buttonsIn ? "is-in" : "",
                  ].join(" ")}
                >
                  LEARN MORE
                </Link>

                <Link
                  href="/contact"
                  className={[
                    "bg-[#76aad8] text-white px-10 py-4 text-base sm:text-lg font-semibold hover:brightness-110",
                    "btn-parallax btn-from-right",
                    buttonsIn ? "is-in" : "",
                  ].join(" ")}
                >
                  ENQUIRIES
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
