import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cucciolino Pizza & Gelato",
  description:
    "Authentic pizza and artisan gelato. Opening hours, location and order via WhatsApp.",
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Home page</h1>
    </main>
  );
}
