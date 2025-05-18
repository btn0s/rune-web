import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rune | Presentation Deck",
  description:
    "AI-native visual development environment that unifies design & code.",
};

export default function DeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
