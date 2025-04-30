import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Rune — Visual Component Design for React",
  description:
    "Design rich, interactive React components visually with the power of code. Copy+paste into production.",
  openGraph: {
    title: "Rune — Visual Component Design for React",
    description:
      "Design rich, interactive React components visually with the power of code. Copy+paste into production.",
    url: "https://rune.dev",
    siteName: "Rune",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rune - Visual Component Design for React",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rune — Visual Component Design for React",
    description:
      "Design rich, interactive React components visually with the power of code. Copy+paste into production.",
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
      </body>
    </html>
  );
}
