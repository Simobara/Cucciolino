import Image from "next/image";
import Link from "next/link";

export default function FunctionsGroupsSection() {
  return (
    <section className="bg-[#F6E6D4]">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2">
          {/* LEFT: TEXT */}
          <div className="px-6 sm:px-10 py-16 sm:py-20 md:py-24 flex flex-col justify-center">
            <h2 className="text-[#0F5B63] font-semibold tracking-tight leading-[0.9] text-5xl sm:text-6xl md:text-7xl">
              FUNCTIONS <br /> &amp; GROUPS
            </h2>

            <p className="mt-10 max-w-xl text-[#0F5B63] text-lg sm:text-xl leading-relaxed">
              Whether it&apos;s a milestone birthday or an office work party, our
              versatile venue can accommodate gatherings of all sizes. With the
              option for full venue hire or simply large bookings, our dedicated
              team will work closely with you to create a menu that suits your
              next big event.
            </p>

            <div className="mt-12 flex flex-col gap-5 max-w-xs">
              <Link
                href="/functions"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-10 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
              >
                LEARN MORE
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  bg-[#0F5B63] text-white
                  px-10 py-4
                  text-lg font-semibold tracking-wide
                  hover:brightness-110 transition
                "
              >
                ENQUIRIES
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative min-h-95 md:min-h-160">
            <Image
              src="/functions.jpg"
              alt="Functions and Groups"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
