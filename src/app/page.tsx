import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";
import { PiAsteriskBold } from "react-icons/pi";
import LikeButton from "@/components/like-button";

const components = {
  LikeButton: LikeButton,
};

export default async function Home() {
  // Read the landing page content
  const prdPath = path.join(process.cwd(), "docs", "LANDING.mdx");
  const source = await fs.readFile(prdPath, "utf-8");

  return (
    <div className="container mx-auto px-4 max-w-prose flex flex-col gap-12 items-start py-12 sm:py-32">
      <div className="bg-white rounded-full py-1 px-4 flex items-center gap-1 border shadow font-bold">
        <PiAsteriskBold /> Rune
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <MDXRemote source={source} components={components} />
      </div>
    </div>
  );
}
