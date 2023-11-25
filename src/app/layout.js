"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header`";
import StyledComponentsRegistry from "@/lib/AntdRegistry`";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
