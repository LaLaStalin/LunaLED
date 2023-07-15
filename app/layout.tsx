"use client";

import { Navbar, NavbarContact } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LunalED",
  description: "Website for LED",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative light 
        bg-backgroundLight 
        dark:bg-backgroundDark 
        text-text-primaryLight 
        dark:text-text-primaryDark
        font-roboto"
      >
        <NavbarContact />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
