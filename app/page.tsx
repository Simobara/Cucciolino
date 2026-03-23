import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "CUCCIOLINO | Pizza & Gelato",
  description:
    "Best quality Neighbourhood pizzeria in Brighton, Melbourne • Traditional artisan pizza made with love • Open for lunch & dinner • Dine-in, takeaway & bookings available.",
};

export default function Page() {
  return <HomeClient />;
}
