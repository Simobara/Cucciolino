"use client";

import Image from "next/image";
import Link from "next/link";

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

  return (
    <section className="w-full">
      {/* ===== TOP: 4 IMMAGINI ===== */}
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

      {/* ===== BOTTOM: BARRA BLU ===== */}
      <div className="bg-[#cadcf2]">
        <div className="mx-auto w-full py-6">
          <div
            className="
        flex flex-col items-center text-center gap-4
        md:flex-row md:items-center md:justify-start md:text-left md:gap-6
        font-bold pl-0 md:pl-30
      "
          >
            <span className="text-[#2e3192] font-sofiapro md:text-3xl text-xl leading-none tracking-wide">
              Follow Cucciolino on:
            </span>

            {/* ICONS */}
            <div className="flex items-center justify-center gap-2">
              <Link href={instagramUrl} target="_blank">
                <span className="inline-flex items-center justify-center rounded-2xl p-3 md:text-3xl">
                  <Image
                    src="/image/imglogo1.png"
                    alt="Instagram"
                    width={54}
                    height={54}
                  />
                </span>
              </Link>

              <Link href="https://www.facebook.com/" target="_blank">
                <span className="inline-flex items-center justify-center rounded-2xl p-3">
                  <Image
                    src="/image/imglogo2.png"
                    alt="Facebook"
                    width={54}
                    height={54}
                  />
                </span>
              </Link>

              <Link href="https://www.tiktok.com/" target="_blank">
                <span className="inline-flex items-center justify-center rounded-2xl p-3">
                  <Image
                    src="/image/imglogo3.png"
                    alt="TikTok"
                    width={54}
                    height={54}
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
