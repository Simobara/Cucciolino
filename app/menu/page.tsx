import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Cucciolino Pizza & Gelato",
  description:
    "Explore our menu: pizza, gelato and more. Prices and options available.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Menu</h1>
    </main>
  );
}
