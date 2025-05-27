import Horizon1Client from "./client";

export const metadata = {
  title: "Rune - Visual Prototyping for the Age of AI",
  description:
    "Built by design engineers, for design engineers. Import from Figma, add real logic through visual programming, run actual prototypes in a live environment, and export AI-ready specifications for seamless implementation.",
};

export default function Horizon1Page() {
  return <Horizon1Client />;
}
