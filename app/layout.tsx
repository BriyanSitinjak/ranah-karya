import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ranah Karya - Printing, Advertising & Interior Design",
    template: "%s | Ranah Karya",
  },
  description:
    "Professional printing, advertising, and interior design services. Transform your brand vision into reality with our creative excellence.",
  keywords: [
    "printing",
    "advertising",
    "interior design",
    "graphic design",
    "branding",
    "portfolio",
  ],
  authors: [{ name: "Ranah Karya" }],
  creator: "Ranah Karya",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ranah Karya",
    title: "Ranah Karya - Printing, Advertising & Interior Design",
    description:
      "Professional printing, advertising, and interior design services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranah Karya - Printing, Advertising & Interior Design",
    description:
      "Professional printing, advertising, and interior design services.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-slate-50 text-gray-900 antialiased">
        <Header />
        <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      </body>
    </html>
  );
}
