import Link from "next/link";

export default function MembershipCtaBar({
  eyebrow = "MEMBERSHIP",
  title = "BECOME PART OF THE CUCCIOLINO COMMUNITY",
  subtitle = "Get a discount every time we visit us",
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
      <div className="mx-auto max-w-7xl ml-50 py-0 md:py-10">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* TESTO */}
          <div className="w-full">
            <span className="block text-white uppercase text-3xl md:text-3xl tracking-widest font-sofiapro pt-0 pb-12">
              {eyebrow}
            </span>

            {/* H2 + CTA sullo stesso livello */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <h2
                className="
  mr-20 mt-0
  text-white font-oswald font-bold uppercase  
  leading-[1.05] scale-y-[1.25]
  sm:text-4xl md:text-[3rem] text-3xl
"
              >
                {title}
              </h2>

              <Link
                href={href}
                className="
        mt-6 md:mt-0
        rounded-md
        border-4 border-white
        text-white
        px-12 py-2
        text-3xl font-sofiapro
        hover:bg-white hover:text-[#ef4136]
        transition whitespace-nowrap
      "
              >
                {buttonLabel}
              </Link>
            </div>

            <p className="mt-6 text-[#cadcf2] font-sofiapro md:text-[2rem] text-3xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
