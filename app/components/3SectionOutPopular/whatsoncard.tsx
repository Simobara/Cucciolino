import Image from "next/image";

export default function WhatsOnCard({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  textsVisible = false,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  meta?: string;
  href?: string;
  isShown?: boolean;
  textsVisible?: boolean;
}) {
  return (
    <div className="group" tabIndex={0}>
      {/* CARD FRAME */}
      <div
        className="
          relative overflow-hidden
          bg-white
          ring-1 ring-black/10
          transition-transform duration-300
          group-hover:-translate-y-1
          group-focus:-translate-y-1
        "
      >
        {/* IMAGE AREA */}
        <div className="relative aspect-[3/4] sm:aspect-[3/4.2]">
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
            sizes="(max-width: 640px) 86vw, (max-width: 1024px) 55vw, 360px"
          />

          <div className="absolute inset-0 z-10" />
          <div className="absolute inset-0 z-20" />
        </div>
      </div>

      {/* TEXT SOTTO */}
      <div
        className={`
          mt-5 sm:mt-8 md:mt-16
          mb-4 sm:mb-5 md:mb-6
          text-start items-start
          transition-all duration-200 ease-out
          ${textsVisible ? "translate-y-0 opacity-100" : "opacity-0 translate-y-2"}
        `}
        style={{ transitionDelay: "100ms" }}
      >
        <h3
          className="
            whitespace-pre-line
            font-sofiapro uppercase
            tracking-[0.08em]
            text-[#ef4136]
            leading-[1.08]
            text-xl sm:text-2xl md:text-4xl
          "
        >
          {title}
        </h3>

        <p className="mt-3 sm:mt-4 text-[20px] sm:text-[24px] md:text-[30px] font-semibold text-[#f7941d] leading-none">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
