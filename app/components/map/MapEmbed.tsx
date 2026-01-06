"use client";

import { useEffect, useRef, useState } from "react";

type MapEmbedProps = {
  title?: string;
  src: string;
  height?: number; // default 420
  addressLines?: string[]; // es: ["608 Hampton Street", "Brighton VIC 3186", "Australia"]
  directionsUrl?: string; // link a Google Maps (normale), opzionale
};

export default function MapEmbed({
  title = "Location",
  src,
  height = 420,
  addressLines = ["608 Hampton Street", "Brighton VIC 3186", "Australia"],
  directionsUrl = "https://www.google.com/maps?q=608+Hampton+Street+Brighton+VIC+3186",
}: MapEmbedProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let t: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        t = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 120);
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (t) window.clearTimeout(t);
    };
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Location map"
      className={[
        "reveal",
        visible ? "is-visible" : "",
        "rounded-3xl overflow-hidden border border-zinc-200 bg-white",
        "transition",
        "hover:shadow-2xl",
      ].join(" ")}
      style={{ transitionDuration: "700ms" }}
    >
      {/* TOP BAR */}
      <div className="px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h3>

            <div className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {addressLines.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-[#0F5B63] text-[#F6E6D4]
                px-5 py-2.5
                text-sm font-semibold
                hover:brightness-110 active:scale-95 transition
                whitespace-nowrap
              "
            >
              Get directions →
            </a>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="relative w-full" style={{ height }}>
        {/* Subtle overlay gradient for polish */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

        {/* Floating hint badge */}
        <div
          className={[
            "pointer-events-none absolute left-5 top-5 sm:left-6 sm:top-6",
            "rounded-full px-4 py-2 text-xs font-semibold tracking-wide",
            "bg-white/85 backdrop-blur border border-white/60 text-zinc-800",
            "shadow-sm",
            "transition duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          Tap / drag to explore
        </div>

        {/* CTA overlay on hover (desktop) */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Google Maps directions"
          className="
            group absolute inset-0 z-2
            hidden md:block
          "
        >
          <div
            className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition
              bg-black/15
            "
          />
          <div
            className="
              absolute right-6 bottom-6
              opacity-0 group-hover:opacity-100
              translate-y-2 group-hover:translate-y-0
              transition
              rounded-full
              bg-white text-black
              px-5 py-2.5
              text-sm font-semibold
              shadow-lg
            "
          >
            Open in Google Maps →
          </div>
        </a>

        {/* IFRAME */}
        <iframe
          title="Google Map"
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="relative z-1"
        />
      </div>
    </section>
  );
}
