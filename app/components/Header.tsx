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

  useEffect(() => {
    if (effectiveVariant !== "transparent") return;

    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [effectiveVariant]);

  // If transparent: becomes light after scroll
  // If light: always light
  const showLight = effectiveVariant === "light" || scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showLight
          ? "bg-white/90 backdrop-blur border-b border-zinc-200"
          : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className={[
            "font-semibold tracking-wide transition-colors",
            showLight ? "text-black" : "text-white",
          ].join(" ")}
        >
          CUCCIOLINO
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className={
              showLight
                ? "text-zinc-700 hover:text-black"
                : "text-white/90 hover:text-white"
            }
          >
            Home
          </Link>

          <Link
            href="/menu"
            className={
              showLight
                ? "text-zinc-700 hover:text-black"
                : "text-white/90 hover:text-white"
            }
          >
            Menu
          </Link>

          <a
            href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 overflow-visible group",
              showLight
                ? "bg-black text-white hover:bg-zinc-800"
                : "bg-white text-black hover:bg-zinc-200",
            ].join(" ")}
          >
            {/* ICONA WHATSAPP SUPER ANIMATA */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="#25D366"
              className={[
                "w-6 h-6 transition-transform duration-500 ease-out",
                // ICONA NORMALE → ENORME + FUORI DAL BOTTONE SU HOVER
                showLight
                  ? "group-hover:scale-[2.2] group-hover:translate-y-[-6px] group-hover:translate-x-[6px]"
                  : "group-hover:scale-[2] group-hover:translate-y-[-6px] group-hover:translate-x-[6px]",
              ].join(" ")}
              style={{
                transformOrigin: "center",
              }}
            >
              <path d="M16.002 3C9.373 3 4 8.373 4 15.002c0 2.653.874 5.102 2.338 7.082L4 29l7.137-2.31A12.93 12.93 0 0 0 16.002 27C22.63 27 28 21.628 28 15S22.63 3 16.002 3zm0 22c-1.86 0-3.587-.51-5.07-1.392l-.363-.216-4.228 1.366 1.382-4.118-.237-.378A9.89 9.89 0 0 1 6 15.002C6 9.486 10.486 5 16.002 5 21.515 5 26 9.486 26 15s-4.485 10-9.998 10z" />
              <path d="M22.347 18.29c-.308-.154-1.827-.902-2.11-1.003-.282-.103-.487-.154-.693.154-.205.308-.795.997-.974 1.2-.18.205-.36.23-.668.077-.307-.154-1.3-.48-2.475-1.53-.915-.816-1.532-1.828-1.71-2.136-.18-.308-.02-.474.135-.628.14-.138.307-.36.46-.538.155-.18.205-.308.308-.513.103-.205.052-.385-.026-.538-.077-.154-.693-1.665-.95-2.28-.25-.6-.505-.52-.693-.53l-.59-.01c-.205 0-.538.077-.82.385-.282.308-1.08 1.054-1.08 2.57 0 1.516 1.106 2.976 1.26 3.182.154.205 2.17 3.313 5.255 4.51.735.31 1.31.493 1.76.63.74.235 1.41.202 1.94.123.592-.088 1.826-.746 2.085-1.468.257-.72.257-1.34.18-1.468-.078-.128-.282-.205-.59-.36z" />
            </svg>
            Order
          </a>
        </div>
      </nav>
    </header>
  );
}
