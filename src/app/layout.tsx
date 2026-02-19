import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "WhatsApp Cloud API Cost Calculator | Accurate Pricing Estimation",
  description: "Calculate your WhatsApp Cloud API costs instantly. Estimate marketing, utility, and authentication message expenses across different countries with our real-time calculator.",
  keywords: "WhatsApp Cloud API, Pricing Calculator, WhatsApp Business API Costs, Marketing messages cost, WhatsApp pricing 2025",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
