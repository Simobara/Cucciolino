"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroPage() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setStart(true), 650); // dopo intro immagine
    return () => clearTimeout(t);
  }, []);

  const wordBase =
    "inline-block transition-all duration-[900ms] ease-out motion-reduce:transition-none motion-reduce:transform-none";

  return (
    <section className="relative min-h-[95vh] overflow-hidden bg-white">
      {/* ===== IMMAGINE ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-4 sm:inset-6 md:inset-[40px] overflow-hidden">
          <Image
            src="/heroImg.jpg"
            alt="Cucciolino hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative z-10 min-h-[90vh]">
        <div className="absolute inset-4 sm:inset-6 md:inset-[40px] flex items-end">
          <div className="w-full px-2 sm:px-4 md:px-0 md:max-w-[900px] md:ml-40 text-left flex flex-col items-start">
            <p className="md:block hidden text-[#ef4136] font-sofiapro font-bold uppercase tracking-widest text-xl sm:text-2xl md:text-3xl pb-6 sm:pb-10 md:pb-34">
              Cucciolino
            </p>

            <h1
              className="
                mt-3 text-white font-oswald uppercase font-bold
                leading-[0.95] scale-y-[1.45] pb-5
                drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]
                text-3xl sm:text-4xl md:text-5xl md:sm:text-6xl lg:text-7xl
              "
            >
              <span className="block">
                Your{" "}
                <span
                  className={[
                    wordBase,
                    "delay-[200ms]",
                    start
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                  ].join(" ")}
                >
                  Quality,
                </span>{" "}
                <span
                  className={[
                    wordBase,
                    "delay-[800ms]", // più lento e leggibile
                    start
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10",
                  ].join(" ")}
                >
                  Friendly,
                </span>
              </span>

              <span
                className={[
                  "block transition-all duration-[1000ms] ease-out",
                  "delay-[1400ms]",
                  "motion-reduce:transition-none motion-reduce:transform-none",
                  start
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12",
                ].join(" ")}
              >
                Neighbourhood Pizzeria
              </span>
            </h1>

            {/* CTA */}
            <div className="mt-8 sm:mt-10 md:mt-12 flex w-full flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 pb-8 md:pb-10">
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
                  px-5 py-3 md:px-7 md:pt-1 md:pb-0
                  text-base sm:text-2xl lg:text-4xl
                  whitespace-nowrap md:min-w-70
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
                  whitespace-nowrap
                "
              >
                View Menu
              </Link>
            </div>

            <div className="h-2 md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
