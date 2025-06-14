import { Metadata } from "next";
import { metadata as pagemetadata } from "./(pages)/horizon-1/page";
import Horizon1Client from "./(pages)/horizon-1/client";

export const metadata: Metadata = {
  title: pagemetadata.title,
  description: pagemetadata.description,
  keywords: [
    "figma prototyping",
    "design engineering",
    "interactive prototypes",
    "design engineer tools",
    "figma to prototype",
    "visual programming",
    "open source prototyping",
    "advanced prototyping",
    "design systems",
    "component prototyping",
    "engineering prototypes",
    "figma integration",
    "design engineering platform",
    "prototype development",
    "design engineering workflow",
    "visual development",
    "design automation",
    "prototype to production",
    "collaborative prototyping",
    "developer experience",
  ],
  authors: [{ name: "thinkhuman.co" }],
  creator: "rune.design",
  publisher: "thinkhuman.co",
  category: "Design Engineering Tools",
  classification: "Prototyping Platform",
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
        alt: "Rune - Figma Prototyping for Design Engineers",
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
};

export default function Home() {
  return <Horizon1Client />;
}
