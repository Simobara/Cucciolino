"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useParallax } from "../hooks/useParallax";

type BreakfastBrunchSectionProps = {
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  sectionClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  imageClassName?: string;
  contentWrapperClassName?: string;
  imagePriority?: boolean;
};

export default function BreakfastBrunchSection({
  title,
  description,
  imageSrc,
  imageAlt,
  sectionClassName = "",
  titleClassName = "",
  textClassName = "",
  imageClassName = "",
  contentWrapperClassName = "",
  imagePriority = false,
}: BreakfastBrunchSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const {
    ref: parallaxRef,
    y,
    prefersReducedMotion,
  } = useParallax<HTMLDivElement>({
    strength: 70,
    max: 90,
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let timeout: number | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        timeout = window.setTimeout(() => {
          setVisible(true);
          observer.disconnect();
        }, 150);
      },
      { threshold: 0.25, rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={[
        "mt-0 mb-0 h-auto py-8 md:h-[50vh] md:py-0",
        sectionClassName,
      ].join(" ")}
      style={{
        backgroundImage: `
          linear-gradient(rgba(202,220,242,0.45), rgba(202,220,242,0.45)),
          url('/iconsss/picsAzzurra2.png')
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="mx-auto h-full">
        <div className="grid md:grid-cols-2 h-full items-stretch">
          {/* IMAGE RIGHT */}
          <div
            ref={parallaxRef}
            className={[
              "relative w-full h-[42vh] min-h-75 md:h-full md:min-h-0 order-1 md:order-2",
              visible ? "is-visible" : "",
              imageClassName,
            ].join(" ")}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 will-change-transform"
                style={{
                  transform: prefersReducedMotion
                    ? "translate3d(0,0,0) scale(1.15)"
                    : `translate3d(0, ${y}px, 0) scale(1.15)`,
                }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={imagePriority}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* TEXT LEFT */}
          <div
            className={[
              "reveal flex flex-col justify-center mr-2 md:mr-12 px-6 sm:px-8 md:px-16",
              visible ? "is-visible" : "",
              contentWrapperClassName,
            ].join(" ")}
            style={{ transitionDelay: "280ms" }}
          >
            <div className="md:max-w-200 ml-0 sm:ml-6 md:ml-20">
              <h2
                className={[
                  "text-[#ef4136] font-oswald font-semibold uppercase tracking-widest leading-none inline-block origin-center scale-y-[1.25] text-5xl sm:text-6xl md:text-6xl lg:text-6xl",
                  titleClassName,
                ].join(" ")}
              >
                {title}
              </h2>

              <div
                className={[
                  "mt-6 md:mt-10 text-[#2e3192] font-sofiapro text-justify leading-snug text-lg sm:text-xl md:text-2xl w-[260px] sm:w-[320px] md:w-[420px]",
                  textClassName,
                ].join(" ")}
                style={{ textAlignLast: "justify" }}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
