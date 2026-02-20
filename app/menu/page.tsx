import Image from "next/image";
import Header from "../components/Header";

const LINE_OFFSET = "md:-mx-4 :-mx-10";

/* =======================
   TYPES
======================= */
type MenuItemProps = {
  title: string;
  description: string;
  price: string;
};

type GelatoItemProps = {
  title: string;
};

/* =======================
   PAGE
======================= */
export default function MenuPage() {
  const pizzas: MenuItemProps[] = [
    {
      title: "MARGHERITA",
      description:
        "San Marzano tomato, Mozzarella, basil, EVO olive oil, oregano",
      price: "$ 24,00",
    },
    {
      title: "CAPRICCIOSA",
      description:
        "San Marzano Tomato, Mozzarella, Italian ham, field mushrooms, kalamata olives",
      price: "$ 24,00",
    },
    {
      title: "DIAVOLA",
      description:
        "San Marzano tomato, Mozzarella, your choice of Tuscan style hot or mild salami",
      price: "$ 24,00",
    },
    {
      title: "PROSCIUTTO, ROCKET & BUFALA",
      description:
        "San Marzano tomato, Mozzarella, Rocket leaves, Prosciutto di Parma, Bufala",
      price: "$ 24,00",
    },
  ];

  const gelatos: string[] = [
    "VANILLA BEAN",
    "COOKIES AND CREAM",
    "MINT CHOC CHIP",
    "BLOOD ORANGE",
  ];

  return (
    <>
      <Header variant="light" />

      <main className="p-0 m-0 overflow-hidden">
        <section className="w-full">
          <div className="bg-[#cfe0f2] relative">
            <div className="mx-auto max-w-[880px] px-5 sm:px-10 pt-20 sm:pt-24 pb-10 sm:pb-12 max-md:pt-16 max-md:pb-8">
              <div className="flex flex-col gap-3 sm:gap-4 max-md:gap-2 md:mt-0 pt-8">
                {/* MENU LOGO + CUCCIOLINO */}
                <div className="flex items-start w-full">
                  <Image
                    src="/images/menulogo.png"
                    alt="Menu"
                    width={460}
                    height={160}
                    priority
                    className="
  object-contain
  scale-y-[1.12] sm:scale-y-[1.2]
  max-md:w-[260px] max-md:h-[95px]  
  -ml-18 md:-ml-17
"
                  />

                  <div className="ml-auto pt-6 max-md:pt-1">
                    <span
                      className="font-couture uppercase font-bold text-[#b42f26] tracking-[0.25em]
                      md:text-4xl text-3xl sm:text-base
                      max-md:text-[14px] max-md:tracking-[0.2em]"
                    >
                      CUCCIOLINO
                    </span>
                  </div>
                </div>

                {/* sottotitolo */}
                <div
                  className="font-oswald font-bold text-[#7983c0] leading-tight
                  md:text-5xl text-xl pb-6
                  max-md:text-[18px] max-md:pb-4"
                >
                  <div>Pizza All Day</div>
                  <div>Gelato For Every Moment</div>
                </div>
              </div>

              {/* LINEA INTRO */}
              <div
                className={`md:mt-14 mt-8 max-md:mt-6 border-t-4 border-white ${LINE_OFFSET}`}
              />

              {/* ===== PIZZE ===== */}
              <section className="mt-8 sm:mt-10 max-md:mt-6">
                {pizzas.map((p) => (
                  <MenuItem key={p.title} {...p} />
                ))}
              </section>

              <div className="h-14 sm:h-20 max-md:h-10" />

              {/* ===== GELATO ===== */}
              <section>
                <h2
                  className="font-oswald font-bold text-[#b42f26]
                  text-2xl md:text-5xl
                  mb-6 md:mb-14 md:mt-10 mt-10
                  max-md:text-[24px] max-md:mb-6"
                >
                  Our Gelato flavours
                </h2>

                <div
                  className={`border-t-4 border-white mb-4 ${LINE_OFFSET}`}
                />

                {gelatos.map((g) => (
                  <GelatoItem key={g} title={g} />
                ))}
              </section>

              {/* ===== FOOTER ===== */}
              <div className="md:mt-20 mt-10 sm:mt-16 pb-8 sm:pb-10 max-md:mt-12">
                <div
                  className="flex items-end justify-center gap-6 sm:gap-10 md:ml-54 ml-2 mt-8 mb-30
                  max-md:ml-2 max-md:justify-start max-md:gap-4 md:mr-10 mr-4"
                >
                  <div
                    className="text-[#b42f26] leading-none"
                    style={{
                      fontFamily: "bikinis",
                      fontSize: "clamp(24px, 7vw, 54px)",
                      fontWeight: 600,
                    }}
                  >
                    Made with Love
                  </div>

                  <div
                    className="top-6 relative w-[110px] h-[110px] md:ml-14 ml-4 mt-4
                    sm:w-[140px] sm:h-[140px]
                    md:scale-180 scale-100 max-md:scale-[1.8] max-md:ml-4 max-md:mt-4 opacity-90"
                  >
                    <Image
                      src="/iconsss/cursor.png"
                      alt="Cucciolino stamp"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* =======================
   PIZZA ITEM
======================= */
function MenuItem({ title, description, price }: MenuItemProps) {
  return (
    <div className="md:py-0 md:pb-8 py-3 max-md:pb-5">
      <div className="flex items-start justify-between gap-6">
        <h3
          className="font-sofiapro font-normal uppercase text-[#ef4136] leading-[0.95]
          text-[42px] sm:text-[56px] lg:text-[64px]
          max-md:text-[34px] max-w-[75%]"
        >
          {title}
        </h3>

        <div
          className="font-sofiapro font-bold text-[#ef4136]
          text-xl sm:text-2xl max-md:text-[18px]
          whitespace-nowrap pt-1 sm:pt-3 max-md:pt-1"
        >
          {price}
        </div>
      </div>

      <p
        className="mt-1 sm:mt-3 font-sofiapro text-[#b42f26]
  text-lg md:text-[20px] max-md:text-[16px]
  leading-relaxed md:max-w-[620px] max-w-[260px]
  text-justify"
      >
        {description}
      </p>

      <div
        className={`mt-6 max-md:mt-4 border-b-4 border-white ${LINE_OFFSET}`}
      />
    </div>
  );
}

/* =======================
   GELATO ITEM
======================= */
function GelatoItem({ title }: GelatoItemProps) {
  return (
    <div className="md:py-2 py-5 max-md:py-4">
      <div
        className="font-sofiapro font-normal  uppercase text-[#ef4136]
        text-[44px] md:text-[65px] max-md:text-[34px]
        leading-none -tracking-tight"
      >
        {title}
      </div>

      <div
        className={`mt-4 max-md:mt-3 border-b-4 border-white ${LINE_OFFSET}`}
      />
    </div>
  );
}
