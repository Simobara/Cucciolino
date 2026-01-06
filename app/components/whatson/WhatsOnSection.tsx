import Link from "next/link";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection() {
  return (
    <section id="events" className="mx-auto max-w-7xl px-6 py-24 scroll-mt-28">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
          Events &amp; Specials
        </h2>

        <Link
          href="/menu"
          className="text-sm font-medium text-zinc-700 hover:text-black hover:underline"
        >
          See full menu
        </Link>
      </div>

      <div className="mt-12">
        <WhatsOnCarousel
          items={[
            {
              imageSrc: "/iconss/pizza.png",
              imageAlt: "Pita & burgers",
              title: "20% OFF\nPITA\nBURGERS",
              subtitle: "Every Tuesday",
              meta: "Member’s Only",
              href: "/menu",
            },
            {
              imageSrc: "/iconss/gelato.png",
              imageAlt: "Mains & pasta",
              title: "20% OFF\nMAINS &\nPASTA",
              subtitle: "Every Wednesday",
              meta: "Member’s Only",
              href: "/menu",
            },
            {
              imageSrc: "/iconss/pasta.png",
              imageAlt: "Pizza & sambousek",
              title: "20% OFF\nPIZZA &\nSAMBOUSEK",
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
              title: "$14\nCOCKTAIL\nNIGHT",
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
