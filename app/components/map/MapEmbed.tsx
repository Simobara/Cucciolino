"use client";

import Image from "next/image";

type MapEmbedProps = {
  title?: string;
  src: string; // mantenuto per compatibilità
  height?: number;
  directionsUrl?: string;
  imageSrc?: string;
};

export default function MapEmbed({
  title = "Location",
  src, // ⬅️ non usato ma TENUTO
  height = 420,
  directionsUrl = "https://maps.app.goo.gl/YWBTBTz77hT5jhEf7",
  imageSrc = "/image/map22.jpg",
}: MapEmbedProps) {
  return (
    <section
      aria-label={title}
      className="
        overflow-hidden h-full
        border border-zinc-200 bg-white
        transition-shadow duration-500
        hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
      "
    >
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full"
        style={{ height }}
      >
        {/* IMMAGINE */}
        <Image
          src={imageSrc}
          alt="Open location in Google Maps"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* overlay leggero per contrasto */}
        <div className="absolute inset-0 bg-black/15" />

        {/* CTA SEMPRE VISIBILE */}
        <div
          className="
            absolute right-4 bottom-4 sm:right-6 sm:bottom-6
            rounded-full
            bg-white/95 backdrop-blur
            text-black
            px-5 py-2.5
            text-sm sm:text-base font-semibold
            shadow-lg
            pointer-events-none
          "
        >
          Open in Google Maps →
        </div>
      </a>
    </section>
  );
}
