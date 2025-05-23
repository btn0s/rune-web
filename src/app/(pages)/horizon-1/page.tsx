import Horizon1Client from "./client";

export const metadata_title = "Figma to Code for the Age of AI";
export const metadata_description =
  "Rune combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.";

export const metadata = {
  title: metadata_title,
  description: metadata_description,
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
  ],
};

export default function Horizon1Page() {
  return <Horizon1Client />;
}
