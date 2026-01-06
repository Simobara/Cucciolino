"use client";

import { useRef } from "react";
import WhatsOnCard from "./whatsoncard";


export type WhatsOnItem = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  meta?: string;
  href?: string;
};

export default function WhatsOnCarousel({
  items,
}: {
  items: WhatsOnItem[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;

    const cardWidth =
      scrollerRef.current.querySelector<HTMLElement>("[data-card]")?.offsetWidth ??
      320;

    scrollerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* LEFT ARROW */}
      <button
        onClick={() => scrollByAmount("left")}
        aria-label="Scroll left"
        className="
          hidden md:flex
          absolute left-0 top-1/2 -translate-y-1/2 z-10
          h-12 w-12 rounded-full
          bg-[#0F5B63] text-white
          items-center justify-center
          shadow-md
          hover:scale-105 transition
        "
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scrollByAmount("right")}
        aria-label="Scroll right"
        className="
          hidden md:flex
          absolute right-0 top-1/2 -translate-y-1/2 z-10
          h-12 w-12 rounded-full
          bg-[#0F5B63] text-white
          items-center justify-center
          shadow-md
          hover:scale-105 transition
        "
      >
        →
      </button>

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#F6E6D4] to-transparent hidden md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#F6E6D4] to-transparent hidden md:block" />

      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className="
          flex gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory scroll-smooth
          scrollbar-hide
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            data-card
            className="
              snap-start
              min-w-[78%]
              sm:min-w-90
              md:min-w-[320px]
            "
          >
            <WhatsOnCard {...item} />
          </div>
        ))}

        <div className="min-w-1px" />
      </div>
    </div>
  );
}
