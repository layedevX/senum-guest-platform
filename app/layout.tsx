import type React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s  -  heritage.africa",
    default: "Cloud  -  heritage.africa",
  },
  description:
    "Powerful, scalable, and secure cloud infrastructure designed for African businesses.",
  icons: [{ url: "/favicon.png", rel: "shortcut icon" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
