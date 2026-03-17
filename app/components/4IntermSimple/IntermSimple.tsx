"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function IntermezzoSimple({
  bg = "bg-[#ffd07d]",
}: {
  bg?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${bg} relative overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          ref={ref}
          className="
            min-h-[220px] sm:min-h-[260px] md:min-h-[300px]
            flex items-center justify-center
            text-center
          "
        >
          <div
            className={`
              w-full
              flex flex-col sm:flex-row
              items-center justify-center
              gap-3 sm:gap-6 md:gap-10
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="text-[#2e3192] font-sofiapro text-lg sm:text-xl md:text-4xl">
              {/* Look at the entire */}
              Slice &...
            </span>

            <Link
              href="/menu"
              className="
                inline-flex items-center justify-center
                rounded-md bg-[#ef4136] text-white
                font-sofiapro
                hover:bg-[#d83a30] transition
                w-full sm:w-auto
                px-8 sm:px-12 md:px-14
                py-3 sm:py-2 md:py-0.5
                text-xl sm:text-2xl md:text-3xl
              "
            >
              ...
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
