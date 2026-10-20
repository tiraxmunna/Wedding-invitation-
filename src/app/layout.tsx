import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { weddingConfig } from "@/config/wedding";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

import MusicPlayer from "@/components/music-player";

export const viewport: Viewport = {
  themeColor: "#F7F4EC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mira-arman-wedding.demo"
  ),
  title: weddingConfig.meta.title,
  description: weddingConfig.meta.description,
  robots: weddingConfig.meta.allowRobots ? "index, follow" : "noindex, nofollow",
  openGraph: {
    title: weddingConfig.meta.title,
    description: weddingConfig.meta.description,
    type: "website",
    images: [
      {
        url: weddingConfig.meta.ogImage,
        width: 1200,
        height: 630,
        alt: weddingConfig.couple.combinedNames,
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F4EC] text-[#545A52]">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <div className="flex-1 flex flex-col">{children}</div>
        <MusicPlayer />
      </body>
    </html>
  );
}
