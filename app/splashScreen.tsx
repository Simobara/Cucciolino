"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen({
  onFinish,
  minShowMs = 4000,
  fadeMs = 900,
}: {
  onFinish?: () => void;
  minShowMs?: number;
  fadeMs?: number;
}) {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("fade"), minShowMs);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      onFinish?.();
    }, minShowMs + fadeMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [minShowMs, fadeMs, onFinish]);

  if (phase === "done") return null;

  return (
    <div
      className={[
        "fixed inset-0 z-9999 flex items-center justify-center",
        "transition-opacity",
        phase === "fade" ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{
        transitionDuration: `${fadeMs}ms`,
        backgroundColor: "#000",
      }}
    >
      {/* sfondo verde brand */}
      <div className="absolute inset-0 bg-[#0F5B63]" />

      {/* CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col items-center">
        {/* LOGO + LUCE */}
        <div className="relative flex flex-col items-center">
          {/* LUCE ANIMATA (diagonale) */}
          <div
            aria-hidden
            className="moving-light absolute w-[85%] h-40 blur-3xl opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.45) 35%, rgba(255,255,255,0.0) 70%)",
            }}
          />

          {/* CONO PIÙ STRETTO */}
          <div
            aria-hidden
            className="moving-light-tight absolute w-[40%] h-35 blur-2xl opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.0) 65%)",
            }}
          />

          {/* LOGO */}
          <div className="relative z-10">
            <Image
              src="/logocucc1.png"
              alt="Cucciolino"
              width={900}
              height={900}
              priority
              className="w-[70vw] max-w-120 h-auto"
            />
          </div>
        </div>

        {/* PUNTINI */}
        <div className="mt-12 flex gap-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="dot"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
      </div>

      {/* STILI */}
      <style jsx>{`
        /* PUNTINI */
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: white;
          opacity: 0.2;
          animation: wave 1.4s infinite ease-in-out;
        }

        @keyframes wave {
          0% {
            opacity: 0.2;
          }
          15% {
            opacity: 1;
          }
          30% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.2;
          }
        }

        /* LUCE CHE SI MUOVE (alto → basso, destra → sinistra) */
        .moving-light {
          animation: sweep 2.8s ease-in-out infinite;
        }

        .moving-light-tight {
          animation: sweep 2.8s ease-in-out infinite;
          animation-delay: 0.15s;
        }

        @keyframes sweep {
          0% {
            transform: translate(35%, -60%);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          50% {
            transform: translate(0%, 0%);
            opacity: 1;
          }
          75% {
            opacity: 0.9;
          }
          100% {
            transform: translate(-35%, 60%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
