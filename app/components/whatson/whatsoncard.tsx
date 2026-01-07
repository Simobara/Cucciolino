import Image from "next/image";
import Link from "next/link";

export default function WhatsOnCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  meta,
  href = "/menu",
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  meta?: string;
  href?: string;
}) {
  return (
    <div className="group" tabIndex={0}>
      {/* CARD FRAME */}
      <div
        className="
          relative rounded-2xl overflow-hidden
          bg-black/5
          shadow-[0_22px_55px_rgba(0,0,0,0.22)]
          ring-1 ring-black/10
          transition-transform duration-300
          group-hover:-translate-y-1
          group-focus:-translate-y-1
        "
      >
        {/* IMAGE AREA */}
        <div className="relative aspect-4/5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-[1.06]
              group-focus:scale-[1.06]
            "
            sizes="(max-width: 640px) 80vw, 360px"
          />

          {/* ✅ DARKEN SOLO LA FOTO (appare su hover) */}
          <div
            className="
              absolute inset-0 z-10
              opacity-0
              group-hover:opacity-100
              group-focus:opacity-100
              transition-opacity duration-300
              bg-black/45
            "
          />

          {/* (opzionale) vignette leggero sempre */}
          <div className="absolute inset-0 z-20 bg-linear-to-t from-black/20 via-transparent to-transparent" />

          {/* ✅ PANEL che sale: resta chiaro (sopra al dark) */}
          <div
            className="
              absolute inset-x-0 bottom-0 z-30
              translate-y-full
              group-hover:translate-y-0
              group-focus:translate-y-0
              transition-transform duration-300 ease-out
              bg-white
              border-t border-black/10
              p-4 justify-center
            "
            style={{ height: "28%" }}
          >
            <p className="text-xs tracking-widest uppercase text-zinc-600">
              {subtitle}
            </p>

            <p className="mt-1 text-sm font-semibold text-zinc-900">
              {meta ?? "Special"}
            </p>

            <Link
              href={href}
              className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 text-zinc-900"
            >
              Learn More
            </Link>
          </div>

          {/* shine sopra tutto (facoltativo) */}
          <div
            className="
              pointer-events-none absolute inset-0 z-40 opacity-0
              group-hover:opacity-100 group-focus:opacity-100
              transition-opacity duration-500
              bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_45%)]
            "
          />
        </div>
      </div>

      {/* TEXT SOTTO (fuori dalla foto, non viene scurito) */}
      <div className="mt-6 text-center">
        <h3 className="whitespace-pre-line text-3xl sm:text-4xl font-semibold tracking-tight text-[#0F5B63] leading-[0.92]">
          {title}
        </h3>

        <p className="mt-4 text-sm font-semibold text-[#0F5B63]">{subtitle}</p>

        <div className="mt-1 text-sm text-[#0F5B63]/80">
          {meta ? (
            <>
              <span>{meta}</span>
              <span className="mx-2">-</span>
            </>
          ) : null}
          <Link href={href} className="underline underline-offset-4">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
