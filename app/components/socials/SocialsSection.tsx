"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

type SocialItem =
  | { type: "video"; imageSrc: string; imageAlt: string; href: string }
  | { type: "image"; imageSrc: string; imageAlt: string; href: string };

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

type Props = {
  title?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  items?: SocialItem[];
};

export default function SocialsSection({
  title = "SOCIALS ",
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
      imageAlt: "Twitter",
      href: "https://www.twitter.com/",
    },
    {
      type: "image",
      imageSrc: "/icons/logotictoc.png",
      imageAlt: "TikTok",
      href: "https://www.tictoc.com/",
    },
    {
      type: "image",
      imageSrc: "/icons/logofacebook.png",
      imageAlt: "Facebook",
      href: "https://www.facebook.com/",
    },
  ] as SocialItem[],
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const firstFour = useMemo(() => items.slice(0, 4), [items]);

  const [hoveredSrc, setHoveredSrc] = useState<string | null>(null);

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
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);

    return () => {
      io.disconnect();
      if (timeoutId) window.clearTimeout(timeoutId);
      rafIds.current.forEach((id) => cancelAnimationFrame(id));
      rafIds.current = [];
    };
  }, []);

  function isFinePointer() {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false
    );
  }

  function onMove(i: number, e: React.MouseEvent) {
    if (!isFinePointer()) return;

    const card = cardRefs.current[i];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 16;
    const rotateX = -(py - 0.5) * 16;

    const glareX = px * 100;
    const glareY = py * 100;

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
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--gx", "50%");
    card.style.setProperty("--gy", "50%");
  }

  const positions = [
    {
      mobileWrap: "left-[4%] top-[2%] w-[74px] rotate-[-6deg]",
      desktopWrap: "sm:left-[6%] sm:top-[6%] sm:w-[96px] sm:rotate-[-6deg]",
      mobileMedia: "aspect-square",
      desktopMedia: "aspect-square",
    },
    {
      mobileWrap: "left-[35%] top-[10%] w-[62px] rotate-[7deg]",
      desktopWrap: "sm:left-[32%] sm:top-[24%] sm:w-[84px] sm:rotate-[7deg]",
      mobileMedia: "aspect-[1/1.18]",
      desktopMedia: "aspect-square",
    },
    {
      mobileWrap: "left-[10%] top-[22%] w-[66px] rotate-[5deg]",
      desktopWrap: "sm:left-[58%] sm:top-[-54%] sm:w-[88px] sm:rotate-[5deg]",
      mobileMedia: "aspect-[1/1.12]",
      desktopMedia: "aspect-square",
    },
    {
      mobileWrap: "right-[-26%] top-[28%] w-[78px] rotate-[-4deg]",
      desktopWrap: "sm:left-[82%] sm:top-[-64%] sm:w-[102px] sm:rotate-[-4deg]",
      mobileMedia: "aspect-square",
      desktopMedia: "aspect-square",
    },
  ] as const;

  const sectionStyle: CSSVars | undefined = hoveredSrc
    ? { "--bg": `url(${hoveredSrc})` }
    : undefined;

  return (
    <section
      ref={ref}
      className="bg-[#2e3192] relative overflow-hidden"
      style={sectionStyle}
    >
      <div
        aria-hidden="true"
        className={[
          "socials-hover-bg pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
          hoveredSrc ? "opacity-10" : "",
        ].join(" ")}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-2 sm:py-10">
        <h2
          className={[
            "reveal text-[#F6E6D4] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl text-shadow-soft",
            visible ? "is-visible" : "",
          ].join(" ")}
        >
          {title}
        </h2>

        <div className="mt-10 relative h-80 sm:h-55">
          {firstFour.map((item, i) => {
            const pos = positions[i] ?? positions[0];

            return (
              <Link
                key={i}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open social item ${i + 1}`}
                onMouseEnter={() => {
                  if (!isFinePointer()) return;
                  setHoveredSrc(item.imageSrc);
                }}
                onMouseMove={(e) => onMove(i, e)}
                onMouseLeave={() => {
                  onLeave(i);
                  setHoveredSrc(null);
                }}
                className={[
                  "reveal social-card group absolute block overflow-hidden rounded-2xl",
                  pos.mobileWrap,
                  pos.desktopWrap,
                  "sm:right-auto",
                  visible ? "is-visible" : "",
                  visible ? "sm:float-on" : "",
                ].join(" ")}
                style={{ transitionDelay: `${160 + i * 140}ms` }}
              >
                <div
                  className={[
                    "relative social-card__media",
                    pos.mobileMedia,
                    `sm:${pos.desktopMedia}`,
                  ].join(" ")}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="160px"
                  />
                </div>

                <div className="social-card__glare" aria-hidden="true" />

                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/30 transition duration-300 group-hover:bg-white/30">
                      <div className="w-0 h-0 border-t-8px border-t-transparent border-b-8px border-b-transparent border-l-14px border-l-white/95 translate-x-0.5" />
                    </div>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div
          className={[
            "reveal mt-2 md:mt-2 text-[#F6E6D4] text-lg sm:text-xl leading-relaxed",
            "text-right sm:text-left",
            visible ? "is-visible" : "",
          ].join(" ")}
          style={{ transitionDelay: `${160 + firstFour.length * 140}ms` }}
        >
          <p>Follow us on:</p>
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
