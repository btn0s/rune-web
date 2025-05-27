import { Metadata } from "next";
import { metadata as pagemetadata } from "./(pages)/horizon-1/page";
import Horizon1Client from "./(pages)/horizon-1/client";

export const metadata: Metadata = {
  title: "Rune - Open Source Visual Development Platform for Design Engineers",
  description:
    "An open source platform built for design engineers to create, prototype, and ship production-ready applications using visual programming and AI-powered code generation.",
  keywords: [
    "open source development",
    "design engineering",
    "visual programming",
    "design to code",
    "AI code generation",
    "design engineer tools",
    "visual software development",
    "design systems",
    "component development",
    "design engineering platform",
    "open source tools",
    "visual development environment",
    "figma to code",
    "design prototyping",
    "collaborative development",
    "design engineering workflow",
    "visual canvas",
    "prototype to production",
    "design automation",
    "developer experience",
  ],
  authors: [{ name: "thinkhuman.co" }],
  creator: "rune.design",
  publisher: "thinkhuman.co",
  category: "Design Engineering Tools",
  classification: "Open Source Development Platform",
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
    title:
      "Rune - Open Source Visual Development Platform for Design Engineers",
    description:
      "An open source platform built for design engineers to create, prototype, and ship production-ready applications using visual programming and AI-powered code generation.",
    url: "https://rune.design",
    siteName: "rune.design",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Rune - Open Source Visual Development Platform for Design Engineers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rune - Open Source Visual Development Platform for Design Engineers",
    description:
      "An open source platform built for design engineers to create, prototype, and ship production-ready applications using visual programming and AI-powered code generation.",
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
