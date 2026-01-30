import Image from "next/image";
import Header from "../components/Header";

/**
 * Linee: devono avere margini DX/SX uguali SEMPRE.
 * Quindi: niente offset “a mano” (-mx-5 ecc).
 * Le linee si allineano ESATTAMENTE al container (px-5 / sm:px-10).
 */
const LINE_OFFSET = "md:-mx-4 :-mx-10";

export default function MenuPage() {
  const pizzas = [
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

  const gelatos = [
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
            {/* CUCCIOLINO TOP
            <div className="absolute top-4 left-0 right-0 text-center">
              <span className="font-couture uppercase font-bold text-[#b42f26] tracking-[0.25em] text-sm sm:text-base">
                CUCCIOLINO
              </span>
            </div> */}

            {/* CONTENUTO */}
            <div className="mx-auto max-w-[880px] px-5 sm:px-10 pt-20 sm:pt-24 pb-10 sm:pb-12">
              <div className="flex flex-col gap-3 sm:gap-4">
                {/* MENU + CUCCIOLINO */}
                <div className="flex items-start w-full">
                  <h1 className="font-oswald font-bold text-[#ef4136] uppercase -tracking-tighter leading-none text-[74px] sm:text-[120px] lg:text-[150px] scale-y-[1.12] sm:scale-y-[1.2]">
                    MENU
                  </h1>

                  <div className="ml-auto pt-2">
                    <span className="font-couture uppercase font-bold text-[#b42f26] tracking-[0.25em] md:text-4xl text-3xl  sm:text-base">
                      CUCCIOLINO
                    </span>
                  </div>
                </div>

                {/* sottotitolo */}
                <div className="font-oswald font-bold text-[#b42f26] leading-tight md:text-5xl text-xl pb-6">
                  <div>Pizza All Day</div>
                  <div>Gelato For Every Moment</div>
                </div>
              </div>

              {/* LINEA INTRO */}
              <div
                className={`md:mt-14 mt-8 border-t-4 border-white ${LINE_OFFSET}`}
              />

              {/* ===== PIZZE ===== */}
              <section className="mt-8 sm:mt-10">
                {pizzas.map((p) => (
                  <MenuItem
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    price={p.price}
                  />
                ))}
              </section>

              <div className="h-14 sm:h-20" />

              {/* ===== GELATO ===== */}
              <section>
                <h2 className="font-oswald font-bold text-[#b42f26] text-2xl md:text-5xl mb-6 md:mb-14 md:mt-10 mt-8">
                  Our Gelato flavours
                </h2>

                {/* linea sopra gelato */}
                <div
                  className={`border-t-4 border-white mb-4 ${LINE_OFFSET}`}
                />

                {gelatos.map((g) => (
                  <GelatoItem key={g} title={g} />
                ))}
              </section>

              {/* ===== FOOTER GRAFICO IN BASSO (come immagine) ===== */}
              <div className="md:mt-20 mt-10 sm:mt-16 pb-8 sm:pb-10">
                <div className="flex items-end justify-center gap-6 sm:gap-10 md:ml-44 ml-20 mt-8 mb-30">
                  {/* testo "Made with Love" */}
                  <div
                    className="text-[#b42f26] leading-none md:mr-4 mr-2"
                    style={{
                      fontFamily: "bikinis",
                      fontSize: "clamp(28px, 8vw, 54px)",
                      fontWeight: 600,
                      letterSpacing: " ", // 👈 più spazio tra le lettere
                    }}
                  >
                    Made with Love
                  </div>
                  {/* timbro rotondo */}
                  <div className="relative w-[110px] h-[110px] ml-8 mt-8 scale-230 sm:w-[140px] sm:h-[140px]  opacity-90">
                    <Image
                      src="/iconsss/cursor.png" // <-- cambia qui se il file ha un altro nome/percorso
                      alt="Cucciolino stamp"
                      fill
                      className="object-contain"
                      priority={false}
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
function MenuItem({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className="md:py-0 md:pb-8 py-3">
      <div className="flex items-start justify-between gap-6">
        <h3 className="font-sofiapro font-bold uppercase text-[#ef4136] leading-[0.95] text-[42px] sm:text-[56px] lg:text-[64px] -tracking-tight max-w-[75%]">
          {title}
        </h3>

        <div className="font-sofiapro font-bold text-[#ef4136] text-xl sm:text-2xl whitespace-nowrap pt-1 sm:pt-3">
          {price}
        </div>
      </div>

      <p className="mt-1 sm:mt-3 font-sofiapro text-[#b42f26] text-lg md:text-[20px] leading-relaxed max-w-[620px]">
        {description}
      </p>

      {/* LINEA SOTTO PIZZA */}
      <div className={`mt-6 border-b-4 border-white ${LINE_OFFSET}`} />
    </div>
  );
}

/* =======================
   GELATO ITEM
======================= */
function GelatoItem({ title }: { title: string }) {
  return (
    <div className="md:py-2 py-5">
      <div className="font-sofiapro font-bold uppercase text-[#ef4136] text-[44px] md:text-[65px] leading-none -tracking-tight">
        {title}
      </div>

      {/* linea sotto gelato */}
      <div className={`mt-4 border-b-4 border-white ${LINE_OFFSET}`} />
    </div>
  );
}
