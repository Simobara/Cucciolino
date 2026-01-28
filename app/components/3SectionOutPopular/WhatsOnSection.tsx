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
      className="mx-auto px-10 pt-42 top-32 scroll-mt-14 bg-[#cadcf2] "
    >
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-oswald text-shadow -soft text-[#ef4136]">
          {/* WHAT &apos;S ON */}
          {maintoptitle}
        </h2>

        {/* BOTTONE STILE BRUNCH MENU */}
        {/* <Link
          href="/menu"
          className="bg-[#394b5b] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
        >
          SEE FULL MENU
        </Link> */}
      </div>

      <div className="mt-12">
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
              imageSrc:image2,
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
            // extra items per test carousel
            // {
            //   imageSrc: "/iconss/pizza5.png",
            //   imageAlt: "Pizza night",
            //   title: "20% OFF\nPIZZA &\nGELATO",
            //   subtitle: "Every Friday",
            //   meta: "From 5pm",
            //   href: "/menu#drinks",
            // },
            // {
            //   imageSrc: "/promo-6.jpg",
            //   imageAlt: "Family pizza",
            //   title: "FAMILY\nPIZZA\nDEAL",
            //   subtitle: "All Week",
            //   meta: "Dine In Only",
            //   href: "/menu",
            // },
          ]}
        />
      </div>
    </section>
  );
}
