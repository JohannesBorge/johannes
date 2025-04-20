import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Johannes Borge | SaaS Founder & Technical Coach",
  description: "Personal accountability coaching, technical assistance, and founder mentoring for indie hackers and solo SaaS founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
