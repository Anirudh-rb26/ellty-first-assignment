import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "ELLTY",
  description: "Fist Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.variable} antialiased w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
