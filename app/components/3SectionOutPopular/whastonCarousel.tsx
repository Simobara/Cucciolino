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
  const [textsVisible, setTextsVisible] = useState(false);

  // indice attivo per i puntini
  const [, setActive] = useState(0);

  const [, setCanLeft] = useState(false);
  const [, setCanRight] = useState(false);

  const total = items.length;
  const edgeSpace = "w-10 sm:w-12 lg:w-16";

  // quanto scroll equivale a uno "step" (una card circa)
  // const getStep = () => {
  //   const scroller = scrollerRef.current;
  //   if (!scroller) return 0;
  //   const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  //   if (maxScroll <= 0 || total <= 1) return 0;
  //   return maxScroll / (total - 1);
  // };

  // const scrollByAmount = (direction: "left" | "right") => {
  //   const scroller = scrollerRef.current;
  //   if (!scroller) return;

  //   const step = getStep();
  //   if (step <= 0) return;

  //   scroller.scrollBy({
  //     left: direction === "left" ? -step : step,
  //     behavior: "smooth",
  //   });

  //   // 🔽 opzionale: forza update frecce
  //   requestAnimationFrame(() => {
  //     const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  //     setCanLeft(scroller.scrollLeft > 2);
  //     setCanRight(scroller.scrollLeft < maxScroll - 2);
  //   });
  // };

  // const goTo = (index: number) => {
  //   const scroller = scrollerRef.current;
  //   if (!scroller) return;

  //   const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  //   if (maxScroll <= 0 || total <= 1) return;

  //   const clampedIndex = Math.max(0, Math.min(total - 1, index));
  //   const target = (clampedIndex / (total - 1)) * maxScroll;

  //   scroller.scrollTo({
  //     left: target,
  //     behavior: "smooth",
  //   });
  // };

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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // reveal progressivo + testo dopo tutte le immagini
  useEffect(() => {
    if (!started || total === 0) return;

    let firstTimeout: number | null = null;
    let intervalId: number | null = null;
    let textsTimeout: number | null = null;

    firstTimeout = window.setTimeout(() => {
      setVisibleCount(1);
      let shown = 1;

      intervalId = window.setInterval(() => {
        shown += 1;

        if (shown >= total) {
          setVisibleCount(total);
          if (intervalId) window.clearInterval(intervalId);

          // dopo che TUTTE le card sono visibili,
          // aspetta ancora un po' e poi mostra i testi di tutte insieme
          textsTimeout = window.setTimeout(() => {
            setTextsVisible(true);
          }, 700);
        } else {
          setVisibleCount(shown);
        }
      }, revealGapMs);
    }, initialDelayMs);

    return () => {
      if (firstTimeout) window.clearTimeout(firstTimeout);
      if (intervalId) window.clearInterval(intervalId);
      if (textsTimeout) window.clearTimeout(textsTimeout);
    };
  }, [started, total, revealGapMs, initialDelayMs]);

  // aggiorna active mentre scrolli
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = scrollerRef.current;
        if (!el) return;

        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll <= 0 || total <= 1) {
          setActive(0);
          setCanLeft(false);
          setCanRight(false);
          return;
        }
        setCanLeft(el.scrollLeft > 2);
        setCanRight(el.scrollLeft < maxScroll - 2);

        const progress = el.scrollLeft / maxScroll;
        const idx = Math.round(progress * (total - 1));
        const clamped = Math.max(0, Math.min(total - 1, idx));
        setActive(clamped);
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
    };
  }, [total]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    // aspetta che il layout sia pronto (dopo reveal/paint)
    const id = requestAnimationFrame(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0 || total <= 1) {
        setCanLeft(false);
        setCanRight(false);
        return;
      }
      setCanLeft(el.scrollLeft > 2);
      setCanRight(el.scrollLeft < maxScroll - 2);
    });

    return () => cancelAnimationFrame(id);
  }, [visibleCount, total]);

  return (
    <div ref={sectionRef} className="relative">
      {/* { FRECCIA SINISTRA }
      {canLeft && (
        <button
          onClick={() => scrollByAmount("left")}
          aria-label="Scroll left"
          className="
          flex
          absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10
          h-14 w-16  text-2xl rounded-full
          bg-[#76aad8] text-white
          items-center justify-center
          shadow-md ring-1 ring-black/5
          hover:brightness-110 active:scale-95 transition
        "
        >
          ←
        </button>
      )}
      { FRECCIA DESTRA }
      {canRight && (
        <button
          onClick={() => scrollByAmount("right")}
          aria-label="Scroll right"
          className="
          flex
          absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10
          h-14 w-16  text-2xl rounded-full
          bg-[#76aad8] text-white
          items-center justify-center
          shadow-md ring-1 ring-black/5
          hover:brightness-110 active:scale-95 transition
        "
        >
          →
        </button>
      )} */}
      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className="
    flex gap-16 lg:gap-20
    overflow-x-auto lg:overflow-visible
    px-10 sm:px-12 lg:px-16
    justify-start lg:justify-center
    snap-x snap-mandatory
    pb-4
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
      >
        <div aria-hidden className={`${edgeSpace} shrink-0`} />
        {items.map((item, i) => {
          const isShown = i < visibleCount;

          return (
            <div
              key={i}
              data-card
              className="
                snap-start
                min-w-[78%]
                sm:min-w-[45%]
                lg:min-w-0
                lg:flex-none
                lg:w-65
                xl:w-72.5
              "
            >
              <div
                className={["reveal", isShown ? "is-visible" : ""].join(" ")}
              >
                <WhatsOnCard
                  {...item}
                  isShown={isShown}
                  textsVisible={textsVisible}
                />
              </div>
            </div>
          );
        })}

        {/* SPAZIO DESTRA (ultima card) */}
        <div aria-hidden className={`${edgeSpace} shrink-0`} />

        <div className="min-w-4px lg:hidden" />
      </div>

      {/* GRADIENT SOTTO LE CARDS */}
      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-24
          z-20
          "
        // bg-linear-to-t from-white to-transparent
      />

      {/* DOTS / LINE pagination */}
      {/* <div className="mt-3 flex items-center justify-center gap-2">
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
      </div> */}
    </div>
  );
}
