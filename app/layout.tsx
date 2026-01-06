import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cucciolino Pizza & Gelato",
  description:
    "Authentic pizza and artisan gelato. View the menu, opening hours, location, and order via WhatsApp.",
  openGraph: {
    title: "Cucciolino Pizza & Gelato",
    description:
      "Authentic pizza and artisan gelato in Brighton, VIC. View the menu and order via WhatsApp.",
    url: "https://TUO-DOMINIO.vercel.app",
    siteName: "Cucciolino Pizza & Gelato",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cucciolino Pizza & Gelato",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
