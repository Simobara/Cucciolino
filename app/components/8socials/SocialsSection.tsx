"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SocialsSection({
  instagramUrl = "https://www.instagram.com/cucciolinopizza/",
}: {
  instagramUrl?: string;
}) {
  const pizzas = [
    "/imgg/soc1.png",
    "/imgg/soc2.png",
    "/imgg/soc3.png",
    "/imgg/soc4.png",
    "/imgg/soc5.png",
  ];

  const iconsRef = useRef<HTMLDivElement | null>(null);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (!iconsRef.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIcons(true);
          obs.disconnect(); // una sola volta
        }
      },
      { threshold: 0.3 },
    );

    obs.observe(iconsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full">
      {/* ===== TOP: IMMAGINI ===== */}
      <div className="grid grid-cols-3 md:grid-cols-5">
        {pizzas.map((src, i) => (
          <div key={i} className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={src}
              alt={`Pizza ${i + 1}`}
              fill
              className="object-cover"
              sizes="(min-width:768px) 20vw, 33vw"
              priority={i === 0}
            />

            <div className="absolute top-3 right-3 z-10">
              <Image
                src="/imggg/logoInstGrey.png"
                alt="Instagram"
                width={28}
                height={28}
                className="drop-shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ===== BOTTOM: BARRA PATTERN ===== */}
      <div
        style={{
          backgroundImage: `
      linear-gradient(rgba(202,220,242,0.45), rgba(202,220,242,0.45)),
      url('/iconsss/picsAzzurra2.png')
    `,
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      >
        <div className="mx-auto w-full py-6">
          <div
            className="
              flex flex-col items-center text-center gap-4
              md:flex-row md:items-center md:justify-start md:text-left md:gap-6
              font-bold pl-0 md:pl-40
            "
          >
            <span
              className="
  text-[#2e3192] font-sofiapro
  md:text-3xl text-xl
  leading-none tracking-wide
  text-center md:text-left
  mx-auto md:mx-0
"
            >
              Follow Cucciolino on:
            </span>

            {/* ===== ICONE ANIMATE ===== */}
            <div
              ref={iconsRef}
              className="flex items-center md:justify-start justify-center gap-2 md:text-5xl"
            >
              {/* Instagram */}
              <Link href={instagramUrl} target="_blank">
                <span
                  className={`
                    inline-flex items-center justify-center rounded-2xl p-3
                    transform transition-all duration-700 ease-out
                    ${
                      showIcons
                        ? "opacity-100 translate-y-0 delay-100"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  <Image
                    src="/image/imglogo1.png"
                    alt="Instagram"
                    width={60}
                    height={60}
                  />
                </span>
              </Link>

              {/* Facebook */}
              <Link href="https://www.facebook.com/" target="_blank">
                <span
                  className={`
                    inline-flex items-center justify-center rounded-2xl p-3
                    transform transition-all duration-700 ease-out
                    ${
                      showIcons
                        ? "opacity-100 translate-y-0 delay-300"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  <Image
                    src="/image/imglogo2.png"
                    alt="Facebook"
                    width={60}
                    height={60}
                  />
                </span>
              </Link>

              {/* TikTok */}
              <Link href="https://www.tiktok.com/" target="_blank">
                <span
                  className={`
                    inline-flex items-center justify-center rounded-2xl p-3
                    transform transition-all duration-700 ease-out
                    ${
                      showIcons
                        ? "opacity-100 translate-y-0 delay-[500ms]"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                >
                  <Image
                    src="/image/imglogo3.png"
                    alt="TikTok"
                    width={60}
                    height={60}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
