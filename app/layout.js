import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "WhatsApp Cloud API Cost Calculator | Accurate Meta Pricing Tool",
  description: "Calculate your WhatsApp Cloud API conversation costs instantly. Estimate rates for Marketing, Utility, Authentication, and Service categories based on recipient country and live exchange rates.",
  keywords: "WhatsApp Cloud API, Cost Calculator, WhatsApp Pricing 2024, Meta Business API Cost, WhatsApp Marketing Pricing, WhatsApp OTP Cost, WhatsApp Business Fee, Conversation Based Pricing",
  authors: [{ name: "Professional Pricing Tools" }],
  openGraph: {
    title: "WhatsApp Cloud API Cost Calculator | Accurate Meta Pricing Tool",
    description: "Calculate your WhatsApp Cloud API conversation costs instantly. Estimate rates for Marketing, Utility, Authentication, and Service categories.",
    type: "website",
    locale: "en_US",
    siteName: "WhatsApp Cost Calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Cloud API Cost Calculator",
    description: "Calculate your WhatsApp Cloud API conversation costs instantly.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
