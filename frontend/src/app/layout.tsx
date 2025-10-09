import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@//components/Navbar";
import Login from "@//pages/login";
import Register from "@//pages/register";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "My Ecommerce App",
  description: "Next.js + Redux Toolkit + Tailwind CSS Ecommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Providers>
          <Navbar />
          <Login />
          <Register />
          {children}
        </Providers>
      </body>
    </html>
  );
}
