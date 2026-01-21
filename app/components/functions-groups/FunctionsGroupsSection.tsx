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

  // ✅ Reveal della sezione quando entra in viewport
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

  // ✅ Bottoni: entrano SOLO quando l’utente scrolla fino al loro blocco
  // (e comunque solo dopo che la sezione è diventata visibile)
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
      <div className="mx-auto">
        <div className="grid md:grid-cols-2">
          {/* TEXT */}
          <div className="ml-24 px-4 sm:px-10  sm:py-24 md:pt-0 pt-0 md:mb-28 mb-28  flex flex-col justify-center">
            <h2 className="text-[#76aad8] font-semibold leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
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
              <p className="mt-10 max-w-xl text-[#76aad8] text-lg sm:text-xl leading-relaxed text-justify text-balance pr-12">
                From private celebrations to corporate events, our venue adapts
                perfectly to groups of any size, offering a flexible and
                welcoming space designed to elevate every occasion.
              </p>

              {/* ✅ Bottoni entrano quando questo blocco entra in viewport */}
              <div
                ref={buttonsRef}
                className="mt-12 flex flex-col gap-5 max-w-xs"
              >
                <Link
                  href="/functions"
                  className={[
                    "bg-[#76aad8] text-white px-10 py-4 text-lg font-semibold hover:brightness-110",
                    "btn-parallax btn-from-left",
                    buttonsIn ? "is-in" : "",
                  ].join(" ")}
                >
                  LEARN MORE
                </Link>

                <Link
                  href="/contact"
                  className={[
                    "bg-[#76aad8] text-white px-10 py-4 text-lg font-semibold hover:brightness-110",
                    "btn-parallax btn-from-right",
                    buttonsIn ? "is-in" : "",
                  ].join(" ")}
                >
                  ENQUIRIES
                </Link>
              </div>
            </div>
          </div>

          {/* IMAGE RIGHT — FULL HEIGHT (110–120%) */}
          <div
            ref={parallaxRef}
            className={[
              "reveal relative h-[120vh] min-h-[110vh] w-full overflow-hidden",
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
                src="/img/functions.png"
                alt="Functions and Groups"
                fill
                priority={false}
                className="object-cover absolute inset-0"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
