"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type SocialItem =
  | { type: "video"; imageSrc: string; imageAlt: string; href: string }
  | { type: "image"; imageSrc: string; imageAlt: string; href: string };

export default function SocialsSection({
  title = "Follow us ",
  instagramHandle = "@cucciolinopizza",
  instagramUrl = "https://www.instagram.com/",
  items = [
    {
      type: "video",
      imageSrc: "/icons/logoinstagram.png",
      imageAlt: "Instagram reel",
      href: "https://www.instagram.com/",
    },
    {
      type: "image",
      imageSrc: "/icons/logotwitter.png",
      imageAlt: "Dish photo",
      href: "https://www.twitter.com/",
    },
    {
      type: "image",
      imageSrc: "/icons/logotictoc.png",
      imageAlt: "Hummus photo",
      href: "https://www.tictoc.com/",
    },
    {
      type: "image",
      imageSrc: "/icons/logofacebook.png",
      imageAlt: "Flatbread photo",
      href: "https://www.facebook.com/",
    },
  ] as SocialItem[],
}: {
  title?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  items?: SocialItem[];
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const firstFour = useMemo(() => items.slice(0, 4), [items]);

  // refs per trasformazioni 3D
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const rafIds = useRef<number[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        timeoutId = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 120);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      // cleanup raf
      rafIds.current.forEach((id) => cancelAnimationFrame(id));
      rafIds.current = [];
    };
  }, []);

  function isFinePointer() {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ??
      false
    );
  }

  function onMove(i: number, e: React.MouseEvent) {
    if (!isFinePointer()) return;
    const card = cardRefs.current[i];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1

    const rotateY = (px - 0.5) * 16; // gradi
    const rotateX = -(py - 0.5) * 16;

    const glareX = px * 100;
    const glareY = py * 100;

    // RAF per smooth
    const id = requestAnimationFrame(() => {
      card.style.setProperty("--rx", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--ry", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--gx", `${glareX.toFixed(2)}%`);
      card.style.setProperty("--gy", `${glareY.toFixed(2)}%`);
      card.classList.add("is-tilting");
    });

    rafIds.current[i] = id;
  }

  function onLeave(i: number) {
    const card = cardRefs.current[i];
    if (!card) return;

    card.classList.remove("is-tilting");
    card.style.setProperty("--rx", `0deg`);
    card.style.setProperty("--ry", `0deg`);
    card.style.setProperty("--gx", `50%`);
    card.style.setProperty("--gy", `50%`);
  }

  return (
    <section ref={ref} className="bg-[#0F5B63]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2
          className={[
            "reveal text-[#F6E6D4] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl",
            visible ? "is-visible" : "",
          ].join(" ")}
        >
          {title}
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {firstFour.map((item, i) => (
            <Link
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open social item ${i + 1}`}
              onMouseMove={(e) => onMove(i, e)}
              onMouseLeave={() => onLeave(i)}
              className={[
                "reveal social-card group relative block overflow-hidden",
                "mx-auto w-full max-w-30 sm:max-w-35 md:max-w-40",
                "rounded-2xl", // se vuoi più “card”
                visible ? "is-visible" : "",
                visible ? "float-on" : "",
              ].join(" ")}
              style={{ transitionDelay: `${160 + i * 140}ms` }}
            >
              {/* media */}
              <div className="relative aspect-square social-card__media">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* glare layer */}
              <div className="social-card__glare" aria-hidden="true" />

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
    h-12 w-12 sm:h-14 sm:w-14 rounded-full
    bg-white/25 backdrop-blur-sm
    flex items-center justify-center
    ring-1 ring-white/30
    transition duration-300
    group-hover:bg-white/30
  "
                  >
                    <div
                      className="
                        w-0 h-0
                        border-t-10px border-t-transparent
                        border-b-10px border-b-transparent
                        border-l-16px border-l-white/95
                        translate-x-0.5
                      "
                    />
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div
          className={[
            "reveal mt-14 text-[#F6E6D4] text-lg sm:text-xl leading-relaxed",
            visible ? "is-visible" : "",
          ].join(" ")}
          style={{ transitionDelay: `${160 + firstFour.length * 140}ms` }}
        >
          <p>Follow us on instagram</p>
          <Link
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-semibold"
          >
            {instagramHandle}
          </Link>
        </div>
      </div>
    </section>
  );
}
