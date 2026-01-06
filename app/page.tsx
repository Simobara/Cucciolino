import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LunchDinnerSection from "./components/ lunch-dinner/LunchDinnerSection";
import BreakfastBrunchSection from "./components/breakfast-brunch/BreakfastBrunchSection";
import BookingCtaBar from "./components/cta/ BookingCtaBar";
import FloatingHomeButton from "./components/floating/FloatingHomeButton";
import FunctionsGroupsSection from "./components/functions-groups/  FunctionsGroupsSection";
import SocialsSection from "./components/socials/ SocialsSection";
import WhatsOnSection from "./components/whatson/WhatsOnSection";

export const metadata: Metadata = {
  title: "Cucciolino Pizza & Gelato",
  description:
    "Authentic pizza and artisan gelato. View the menu, opening hours, location, and order via WhatsApp.",
};

export default function Home() {
  return (
    <main>
      <FloatingHomeButton />
      {/* HERO */}
      <section className="relative min-h-[90vh]">
        <Image
          src="/hero.jpg"
          alt="Cucciolino Pizza & Gelato"
          fill
          priority
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* content */}
        <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-20 min-h-[90vh] flex flex-col justify-center">
          <p className="text-white/80 text-xs tracking-[0.25em] uppercase">
            Brighton · Victoria
          </p>

          <h1 className="mt-5 text-white font-bold leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl">
            Pizza <br />
            Gelato <br />
            Italiano
          </h1>

          <p className="mt-6 max-w-xl text-white/85 text-base sm:text-lg">
            Hand-stretched pizza, premium Italian ingredients and artisan gelato
            — made fresh every day.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-semibold hover:bg-zinc-200 transition"
            >
              Order Online
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-full border border-white/70 text-white px-8 py-3 text-sm font-semibold hover:bg-white hover:text-black transition"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S ON */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">What’s On</h2>
          <Link
            href="/menu"
            className="text-sm font-medium text-zinc-600 hover:text-black hover:underline"
          >
            See full menu
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PromoCard
            title="Weekday Happy Hour"
            subtitle="Monday – Friday"
            detail="4:00 pm – 7:00 pm"
          />
          <PromoCard
            title="$14 Cocktails"
            subtitle="Every Monday"
            detail="Selected classics"
          />
          <PromoCard
            title="Pizza Night"
            subtitle="Every Thursday"
            detail="Ask our staff for details"
          />
        </div>
      </section>

      {/* BOOKINGS */}
      <section id="book" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-zinc-200 p-10">
          <h3 className="text-xl font-semibold">Bookings</h3>
          <p className="mt-3 text-zinc-600 max-w-lg">
            Planning a group dinner or a special night out? Book your table or
            contact us directly.
          </p>
        </div>
      </section>
      <WhatsOnSection />
      <BreakfastBrunchSection />
      <LunchDinnerSection />
      <BookingCtaBar />
      <FunctionsGroupsSection />
      <SocialsSection
        instagramHandle="@cucciolinopizza"
        instagramUrl="https://www.instagram.com/cucciolinopizza/"
        items={[
          {
            type: "video",
            imageSrc: "/social-1.jpg",
            imageAlt: "Reel",
            href: "https://www.instagram.com/cucciolinopizza/",
          },
          {
            type: "image",
            imageSrc: "/social-2.jpg",
            imageAlt: "Dish",
            href: "https://www.instagram.com/cucciolinopizza/",
          },
          {
            type: "image",
            imageSrc: "/social-3.jpg",
            imageAlt: "Hummus",
            href: "https://www.instagram.com/cucciolinopizza/",
          },
          {
            type: "image",
            imageSrc: "/social-4.jpg",
            imageAlt: "Flatbread",
            href: "https://www.instagram.com/cucciolinopizza/",
          },
        ]}
      />
    </main>
  );
}

function PromoCard({
  title,
  subtitle,
  detail,
}: {
  title: string;
  subtitle: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300 transition">
      <p className="text-xs tracking-widest uppercase text-zinc-500">
        {subtitle}
      </p>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600">{detail}</p>
    </div>
  );
}
