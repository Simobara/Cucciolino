"use client";

import { useEffect, useState } from "react";

export default function TopFadeOverlay({
  heightVh = 30, // % viewport coperta dall'alto
  fadeDistancePx = 500, // dopo quanti px di scroll va a 0
}: {
  heightVh?: number;
  fadeDistancePx?: number;
}) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      // 0px -> opacity 1, fadeDistancePx -> opacity 0
      const next = Math.max(0, 1 - y / fadeDistancePx);
      setOpacity(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fadeDistancePx]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 w-full z-5"
      style={{
        height: `${heightVh}vh`,
        opacity,
        // Nero in alto -> sfuma verso trasparente (così sotto torna “normale”)
        background:
          "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0) 100%)",
      }}
    />
  );
}
