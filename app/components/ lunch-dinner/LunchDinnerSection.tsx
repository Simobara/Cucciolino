"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LunchDinnerSection() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let t: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // piccolo delay per garantire transizione morbida
        t = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 120);
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
          {/* LEFT: IMAGE (reveal first) */}
          <div
            className={[
              "reveal relative min-h-95 md:min-h-160",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "0ms" }}
          >
            <Image
              src="/lunch-dinner.jpg"
              alt="Lunch & Dinner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT: TEXT BLOCK (reveal after image) */}
          <div
            className={[
              "reveal px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center",
              visible ? "is-visible" : "",
            ].join(" ")}
            style={{ transitionDelay: "220ms" }}
          >
            <h2 className="text-[#0F5B63] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              LUNCH <br /> &amp; DINNER
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              Dive into our homemade falafel and sambousek, bursting with
              freshness and bold flavours, or try something classic like our
              stone-baked pizzas or fresh pastas. We’ve got handcrafted
              cocktails and a selection of local and imported wines to make your
              meal one to remember.
            </p>

            <div className="mt-12">
              <Link
                href="/menu"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-12 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
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
