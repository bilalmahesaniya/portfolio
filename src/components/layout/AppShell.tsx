"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isKageLanding = pathname === "/kage";

  if (isKageLanding) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 pt-20">{children}</div>
      <Footer />
    </div>
  );
}
