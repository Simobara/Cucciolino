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
    <section className="relative w-full overflow-hidden min-h-[120vh] mt-4 -mb-28">
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-4 sm:inset-6 pointer-events-none mx-0 md:-mx-20">
        <div className="relative w-full h-[100vh] overflow-hidden rounded-none sm:rounded-lg">
          <Image
            src="/imgg/imgTradhourss.png"
            alt="Trading hours background"
            fill
            priority
            sizes="100vw"
            className="
              object-cover object-center
              transform origin-center
              scale-x-[0.82] sm:scale-x-[0.84] lg:scale-x-[0.86]
            "
          />
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative mx-auto max-w-full px-4 sm:px-6 lg:pl-16 lg:px-0 h-[90vh]">
        <div className="h-full flex flex-col justify-between pt-10 sm:pt-12 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* COLONNA SINISTRA */}
            <div className="md:my-16 my-8 lg:pt-14 text-left">
              <div
                ref={tradingRef}
                className={`
                  transform transition-all duration-1000 ease-out
                  ${
                    visible
                      ? "translate-y-0 opacity-100 delay-300"
                      : "translate-y-8 opacity-0"
                  }
                `}
              >
                {/* BLOCCO TESTO + BOTTONI (STESSA LEFT) */}
                <div className="w-fit ml-40">
                  <span className="block text-red-500 uppercase tracking-widest text-lg sm:text-xl lg:text-3xl font-black pb-4">
                    Cucciolino
                  </span>

                  <h1
                    className="
                      text-white font-oswald font-bold uppercase
                      md:text-7xl text-4xl
                      tracking-[0.08em]
                      leading-[1.05] sm:leading-tight
                      md:pt-8 pt-2
                      md:my-8 my-2
                      whitespace-nowrap
                      scale-y-[1.12] sm:scale-y-[1.18] lg:scale-y-[1.45]
                      origin-left
                    "
                  >
                    Trading Hours
                  </h1>

                  {/* ORARI */}
                  <div className="pt-8">
                    <div
                      className="
                        space-y-1.5
                        text-white
                        text-lg md:text-3xl
                        whitespace-nowrap
                        font-sofiapro
                      "
                    >
                      <p>
                        Monday <span>CLOSED</span>
                      </p>
                      <p>Tuesday 11.00AM – 9.00PM</p>
                      <p>Wednesday 11.00AM – 9.00PM</p>
                      <p>Thursday 11.00AM – 9.00PM</p>
                      <p>Friday 11.00AM – 10.00PM</p>
                      <p>Saturday 11.00AM – 10.00PM</p>
                      <p>Sunday 11.00AM – 9.00PM</p>
                    </div>
                  </div>

                  {/* ===== BOTTONI (ALLINEATI A SINISTRA COME IL TESTO) ===== */}
                  <div className="pt-16 md:pt-24 flex flex-col lg:flex-row gap-6 md:gap-24">
                    <Link
                      href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-md bg-[#ef4136] text-white
                        font-sofiapro leading-[1.05]
                        hover:brightness-110 transition
                        w-full sm:w-auto
                        md:py-1 py-2
                        text-base sm:text-2xl lg:text-4xl
                        whitespace-nowrap
                        min-w-70
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
                        w-full sm:w-auto
                        md:py-1 py-2
                        text-base sm:text-2xl lg:text-4xl
                        whitespace-nowrap
                        min-w-70
                      "
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNA DESTRA VUOTA */}
            <div />
          </div>
        </div>
      </div>
    </section>
  );
}
