import type { Metadata } from "next";
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
  title: "Rune — A Better Way to Build Software",
  description:
    "A single canvas where design, engineering, and product teams collaborate in the same language—no handoffs, just continuous creation where every change is instantly real.",
  openGraph: {
    title: "Rune — A Better Way to Build Software",
    description:
      "A single canvas where design, engineering, and product teams collaborate in the same language—no handoffs, just continuous creation where every change is instantly real.",
    url: "https://rune.dev",
    siteName: "Rune",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rune - A Better Way to Build Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rune — A Better Way to Build Software",
    description:
      "A single canvas where design, engineering, and product teams collaborate in the same language—no handoffs, just continuous creation where every change is instantly real.",
    images: ["/og.png"],
    creator: "@btn0s",
  },
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
