"use client";

import { useEffect, useRef, useState } from "react";
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
  revealGapMs = 800,
  initialDelayMs = 200,
}: {
  items: WhatsOnItem[];
  revealGapMs?: number;
  initialDelayMs?: number;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const total = items.length;

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;

    const cardWidth =
      scrollerRef.current.querySelector<HTMLElement>("[data-card]")
        ?.offsetWidth ?? 320;

    scrollerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // trigger una volta quando entra in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // reveal progressivo
  useEffect(() => {
    if (!started) return;

    let t0: number | null = null;
    let intervalId: number | null = null;

    // parte dalla prima card
    t0 = window.setTimeout(() => {
      setVisibleCount(1);

      intervalId = window.setInterval(() => {
        setVisibleCount((c) => {
          const next = c + 1;
          if (next >= total) {
            if (intervalId) window.clearInterval(intervalId);
            return total;
          }
          return next;
        });
      }, revealGapMs);
    }, initialDelayMs);

    return () => {
      if (t0) window.clearTimeout(t0);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [started, total, revealGapMs, initialDelayMs]);

  return (
    <div ref={sectionRef} className="relative">
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
        {items.map((item, i) => {
          const isShown = i < visibleCount;

          return (
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
              <div
                className={["reveal", isShown ? "is-visible" : ""].join(" ")}
              >
                <WhatsOnCard {...item} />
              </div>
            </div>
          );
        })}

        <div className="min-w-1px" />
      </div>
    </div>
  );
}
