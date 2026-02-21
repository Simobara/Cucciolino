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

  // (tenuti perché li usavi prima; ora non mostri dots/frecce)
  const [, setActive] = useState(0);
  const [, setCanLeft] = useState(false);
  const [, setCanRight] = useState(false);

  const total = items.length;

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

  // aggiorna active mentre scrolli (anche se dots sono commentati)
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
      {/* SCROLLER */}
      <div
        ref={scrollerRef}
        className="
          flex
          gap-4 sm:gap-6 lg:gap-10
          overflow-x-auto lg:overflow-visible
          px-4 sm:px-6 lg:px-0
          justify-start lg:justify-around
          snap-x snap-mandatory
          [scroll-snap-stop:always]
          scroll-px-2 sm:scroll-px-6
          overscroll-x-contain
          pb-4
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
                min-w-[86%] sm:min-w-[70%] md:min-w-[55%]
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

        {/* micro spazio a destra su mobile */}
        <div className="min-w-[12px] lg:hidden" />
      </div>

      {/* GRADIENT SOTTO LE CARDS (ok com’è) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 z-20" />
    </div>
  );
}
