import Link from "next/link";

export default function BookingCtaBar({
  title = "READY TO BOOK?",
  buttonLabel = "BOOK A TABLE",
  href = "/book",
}: {
  title?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-[#76aad8]">
      <div className="mx-auto md:max-w-6xl  max-w-auto px-6 md:py-16 py-8 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-[#F6E6D4] font-semibold tracking-tight leading-[0.9] text-4xl sm:text-5xl md:text-6xl">
            {title}
          </h2>

          <Link
            href={href}
            className="
              inline-flex items-center justify-center
              bg-[#f2c9a6] text-[#76aad8]
              px-10 py-4
              text-lg font-semibold tracking-wide
              hover:brightness-105 transition
              w-full sm:w-auto
            "
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
