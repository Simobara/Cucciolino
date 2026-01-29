import Header from "./components/Header";
export default function MenuPage() {
  return (
    <>
      {" "}
      <Header variant="light" />{" "}
      <main className="bg-white px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        {" "}
        {/* CONTENITORE PRINCIPALE */}{" "}
        <section className="mx-auto w-full max-w-350">
          {" "}
          {/* BLOCCO AZZURRO */}{" "}
          <div className="bg-[#cfe0f2] relative">
            {" "}
            {/* WRAPPER INTERNO */}{" "}
            <div className="mx-auto max-w-300 px-5 py-10 sm:px-10 sm:py-14 lg:p-10">
              {" "}
              {/* TITLE + LOGO */}{" "}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0 mt-30 mb-30">
                {" "}
                <h1 className=" font-oswald font-bold text-[#ef4136] uppercase -tracking-tighter leading-none scale-y-[1.15] sm:scale-y-[1.35] lg:scale-y-[1.45] text-[56px] sm:text-[96px] lg:text-[140px] ">
                  {" "}
                  MENU{" "}
                </h1>{" "}
                <span className=" hidden sm:block font-couture uppercase font-bold text-[#b42f26] tracking-widest text-lg sm:text-2xl lg:text-5xl ">
                  {" "}
                  Cucciolino{" "}
                </span>{" "}
              </div>{" "}
              {/* ===== PIZZA ALL DAY ===== */}{" "}
              <section className="mt-14 sm:mt-20 mb-16 sm:mb-24">
                {" "}
                <h2 className=" font-oswald font-bold text-[#b42f26] tracking-[0.12em] text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 ">
                  {" "}
                  Pizza All Day{" "}
                </h2>{" "}
                <MenuItem
                  title="MARGHERITA"
                  description="San Marzano tomato, Mozzarella, basil, EVO olive oil, oregano"
                  price="$ 24,00"
                />{" "}
                <MenuItem
                  title="CAPRICCIOSA"
                  description="San Marzano Tomato, Mozzarella, Italian ham, field mushrooms, kalamata olives"
                  price="$ 24,00"
                />{" "}
                <MenuItem
                  title="DIAVOLA"
                  description="San Marzano tomato, Mozzarella, your choice of Tuscan style hot or mild salami"
                  price="$ 24,00"
                />{" "}
                <MenuItem
                  title="PROSCIUTTO, ROCKET & BUFALA"
                  description="San Marzano tomato, Mozzarella, Rocket leaves, Prosciutto di Parma, Bufala"
                  price="$ 24,00"
                />{" "}
              </section>{" "}
              {/* ===== GELATO ===== */}{" "}
              <section>
                {" "}
                <h2 className=" font-oswald font-bold text-[#b42f26] tracking-[0.16em] text-2xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 ">
                  {" "}
                  Gelato For Your Moment{" "}
                </h2>{" "}
                <ul className=" space-y-3 text-[#ef4136] font-couture text-base sm:text-xl lg:text-2xl ">
                  {" "}
                  <li>VANILLA BEAN</li> <li>COOKIES AND CREAM</li>{" "}
                  <li>MINT CHOC CHIP</li> <li>BLOOD ORANGE</li>{" "}
                </ul>{" "}
              </section>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
    </>
  );
}
/* ===== COMPONENTI ===== */ function MenuItem({
  title,
  description,
  price,
}: {
  title: string;
  description: string;
  price: string;
}) {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-8 mb-7 sm:mb-10 ">
      {" "}
      <div>
        {" "}
        <h3 className=" font-oswald uppercase text-[#ef4136] text-lg sm:text-2xl font-bold ">
          {" "}
          {title}{" "}
        </h3>{" "}
        <p className=" text-[#b42f26] text-sm sm:text-lg leading-relaxed ">
          {" "}
          {description}{" "}
        </p>{" "}
      </div>{" "}
      <div className=" font-oswald text-[#ef4136] text-lg sm:text-2xl font-bold whitespace-nowrap self-start sm:self-center ">
        {" "}
        {price}{" "}
      </div>{" "}
    </div>
  );
}
