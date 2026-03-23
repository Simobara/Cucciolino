import Image from "next/image";
import "../../style/style.css";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection({
  maintoptitle,
  maintopimage,
  maintoptitleAlt,
  subtitle,
  titleImgWidth,
  titleImgHeight,
  titleImgClassName,
  smallFirstTitle,
  smallSecondTitle,
  smallThirdTitle,
  smallFourthTitle,
  price1,
  price2,
  price3,
  price4,
  image1,
  image2,
  image3,
  image4,
  bottomPaddingClassName,
}: {
  maintoptitle: string;
  maintopimage?: string;
  maintoptitleAlt?: string;
  subtitle?: string;

  // ✅ controlli size per immagine titolo
  titleImgWidth?: number;
  titleImgHeight?: number;
  titleImgClassName?: string;

  smallFirstTitle: string;
  smallSecondTitle: string;
  smallThirdTitle: string;
  smallFourthTitle: string;
  price1: string;
  price2: string;
  price3: string;
  price4: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  bottomPaddingClassName?: string;
}) {
  const hasTitleImage =
    typeof maintopimage === "string" && maintopimage.startsWith("/");

  return (
    <section
      id="events"
      className={[
        "mx-auto px-4 sm:px-6 lg:px-10 pt-20 sm:pt-24 md:pt-28 scroll-mt-14",
        bottomPaddingClassName ?? "pb-8 sm:pb-10 md:pb-12",
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
      {/* TITLE ROW */}
      <div
        className="
    md:ml-32 ml-0
    pb-4 sm:pb-6 md:pb-9
  "
      >
        {hasTitleImage ? (
          <>
            <div
              className={`relative w-full max-w-[600px] h-[95px] sm:h-[120px] md:h-[150px] ${titleImgClassName ?? ""}`}
            >
              <Image
                src={maintopimage}
                alt={maintoptitleAlt ?? maintoptitle ?? "Section title"}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-contain"
              />
            </div>

            {subtitle && (
              <p className="-mt-4 ml-4 md:ml-8 text-[#2e3192] font-sofiapro font-bold text-lg sm:text-xl md:text-2xl leading-snug">
                {subtitle}
              </p>
            )}
          </>
        ) : (
          <>
            <h2
              className="
          text-left
          text-3xl sm:text-4xl md:text-5xl
          font-semibold font-oswald tracking-tight
          text-[#ef4136]
        "
            >
              {maintoptitle}
            </h2>

            <p className="mt-2 text-[#2e3192] font-sofiapro text-lg sm:text-xl md:text-2xl leading-snug">
              {subtitle}
            </p>
          </>
        )}
      </div>

      {/* CAROUSEL */}
      <WhatsOnCarousel
        items={[
          {
            imageSrc: image1,
            imageAlt: "Most Popular",
            title: smallFirstTitle,
            subtitle: price1,
            meta: " ",
            href: "/menu",
          },
          {
            imageSrc: image2,
            imageAlt: "specials..",
            title: smallSecondTitle,
            subtitle: price2,
            meta: " ",
            href: "/menu",
          },
          {
            imageSrc: image3,
            imageAlt: "Signature",
            title: smallThirdTitle,
            subtitle: price3,
            meta: " ",
            href: "/menu",
          },
          {
            imageSrc: image4,
            imageAlt: "Weekend brunch",
            title: smallFourthTitle,
            subtitle: price4,
            meta: " ",
            href: "/menu#brunch",
          },
        ]}
      />
    </section>
  );
}
