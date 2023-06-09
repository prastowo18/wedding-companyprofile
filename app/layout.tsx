import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Providers from "./utils/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Divory | Digital Invitation Story",
  description: "Wedding Invitation",
  verification: {
    google: "NQP3HJj1MqScZNZpUHrTARnbS5u8VyjWrh-vr-A9aXk",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F1F3F8]`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
