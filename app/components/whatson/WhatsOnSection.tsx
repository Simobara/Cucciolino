import Link from "next/link";
import "../../style/style.css";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection() {
  return (
    <section
      id="events"
      className="mx-auto px-10 pt-42 top-32 scroll-mt-14 bg-[#fffae7] "
    >
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight font-bikinis text-shadow-soft">
          WHAT &apos;S ON
        </h2>

        {/* BOTTONE STILE BRUNCH MENU */}
        <Link
          href="/menu"
          className="bg-[#394b5b] text-white px-10 py-4 text-lg font-semibold hover:brightness-110 transition"
        >
          SEE FULL MENU
        </Link>
      </div>

      <div className="mt-12">
        <WhatsOnCarousel
          items={[
            {
              imageSrc: "/iconss/pizza.png",
              imageAlt: "Most Popular",
              title: "20% OFF\nWOOD-FIRED\nPIZZA",
              subtitle: "Every Tuesday",
              meta: "Member’s Only",
              href: "/menu",
            },
            {
              imageSrc: "/iconss/gelato.png",
              imageAlt: "Mains & pasta",
              title: "20% OFF\nSIGNATURE\nPIZZA",
              subtitle: "Every Wednesday",
              meta: "Member’s Only",
              href: "/menu",
            },
            {
              imageSrc: "/iconss/pasta.png",
              imageAlt: "Pizza & sambousek",
              title: "20% OFF\nARTISAN\nGELATO",
              subtitle: "Every Thursday",
              meta: "Member’s Only",
              href: "/menu",
            },

            // extra items per test carousel
            {
              imageSrc: "/iconss/iconsfood1.png",
              imageAlt: "Weekend brunch",
              title: "WEEKEND\nBRUNCH\nSPECIAL",
              subtitle: "Saturday & Sunday",
              meta: "Limited Time",
              href: "/menu#brunch",
            },
            {
              imageSrc: "/iconss/iconsfood2.png",
              imageAlt: "Cocktail night",
              title: "20% OFF\nPIZZA &\nGELATO",
              subtitle: "Every Friday",
              meta: "From 5pm",
              href: "/menu#drinks",
            },
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
