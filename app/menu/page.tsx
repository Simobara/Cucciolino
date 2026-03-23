import Image from "next/image";
import Header from "../components/Header";

const LINE_OFFSET = "md:-mx-4 -mx-10";

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
    { title: "2 SCOOPS", price: "9,5" },
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
            <div className="mx-auto max-w-[880px] px-5 sm:px-10 pt-10 sm:pt-14 pb-10 sm:pb-12 max-md:pt-16 max-md:pb-8">
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
                  <div>
                    <div className="mb-4 flex justify-start md:-ml-6 -ml-7">
                      <Image
                        src="/imag/menu1.png"
                        alt="Slice menu"
                        width={700}
                        height={250}
                        className="object-contain max-md:scale-y-[1.0] max-md:w-[120%] max-md:ml-4 w-[90%] md:w-[500px]"
                      />
                    </div>

                    {/* <div
                      className="font-oswald font-black uppercase text-[#ef4136]
        leading-none -mt-2
        text-[48px] sm:text-[64px] md:text-[80px]
        max-md:text-[40px]"
                    ></div> */}

                    <div
                      className="mt-2 font-sofiapro font-black text-[#b42f26]
                                  text-[26px] md:text-[38px] max-md:text-[20px]
                                  leading-tight tracking-tight"
                    >
                      Every day between <br />
                      3PM and 6PM.
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col gap-3 mt-6 md:mt-12 max-md:mt-4">
                    <div>
                      <div className="flex justify-between items-center">
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
                          10,5
                        </div>
                      </div>

                      <div
                        className={`mt-2 max-md:mt-1 border-b-4 border-white ${LINE_OFFSET}`}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
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

                {/* LINEA sotto come tutte le sezioni */}
                <div
                  className={`mt-6 border-b-4 border-white ${LINE_OFFSET}`}
                />
              </section>
              {/* ===== PIZZE ===== */}
              <section className="mt-20 sm:mt-24 max-md:mt-12">
                {/* IMAGE */}

                <div className="flex justify-start -ml-8 md:ml-8">
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
  text-[24px] md:text-[18px] 
  md:-mt-14 -mt-14 pt-0 pb-10 leading-none"
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
                      <div className="mt-1 mb-0">
                        <div
                          className="font-oswald font-black text-[#7983c0]
  text-[24px] md:text-[32px]
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
                <div className="flex justify-start -ml-9 md:ml-15">
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
  text-[24px] md:text-[56px] 
  md:-mt-14 -mt-14 pt-0 pb-10 leading-none"
                >
                  Crafted with care, topped with passion.
                </h2>

                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {craftedPizzas.map((p) => (
                  <MenuItem key={p.title} {...p} />
                ))}

                <div className="mt-1 mb-0">
                  <div
                    className="font-oswald font-black text-[#7983c0]
  text-[24px] md:text-[32px] 
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

                <div className="flex justify-start -ml-4 md:-ml-10">
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
                  className="font-oswald font-black text-[#7983c0]
  text-[24px] md:text-[56px]
  -mt-14 pt-0 pb-10 leading-none"
                >
                  Pure ingredients, pure joy.
                </h2>

                <div
                  className={`border-t-4 border-white mb-6 mt-2 ${LINE_OFFSET}`}
                />

                {/* SIZES */}
                {gelatoSizes.map((item) => (
                  <div key={item.title} className="py-2">
                    <div className="flex justify-between items-center">
                      <div
                        className="font-sofiapro font-black text-[#b42f26]
          text-[20px] md:text-[28px] max-md:text-[16px]"
                      >
                        {item.title}
                      </div>

                      <div
                        className="font-sofiapro font-black text-[#b42f26]
          text-[18px] md:text-[24px]"
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
                <div className="flex justify-start md:ml-6 -ml-2">
                  <div className="relative w-[140%] md:w-[600px] h-[185px] md:h-[240px]">
                    <Image
                      src="/imag/menu5.png"
                      alt="Slice menu"
                      fill
                      className="object-contain max-md:scale-y-[1.0] md:scale-[0.95]"
                    />
                  </div>
                </div>

                <h2
                  className="font-oswald font-black text-[#7983c0]
  md:text-5xl text-5xl
  text-[24px] md:text-[56px] 
  -mt-13 pt-0 pb-10 leading-none"
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
        text-[14px] md:text-[18px] max-md:text-[12px]
        leading-snug"
                    >
                      {combo.description}
                    </p>

                    <div
                      className={`mt-4 border-b-4 border-white ${LINE_OFFSET}`}
                    />
                  </div>
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
          className={`font-sofiapro uppercase text-[#ef4136] leading-[0.95]
  text-[42px] sm:text-[56px] lg:text-[64px]
  max-md:text-[34px] max-w-[75%]
  ${title === "98" ? "font-semibold" : "font-normal"}`}
        >
          {title}
        </h3>

        <div
          className="font-sofiapro font-black text-[#ef4136]
  text-[20px] sm:text-[24px] lg:text-[30px] max-md:text-[20px]
  whitespace-nowrap leading-none md:-mt-2 -mt-1"
        >
          {price}
        </div>
      </div>

      <p
        className="-mt-1 sm:-mt-2 font-sofiapro font-black text-[#b42f26]
  text-lg md:text-[20px] max-md:text-[16px] md:pl-1 pl-1
  leading-snug md:max-w-[620px] max-w-[260px]
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
