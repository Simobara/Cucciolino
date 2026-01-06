import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
