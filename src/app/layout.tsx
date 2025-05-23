import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rune — Design and build software visually",
  description:
    "Design on a canvas and make it real. Rune bridges the gap between creative expression and working software—powered by AI that understands your intent and generates production-ready code across any platform.",
  openGraph: {
    title: "Rune — Design and build software visually",
    description:
      "Design on a canvas and make it real. Rune bridges the gap between creative expression and working software—powered by AI that understands your intent and generates production-ready code across any platform.",
    url: "https://rune.dev",
    siteName: "Rune",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rune - Design and build software visually",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rune — Design and build software visually",
    description:
      "Design on a canvas and make it real. Rune bridges the gap between creative expression and working software—powered by AI that understands your intent and generates production-ready code across any platform.",
    images: ["/og.png"],
    creator: "@btn0s",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
