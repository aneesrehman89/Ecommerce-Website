import type { Metadata } from "next";
import "./globals.css";
import ClientNavbar from "@/components/ClientNavbar"; 
import SocialMediaFloat from "@/components/SocialMediaFloat";
import { Providers } from "./store/providers";

export const metadata: Metadata = {
  title: "ambotique - Fashion & Lifestyle",
  description: "ambotique - Premium Pakistani Fashion & Lifestyle Brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" 
    suppressHydrationWarning={true}>
      <body cz-shortcut-listen="true">
        <Providers>
          <ClientNavbar />
          {children}
          <SocialMediaFloat />
        </Providers>
      </body>
    </html>
  );
}
