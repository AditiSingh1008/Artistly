"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();

  // Render Header only on the home page
  if (pathname === "/") {
    return <Header />;
  }
  return null;
}
