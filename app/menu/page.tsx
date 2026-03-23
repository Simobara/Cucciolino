import Image from "next/image";
import Header from "../components/Header";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUCCIOLINO | Pizza & Gelato",
  description:
    "Taste our high-quality pizza in Melbourne, made with traditional methods and love. Welcome to Cucciolino in Brighton for artisan pizza, dine-in and takeaway.",
};

const LINE_OFFSET = "md:-mx-8 -mx-4";
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
      title: "GARLIC & MOZZARELLA",
      description: "Mozzarella, garlic, chilli pepper.",
      price: "19",
    },
    {
      title: "MARGHERITA",
      description: "Tomato sauce, mozzarella. Burrata +3$.",
      price: "19",
    },
    {
      title: "THE GREEK",
      description:
        "Tomato sauce, mozzarella, onion, kalamata olives, cherry tomatoes, and feta cheese.",
      price: "22",
    },
    {
      title: "HAWAIIAN",
      description: "Tomato sauce, mozzarella, pineapple and ham.",
      price: "22",
    },
    {
      title: "PEPPERONI",
      description: "Tomato sauce, mozzarella, pepperoni.",
      price: "23",
    },
    {
      title: "PORTOBELLO & ROCKET",
      description:
        "Tomato sauce, mozzarella, portobello mushrooms, rocket, and parmesan.",
      price: "23",
    },
    {
      title: "EXTREMELY VEGAN",
      description:
        "Tomato sauce, olives, zucchini, burnt cherry tomatoes, garlic confit, portobello mushrooms, and rocket.",
      price: "23",
    },
    {
      title: "MEAT LOVERS",
      description:
        "Tomato sauce, mozzarella, pepperoni, bacon and barbecue chicken.",
      price: "24",
    },
    {
      title: "GARLIC BREAD",
      description: "Garlic herbs butter.",
      price: "5",
    },
  ];

  const craftedPizzas: MenuItemProps[] = [
    {
      title: "GIARDINI DI PARMA",
      description:
        "Mozzarella, zucchini, burnt cherry tomatoes, garlic confit, thyme and parmesan.",
      price: "24",
    },
    {
      title: "TRE FUNGHI",
      description:
        "Mozzarella,Champignon, portobello mushroom, truffle, and basil.",
      price: "24",
    },
    {
      title: "GOAT & SWEET",
      description: "Mozzarella, sweet onion and goat cheese, roasted walnuts.",
      price: "24",
    },
    {
      title: "CHEESE MATE",
      description:
        "Mozzarella, gorgonzola, parmesan, goat cheese, spinach, and honey.",
      price: "24",
    },
    {
      title: "98",
      description: "Mozzarella, sweet onion, sausages. Gorgonzola + $5.",
      price: "26",
    },
    {
      title: "MELBOURNE PIZZA",
      description:
        "Tomato sauce, mozzarella, olives, champignon mushrooms, ham, and anchovy.",
      price: "26",
    },
    {
      title: "NONNA’S",
      description: "Tomato sauce, mozzarella, roasted lamb and onion.",
      price: "26",
    },
    {
      title: "THE FISHERMAN",
      description:
        "Tomato sauce, mozzarella, prawns, grilled cherry tomatoes, fresh chilli.",
      price: "27",
    },
    {
      title: "PROSCIUTTO!",
      description: "Tomato sauce, mozzarella, prosciutto, burrata, and basil.",
      price: "30",
    },
  ];

  const gelatoSizes = [
    { title: "1 SCOOP", price: "7" },
    { title: "2 SCOOPS", price: "9.5" },
    { title: "0.5 L TUB", price: "23" },
    { title: "1 L TUB", price: "35" },
  ];

  // const gelatoFlavours = [
  // "STRAWBERRY",
  // "PISTACCHIO",
  // "CHOCOLATE",
  // "FERRERO ROCHER",
  // "OREO & CREAM",
  // "SALTED CARAMEL",
  // ];

  const combos = [
    {
      title: "2 PIZZAS",
      description: "Free garlic bread - all day.",
    },
    {
      title: "3 PIZZAS",
      description:
        "Free garlic bread and a large bottle of soft drink - all day.",
    },
    {
      title: "4 PIZZAS",
      description:
        "Free garlic bread and a large bottle of soft drink - all day.",
    },
    {
      title: "5 PIZZAS",
      description: "10% Discount on all pizzas - all day.",
    },
  ];

  const gelatoPromotions = [
    { title: "0.5 L TUB", price: "19" },
    { title: "1 L TUB", price: "30" },
  ];

  return (
    <>
      <Header variant="light" />

      <main className="p-0 m-0 overflow-hidden">
        <section className="w-full">
          {/* FASCIA BIANCA SUPERIORE */}
          <div className="w-full bg-white max-md:h-32 sm:h-24 md:h-34" />

          <div
            className="relative"
            style={{
              backgroundImage: `
      linear-gradient(rgba(202,220,242,0.45), rgba(202,220,242,0.45)),
      url('/iconsss/picsAzzurra2.png')
    `,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          >
            <div className="mx-auto max-w-[1180px] px-3 sm:px-5 md:px-6 pt-10 sm:pt-14 pb-10 sm:pb-12 max-md:pt-16 max-md:pb-8">
              <div className="flex flex-col gap-0 md:mt-0 pt-0">
                {/* MENU LOGO + CUCCIOLINO */}
                <div className="flex items-start w-full mt-6 sm:mt-8 md:mt-10">
                  {/*
  <Image
    src="/images/menulogo.png"
    alt="Menu"
    width={460}
    height={160}
    priority
    style={{
      filter:
        "brightness(0) saturate(100%) invert(21%) sepia(84%) saturate(1862%) hue-rotate(345deg) brightness(92%) contrast(95%)",
    }}
    className="
      object-contain
      scale-y-[1.12] sm:scale-y-[1.2]
      max-md:w-[260px] max-md:h-[95px]
      -ml-18 md:-ml-17
      filter brightness-0 saturate-100 invert-[17%] sepia-[90%] saturate-[4000%] hue-rotate-[350deg] brightness-[90%] contrast-[110%]
    "
  />
  */}

                  <div
                    className="
                      font-oswald font-black uppercase text-[#ef4136]
                      leading-none
                      text-[110px] sm:text-[140px] md:text-[180px]
                      scale-y-[1.2]
                      ml-0 md:-ml-2
                    "
                  >
                    MENU
                  </div>

                  <div className="ml-auto pt-6 max-md:pt-1">
                    <span
                      className="font-couture uppercase font-bold text-[#b42f26] tracking-[0]
                                  md:text-5xl text-4xl sm:text-base
                                  max-md:text-[14px] max-md:tracking-[0.2em]"
                    >
                      CUCCIOLINO
                    </span>
                  </div>
                </div>

                {/* sottotitolo */}
                <div
                  className="font-oswald font-black text-[#7983c0] leading-tight
                              md:text-5xl text-5xl pb-6
                              max-md:text-[26px] max-md:pb-4
                              mt-4 sm:mt-6"
                >
                  <div>Pizza All Day</div>
                  <div>Gelato For Every Moment</div>
                </div>
              </div>

              {/* LINEA INTRO */}
              <div
                className={`md:mt-14 mt-8 max-md:mt-6 border-t-4 border-white ${LINE_OFFSET}`}
              />
              {/* ===== SLICE SECTION ===== */}
              <section className="mt-8 sm:mt-10 max-md:mt-6">
                <div className="grid grid-cols-2 gap-6 items-start">
                  {/* LEFT */}
                  <div className="relative ml-0 md:ml-12">
                    <div className="flex justify-start ">
                      <div className="relative w-full h-[180px] md:h-[240px]">
                        <div className="absolute left-0 md:-left-16 -top-16 md:-top-14 w-[180%] md:w-[800px] h-[260px] md:h-[360px] z-10">
                          <Image
                            src="/imag/menu1.png"
                            alt="Slice menu"
                            fill
                            className="object-contain max-md:scale-y-[1.5]"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="md:-ml-12  ml-0 mt-2 md:-mt-8 font-sofiapro font-black text-[#b42f26]
                text-[26px] md:text-[38px] max-md:text-[20px]
                leading-tight tracking-tight"
                    >
                      Every day between <br />3 PM and 6 PM
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="flex flex-col gap-1 mt-6 md:mt-9 max-md:mt-4">
                    {/* SLICE */}
                    <div>
                      <div className="flex justify-between items-center gap-16 md:gap-24">
                        <div
                          className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                        >
                          SLICE
                        </div>

                        <div
                          className="font-sofiapro font-black text-[#ef4136]
  text-[26px] md:text-[38px] max-md:text-[22px] leading-none"
                        >
                          7
                        </div>
                      </div>
                    </div>

                    {/* SLICE & DRINK */}
                    <div>
                      <div className="mt-2 max-md:mt-2 border-b-4 border-white" />

                      <div className="flex justify-between items-center gap-16 md:gap-24 mt-2">
                        <div
                          className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                        >
                          SLICE & DRINK
                        </div>

                        <div
                          className="font-sofiapro font-black text-[#ef4136]
  text-[24px] md:text-[34px] max-md:text-[22px] leading-none"
                        >
                          10.5
                        </div>
                      </div>
                    </div>

                    {/* SLICE & GELATO */}
                    <div>
                      <div className="mt-2 max-md:mt-1 border-b-4 border-white" />

                      <div className="flex justify-between items-center gap-16 md:gap-24 mt-2">
                        <div
                          className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[28px] md:text-[38px] max-md:text-[18px] leading-none"
                        >
                          SLICE & GELATO
                        </div>

                        <div
                          className="font-sofiapro font-black text-[#ef4136]
  text-[24px] md:text-[34px] max-md:text-[22px] leading-none"
                        >
                          13
                        </div>
                      </div>
                      {/* EXTRA INFO */}
                      <div className="mt-8 md:mt-6 ml-2 md:ml-1">
                        <div
                          className="font-oswald font-black text-[#7983c0]
    text-[22px] md:text-[30px]
    leading-tight tracking-tight"
                        >
                          Extra topping $ 0.5 .
                        </div>

                        <div
                          className="font-oswald font-black text-[#7983c0]
    text-[22px] md:text-[30px]
    leading-tight tracking-tight"
                        >
                          Ice tea $ 1.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LINEA sotto come tutte le sezioni */}
                <div
                  className={`mt-6 border-b-4 border-white ${LINE_OFFSET}`}
                />
              </section>
              {/* ===== PIZZE ===== */}
              <section className="mt-20 max-md:mt-6">
                {/* IMAGE */}

                <div className="flex justify-start -ml-6 md:ml-12">
                  <div className="relative w-[140%] md:w-[600px] h-[185px] md:h-[240px]">
                    <Image
                      src="/imag/menu2222.png"
                      alt="Slice menu"
                      fill
                      className="object-contain max-md:scale-[0.9] md:scale-[1.2]"
                    />
                  </div>
                </div>

                <h2
                  className="font-oswald font-black text-[#7983c0]
  md:text-5xl text-5xl
  text-[32px] md:text-[42px] 
  md:-mt-10 -mt-10 pt-0 pb-10 leading-none"
                >
                  The classics that started it all.
                </h2>

                {/* LINEA */}
                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {/* ITEMS */}
                {pizzas.map((p) => (
                  <div key={p.title}>
                    <MenuItem {...p} />

                    {p.title === "MEAT LOVERS" && (
                      <div className="-mt-2 mb-0">
                        <div
                          className="font-oswald font-black text-[#7983c0]
  text-[24px] md:text-[36px]
  leading-none tracking-tight mb-18"
                        >
                          Gluten free base 5
                        </div>
                        <div
                          className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </section>
              <section className="mt-8 sm:mt-10 max-md:mt-6">
                {/* IMAGE */}
                <div className="flex justify-start -ml-7 md:ml-18">
                  <div className="relative w-[140%] md:w-[600px] h-[185px] md:h-[240px]">
                    <Image
                      src="/imag/menu3.png"
                      alt="Slice menu"
                      fill
                      className="object-contain max-md:scale-[0.9] md:scale-[1.3]"
                    />
                  </div>
                </div>

                <h2
                  className="font-oswald font-black text-[#7983c0]
  md:text-5xl text-5xl
  text-[28px] md:text-[42px] 
  md:-mt-10 -mt-10 pt-0 pb-10 leading-none"
                >
                  Crafted with care, topped with passion.
                </h2>

                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {craftedPizzas.map((p) => (
                  <MenuItem key={p.title} {...p} />
                ))}

                <div className="-mt-2 mb-0">
                  <div
                    className="font-oswald font-black text-[#7983c0]
  text-[24px] md:text-[36px] 
  leading-none tracking-tight mb-18"
                  >
                    Gluten free base 5
                  </div>
                  {/* <div
                    className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                  /> */}
                </div>
              </section>
              {/* ===== GELATO ===== */}
              <section>
                {/* IMAGE */}

                <div className="flex justify-start -ml-1 md:-ml-6">
                  <div className="relative w-[140%] md:w-[600px] h-[185px] md:h-[240px]">
                    <Image
                      src="/imag/menu4.png"
                      alt="Slice menu"
                      fill
                      className="object-contain max-md:scale-y-[0.7] md:scale-[0.95]"
                    />
                  </div>
                </div>

                <h2
                  className="font-oswald font-semibold text-[#7983c0]
  text-[32px] md:text-[42px] 
  -mt-10 pt-0 pb-10 leading-none"
                >
                  Pure ingredients, pure joy.
                </h2>

                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {/* SIZES */}
                {gelatoSizes.map((item) => (
                  <div key={item.title} className="py-2 max-md:pt-0">
                    <div className="flex justify-between items-center">
                      <div
                        className="font-sofiapro font-black text-[#b42f26]
  text-[28px] md:text-[48px]
  max-md:text-[20px] leading-none"
                      >
                        {item.title}
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#b42f26]
  text-[24px] sm:text-[28px] md:text-[34px]"
                      >
                        {item.price}
                      </div>
                    </div>

                    <div
                      className={`mt-2 border-b-4 border-white ${LINE_OFFSET}`}
                    />
                  </div>
                ))}

                {/* FLAVOURS */}
                <div className="mt-6">
                  {/* {gelatoFlavours.map((g) => (
                    <div key={g} className="py-2">
                      <div
                        className="font-sofiapro font-black uppercase text-[#ef4136]
          text-[24px] md:text-[40px] max-md:text-[20px]"
                      >
                        {g}
                      </div>

                      <div
                        className={`mt-2 border-b-4 border-white ${LINE_OFFSET}`}
                      />
                    </div>
                  ))} */}
                </div>
              </section>
              {/* ===== COMBOS ===== */}
              <section className="mt-10 sm:mt-12 max-md:mt-8">
                {/* IMAGE */}
                <div className="flex justify-start -ml-2 md:-ml-6 ">
                  <div className="relative w-[140%] md:w-[600px] h-[185px] md:h-[240px]">
                    <Image
                      src="/imag/menu5555.png"
                      alt="Slice menu"
                      fill
                      className="object-contain max-md:scale-y-[1.0] md:scale-[0.95]"
                    />
                  </div>
                </div>

                <h2
                  className="font-oswald font-black text-[#7983c0]
  md:text-5xl text-5xl
  text-[32px] md:text-[42px] 
  -mt-8 pt-0 pb-10 leading-none"
                >
                  Good things come in great combs.
                </h2>

                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {combos.map((combo) => (
                  <div key={combo.title} className="md:py-3 py-3 max-md:py-2">
                    <div
                      className="font-sofiapro font-black uppercase text-[#ef4136]
        text-[34px] sm:text-[40px] md:text-[52px]
        max-md:text-[28px] leading-none"
                    >
                      {combo.title}
                    </div>

                    <p
                      className="mt-1 font-sofiapro font-black text-[#b42f26]
  text-[18px] md:text-[22px] max-md:text-[17px]
  leading-[1.2]"
                    >
                      {combo.description}
                    </p>

                    <div
                      className={`mt-4 border-b-4 border-white ${LINE_OFFSET}`}
                    />
                  </div>
                ))}
              </section>

              {/* ===== GELATO PROMOTION ===== */}
              <section className="mt-28 sm:mt-32 max-md:mt-20">
                <div
                  className="font-sofiapro font-black uppercase text-[#b42f26]
    text-[34px] sm:text-[40px] md:text-[52px]
    max-md:text-[28px] leading-none"
                >
                  GELATO PROMOTION
                </div>

                <h2
                  className="font-oswald font-black text-[#7983c0]
    text-[24px] md:text-[42px]
    mt-2 pb-8 md:pb-10 leading-none max-w-[820px]"
                >
                  If you buy 2 pizzas or more, you get gelato at a special
                  price.
                </h2>

                <div
                  className={`border-t-4 border-white mb-4 mt-2 ${LINE_OFFSET}`}
                />

                {gelatoPromotions.map((item) => (
                  <div key={item.title} className="py-3 max-md:py-2">
                    <div className="flex justify-between items-center">
                      <div
                        className="font-sofiapro font-black uppercase text-[#ef4136]
          text-[34px] sm:text-[40px] md:text-[52px]
          max-md:text-[28px] leading-none"
                      >
                        {item.title}
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#b42f26]
text-[24px] sm:text-[28px] md:text-[34px]
max-md:text-[22px] leading-none"
                      >
                        {item.price}
                      </div>
                    </div>

                    <div
                      className={`mt-4 border-b-4 border-white ${LINE_OFFSET}`}
                    />
                  </div>
                ))}
              </section>

              {/* ===== FOOTER ===== */}
              <div className="md:mt-20 mt-10 sm:mt-16 pb-8 sm:pb-10 max-md:mt-12">
                <div
                  className="flex items-end justify-center gap-6 sm:gap-10 md:ml-84 ml-2 mt-8 mb-30
max-md:ml-8 max-md:justify-start max-md:gap-4 md:mr-2 mr-4"
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
    <div className="md:py-0 md:pb-4 py-2 max-md:pb-3">
      <div className="flex items-start justify-between gap-12 md:gap-20">
        <h3
          className={`font-sofiapro uppercase text-[#ef4136] leading-[0.95]
  text-[42px] sm:text-[56px] lg:text-[64px]
  max-md:text-[34px] max-w-[65%]
  ${title === "98" ? "font-semibold" : "font-semibold"}`}
        >
          {title}
        </h3>

        <div
          className="font-sofiapro font-black text-[#ef4136]
  text-[22px] sm:text-[26px] lg:text-[34px] max-md:text-[22px]
  whitespace-nowrap leading-none md:-mt-2 -mt-1"
        >
          {price}
        </div>
      </div>

      <p
        className="-mt-2 sm:-mt-3 font-sofiapro font-black text-[#b42f26]
  text-[18px] md:text-[22px] max-md:text-[17px] md:pl-1 pl-1
  leading-snug md:max-w-[620px] max-w-[260px]
  text-justify"
      >
        {description}
      </p>

      <div
        className={`mt-3 max-md:mt-2 border-b-4 border-white ${LINE_OFFSET}`}
      />
    </div>
  );
}

/* =======================
   GELATO ITEM
======================= */
function GelatoItem({ title }: GelatoItemProps) {
  return (
    <div className="md:py-6 py-6 max-md:py-5">
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
