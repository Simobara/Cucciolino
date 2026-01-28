"use client";
import { useEffect, useRef, useState } from "react";

export default function IntermezzoHero1({ bg = "" }) {
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
    <section className={`${bg}`}>
      <div
        ref={ref}
        className="mx-auto max-w-7xl px-0 py-18 text-start overflow-hidden"
      >
        {/* ---- LINEA 1 ---- */}
        <h2
          className={`
            text-[#ffffff]
            
            tracking-[0.15em]        
            leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase 
            
            font-oswald
            text-shadow-soft
            
            transition-all duration-1100 ease-out pb-4
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          // font-bikinis font-semibold
          style={{
            transitionDelay: "200ms",
            wordSpacing: "0.35em" /* spazio TRA le parole */,
          }}
        >
          TASTE OUR HIGH-QUALITY PIZZA,
        </h2>

        {/* ---- LINEA 2 ---- */}
        <h2
          className={`
            text-[#ffffff]
            
            tracking-tight leading-[0.85]
            text-5xl sm:text-6xl md:text-7xl
            uppercase 
            
            font-oswald
            text-shadow-soft
            
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          // font-bikinis font-semibold
          style={{ transitionDelay: "600ms" }}
        >
          MADE WITH TRADITIONAL METHODS AND LOVE
        </h2>

        {/* ---- LINEA 3 ---- */}
        <h2
          className={`
            text-[#2e3192]
            
            tracking-tight leading-[0.9]
            text-5xl sm:text-6xl md:text-7xl
            uppercase
            
            font-oswald
            text-shadow-soft
            
            transition-all duration-1100 ease-out pb-0
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          // font-bikinis font-semibold
          style={{ transitionDelay: "700ms" }}
        >
          {/* AND LOVE, */}
        </h2>

        {/* ---- SOTTOTITOLO ---- */}
        <p
          className={`
            mt-8
            text-[#2e3192]
             md:text-4xl text-4xl
            // tracking-wide
            
            
            
            transition-all duration-1100 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}
            `}
          // font-sans font-medium
          // text-shadow-soft
          style={{ transitionDelay: "1000ms" }}
        >
          In a welcoming modern environment, where everybody feels at home
        </p>
      </div>
    </section>
  );
}
