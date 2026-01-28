"use client";

import Image from "next/image";
import Link from "next/link";

export default function TradingHours() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ===== BACKGROUND (con padding) ===== */}
      <div className="absolute inset-0 px-10 py-10">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/imgg/imgTradhourss.png"
            alt="Trading hours background"
            fill
            className="object-contain scale-[1.05] origin-top"
            priority
          />
        </div>
      </div>

      {/* ===== CONTENUTO ===== */}
      <div className="relative mx-auto max-w-full px-6 py-24 lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* TESTO */}
          <div className="pt-16 lg:pt-24 lg:pl-10 ml-30">
            <span className="block text-red-500 uppercase tracking-widest text-3xl font-black mb-4">
              Cucciolino
            </span>

            <h1 className="text-white font-oswald font-bold uppercase text-5xl sm:text-6xl md:text-7xl tracking-[0.08em] leading-[1.05] my-12 transform scale-y-[1.45] origin-left">
              Trading Hours
            </h1>

            <div className="space-y-2 text-white text-lg sm:text-xl font-medium">
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

            <div className="mt-32 flex flex-nowrap gap-24 font-sofiapro items-center">
              <Link
                href="/order"
                className="inline-flex items-center justify-center
                    rounded-md bg-[#ef4136] text-3xl text-white
                    px-24 pt-2
                    min-w-[320px]
                    whitespace-nowrap

                    w-max
                    font-semibold
                    hover:brightness-110 transition"
              >
                Order Online
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center
                    rounded-md bg-[#ef4136] text-3xl text-white
                    px-24 pt-2
                    min-w-[320px]
                    whitespace-nowrap
                    w-max
                    font-semibold
                    hover:brightness-110 transition"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* COLONNA DESTRA VUOTA (lascia aria all’immagine) */}
          <div />
        </div>
      </div>
    </section>
  );
}
