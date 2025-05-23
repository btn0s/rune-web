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
  title: "Rune — Visual Programming for the AI Era",
  description:
    "Transform creative ideas into working software on a visual canvas. Rune combines design tools like Figma with AI-powered code generation for seamless collaboration between designers, developers, and product teams.",
  keywords: [
    "visual programming",
    "design to code",
    "AI code generation",
    "visual software development",
    "design tools",
    "low-code platform",
    "cross-functional collaboration",
    "design engineering",
    "visual canvas",
    "prototype to production",
    "figma alternative",
    "visual development environment",
  ],
  authors: [{ name: "Rune Team" }],
  creator: "Rune",
  publisher: "Rune",
  category: "Technology",
  classification: "Software Development Tools",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rune — Visual Programming for the AI Era",
    description:
      "Design on a canvas and ship real software. AI-powered visual development that bridges the gap between creative expression and production-ready code. Perfect for designers, developers, and cross-functional teams.",
    url: "https://rune.dev",
    siteName: "Rune",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rune - Visual software development platform with AI-powered code generation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rune — Visual Programming for the AI Era",
    description:
      "Design on a canvas and ship real software. AI-powered visual development for seamless collaboration between designers and developers. Join the private beta.",
    images: ["/og.png"],
    creator: "@btn0s",
    site: "@rune_design",
  },
  alternates: {
    canonical: "https://rune.dev",
  },
  other: {
    "application-name": "Rune",
    "apple-mobile-web-app-title": "Rune",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
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
