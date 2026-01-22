"use client";
import { useEffect, useRef, useState } from "react";

export default function IntermezzoHero() {
  const ref = useRef<HTMLDivElement | null>(null);
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#004A62]">
      <div
        ref={ref}
        className=" mx-auto max-w-7xl px-3 py-28 text-center overflow-hidden"
      >
        {/* ---- LINEA 1 ---- */}
        <h2
          className={`
            text-[#ffd07d]
            font-serif
            tracking-[0.25em]        
            leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase font-bikinis font-semibold
            text-shadow-soft
            transition-all duration-1100 ease-out pb-10
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{
            transitionDelay: "1700ms",
            wordSpacing: "0.6em" /* spazio TRA le parole */,
          }}
        >
          MADE WITH :
        </h2>

        {/* ---- LINEA 2 ---- */}
        <h2
          className={`
            text-[#ffd07d]
            font-serif
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase font-oswald  font-semibold  text-shadow-soft
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "1900ms" }}
        >
          TRADITIONAL METHODS
        </h2>

        {/* ---- LINEA 3 ---- */}
        <h2
          className={`
            text-[#ffd07d]
            font-serif 
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase  font-oswald font-bold text-shadow-soft
            transition-all duration-1100 ease-out pb-10
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "2000ms" }}
        >
          AND LOVE,
        </h2>

        {/* ---- SOTTOTITOLO ---- */}
        <p
          className={`
            mt-10
            text-[#fffae7]
            text-xl sm:text-2xl
            tracking-wide uppercase
            font-couture font-bold text-shadow-soft
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "100ms" }}
        >
          IN A WELCOMING AND MODERN ENVIRONMENT
        </p>
      </div>
    </section>
  );
}
