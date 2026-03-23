import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Best Pizza Restaurant in Brighton | Cucciolino",
  description:
    "Best quality neighbourhood pizzeria in Brighton, Melbourne • Traditional artisan pizza made with love • Open for lunch & dinner • Dine-in, takeaway & bookings available.",
};

export default function Page() {
  return <HomeClient />;
}
