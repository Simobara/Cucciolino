import Link from "next/link";
import WhatsOnCarousel from "./whastonCarousel";

export default function WhatsOnSection() {
  return (
    <section className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            WHAT’S ON
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
                imageSrc: "/promo-1.jpg",
                imageAlt: "Pita & burgers",
                title: "20% OFF\nPITA\nBURGERS",
                subtitle: "Every Tuesday",
                meta: "Member’s Only",
                href: "/menu",
              },
              {
                imageSrc: "/promo-2.jpg",
                imageAlt: "Mains & pasta",
                title: "20% OFF\nMAINS &\nPASTA",
                subtitle: "Every Wednesday",
                meta: "Member’s Only",
                href: "/menu",
              },
              {
                imageSrc: "/promo-3.jpg",
                imageAlt: "Pizza & sambousek",
                title: "20% OFF\nPIZZA &\nSAMBOUSEK",
                subtitle: "Every Thursday",
                meta: "Member’s Only",
                href: "/menu",
              },

              // 👇 extra items per test carousel
              {
                imageSrc: "/promo-4.jpg",
                imageAlt: "Weekend brunch",
                title: "WEEKEND\nBRUNCH\nSPECIAL",
                subtitle: "Saturday & Sunday",
                meta: "Limited Time",
                href: "/menu#brunch",
              },
              {
                imageSrc: "/promo-5.jpg",
                imageAlt: "Cocktail night",
                title: "$14\nCOCKTAIL\nNIGHT",
                subtitle: "Every Friday",
                meta: "From 5pm",
                href: "/menu#drinks",
              },
              {
                imageSrc: "/promo-6.jpg",
                imageAlt: "Family pizza",
                title: "FAMILY\nPIZZA\nDEAL",
                subtitle: "All Week",
                meta: "Dine In Only",
                href: "/menu",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
