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
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* TESTO */}
          <div className="max-w-4xl">
            <span className="block text-white/80 uppercase tracking-widest text-sm font-semibold">
              {eyebrow}
            </span>

            <h2 className="mt-2 text-white font-oswald font-bold uppercase leading-[1.05] text-3xl sm:text-4xl md:text-5xl">
              {title}
            </h2>

            <p className="mt-2 text-white/90 text-base sm:text-lg">
              {subtitle}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={href}
            className="
              inline-flex items-center justify-center
              rounded-md
              border-2 border-white
              text-white
              px-8 py-3
              text-base font-semibold
              hover:bg-white hover:text-[#ef4136]
              transition
              whitespace-nowrap
            "
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
