// FILE: app/menu/page.tsx

import Header from "../components/Header";

export default function MenuPage() {
  return (
    <>
      <Header variant="light" />

      <main className="bg-white p-10">
        {/* ✅ CONTENITORE PRINCIPALE: bordo bianco FISSO 10px */}
        <section className="mx-auto w-full max-w-[1400px] p-[10px]">
          {/* ✅ BLOCCO AZZURRO: sempre full dentro al bianco */}
          <div className="bg-[#cfe0f2] w-full relative">
            {/* ✅ WRAPPER INTERNO: contenuto + padding FISSO 40px */}
            <div className="mx-auto max-w-[1200px] p-[40px] ">
              {/* MENU TITLE */}
              <h1
                className="
                  font-oswald
                  font-bold
                  text-[#ef4136]
                  uppercase
                  -tracking-tighter
                  text-[140px]
                  leading-none
                  mb-16
                  scale-y-[1.45]
                  mt-30
                "
              >
                MENU
              </h1>

              {/* LOGO TOP RIGHT */}
              <div className="absolute top-10 right-10 mt-30 mr-20">
                <span className=" font-couture uppercase font-bold text-[#b42f26] text-5xl tracking-widest">
                  Cucciolino
                </span>
              </div>

              {/* ===== PIZZA ALL DAY ===== */}
              <section className="mt-30 mb-30">
                <h2 className="font-oswald font-bold text-[#b42f26] tracking-[0.12em] text-5xl mb-10">
                  Pizza All Day
                </h2>

                <MenuItem
                  title="MARGHERITA"
                  description="San Marzano tomato, Mozzarella, basil, EVO olive oil, oregano"
                  price="$ 24,00"
                />

                <MenuItem
                  title="CAPRICCIOSA"
                  description="San Marzano Tomato, Mozzarella, Italian ham, field mushrooms, kalamata olives"
                  price="$ 24,00"
                />

                <MenuItem
                  title="DIAVOLA"
                  description="San Marzano tomato, Mozzarella, your choice of Tuscan style hot or mild salami"
                  price="$ 24,00"
                />

                <MenuItem
                  title="PROSCIUTTO, ROCKET & BUFALA"
                  description="San Marzano tomato, Mozzarella, Rocket leaves, Prosciutto di Parma, Bufala"
                  price="$ 24,00"
                />
              </section>

              {/* ===== GELATO ===== */}
              <section>
                <h2 className="font-oswald text-[#b42f26] text-5xl font-bold tracking-[0.18em] mb-10">
                  Gelato For Your Moment
                </h2>

                <ul className="space-y-6 text-[#ef4136] font-couture text-2xl">
                  <li>VANILLA BEAN</li>
                  <li>COOKIES AND CREAM</li>
                  <li>MINT CHOC CHIP</li>
                  <li>BLOOD ORANGE</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ===== COMPONENTI ===== */

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
    <div className="grid grid-cols-[1fr_auto] gap-10 mb-10">
      <div>
        <h3 className="font-oswald uppercase text-[#ef4136] text-2xl font-sofiapro">
          {title}
        </h3>
        <p className="text-[#b42f26] text-lg">{description}</p>
      </div>

      <div className="font-oswald text-[#ef4136] text-2xl font-bold whitespace-nowrap">
        {price}
      </div>
    </div>
  );
}
