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
        relative isolate w-full overflow-hidden bg-white
        mt-4
        min-h-[120vh] md:min-h-[110vh]
        py-12 md:py-16
        px-2 md:px-0
      "
    >
      {/* ===== BACKGROUND (non deve collassare) ===== */}
      <div className="absolute inset-0 pointer-events-none m-4 md:m-4 md:-mx-8">
        {/* cornice bianca */}
        <div className="relative h-full w-full bg-white rounded-none md:mb-4 sm:rounded-lg  overflow-hidden">
          {/* contenitore bianco che NON viene scurito */}
          <div className="relative h-full w-full bg-white overflow-hidden rounded-none sm:rounded-lg">
            {/* strato scalato: immagine + overlay */}
            <div
              className="
    absolute inset-y-3 md:inset-y-4 inset-x-0
    origin-center
    scale-x-100 sm:scale-x-[0.84] lg:scale-x-[0.86]
  "
            >
              <Image
                src="/imgg/imgTradhourss.png"
                alt="Trading hours background"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />

              {/* overlay SOLO sull'immagine */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative mx-auto max-w-full lg:pl-16 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* COLONNA SINISTRA */}
          <div className="md:my-16 my-8 md:px-10 px-0 lg:pt-14 text-left">
            <div
              ref={tradingRef}
              className={`
                transform transition-all duration-1000 ease-out
                ${visible ? "translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0"}
              `}
            >
              <div className="w-fit md:ml-21 ml-10">
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

                <div className="pt-8">
                  <div
                    className="
      grid grid-cols-[150px_170px] md:grid-cols-[220px_320px]
      gap-y-1.5 gap-x-0 md:gap-x-0
      text-white
      text-lg md:text-3xl
      whitespace-nowrap
      font-sofiapro 
    "
                  >
                    <span>Monday</span>
                    <span>3:00PM – 9:30PM</span>

                    <span>Tuesday</span>
                    <span>Closed</span>

                    <span>Wednesday</span>
                    <span>3:00PM – 9:30PM</span>

                    <span>Thursday</span>
                    <span>3:00PM – 9:30PM</span>

                    <span>Friday</span>
                    <span>3:00PM – 9:30PM</span>

                    <span>Saturday</span>
                    <span>3:00PM – 9:30PM</span>

                    <span>Sunday</span>
                    <span>3:00PM – 9:30PM</span>
                  </div>
                </div>

                {/* BOTTONI */}
                <div className="pt-16 md:pt-24 flex flex-col lg:flex-row gap-6 md:gap-24">
                  <Link
                    href="https://tabit.au/tabit-order?site=699d2a0b104d88c062a8b271"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center
                      rounded-md bg-[#ef4136] text-white
                      font-sofiapro leading-[1.05]
                      hover:brightness-110 transition
                      w-full sm:w-auto
                      px-5 py-3 md:px-7 md:pt-1 md:pb-0
                      text-base sm:text-2xl lg:text-4xl
                      whitespace-nowrap md:min-w-75 min-w-40
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
                      px-5 py-3 md:px-7 md:pt-1 md:pb-0
                      text-base sm:text-2xl lg:text-4xl
                      whitespace-nowrap md:min-w-75 min-w-40
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
    </section>
  );
}
