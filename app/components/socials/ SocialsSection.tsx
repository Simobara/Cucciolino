"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type SocialItem =
  | { type: "video"; imageSrc: string; imageAlt: string; href: string }
  | { type: "image"; imageSrc: string; imageAlt: string; href: string };

export default function SocialsSection({
  title = "SOCIALS",
  instagramHandle = "@cucciolinopizza",
  instagramUrl = "https://www.instagram.com/",
  items = [
    {
      type: "video",
      imageSrc: "/social-1.jpg",
      imageAlt: "Instagram reel",
      href: "https://www.instagram.com/",
    },
    {
      type: "image",
      imageSrc: "/social-2.jpg",
      imageAlt: "Dish photo",
      href: "https://www.instagram.com/",
    },
    {
      type: "image",
      imageSrc: "/social-3.jpg",
      imageAlt: "Hummus photo",
      href: "https://www.instagram.com/",
    },
    {
      type: "image",
      imageSrc: "/social-4.jpg",
      imageAlt: "Flatbread photo",
      href: "https://www.instagram.com/",
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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | null = null;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        // 1) assicuriamo che lo stato iniziale sia già "painted"
        // 2) poi con un timer facciamo partire la transizione
        // (funziona anche quando arrivi scrollando)
        timeoutId = window.setTimeout(() => {
          setVisible(true);
          io.disconnect();
        }, 120); // puoi aumentare a 200 se vuoi più morbido
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section ref={ref} className="bg-[#0F5B63]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* TITLE */}
        <h2
          className={[
            "reveal text-[#F6E6D4] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl",
            visible ? "is-visible" : "",
          ].join(" ")}
        >
          {title}
        </h2>

        {/* GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {firstFour.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open social item ${i + 1}`}
              className={[
                "reveal group relative block overflow-hidden bg-white/10",
                visible ? "is-visible" : "",
              ].join(" ")}
              style={{ transitionDelay: `${160 + i * 140}ms` }} // stagger morbido
            >
              <div className="relative aspect-square">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      h-16 w-16 rounded-full
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

        {/* FOLLOW TEXT */}
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
