import Image from "next/image";
import Link from "next/link";

export default function LunchDinnerSection() {
  return (
    <section className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* LEFT: IMAGE */}
          <div className="relative min-h-[380px] md:min-h-[640px]">
            <Image
              src="/lunch-dinner.jpg"
              alt="Lunch & Dinner"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* RIGHT: TEXT */}
          <div className="px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center">
            <h2 className="text-[#0F5B63] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              LUNCH <br /> &amp; DINNER
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              Dive into our homemade falafel and sambousek, bursting with
              freshness and bold flavours, or try something classic like our
              stone-baked pizzas or fresh pastas. We’ve got handcrafted cocktails
              and a selection of local and imported wines to make your meal one
              to remember.
            </p>

            <div className="mt-12">
              <Link
                href="/menu"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-12 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
              >
                FOOD MENU
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
