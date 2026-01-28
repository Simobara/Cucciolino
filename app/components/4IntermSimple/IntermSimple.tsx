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
      {/* Banner con altezza fissa/consistente e centro perfetto */}
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className={`
            min-h-45 md:min-h-55
            flex items-center justify-center
            text-center
          `}
        >
          <div
            className={`
              flex items-center justify-center gap-6
              transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            <span className="text-[#2e3192] text-xl md:text-2xl font-medium">
              Look at the entire
            </span>

            <Link
              href="/menu"
              className="inline-flex items-center justify-center rounded-md bg-[#ef4136] text-white px-10 py-3 text-base font-semibold hover:bg-[#d83a30] transition"
            >
              Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
