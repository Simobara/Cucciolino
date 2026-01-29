"use client";

import Image from "next/image";

export default function MaintenanceSplash() {
  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{ backgroundColor: "#000" }}
    >
      <div className="absolute inset-0 bg-[#CADCF2]" />

      <div className="relative z-10 flex flex-col items-center translate-y-40 sm:translate-y-52">
        <div className="relative flex flex-col items-center">
          <div
            aria-hidden
            className="moving-light absolute w-[85%] h-40 blur-3xl opacity-80"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.45) 35%, rgba(255,255,255,0.0) 70%)",
            }}
          />
          <div
            aria-hidden
            className="moving-light-tight absolute w-[40%] h-35 blur-2xl opacity-70"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.0) 65%)",
            }}
          />

          <div className="relative z-10">
            <Image
              src="/logocucc123.png"
              alt="Cucciolino"
              width={1200}
              height={1200}
              priority
              className="w-[70vw] max-w-120 h-auto scale-150"
            />
          </div>
        </div>

        <div className="mt-10 text-center text-[#b42f26] font-semibold">
          Stiamo finalizzando gli ultimi dettagli.
          <br />
          Torna a trovarci a breve.
        </div>

        <div className="mt-8 flex gap-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="dot"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
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
