"use client";

import Image from "next/image";

type MapEmbedProps = {
  title?: string;
  src: string; // 🔹 mantenuto per compatibilità col padre
  height?: number;
  directionsUrl?: string;
  imageSrc?: string;
};

export default function MapEmbed({
  title = "Location",
  src, // ⬅️ non usato ora, ma TENUTO
  height = 420,
  directionsUrl = "https://www.google.com/maps",
  imageSrc = "/image/map2.png",
}: MapEmbedProps) {
  return (
    <section
      aria-label={title}
      className="
        overflow-hidden h-full
        border border-zinc-200 bg-white
        transition-shadow duration-700
        hover:shadow-[0_28px_70px_rgba(0,0,0,0.22)]
        backdrop-blur-sm
      "
    >
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full"
        style={{ height }}
      >
        {/* IMMAGINE FULL */}
        <Image
          src={imageSrc}
          alt="Open location in Google Maps"
          fill
          className="object-cover"
          sizes="100vw"
        />

        {/* overlay leggero */}
        <div className="absolute inset-0 bg-black/10" />

        {/* CTA hover bottom-right (come prima) */}
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
    </section>
  );
}
