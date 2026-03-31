"use client";

import Image from "next/image";
import { ReactNode } from "react";

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
  return (
    <section
      className={[
        "mt-0 mb-0 h-auto py-8 md:h-[50vh] md:py-0 overflow-hidden",
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
      <div className="mx-auto h-full w-full">
        <div className="grid h-full items-stretch md:grid-cols-2">
          {/* IMAGE RIGHT */}
          <div
            className={[
              "relative order-1 w-full h-[42vh] min-h-75 md:order-2 md:h-full md:min-h-0",
              imageClassName,
            ].join(" ")}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0">
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
              "order-2 flex w-full min-w-0 flex-col items-start justify-center px-4 sm:px-5 md:px-10 lg:px-16 text-left",
              contentWrapperClassName,
            ].join(" ")}
          >
            <div className="w-full min-w-0 max-w-full ml-0 md:ml-8 lg:ml-16">
              <h2
                className={[
                  "text-[#ef4136] font-oswald font-semibold uppercase tracking-widest leading-none inline-block text-5xl sm:text-6xl md:text-6xl lg:text-6xl",
                  titleClassName,
                ].join(" ")}
              >
                {title}
              </h2>

              <div
                className={[
                  "mt-4 md:mt-8 w-full max-w-full md:max-w-[420px] text-[#2e3192] font-sofiapro font-semibold text-left leading-snug text-base sm:text-lg md:text-2xl",
                  textClassName,
                ].join(" ")}
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
