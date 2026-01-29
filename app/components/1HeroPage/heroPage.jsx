// HeroSection.jsx (o dentro HomePage)
// Richiede: next/image, next/link, tailwind
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroPage() {
  const [showTitle, setShowTitle] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 120);

    const wordsCount = 3;
    const timers = Array.from({ length: wordsCount }, (_, i) =>
      setTimeout(() => setVisibleWords(i + 1), 260 + i * 160),
    );

    return () => {
      clearTimeout(t1);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    // <section className="relative min-h-[90vh] overflow-hidden">
    //   {/* BG IMAGE */}
    //   <Image
    //     src="/hero2.png"
    //     alt="Cucciolino Pizza & Gelato"
    //     fill
    //     priority
    //     className="object-cover"
    //   />

    //   {/* OVERLAY */}
    //   <div className="absolute inset-0 bg-black/50" />

    //   {/* CONTENT WRAPPER */}
    //   <div className="relative mx-auto max-w-5xl px-6 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 min-h-[90vh] flex flex-col justify-center">
    //     {/* ===================== */}
    //     {/* MOBILE / TABLET */}
    //     {/* ===================== */}
    //     <div className="md:hidden max-w-xl flex flex-col min-h-[70vh]">
    //       <h1
    //         className={[
    //           "text-[#cadcf2] font-bold leading-[0.9] tracking-tight",
    //           "text-4xl sm:text-5xl",
    //           "mt-48 sm:mt-0",
    //           "transition-all duration-700 ease-out",
    //           "drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]",
    //           showTitle
    //             ? "opacity-100 translate-y-0"
    //             : "opacity-0 translate-y-6",
    //         ].join(" ")}
    //       >
    //         CUCCIOLINO.
    //       </h1>

    //       <p className="mt-4 mb-20 text-base sm:text-lg font-light tracking-wide text-white flex gap-2 flex-wrap">
    //         {["QUALITY,", "FRIENDLY,", "NEIGHBOURHOOD PIZZERIA"].map(
    //           (word, i) => (
    //             <span
    //               key={word}
    //               className={[
    //                 "transition-all duration-200 ease-out",
    //                 visibleWords > i
    //                   ? "opacity-100 translate-y-0"
    //                   : "opacity-0 translate-y-4",
    //               ].join(" ")}
    //             >
    //               {word}
    //             </span>
    //           ),
    //         )}
    //       </p>

    //       <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
    //         <a
    //           href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center justify-center rounded-md bg-[#f7941d] text-[#fffae7] px-8 py-3 text-sm font-semibold hover:bg-[#ef4136] hover:text-[#fffae7] transition"
    //         >
    //           Order Online
    //         </a>

    //         <Link
    //           href="/menu"
    //           className="inline-flex items-center justify-center rounded-md border border-[#ffd07d] text-[#2e3192] bg-white/70 px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#b42f26] transition"
    //         >
    //           View Menu
    //         </Link>
    //       </div>
    //     </div>

    //     {/* ===================== */}
    //     {/* DESKTOP (IDENTICO) */}
    //     {/* ===================== */}
    //     <div className="hidden md:block">
    //       <div className="ml-40 mt-42">
    //         <h1
    //           className={`
    //             text-[#cadcf2] font-bold leading-[0.9] tracking-tight
    //             text-5xl sm:text-6xl md:text-7xl
    //             transition-all duration-700 ease-out
    //             drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]
    //             ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
    //           `}
    //         >
    //           CUCCIOLINO.
    //         </h1>

    //         <p className="mt-4 text-lg md:text-xl font-light tracking-wide text-white flex gap-2 flex-wrap">
    //           {["QUALITY,", "FRIENDLY,", "NEIGHBOURHOOD PIZZERIA"].map(
    //             (word, i) => (
    //               <span
    //                 key={word}
    //                 className={`
    //                   transition-all duration-200 ease-out
    //                   ${visibleWords > i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
    //                 `}
    //               >
    //                 {word}
    //               </span>
    //             ),
    //           )}
    //         </p>
    //       </div>

    //       <div className="ml-40 pt-20 mt-20 flex flex-col sm:flex-row gap-4">
    //         <a
    //           href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center justify-center rounded-md bg-[#f7941d] text-[#fffae7] px-8 py-3 text-sm font-semibold hover:bg-[#ef4136] hover:text-[#fffae7] transition"
    //         >
    //           Order Online
    //         </a>

    //         <Link
    //           href="/menu"
    //           className="inline-flex items-center justify-center rounded-md border border-[#ffd07d] text-[#2e3192] bg-white/70 px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#b42f26] transition"
    //         >
    //           View Menu
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      {/* ===== IMMAGINE FULL SECTION ===== */}
      <Image
        src="/heroImg.jpg"
        alt="Cucciolino hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* overlay leggibilità */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/10" />
      {/* ===== CONTENUTO CON INSET FISSO ===== */}

      <div className="relative z-10 min-h-[90vh]">
        <div className="absolute inset-[40px] flex items-end">
          <div className="max-w-[900px] ml-30">
            <p className="ml-30 text-[#ef4136] font-oswald font-semibold uppercase tracking-widest text-lg sm:text-xl">
              Cucciolino
            </p>

            <h1
              className="
          ml-30
          mt-3
          text-white
          font-oswald
          uppercase
          leading-[0.95]
          tracking-[0.02em]
          text-5xl sm:text-6xl lg:text-7xl
          drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]
        "
            >
              Your Quality, Friendly,
              <br />
              Neighbourhood Pizzeria
            </h1>

            <div className="ml-30 mt-12 flex flex-col sm:flex-row gap-6">
              <Link
                href="/order"
                className="
            inline-flex items-center justify-center
            rounded-md bg-[#ef4136] text-white
            text-xl sm:text-2xl lg:text-4xl
            leading-[1.05]
            px-7 pt-1
            whitespace-nowrap
            hover:brightness-110 transition
          "
              >
                Order Online
              </Link>

              <Link
                href="/menu"
                className="
            inline-flex items-center justify-center
            rounded-md bg-[#ef4136] text-white
            text-xl sm:text-2xl lg:text-4xl
            leading-[1.05]
            px-7 pt-1
            whitespace-nowrap
            hover:brightness-110 transition
          "
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
