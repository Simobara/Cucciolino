import "../../style/style.css";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection({
  maintoptitle,
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
          gap-6
          pb-12 md:pb-20
          md:pl-60
        "
      >
        <h2
          className="
    text-left

    text-4xl sm:text-6xl   /* ⬅️ MOBILE PIÙ GRANDE */
    font-semibold
    font-oswald
    tracking-tight
    text-[#ef4136]

    md:scale-x-[1.30]
    md:scale-y-[1.85]
    text-shadow-soft
  "
        >
          {maintoptitle}
        </h2>

        {/* eventuale bottone desktop */}
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
