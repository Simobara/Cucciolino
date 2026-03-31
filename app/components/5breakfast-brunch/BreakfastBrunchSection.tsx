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
              "flex flex-col items-start justify-center text-left mr-2 md:mr-12 px-6 sm:px-8 md:px-16",
              contentWrapperClassName,
            ].join(" ")}
          >
            <div className="w-full max-w-full md:max-w-[800px] ml-0 md:ml-12 lg:ml-20">
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
                  "mt-6 md:mt-10 text-[#2e3192] font-sofiapro font-semibold text-left leading-snug text-lg sm:text-xl md:text-2xl w-full max-w-[420px]",
                  textClassName,
                ].join(" ")}
                style={{ textAlignLast: "auto" }}
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
