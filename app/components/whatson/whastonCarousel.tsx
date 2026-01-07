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

  // NEW: active index per dots/line
  const [active, setActive] = useState(0);

  const total = items.length;

  const getCardWidth = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return 320;
    return (
      scroller.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 320
    );
  };

  const scrollByAmount = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cardWidth = getCardWidth();
    const gap = 24;

    scroller.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  // NEW: scroll to index (click dots)
  const goTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cardWidth = getCardWidth();
    const gap = 24;

    scroller.scrollTo({
      left: index * (cardWidth + gap),
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

  // NEW: aggiorna active mentre scrolli (perf)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const cardWidth = getCardWidth();
        const gap = 24;
        const step = cardWidth + gap;

        const idx = step > 0 ? Math.round(el.scrollLeft / step) : 0;
        const clamped = Math.max(0, Math.min(total - 1, idx));
        setActive(clamped);
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    // sync iniziale
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [total]);

  return (
    <div ref={sectionRef} className="relative">
      {/* LEFT ARROW (fuori dall'area delle card) */}
      <button
        onClick={() => scrollByAmount("left")}
        aria-label="Scroll left"
        className="
          hidden md:flex
          absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10
          h-12 w-12 rounded-full
          
          bg-[#0F5B63] text-white
          items-center justify-center
          shadow-md ring-1 ring-black/5
          hover:brightness-110 active:scale-95 transition
        "
      >
        ←
      </button>

      {/* RIGHT ARROW (fuori dall'area delle card) */}
      <button
        onClick={() => scrollByAmount("right")}
        aria-label="Scroll right"
        className="
          hidden md:flex
          absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10
          h-12 w-12 rounded-full
          bg-[#0F5B63] text-white
          items-center justify-center
          shadow-md ring-1 ring-black/5
          hover:brightness-110 active:scale-95 transition
        "
      >
        →
      </button>

      {/* fade edges (trasparente -> bianco, NON beige) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-white to-transparent hidden md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-white to-transparent hidden md:block" />

      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className="
    flex gap-6 overflow-x-auto pb-4
    snap-x snap-mandatory scroll-smooth
    pr-2

    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
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
                sm:min-w-105
                md:min-w-85
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

        {/* spacer finale per respiro */}
        <div className="min-w-1px" />
      </div>

      {/* NEW: DOTS -> LINE pagination */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => {
          const isActive = i === active;

          return (
            <button
              key={`pager-${i}`}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={isActive ? "true" : "false"}
              className="p-2"
            >
              <span
                className={[
                  "block transition-all duration-300",
                  isActive
                    ? "h-1 w-10 rounded-full bg-black"
                    : "h-2 w-2 rounded-full bg-zinc-300 hover:bg-zinc-400",
                ].join(" ")}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
