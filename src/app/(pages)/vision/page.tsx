import VisionClient from "./client";

export const metadata = {
  title: "Rune - The creative platform for modern software",
  description:
    "Rune is a creative platform for modern software. It combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.",
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
    title: "Rune - The creative platform for modern software",
    description:
      "Rune is a creative platform for modern software. It combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.",
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
    title: "Rune - The creative platform for modern software",
    description:
      "Rune is a creative platform for modern software. It combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.",
    images: ["/og.png"],
    creator: "@btn0s",
    site: "rune.design",
  },
  alternates: {
    canonical: "https://rune.design",
  },
};

export default function Vision() {
  return <VisionClient />;
}
