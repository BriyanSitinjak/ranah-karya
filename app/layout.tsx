import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ASSETS } from "@/config/assets";
import { PAGE_TITLE, SEO_KEYWORDS } from "@/config/metadata";
import { SITE_CONFIG } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: PAGE_TITLE,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  icons: {
    icon: ASSETS.logo,
    apple: ASSETS.logo,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.shortName,
    title: PAGE_TITLE,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: SITE_CONFIG.description,
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
      <body className="min-h-screen bg-brand-cream text-brand-dark antialiased">
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
