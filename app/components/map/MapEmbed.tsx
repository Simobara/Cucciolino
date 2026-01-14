"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type MapEmbedProps = {
  title?: string;
  src: string;
  height?: number; // default 420
  addressLines?: string[];
  directionsUrl?: string;
  fallbackImageSrc?: string; // default "/image/map.png"
  fallbackTimeoutMs?: number; // default 3500
};

export default function MapEmbed({
  title = "Location",
  src,
  height = 420,
  addressLines = ["608 Hampton Street", "Brighton VIC 3186", "Australia"],
  directionsUrl = "https://www.google.com/maps?q=608+Hampton+Street+Brighton+VIC+3186",
  fallbackImageSrc = "/image/map.png",
  fallbackTimeoutMs = 3500,
}: MapEmbedProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // sezione entrata in viewport
  const [visible, setVisible] = useState(false);

  // gestione mappa vs fallback
  const [showFallback, setShowFallback] = useState(true);
  const [iframeHasLoaded, setIframeHasLoaded] = useState(false);

  // IntersectionObserver: montiamo la mappa solo quando visibile
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let timeoutId: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // piccolo delay per l’animazione "reveal"
        timeoutId = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 120);
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // Timer per decidere se mostrare SOLO il fallback
  useEffect(() => {
    if (!src) {
      // nessuna mappa → fallback fisso
      setShowFallback(true);
      setIframeHasLoaded(false);
      return;
    }

    // reset ogni volta che cambia src
    setShowFallback(true);
    setIframeHasLoaded(false);

    const id = window.setTimeout(() => {
      // Se dopo X ms la mappa non ha caricato, rimaniamo in fallback
      if (!iframeHasLoaded) {
        setShowFallback(true);
      }
    }, fallbackTimeoutMs);

    return () => window.clearTimeout(id);
  }, [src, fallbackTimeoutMs, iframeHasLoaded]);

  function handleIframeLoad() {
    setIframeHasLoaded(true);
    // passaggio dolce da fallback a mappa
    window.setTimeout(() => setShowFallback(false), 150);
  }

  const headingId = `map-heading-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      ref={sectionRef}
      aria-labelledby={headingId}
      className={[
        "reveal",
        visible ? "is-visible" : "",
        "rounded-3xl overflow-hidden border border-zinc-200 bg-white",
        "transition-shadow duration-700",
        "hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]",
      ].join(" ")}
    >
      {/* TOP BAR */}
      <div className="px-6 py-6 sm:px-8 sm:py-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3
              id={headingId}
              className="text-2xl sm:text-3xl font-semibold tracking-tight"
            >
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
                bg-[#76aad8] text-[#F6E6D4]
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

      {/* MAP AREA */}
      <div className="relative w-full" style={{ height }}>
        {/* overlay leggero per profondità */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent z-10" />

        {/* Badge "Tap / drag" → appare solo quando la mappa è visibile */}
        <div
          className={[
            "pointer-events-none absolute left-5 top-5 sm:left-6 sm:top-6 z-20",
            "rounded-full px-4 py-2 text-xs font-semibold tracking-wide",
            "bg-white/85 backdrop-blur border border-white/60 text-zinc-800",
            "shadow-sm",
            "transition duration-700",
            visible && iframeHasLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2",
          ].join(" ")}
        >
          Tap / drag to explore
        </div>

        {/* CTA overlay su hover (desktop) */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Google Maps directions"
          className="group absolute inset-0 z-30 hidden md:block"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/15" />
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

        {/* FALLBACK IMAGE */}
        {visible && showFallback && (
          <div className="absolute inset-0 z-5">
            <Image
              src={fallbackImageSrc}
              alt="Map preview"
              fill
              className="object-cover"
              priority={false}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        )}

        {/* IFRAME: montato solo quando la sezione è visibile */}
        {visible && src && (
          <iframe
            title={`${title} map`}
            src={src}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={handleIframeLoad}
            className="relative z-0"
          />
        )}
      </div>
    </section>
  );
}
