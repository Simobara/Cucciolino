"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type HeaderProps = {
  /**
   * Optional manual override:
   * - "transparent": home-style overlay header (turns light on scroll)
   * - "light": always white/light header
   * If omitted, it auto-detects: Home -> transparent, others -> light
   */
  variant?: "transparent" | "light";
};

export default function Header({ variant }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const effectiveVariant: "transparent" | "light" =
    variant ?? (isHome ? "transparent" : "light");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (effectiveVariant !== "transparent") return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [effectiveVariant]);

  // Chiudi menu se cambio pagina
  // useEffect(() => {
  //   setOpen(false);
  // }, [pathname]);

  // Blocca scroll body quando menu mobile è aperto (utile su mobile/tablet)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const showLight = effectiveVariant === "light" || scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top)]", // ✅ iPhone notch / Safari
        showLight
          ? "bg-white/90 backdrop-blur border-b border-zinc-200"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-5xl px-6  md:py-7 py-8 flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="/"
          className={[
            "font-semibold tracking-wide md:tracking-[0.2em] uppercase transition-colors md:mt-2 mt-0",
            "text-base sm:text-lg md:text-2xl",
            showLight ? "text-[#ef4136]" : "text-[#F79410]",
          ].join(" ")}
        >
          CUCCIOLINO
          {/* Indirizzo: nascosto su mobile/tablet, visibile su PC */}
          <p
            className={[
              " text-[10px] sm:text-xs tracking-[0.22em] uppercase leading-tight",
              showLight
                ? "text-[--secondary-red]"
                : "text-[--secondary-orange]",
            ].join(" ")}
          >
            {/* PC: una riga */}
            <span className="hidden md:inline">
              608 Hampton Street · Brighton · Victoria
            </span>

            {/* Mobile / Tablet: due righe */}
            <span className="md:hidden block">608 Hampton Street</span>
            <span className="md:hidden block">Brighton · Victoria</span>
          </p>
        </Link>

        {/* DESKTOP MENU (PC) - IDENTICO A PRIMA, solo spostato su lg */}
        <div className="hidden lg:flex items-center gap-3 md:gap-0 text-sm md:text-base font-semibold">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className={[
                "px-4 py-2 rounded-md border transition-all duration-300 font-medium",
                showLight
                  ? "border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-black"
                  : "border-white/40 text-white hover:bg-white/20",
              ].join(" ")}
            >
              Home
            </Link>

            <Link
              href="/menu"
              onClick={() => setOpen(false)}
              className={[
                "px-4 py-2 rounded-md border transition-all duration-300 font-medium",
                showLight
                  ? "border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-black"
                  : "border-white/40 text-white hover:bg-white/20",
              ].join(" ")}
            >
              Menu
            </Link>
          </div>

          {/*
          WhatsApp / Order (se vuoi riattivarlo, rimane qui per desktop)
          */}
        </div>

        {/* MOBILE + TABLET (fino a lg): HAMBURGER */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={[
            "lg:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 transition-all md:mt-0 mt-0 ",
            showLight
              ? "border-zinc-300 text-zinc-800 hover:bg-zinc-100"
              : "border-white/40 text-white hover:bg-white/20",
          ].join(" ")}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* MOBILE/TABLET MENU PANEL */}
      {/* Overlay click per chiudere */}
      {open && (
        <div className="lg:hidden">
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/30"
          />
          <div
            className={[
              "absolute top-full left-0 right-0 z-50 border-b",
              showLight
                ? "bg-white/95 backdrop-blur border-zinc-200"
                : "bg-black/70 backdrop-blur border-white/10",
            ].join(" ")}
          >
            <div className="mx-auto max-w-5xl px-6 py-6">
              {/* Indirizzo visibile su mobile/tablet dentro menu */}
              {/* <p
                className={[
                  "mb-5 text-xs tracking-[0.25em] uppercase",
                  showLight ? "text-zinc-600" : "text-white/80",
                ].join(" ")}
              >
                608 Hampton Street · Brighton · Victoria
              </p> */}

              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={[
                    "w-full rounded-md border px-4 py-3 text-base font-semibold transition-all",
                    showLight
                      ? "border-zinc-200 text-zinc-800 hover:bg-zinc-100"
                      : "border-white/20 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  Home
                </Link>

                <Link
                  href="/menu"
                  onClick={() => setOpen(false)}
                  className={[
                    "w-full rounded-md border px-4 py-3 text-base font-semibold transition-all",
                    showLight
                      ? "border-zinc-200 text-zinc-800 hover:bg-zinc-100"
                      : "border-white/20 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  Menu
                </Link>

                {/*
                Se vuoi, qui puoi rimettere il bottone Order/WhatsApp versione mobile
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
