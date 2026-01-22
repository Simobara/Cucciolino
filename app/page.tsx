"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import BreakfastBrunchSection from "./components/breakfast-brunch/BreakfastBrunchSection";
import BookingCtaBar from "./components/cta/BookingCtaBar";
import CursorElasticImage from "./components/cursorImage/cursorImage";
import FloatingHomeButton from "./components/floating/FloatingHomeButton";
import FunctionsGroupsSection from "./components/functions-groups/FunctionsGroupsSection";
import IntermezzoHero from "./components/intermezzohero/intermezzohero";
import LunchDinnerSection from "./components/lunch-dinner/LunchDinnerSection";
import MapEmbed from "./components/map/MapEmbed";
import SocialsSection from "./components/socials/SocialsSection";
import TopFadeOverlay from "./components/TopFadeOverlay";
import WhatsOnSection from "./components/whatson/WhatsOnSection";
import SplashScreen from "./splashScreen";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [hasCheckedSplash, setHasCheckedSplash] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [logoOpacity, setLogoOpacity] = useState(0.05);

  const [showTitle, setShowTitle] = useState(false);
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    if (!ready) return;

    setTimeout(() => setShowTitle(true), 900);

    setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords((v) => {
          if (v >= 4) {
            clearInterval(interval);
            return v;
          }
          return v + 1;
        });
      }, 1100);
    }, 800);
  }, [ready]);

  useEffect(() => {
    try {
      const alreadySeen = sessionStorage.getItem("cucciolino-splash-seen");

      if (alreadySeen) {
        setShowSplash(false);
        setReady(true);
      } else {
        setShowSplash(true);
        setReady(false);
      }
    } catch (error) {
      console.log("error", error);
      setShowSplash(false);
      setReady(true);
    } finally {
      setHasCheckedSplash(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const min = 0.05;
      const max = 0.18;
      const revealDistance = 600;

      const progress = Math.min(y / revealDistance, 1);
      const newOpacity = min + (max - min) * progress;

      setLogoOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSplashFinish = () => {
    try {
      sessionStorage.setItem("cucciolino-splash-seen", "true");
    } catch (error) {
      console.log("error", error);
    }
    setShowSplash(false);
    setReady(true);
  };

  if (!hasCheckedSplash) return null;

  return (
    <>
      {ready && !showSplash && (
        <CursorElasticImage
          src="/iconsss/cursor.png"
          size={130}
          offsetX={24}
          offsetY={24}
        />
      )}

      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <TopFadeOverlay heightVh={30} fadeDistancePx={600} />

      <main
        className={[
          "bg-[#ffffff] relative transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        {/* ✅ WATERMARK FIX (responsive vero, NON rompe PC) */}
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
          <div
            className="w-[78vw] sm:w-[70vw] md:w-[520px] lg:w-[620px] xl:w-[720px] mix-blend-multiply transition-opacity duration-150"
            style={{ opacity: logoOpacity }}
          >
            <Image
              src="/logocucc12.png"
              alt="Cucciolino"
              width={900}
              height={900}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="relative z-10">
          <FloatingHomeButton />

          {/* HERO */}
          <section className="relative min-h-[90vh]">
            <Image
              src="/hero1.png"
              alt="Cucciolino Pizza & Gelato"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            {/* ✅ CONTENT: mobile/tablet sistemato, PC IDENTICO (spostamenti solo md:) */}
            <div className="relative mx-auto max-w-5xl px-6 pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-20 min-h-[90vh] flex flex-col justify-center">
              {/* MOBILE/TABLET WRAPPER (nuovo): allineato normale */}
              <div className="md:hidden max-w-xl flex flex-col min-h-[70vh]">
                <h1
                  className={[
                    "text-[#cadcf2] font-bold leading-[0.9] tracking-tight",
                    "text-4xl sm:text-5xl",
                    "mt-48 sm:mt-0", // ✅ SOLO MOBILE
                    "transition-all duration-700 ease-out text-shadow-soft",
                    showTitle
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6",
                  ].join(" ")}
                >
                  CUCCIOLINO.
                </h1>

                <p className="mt-4 mb-20 text-base sm:text-lg font-light tracking-wide text-white flex gap-2 flex-wrap">
                  {["QUALITY,", "FRIENDLY,", "NEIGHBOURHOOD PIZZERIA"].map(
                    (word, i) => (
                      <span
                        key={word}
                        className={[
                          "transition-all duration-200 ease-out",
                          visibleWords > i
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4",
                        ].join(" ")}
                      >
                        {word}
                      </span>
                    ),
                  )}
                </p>

                <p className="mt-8 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed text-balance">
                  Hand-stretched pizza, premium Italian ingredients and artisan
                  gelato — made fresh every day.
                </p>

                <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#f7941d] text-[#fffae7] hover:text-[#fffae7] px-8 py-3 text-sm font-semibold hover:bg-[#ef4136] transition"
                  >
                    Order Online
                  </a>

                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-md border border-[#ffd07d] text-[#2e3192] bg-white/70 px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#b42f26] transition"
                  >
                    View Menu
                  </Link>
                </div>
              </div>

              {/* ✅ DESKTOP (PC) = IDENTICO A PRIMA, solo protetto da md: */}
              <div className="hidden md:block">
                <div className=" ml-40 mt-42">
                  <h1
                    className={`
                      text-[#cadcf2] font-bold leading-[0.9] tracking-tight
                      text-5xl sm:text-6xl md:text-7xl
                      transition-all duration-700 ease-out text-shadow-soft 
                      ${showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                  >
                    CUCCIOLINO.
                  </h1>

                  <p className="mt-4 text-lg md:text-xl font-light tracking-wide text-white flex gap-2 flex-wrap">
                    {["QUALITY,", "FRIENDLY,", "NEIGHBOURHOOD PIZZERIA"].map(
                      (word, i) => (
                        <span
                          key={word}
                          className={`
                            transition-all duration-200 ease-out
                            ${visibleWords > i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                          `}
                        >
                          {word}
                        </span>
                      ),
                    )}
                  </p>

                  <p className=" mt-14 max-w-xl text-white/85 text-base sm:text-lg leading-relaxed text-balance">
                    Hand-stretched pizza, premium Italian ingredients and
                    artisan gelato — made fresh every day.
                  </p>
                </div>

                <div className="ml-40 pt-20 mt-20 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#f7941d] text-[#fffae7] hover:text-[#fffae7]  px-8 py-3 text-sm font-semibold hover:bg-[#ef4136] transition"
                  >
                    Order Online
                  </a>

                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center rounded-md border border-[#ffd07d] text-[#2e3192] bg-white/70 px-8 py-3 text-sm font-semibold hover:bg-white hover:text-[#b42f26] transition"
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <IntermezzoHero />

          <WhatsOnSection />

          {/* ✅ SNAP: su mobile/tablet disattivo (evita bug/sfasamenti), su PC lo tieni */}
          <div className="snap-none md:snap-y md:snap-mandatory">
            <section className=" md:snap-start md:h-screen">
              <BreakfastBrunchSection />
            </section>

            <section className="md:snap-start md:h-screen">
              <LunchDinnerSection />
            </section>

            <BookingCtaBar />

            <section className="md:snap-start md:h-screen">
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

          <section className="mx-auto max-w-7xl px-2 mt-6 mb-90 pb-8 border-4 border-slate-900 rounded-2xl bg-white/70 backdrop-blur-sm">
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
