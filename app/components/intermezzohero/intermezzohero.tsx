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
        className="mx-auto max-w-5xl px-6 py-28 text-center overflow-hidden"
      >
        {/* ---- LINEA 1 ---- */}
        <h2
          className={`
            text-[#F6E6D4]
            font-serif font-bold
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase font-couture
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "0ms" }}
        >
          MADE WITH
        </h2>

        {/* ---- LINEA 2 ---- */}
        <h2
          className={`
            text-[#F6E6D4]
            font-serif font-bold
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase font-couture
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "500ms" }}
        >
          TRADITIONAL METHODS
        </h2>

        {/* ---- LINEA 3 ---- */}
        <h2
          className={`
            text-[#F6E6D4]
            font-serif 
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase  font-couture font-bold
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "1000ms" }}
        >
          AND LOVE,
        </h2>

        {/* ---- SOTTOTITOLO ---- */}
        <p
          className={`
            mt-10
            text-[#F6E6D4]
            text-xl sm:text-2xl
            tracking-wide uppercase
            font-oswald
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
          `}
          style={{ transitionDelay: "1600ms" }}
        >
          IN A WELCOMING AND MODERN ENVIRONMENT
        </p>
      </div>
    </section>
  );
}
