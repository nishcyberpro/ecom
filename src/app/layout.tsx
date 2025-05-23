import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Inter } from "next/font/google";
import Mobilemenu from "./components/Mobilemenu";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce Store",
  description: "Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${geistMono.variable} antialiased font-medium text-[#6B7280]`}
      >
        {" "}
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 1000, style: { zIndex: 9999 } }}
        />
        {children}
        <div></div>
      </body>
    </html>
  );
}
