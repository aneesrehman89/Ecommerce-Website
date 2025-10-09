import type { Metadata } from "next";
import "./globals.css";
import ClientNavbar from "@/components/ClientNavbar"; // Import the new client component
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
          <ClientNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
