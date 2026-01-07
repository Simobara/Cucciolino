"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import BreakfastBrunchSection from "./components/breakfast-brunch/BreakfastBrunchSection";
import BookingCtaBar from "./components/cta/BookingCtaBar";
import FloatingHomeButton from "./components/floating/FloatingHomeButton";
import FunctionsGroupsSection from "./components/functions-groups/FunctionsGroupsSection";
import LunchDinnerSection from "./components/lunch-dinner/LunchDinnerSection";
import MapEmbed from "./components/map/MapEmbed";
import SocialsSection from "./components/socials/SocialsSection";
import TopFadeOverlay from "./components/TopFadeOverlay";
import WhatsOnSection from "./components/whatson/WhatsOnSection";
import SplashScreen from "./splashScreen";

export default function Home() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* Splash: fade verso nero e poi sblocca la pagina */}
      <SplashScreen onFinish={() => setReady(true)} />

      {/* Nero sotto (così la pagina emerge dal nero) */}
      <TopFadeOverlay heightVh={30} fadeDistancePx={600} />
      <main
        className={[
          "relative transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        {/* BRAND WATERMARK (fixed, behind all sections) */}
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
          <div className="w-70 sm:w-105 md:w-130 opacity-[0.06]">
            <Image
              src="/logocucciolino.png"
              alt="Cucciolino"
              width={900}
              height={900}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* PAGE CONTENT (above watermark) */}
        <div className="relative z-10">
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
                608 Hampton Street · Brighton · Victoria
              </p>

              <h1 className="mt-5 text-white font-bold leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl">
                Pizza <br />
                Gelato <br />
                Italiano
              </h1>

              <p className="mt-6 max-w-xl text-white/85 text-base sm:text-lg">
                Hand-stretched pizza, premium Italian ingredients and artisan
                gelato — made fresh every day.
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

          {/* WHAT'S ON (custom section) */}
          <section
            id="whats-on"
            className="mx-auto max-w-5xl px-6 py-20 scroll-mt-28"
          >
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
          <section
            id="book"
            className="mx-auto max-w-5xl px-6 pb-24 scroll-mt-28"
          >
            <div className="rounded-3xl border border-zinc-200 p-10 bg-white/70 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Bookings</h3>

              <p className="mt-3 text-zinc-600 max-w-lg">
                Planning a group dinner or a special night out? Book your table
                or contact us directly.
              </p>

              {/* CONTACT */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+61400000000"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium hover:border-zinc-400 transition bg-white/70"
                  aria-label="Call us"
                >
                  Call: +61 400 000 000
                </a>

                <a
                  href="https://wa.me/61400000000?text=Hello%20Cucciolino,%20I%27d%20like%20to%20book%20a%20table."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition"
                >
                  Book via WhatsApp
                </a>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                *Contact details are placeholders and will be updated.
              </p>
            </div>
          </section>

          {/* EXISTING SECTION COMPONENTS */}
          <WhatsOnSection />

          {/* ONE-PAGE STACKED SECTIONS (scroll over the watermark) */}
          <div className="snap-y snap-mandatory">
            <section className="snap-start min-h-screen">
              <BreakfastBrunchSection />
            </section>

            <section className="snap-start min-h-screen">
              <LunchDinnerSection />
            </section>

            <BookingCtaBar />

            <section className="snap-start min-h-screen">
              <FunctionsGroupsSection />
            </section>
          </div>

          <SocialsSection
            instagramHandle="@cucciolinopizza"
            instagramUrl="https://www.instagram.com/cucciolinopizza/"
            items={[
              {
                type: "video",
                imageSrc: "/icons/logoinstagram.png",
                imageAlt: "Instagram",
                href: "https://www.instagram.com/cucciolinopizza/",
              },
              {
                type: "image",
                imageSrc: "/icons/logotwitter.png",
                imageAlt: "Twitter / X",
                href: "https://twitter.com/",
              },
              {
                type: "image",
                imageSrc: "/icons/logotictoc.png",
                imageAlt: "TikTok",
                href: "https://www.tiktok.com/",
              },
              {
                type: "image",
                imageSrc: "/icons/logofacebook.png",
                imageAlt: "Facebook",
                href: "https://www.facebook.com/",
              },
            ]}
          />

          <section className="mx-auto max-w-5xl px-6 mt-6 pb-8 border-4 border-slate-900 rounded-2xl bg-white/70 backdrop-blur-sm">
            <MapEmbed
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.064800731218!2d145.00173397567923!3d-37.92891657194689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66f280f112605%3A0xa0f894641b7b89ec!2s608%20Hampton%20St%2C%20Brighton%20VIC%203186%2C%20Australia!5e0!3m2!1sit!2spe!4v1767715483594!5m2!1sit!2spe"
              height={420}
            />
          </section>
        </div>
      </main>
    </>
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
    <div className="rounded-2xl border border-zinc-200 p-6 hover:border-zinc-300 transition bg-white/70 backdrop-blur-sm">
      <p className="text-xs tracking-widest uppercase text-zinc-500">
        {subtitle}
      </p>

      <h3 className="mt-3 text-lg font-semibold">{title}</h3>

      <p className="mt-2 text-sm text-zinc-600">{detail}</p>
    </div>
  );
}
