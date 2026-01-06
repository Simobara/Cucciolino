"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function FunctionsGroupsSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let t: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        t = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 140);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (t) window.clearTimeout(t);
    };
  }, []);

  const titleWords = ["FUNCTIONS", "&", "GROUPS"];

  return (
    <section ref={ref} className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* LEFT: TEXT */}
          <div className="px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center">
            {/* TITLE – word by word */}
            <h2
              className="text-[#0F5B63] font-semibold tracking-tight leading-[0.9]
                         text-5xl sm:text-6xl md:text-7xl"
            >
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

            {/* TEXT BLOCK */}
            <div
              className={["reveal", visible ? "is-visible" : ""].join(" ")}
              style={{ transitionDelay: "420ms" }}
            >
              <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
                Whether it&apos;s a milestone birthday or an office work party,
                our versatile venue can accommodate gatherings of all sizes.
                With the option for full venue hire or simply large bookings,
                our dedicated team will work closely with you to create a menu
                that suits your next big event.
              </p>

              <div className="mt-12 flex flex-col gap-5 max-w-xs">
                <Link
                  href="/functions"
                  className="
                    inline-flex items-center justify-center
                    bg-[#0F5B63] text-white
                    px-10 py-4
                    text-lg font-semibold tracking-wide
                    hover:brightness-110 transition
                  "
                >
                  LEARN MORE
                </Link>

                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    bg-[#0F5B63] text-white
                    px-10 py-4
                    text-lg font-semibold tracking-wide
                    hover:brightness-110 transition
                  "
                >
                  ENQUIRIES
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE (first reveal) */}
          <div
            className={[
              "reveal relative min-h-[380px] md:min-h-[640px]",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "0ms" }}
          >
            <Image
              src="/functions.jpg"
              alt="Functions and Groups"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
