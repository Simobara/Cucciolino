"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMenuPage = pathname.startsWith("/menu");

  return (
    <>
      <Header />
      {children}
      {!isMenuPage && <Footer />}
    </>
  );
}
