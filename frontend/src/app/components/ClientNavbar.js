"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ClientNavbar() {
  const pathname = usePathname();
  const hideNavbarRoutes = ["/login", "/register"];
  const showNavbar = !hideNavbarRoutes.includes(pathname);

  return showNavbar ? <Navbar /> : null;
}