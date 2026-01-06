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
              "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
              showLight
                ? "bg-black text-white hover:bg-zinc-800"
                : "bg-white text-black hover:bg-zinc-200",
            ].join(" ")}
          >
            ORDER
          </a>
        </div>
      </nav>
    </header>
  );
}
