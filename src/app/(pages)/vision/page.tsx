import VisionClient from "./client";

export const metadata_title =
  "Rune - The creative platform for modern software";
export const metadata_description =
  "Rune is a creative platform for modern software. It combines an infinite canvas, Figma design import, visual programming, and AI code generation into one platform where everyone speaks the same creative language.";

export const metadata = {
  title: metadata_title,
  description: metadata_description,
};

export default function Vision() {
  return <VisionClient />;
}
