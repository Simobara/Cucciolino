import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import LayoutShell from "./LayoutShell";

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



export const metadata: Metadata = {
  metadataBase: new URL("https://www.cucciolino.com.au"),
  icons: {
    icon: "/favicon2.ico",
    shortcut: "/favicon2.ico",
    apple: "/apple-icon.png",
  },
  title: {
    default: "Cucciolino | Pizza Restaurant Melbourne",
    template: "%s | Cucciolino",
  },
  description:
    "Taste our high-quality pizza in Melbourne, made with traditional methods and love. Visit Cucciolino for artisan pizza, dine-in and takeaway in a welcoming modern environment.",
  keywords: [
    "pizza Melbourne",
    "pizza restaurant Melbourne",
    "artisan pizza Melbourne",
    "Cucciolino Melbourne",
    "best pizza Melbourne",
    "takeaway pizza Melbourne",
    "dine in pizza Melbourne",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cucciolino | Pizza Restaurant Melbourne",
    description:
      "Taste our high-quality pizza in Melbourne, made with traditional methods and love. Visit Cucciolino for artisan pizza, dine-in and takeaway.",
    url: "https://www.cucciolino.com.au",
    siteName: "Cucciolino",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased overflow-x-hidden">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
