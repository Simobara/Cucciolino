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
    <div className="group perspective:distant">
      {/* TILT BODY */}
      <div
        className="
          preserve-3d
          transition-transform duration-500 ease-out
          group-hover:transform:rotateY(-14deg)_rotateX(10deg)
        "
      >
        {/* CARD FRAME */}
        <div
          className="
            relative rounded-2xl overflow-hidden
            bg-black/5
            shadow-[0_22px_55px_rgba(0,0,0,0.22)]
            ring-1 ring-black/10
          "
        >
          {/* SUBTLE SHINE */}
          <div
            className="
              pointer-events-none absolute inset-0 opacity-0
              group-hover:opacity-100 transition-opacity duration-500
              bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.55),transparent_45%)]
            "
          />

          {/* IMAGE */}
          <div className="relative aspect-4/5 backface-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="
                object-cover
                transition duration-700
                group-hover:scale-[1.08]
              "
              sizes="(max-width: 640px) 80vw, 360px"
            />

            {/* DEPTH VIGNETTE */}
            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-black/0 to-black/0" />
          </div>

          {/* FLOATING EDGE */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/25" />
        </div>

        {/* TEXT LAYER */}
        <div className="mt-6 text-center preserve-3d">
          <h3
            className="
              whitespace-pre-line
              text-3xl sm:text-4xl
              font-semibold tracking-tight
              text-[#0F5B63]
              leading-[0.92]
              transform:translate3d(0,0,60px)
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-4 text-sm font-semibold text-[#0F5B63]
              transform:translate3d(0,0,40px)
            "
          >
            {subtitle}
          </p>

          <div
            className="
              mt-1 text-sm text-[#0F5B63]/80
              transform:translate3d(0,0,28px)
            "
          >
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
    </div>
  );
}
