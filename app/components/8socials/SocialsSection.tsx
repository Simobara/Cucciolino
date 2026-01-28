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
            {/* IMMAGINE */}
            <Image
              src={src}
              alt={`Pizza ${i + 1}`}
              fill
              className="object-cover"
              sizes="(min-width:768px) 20vw, 33vw"
              priority={i === 0}
            />

            {/* LOGO IN ALTO A DESTRA */}
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
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-4 font-bold md:flex-row md:items-start md:justify-start md:pl-30 pl-10">
            <span className="text-[#2e3192] font-sofiapro  md:text-3xl text-xl">
              Follow Cucciolino on:
            </span>

            <div className="flex items-center gap-5">
              <Link href={instagramUrl} target="_blank">
                <Image
                  src="/icons/logoinstagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="https://www.facebook.com/" target="_blank">
                <Image
                  src="/icons/logofacebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </Link>

              <Link href="https://www.tiktok.com/" target="_blank">
                <Image
                  src="/icons/logotictoc.png"
                  alt="TikTok"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
