"use client";
import Image from "next/image";
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
            {/* ===== SLICE SECTION ===== */}
            <section className="mt-8 max-md:mt-4">
              <div className="grid grid-cols-2 gap-10 md:gap-16 items-start">
                {/* LEFT */}
                <div>
                  <div className="mt-0 md:mt-3 mb-4 flex justify-start md:ml-4 -ml-2">
                    <Image
                      src="/imag/menu0.png"
                      alt="Slice menu"
                      width={700}
                      height={250}
                      className="object-contain max-md:scale-y-[1.0] max-md:w-[120%]   max-md:mt-4  max-md:ml-4 w-[90%] md:w-[500px]"
                    />
                  </div>

                  {/* <div
                                 className="font-oswald font-black uppercase text-[#ef4136]
                   leading-none -mt-2
                   text-[48px] sm:text-[64px] md:text-[80px]
                   max-md:text-[40px]"
                               ></div> */}

                  <div
                    className="mt-12 md:mt-20 lg:-mt-2 font-sofiapro font-bold text-[#b42f26]
  text-[26px] md:text-[38px] max-md:text-[20px] md:ml-8 ml-2
  leading-tight tracking-tight text-left mb-0 md:mb-8 whitespace-nowrap"
                  >
                    Every day between 3 PM and 6 PM.
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-1 mt-6 md:mt-9 max-md:mt-4">
                  {/* SLICE */}
                  <div>
                    <div className="flex justify-between items-center">
                      <div
                        className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                      >
                        SLICE
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#ef4136]
        text-[24px] md:text-[34px] max-md:text-[16px] leading-none"
                      >
                        7
                      </div>
                    </div>
                  </div>

                  {/* SLICE & DRINK */}
                  <div>
                    <div className="mt-2 max-md:mt-1 border-b-4 border-white" />

                    <div className="flex justify-between items-center mt-2">
                      <div
                        className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                      >
                        SLICE & DRINK
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#ef4136]
        text-[24px] md:text-[34px] max-md:text-[16px] leading-none"
                      >
                        10.5
                      </div>
                    </div>
                  </div>

                  {/* SLICE & GELATO */}
                  <div>
                    <div className="mt-2 max-md:mt-1 border-b-4 border-white" />

                    <div className="flex justify-between items-center mt-2">
                      <div
                        className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                      >
                        SLICE & GELATO
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#ef4136]
        text-[24px] md:text-[34px] max-md:text-[16px] leading-none"
                      >
                        13
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <Link
              href="https://tabit.au/tabit-order?site=699d2a0b104d88c062a8b271"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                console.log("Tabit Order Clicked");
              }}
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
              (slices vedi menu)
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
