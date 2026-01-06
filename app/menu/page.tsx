import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Cucciolino Pizza & Gelato",

  description: "Explore our menu: pizzas, gelato and drinks.",
};

type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
};

const MENU: MenuSection[] = [
  {
    title: "Pizza",
    note: "Classic Italian-style pizzas.",
    items: [
      {
        name: "Margherita",
        description: "Tomato, mozzarella, basil",
        price: "$",
      },
      {
        name: "Diavola",
        description: "Spicy salami, mozzarella, tomato",
        price: "$",
      },
      {
        name: "Prosciutto",
        description: "Prosciutto, rocket, parmesan",
        price: "$",
      },
    ],
  },
  {
    title: "Gelato",
    note: "Artisan gelato made fresh daily.",
    items: [
      { name: "Pistachio", price: "$" },
      { name: "Hazelnut", price: "$" },
      { name: "Stracciatella", price: "$" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Still Water", price: "$" },
      { name: "Sparkling Water", price: "$" },
      { name: "Soft Drink", price: "$" },
    ],
  },
];

export default function MenuPage() {
  return (
    <main id="/menu" className="mx-auto max-w-5xl px-6 pt-28 pb-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">Menu</h1>
        <p className="mt-3 text-zinc-600">
          Please ask our staff for today’s specials and availability.
          <a
            href="https://wa.me/61XXXXXXXXX?text=Hello%20Cucciolino,%20I%20would%20like%20to%20order%20from%20the%20menu."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800"
          >
            Order via WhatsApp
          </a>
        </p>
      </header>

      <div className="space-y-12">
        {MENU.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            {section.note ? (
              <p className="mt-2 text-sm text-zinc-600">{section.note}</p>
            ) : null}

            <ul className="mt-6 divide-y divide-zinc-200">
              {section.items.map((item) => (
                <li key={item.name} className="py-4">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-zinc-600">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                    <p className="shrink-0 font-medium">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
