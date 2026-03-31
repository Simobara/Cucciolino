import Link from "next/link";

export default function MembershipCtaBar({
  eyebrow = "MEMBERSHIP",
  title = "BECOME PART OF THE CUCCIOLINO COMMUNITY",
  subtitle = "Get a discount every time you visit us",
  buttonLabel = "Join Us",
  href = "/membership",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-[#ef4136]">
      <div
        className="
          mx-auto max-w-7xl
          px-4 sm:px-6 lg:px-8
          py-10 md:py-10
          ml-0 md:ml-8 lg:ml-30
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* TESTO */}
          <div className="w-full">
            <span className="block text-white uppercase tracking-widest font-sofiapro pb-6 sm:pb-8 text-xl sm:text-2xl md:text-3xl">
              {eyebrow}
            </span>

            {/* H2 + CTA */}
            <div className="flex flex-col md:flex-row md:items-center items-start md:gap-6">
              <h2
                className="
                  text-white font-oswald font-bold uppercase
                  leading-[1.05]
                  text-2xl sm:text-3xl md:text-[3rem]
                  md:scale-y-[1.25]
                  md:ml-0 ml-0
                "
              >
                {title}
              </h2>

              <Link
                href={href}
                className="
    mt-5 md:mt-0
    flex items-center justify-center
    rounded-md
    border-4 border-white
    text-white
    px-6 sm:px-10 md:px-12
    py-3 md:py-2
    font-sofiapro
    text-xl sm:text-2xl md:text-3xl
    hover:bg-white hover:text-[#ef4136]
    transition
    w-[72%]      /* 👈 CAMBIA QUESTO NUMERO */
    mr-auto      /* ✅ attaccato a sinistra su mobile */
    md:w-auto
  "
              >
                {buttonLabel}
              </Link>
            </div>

            <p className="mt-5 sm:mt-6 text-[#cadcf2] font-sofiapro text-lg sm:text-xl md:text-[2rem]">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
