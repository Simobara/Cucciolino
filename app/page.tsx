"use client";
import { useEffect, useState } from "react";

import HeroPage from "../app/components/1HeroPage/heroPage";
import Cursor from "./components/0Floating/Cursor";
import IntermezzoHero from "./components/2Intermezzohero1/intermezzohero";
import BreakfastBrunchSection from "./components/5breakfast-brunch/BreakfastBrunchSection";
import LunchDinnerSection from "./components/6lunch-dinner/LunchDinnerSection";
import BookingCtaBar from "./components/7cta/BookingCtaBar";
import SocialsSection from "./components/8socials/SocialsSection";
import CursorElasticImage from "./components/cursorImage/cursorImage";

import TopFadeOverlay from "./components/TopFadeOverlay";

import WhatsOnSection from "./components/3SectionOutPopular/WhatsOnSection";
import IntermezzoSimple from "./components/4IntermSimple/IntermSimple";
import TradingHours from "./components/9TradingHours/tradingHours";
import MapEmbed from "./components/map/MapEmbed";
import SplashScreen from "./splashScreen";

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE === "true";

export default function Home() {
  const [ready, setReady] = useState(false);
  const [hasCheckedSplash, setHasCheckedSplash] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [, setLogoOpacity] = useState(0.05);

  const [, setShowTitle] = useState(false);
  const [, setVisibleWords] = useState(0);

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

  // ✅ evita il flash di Header/Footer mentre controlli sessionStorage
  if (!hasCheckedSplash) return <SplashScreen infinite />; // oppure <Loading />

  return MAINTENANCE_MODE ? (
    <SplashScreen infinite />
  ) : (
    <>
      {ready && !showSplash && (
        <CursorElasticImage
          src="/iconsss/cursor.png"
          size={130}
          offsetX={74}
          offsetY={44}
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
        {/* <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
          <div
            className="w-[78vw] sm:w-[70vw] md:w-130 lg:w-155 xl:w-180 mix-blend-multiply transition-opacity duration-150"
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
        </div> */}

        <div className="relative z-10">
          <Cursor />

          {/* MAIN PAGE */}
          <HeroPage />

          {/* TASTE OUR HIGH- */}
          <IntermezzoHero bg="bg-[#ef4136]" />

          {/* OUR POPULAR PIZZA */}
          <WhatsOnSection
            maintoptitle="OUR POPULAR PIZZAS" // fallback
            maintopimage="/images/ourpopularpizza.png"
            maintoptitleAlt="Our popular pizzas"
            titleImgWidth={600}
            titleImgHeight={100}
            smallFirstTitle="MARGHERITA"
            smallSecondTitle="GORGONZOLA & RUCOLA"
            smallThirdTitle="CUCCIOLINO"
            smallFourthTitle="FUNGHI & TRUFFLE"
            price1="$ 24,00"
            price2="$ 26,00"
            price3="$ 27,00"
            price4="$ 26,00"
            image1="/iconss/pizza1.png"
            image2="/iconss/pizza2.png"
            image3="/iconss/pizza3.png"
            image4="/iconss/pizza4.png"
          />

          <section className="">
            <IntermezzoSimple />
          </section>

          {/* PAGE SPECIALS AND COMBO */}
          {/* ✅ SNAP: su mobile/tablet disattivo (evita bug/sfasamenti), su PC lo tieni */}
          <div className="snap-none md:snap-y md:snap-mandatory">
            <section className="md:snap-start">
              <BreakfastBrunchSection />
            </section>

            <section className="md:snap-start">
              <LunchDinnerSection />
            </section>
          </div>

          {/* TASTE OUR HIGH- */}
          <IntermezzoHero bg="bg-[#f7941d]" />

          {/* <section className="md:snap-start md:h-screen">
            <FunctionsGroupsSection />
          </section> */}

          {/* WHAT S ON come our popular pizza*/}
          <WhatsOnSection
            maintoptitle="WHAT'S ON" // fallback testo (opzionale)
            maintopimage="/images/whatsonnn.png" // <-- QUESTA è l’immagine
            maintoptitleAlt="What's On"
            titleImgWidth={320}
            titleImgHeight={50}
            smallFirstTitle="WEEKEND HAPPY PIZZA"
            smallSecondTitle="CUCCIOLINO MIDDAY BREAK"
            smallThirdTitle="GELATO HAPPY MOMENT"
            smallFourthTitle="TUESDAY MARGHERITA"
            price1=""
            price2=""
            price3=""
            price4=""
            image1="/iconss/pizza5.png"
            image2="/iconss/pizza6.png"
            image3="/iconss/pizza7.png"
            image4="/iconss/pizza8.png"
          />
          {/* MEMBERSHIP */}
          <BookingCtaBar />
          {/* SOCIAL SECTIONS */}
          <SocialsSection />

          {/* TRADING HOURS */}
          <TradingHours />

          {/* MAP */}
          <MapEmbed
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.064800731218!2d145.00173397567923!3d-37.92891657194689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66f280f112605%3A0xa0f894641b7b89ec!2s608%20Hampton%20St%2C%20Brighton%20VIC%203186%2C%20Australia!5e0!3m2!1sit!2spe!4v1767715483594!5m2!1sit!2spe"
            height={420}
          />
        </div>
      </main>
    </>
  );
}
