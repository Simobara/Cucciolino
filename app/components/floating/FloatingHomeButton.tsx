"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function FloatingHomeButton({
  href = "/",
  label = "HOME",
  showAfter = 500, // px di scroll
}: {
  href?: string;
  label?: string;
  showAfter?: number;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check iniziale

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const onClickIfHome = (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-24 z-50">
      <Link
        href={href}
        onClick={onClickIfHome}
        aria-label="Go to home"
        className="
          group
          inline-flex items-center justify-center
          h-12 w-12 sm:h-14 sm:w-14
          rounded-full
          bg-[#0F5B63] text-[#F6E6D4]
          shadow-lg ring-1 ring-white/15
          hover:brightness-110 active:scale-95 transition
        "
      >
        {/* freccia su */}
        <span className="text-xl leading-none">↑</span>

        {/* tooltip */}
        <span
          className="
            pointer-events-none
            absolute right-full mr-3
            rounded-full px-3 py-1
            text-xs font-semibold tracking-widest
            bg-black/70 text-white
            opacity-0 translate-x-2
            group-hover:opacity-100 group-hover:translate-x-0
            transition
            whitespace-nowrap
          "
        >
          {label}
        </span>
      </Link>
    </div>
  );
}
