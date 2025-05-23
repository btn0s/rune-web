import VisionClient from "./client";

export const metadata = {
  title: "Rune - The creative platform for modern software",
  description:
    "Rune is a creative platform for modern software. It combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.",
};

export default function Vision() {
  return <VisionClient />;
}
