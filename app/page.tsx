import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const SITE_ON_HOLD = true; // 👈 cambia a false per riattivare tutto

export const metadata: Metadata = {
  title: SITE_ON_HOLD
    ? "Temporarily Unavailable"
    : "CUCCIOLINO | Pizza & Gelato",
  description: SITE_ON_HOLD
    ? "This website is currently unavailable."
    : "Best quality Neighbourhood pizzeria in Brighton, Melbourne • Traditional artisan pizza made with love • Open for lunch & dinner • Dine-in, takeaway & bookings available.",
};

export default function Page() {
  if (SITE_ON_HOLD) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          fontFamily: "sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Website under maintenance
        </h1>
        <p style={{ color: "#666" }}>
          We’re currently making some updates. Please check back shortly.
        </p>
      </div>
    );
  }

  // 👉 PAGINA ORIGINALE (non cancellata)
  return <HomeClient />;
}