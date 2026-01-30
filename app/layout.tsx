"use client";

import { DM_Sans, Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // 👉 true quando sei nella pagina menu
  const isMenuPage = pathname.startsWith("/menu");

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />

        {children}

        {/* Footer nascosto solo nel menu */}
        {!isMenuPage && <Footer />}
      </body>
    </html>
  );
}
