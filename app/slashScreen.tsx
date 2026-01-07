"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen({
  onFinish,
  holdMs = 900, // quanto resta visibile prima di iniziare a sparire
  fadeMs = 700, // durata fade-out
}: {
  onFinish?: () => void;
  holdMs?: number;
  fadeMs?: number;
}) {
  const [phase, setPhase] = useState<"show" | "fade" | "done">("show");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("fade"), holdMs);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      onFinish?.();
    }, holdMs + fadeMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [holdMs, fadeMs, onFinish]);

  if (phase === "done") return null;

  return (
    <div
      className={[
        "fixed inset-0 z-9999 flex items-center justify-center",
        "transition-opacity",
        phase === "fade" ? "opacity-0" : "opacity-100",
      ].join(" ")}
      style={{ transitionDuration: `${fadeMs}ms`, backgroundColor: "#000" }} // ✅ fade verso nero
    >
      {/* layer verde (svanisce con tutto) */}
      <div className="absolute inset-0 bg-[#0F5B63]" />

      {/* watermark logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
        <Image
          src="/logocucciolino.png"
          alt="Cucciolino"
          width={900}
          height={900}
          priority
          className="w-[70vw] max-w-120 h-auto"
        />
      </div>

      {/* spinner */}
      <div className="relative z-10 h-10 w-10 rounded-full border-2 border-white/30 border-t-white animate-spin" />
    </div>
  );
}
