"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BreakfastBrunchSection() {
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
        }, 140); // morbido
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (t) window.clearTimeout(t);
    };
  }, []);

  return (
    <section ref={ref} className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* LEFT: TEXT (second reveal) */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "220ms" }}
          >
            <h2 className="text-[#0F5B63] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              BREAKFAST <br /> &amp; BRUNCH
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              Transport yourself to the sun-kissed shores of the Mediterranean
              as you embark on a brunch journey at Cucciolino. Immerse
              yourselves in the vibrant flavours of Mediterranean spices,
              house-made breads, and freshly brewed hot coffee.
            </p>

            <div className="mt-12 flex flex-col gap-5 max-w-xs">
              <Link
                href="/menu#brunch"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-10 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
              >
                BRUNCH MENU
              </Link>

              <Link
                href="/menu#drinks"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-10 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
              >
                DRINK MENU
              </Link>
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
              src="/brunch.jpg"
              alt="Breakfast & Brunch"
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
