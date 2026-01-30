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
        py-12 sm:py-16
        md:h-screen h-screen lg:py-0
      "
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-3 sm:inset-5 pointer-events-none p-0 sm:p-6 lg:p-10 ">
        <div className="relative w-full h-[99vh] overflow-hidden rounded-none sm:rounded-lg">
          <Image
            src="/imgg/imgTradhourss.png"
            alt="Trading hours background"
            fill
            priority
            sizes="100vw"
            className="
              object-cover object-center
              scale-[1.08] sm:scale-[1.12] lg:scale-[1.15]
              transform origin-center
            "
          />
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative mx-auto max-w-full px-4 sm:px-6 py-12 sm:py-16 lg:pl-16 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* TESTO */}
          <div
            className="
              md:pt-4 pt-6
              text-center
              lg:pt-24 lg:text-left
              ml-0 pl-0
              md:ml-30 md:pl-0
              md:-ml-30 md:-pl-10
            "
          >
            {/* FIX: tolto refuso :mb-4 */}
            <span className="block text-red-500 uppercase tracking-widest text-lg sm:text-xl lg:text-3xl font-black md:mb-3 mb-4">
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
                    : "translate-y-8 opacity-0"
                }
                lg:translate-y-0 lg:translate-x-0
              `}
            >
              <h1
                className="
                  text-white font-oswald font-bold uppercase
                  md:text-7xl text-4xl
                  tracking-[0.08em]
                  leading-[1.05] sm:leading-tight
                  my-6 sm:my-8 md:my-12
                  transform
                  whitespace-nowrap
                  scale-y-[1.12] sm:scale-y-[1.18]
                  lg:scale-y-[1.45]
                  origin-center lg:origin-left
                "
              >
                Trading Hours
              </h1>

              <div className="flex">
                <div
                  className="
                    space-y-1.5
                    text-[#ffffff]
                    text-lg md:text-3xl
                    text-left
                    w-fit
                    whitespace-nowrap
                    font-sofiapro
                  "
                >
                  <p>
                    Monday <span className="">CLOSED</span>
                  </p>
                  <p>Tuesday 11.00AM – 9.00PM</p>
                  <p>Wednesday 11.00AM – 9.00PM</p>
                  <p>Thursday 11.00AM – 9.00PM</p>
                  <p>Friday 11.00AM – 10.00PM</p>
                  <p>Saturday 11.00AM – 10.00PM</p>
                  <p>Sunday 11.00AM – 9.00PM</p>
                </div>
              </div>
            </div>

            {/* ===== BOTTONI ===== */}
            <div
              className="
                mt-16 md:mt-20
                flex flex-col items-center gap-4 sm:gap-6
                lg:flex-row lg:gap-24
                font-sofiapro
              "
            >
              <Link
                href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="
    inline-flex items-center justify-center
    rounded-md bg-[#ef4136] text-white
    font-sofiapro leading-[1.05]
    hover:brightness-110 transition

    /* ===== MOBILE (copiato da HeroPage) ===== */
    w-full
    px-5 py-3
    text-base

    /* ===== DESKTOP (tuo, invariato) ===== */
    sm:w-auto
    sm:px-7 sm:py-2
    sm:text-2xl lg:text-4xl
    whitespace-nowrap
    sm:min-w-70
  "
              >
                Order Online
              </Link>

              <Link
                href="/menu"
                className="
    inline-flex items-center justify-center
    rounded-md bg-[#ef4136] text-white
    font-sofiapro leading-[1.05]
    hover:brightness-110 transition

    /* ===== MOBILE (copiato da HeroPage) ===== */
    w-full
    px-5 py-3
    text-base

    /* ===== DESKTOP (tuo, invariato) ===== */
    sm:w-auto
    sm:px-7 sm:py-2
    sm:text-2xl lg:text-4xl
    whitespace-nowrap
    sm:min-w-70
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
