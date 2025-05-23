import { Metadata } from "next";
import { metadata as pagemetadata } from "./(pages)/horizon-1/page";
import Horizon1Client from "./(pages)/horizon-1/client";

export const metadata: Metadata = {
  title: pagemetadata.title,
  description: pagemetadata.description,
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
    "figma to code",
    "visual development environment",
    "figma alternative",
    "design engineer",
    "tools for design engineers",
    "design engineering tools",
    "design engineering platform",
    "design engineering software",
    "design engineering tools",
    "design engineering platform",
    "design engineering software",
  ],
  authors: [{ name: "thinkhuman.co" }],
  creator: "rune.design",
  publisher: "thinkhuman.co",
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
    title: pagemetadata.title,
    description: pagemetadata.description,
    url: "https://rune.design",
    siteName: "rune.design",
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
    title: pagemetadata.title,
    description: pagemetadata.description,
    images: ["/og.png"],
    creator: "@btn0s",
    site: "rune.design",
  },
  alternates: {
    canonical: "https://rune.design",
  },
};

export default function Home() {
  return <Horizon1Client />;
}
