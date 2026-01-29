"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function TradingHours() {
  const tradingRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (tradingRef.current) observer.observe(tradingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-auto py-16
        lg:h-screen lg:py-0
      "
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-5 pointer-events-none p-10">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/imgg/imgTradhourss.png"
            alt="Trading hours background"
            fill
            priority
            sizes="100vw"
            className="
        object-cover
        object-center
        scale-[1.15]
        transform
        origin-center
      "
          />
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative mx-auto max-w-full -ml-8  px-0 py-16 lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* TESTO */}
          <div
            className="
              pt-8
              text-center
              lg:pt-24 lg:pl-10 lg:text-left
              ml-0 lg:ml-30
            "
          >
            <span className="block text-red-500 uppercase tracking-widest text-2xl lg:text-3xl font-black mb-4">
              Cucciolino
            </span>

            {/* === TRADING HOURS === */}
            <div
              ref={tradingRef}
              className={`
                transform transition-all duration-1000 ease-out
                ${
                  visible
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-10 opacity-0"
                }
                lg:translate-y-0 lg:translate-x-0
              `}
            >
              <h1
                className="
                  text-white font-oswald font-bold uppercase
                  text-4xl sm:text-5xl lg:text-7xl
                  tracking-[0.08em]
                  leading-tight
                  my-8 lg:my-12
                  transform scale-y-[1.25] lg:scale-y-[1.45]
                  origin-center lg:origin-left
                "
              >
                Trading Hours
              </h1>

              <div className="space-y-1 text-white text-base sm:text-lg font-medium">
                <p>
                  Monday <span className="font-semibold">CLOSED</span>
                </p>
                <p>Tuesday 11.00AM – 9.00PM</p>
                <p>Wednesday 11.00AM – 9.00PM</p>
                <p>Thursday 11.00AM – 9.00PM</p>
                <p>Friday 11.00AM – 10.00PM</p>
                <p>Saturday 11.00AM – 10.00PM</p>
                <p>Sunday 11.00AM – 9.00PM</p>
              </div>
            </div>

            {/* ===== BOTTONI ===== */}
            <div
              className="
                mt-16
                flex flex-col items-center gap-6
                lg:mt-32 lg:flex-row lg:gap-24
                font-sofiapro
              "
            >
              <Link
                href="/order"
                className="
    inline-flex items-center justify-center
    rounded-md bg-[#ef4136] text-white
    text-xl sm:text-2xl lg:text-4xl
    leading-[1.05]
    px-7 pt-1
    whitespace-nowrap
    min-w-70
    hover:brightness-110 transition
  "
              >
                Order Online
              </Link>

              <Link
                href="/order"
                className="
    inline-flex items-center justify-center
    rounded-md bg-[#ef4136] text-white
    text-xl sm:text-2xl lg:text-4xl
    leading-[1.05]
    px-7 pt-1
    whitespace-nowrap
    min-w-70
    hover:brightness-110 transition
  "
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* COLONNA DESTRA VUOTA (desktop) */}
          <div />
        </div>
      </div>
    </section>
  );
}
