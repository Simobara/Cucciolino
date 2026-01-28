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
      <div className="mx-auto max-w-7xl pl-16 py-4 md:py-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* TESTO */}
          <div className="max-w-5xl">
            <span className="block text-white/80 uppercase text-3xl md:text-3xl tracking-widest font-semibold pt-0 pb-12">
              {eyebrow}
            </span>

            <h2 className="mt-0 text-white font-oswald font-bold uppercase leading-[1.05] scale-y-[1.45] text-3xl sm:text-4xl md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 text-[#cadcf2] font-semibold text-3xl md:text-[2.15rem]">
              {subtitle}
            </p>
          </div>

          {/* CTA */}
          <div className="lg:shrink-0 lg:self-center md:ml-16 mt-6">
            <Link
              href={href}
              className="
                inline-flex items-center justify-center
                rounded-md
                border-4 border-white
                text-white
                px-12 py-2
                text-3xl font-semibold
                hover:bg-white hover:text-[#ef4136]
                transition
                whitespace-nowrap
              "
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
