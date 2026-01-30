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

  const showLight = true;
  // effectiveVariant === "light" || scrolled;

  // ===== MODIFICA (COPY / PASTE) =====

  return (
    <header
      className={`fixed top-0 left-0 right-0 pt-[env(safe-area-inset-top)] z-9999 ${
        pathname === "/menu" ? "py-1" : ""
      }`}
    >
      {/* BACKGROUND: azzurro 60/40 (menu = 70/30) */}
      <div className="absolute inset-0">
        {pathname === "/menu" ? (
          <>
            <div className="h-[60%] bg-[#cadcf2]" />
            <div className="h-[40%] bg-white" />
          </>
        ) : (
          <>
            <div className="h-[60%] bg-[#cadcf2]" />
            <div className="h-[40%] bg-white" />
          </>
        )}
      </div>

      <nav className="relative mx-auto w-full px-6 py-5 flex items-center justify-center">
        {/* LOGO CENTRATO (come immagine) */}
        <Link
          href="/"
          className="text-center select-none"
          onClick={() => setOpen(false)}
        >
          <div className="font-oswald uppercase text-[#b42f26] tracking-[0.11em] text-3xl sm:text-4xl leading-none font-sofiapro font-bold">
            CUCCIOLINO
          </div>

          {/* NASCOSTO SU /menu */}
          {pathname !== "/menu" && (
            <div className="mt-1 font-sofiapro font-bold uppercase text-[#b42f26] tracking-[0.10em] text-2xl leading-none">
              PIZZA AND GELATO
            </div>
          )}
        </Link>

        {/* HAMBURGER (se vuoi tenerlo) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="absolute right-6 top-1/2 -translate-y-1/2 lg:hidden inline-flex items-center justify-center rounded-md border border-[#ef4136]/30 bg-white/70 px-3 py-2 text-[#ef4136] hover:bg-white transition"
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* MOBILE MENU PANEL (stile coerente) */}
      {open && (
        <div className="lg:hidden relative">
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/20"
          />
          <div className="absolute left-0 right-0 z-50 border-t border-[#ef4136]/15 bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-5xl px-6 py-6">
              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-md border border-[#ef4136]/20 px-4 py-3 text-base font-semibold text-[#ef4136] hover:bg-[#cadcf2]/40 transition"
                >
                  Home
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-md border border-[#ef4136]/20 px-4 py-3 text-base font-semibold text-[#ef4136] hover:bg-[#cadcf2]/40 transition"
                >
                  Menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
