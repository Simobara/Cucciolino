"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cursor({
  href = "/",
  label = "HOME",
  showAfter = 500,
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
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const onClickIfHome = (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 bottom-24 z-[9999]">
      <Link
        href={href}
        onClick={onClickIfHome}
        aria-label="Go to home"
        className="
          group relative
          inline-flex items-center justify-center
          h-12 w-12 sm:h-14 sm:w-14
          rounded-full

          /* DEFAULT: trasparente ma visibile */
          bg-white/10 backdrop-blur
          text-[#76aad8]
          ring-1 ring-[#76aad8]/40

          /* TRANSITIONS */
          transition-all duration-300 ease-out

          /* HOVER: pieno + shadow */
          hover:bg-[#76aad8]
          hover:text-[#F6E6D4]
          hover:ring-transparent
          hover:shadow-[0_12px_30px_rgba(15,91,99,0.35)]

          /* ACTIVE */
          active:scale-95
        "
      >
        {/* freccia su */}
        <span className="text-xl leading-none translate-y-px">↑</span>

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
