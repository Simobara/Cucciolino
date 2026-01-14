// app/loading.tsx
"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#0F5B63]">
      {/* Contenitore centrale */}
      <div className="relative flex flex-col items-center">
        {/* Logo (sopra) */}
        <div className="opacity-[0.08]">
          <Image
            src="/logocucc1.png"
            alt="Cucciolino"
            width={900}
            height={900}
            priority
            className="w-[70vw] max-w-105 h-auto"
          />
        </div>

        {/* Puntini (sotto il logo) */}
        <div className="mt-10 flex gap-3">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="dot"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      {/* CSS locale */}
      <style jsx>{`
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: white;
          opacity: 0.15;
          animation: wave 1.4s infinite ease-in-out;
        }

        @keyframes wave {
          0% {
            opacity: 0.15;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 0.15;
          }
          100% {
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}
