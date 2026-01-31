import Image from "next/image";
import "../../style/style.css";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection({
  maintoptitle,
  maintopimage,
  maintoptitleAlt,
  titleImgWidth = 600,
  titleImgHeight = 200,
  titleImgClassName = "",
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
}: {
  maintoptitle: string;
  maintopimage?: string;
  maintoptitleAlt?: string;

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
}) {
  const hasTitleImage =
    typeof maintopimage === "string" && maintopimage.startsWith("/");

  return (
    <section
      id="events"
      className="mx-auto px-4 sm:px-6 lg:px-10 pt-25 scroll-mt-14 bg-[#cadcf2]"
    >
      {/* TITLE ROW */}
      <div
        className="
          flex flex-col md:flex-row
          md:items-end md:justify-between
          gap-4 sm:gap-6
          pb-8 sm:pb-12 md:pb-28
          md:ml-32 ml-0
        "
      >
        {hasTitleImage ? (
          <Image
            src={maintopimage}
            alt={maintoptitleAlt ?? maintoptitle ?? "Section title"}
            width={titleImgWidth}
            height={titleImgHeight}
            priority
            className={`w-auto max-w-full h-auto ${titleImgClassName}`}
          />
        ) : (
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
