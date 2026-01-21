import Image from "next/image";
import Link from "next/link";

export default function WhatsOnCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  meta,
  href = "/menu",
  isShown = false,
  textsVisible = false,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  meta?: string;
  href?: string;
  isShown?: boolean; // controlla ENTRATA IMMAGINE (in sequenza)
  textsVisible?: boolean; // controlla ENTRATA TESTI (tutti insieme)
}) {
  return (
    <div className="group" tabIndex={0}>
      {/* CARD FRAME */}
      <div
        className="
          relative rounded-2xl overflow-hidden
          bg-white
          shadow-[0_22px_45px_rgba(0,0,0,0.32)]
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

          {/* oscuramento foto al hover */}
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

          {/* vignette */}
          <div className="absolute inset-0 z-20 bg-linear-to-t from-black/20 via-transparent to-transparent" />

          {/* PANEL basso che sale */}
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

          {/* shine */}
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

      {/* TEXT SOTTO – entrano TUTTI insieme in base a textsVisible */}
      <div
        className={`
          mt-6 text-center
          transition-all duration-200 ease-out
          ${textsVisible ? "opacity-100 translate-y-0" : "opacity-0"}
        `}
        style={{ transitionDelay: "100ms" }}
      >
        <h3 className="whitespace-pre-line text-3xl sm:text-4xl font-semibold tracking-tight text-[#76aad8] leading-[0.92]">
          {title}
        </h3>

        <p className="mt-4 text-sm font-semibold text-[#76aad8]">{subtitle}</p>

        <div className="mt-1 text-sm text-[#76aad8]/80">
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
