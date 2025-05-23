"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BetaSignup } from "@/components/ui/beta-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Palette, Rocket, Zap } from "lucide-react";
import logo from "@/assets/images/logo.svg";

const DEFAULT_TRANSITION = {
  duration: 0.5,
  ease: "easeInOut",
};
const DEFAULT_HIDDEN_CONFIG = {
  opacity: 0,
  filter: "blur(10px)",
};
const DEFAULT_VISIBLE_CONFIG = {
  opacity: 1,
  filter: "blur(0px)",
};
const DEFAULT_VARIANTS = {
  hidden: DEFAULT_HIDDEN_CONFIG,
  visible: DEFAULT_VISIBLE_CONFIG,
};

export default function Horizon1Client() {
  return (
    <motion.div
      className="container mx-auto px-4 max-w-prose items-start py-12 sm:py-32 prose prose-neutral dark:prose-invert"
      initial="hidden"
      animate="visible"
      variants={DEFAULT_VARIANTS}
      transition={DEFAULT_TRANSITION}
    >
      <div className="flex justify-between not-prose mb-12">
        <div className="flex items-center gap-2 font-bold">
          <Image src={logo} alt="Rune" width={24} height={24} /> rune.design
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="#beta-signup">Join the private beta</Link>
        </Button>
      </div>

      <h1>The creative platform for modern software</h1>

      <p>
        <strong>You're stuck in an endless prompt-and-correct loop.</strong>{" "}
        When you show AI your Figma designs through screenshots, you're stuck in
        a frustrating cycle: describe what you meant, correct AI's assumptions,
        explain again, and repeat. Each text chat loses more context, until
        you're spending more time explaining than creating.
      </p>

      <p>
        <strong>Your creativity speaks a richer language.</strong> Every Figma
        file contains a complete vocabulary of components, styles,
        relationships, and creative decisions. But instead of bringing your
        vision to life, you're stuck writing chat messages about it - like a
        painter forced to describe their art through text instead of picking up
        a brush.
      </p>

      <h2>Rune sets you free</h2>

      <p>
        Rune combines an infinite canvas, Figma design import, visual
        programming, and AI code generation into one platform where everyone
        speaks the same creative language.
      </p>

      <p>
        Your Figma designs flow directly into the canvas as living software. Add
        behaviors through direct manipulation. Express logic visually. Ship
        production-ready applications that are exactly what you imagined - no
        translations needed.
      </p>

      <div className="not-prose py-6 mb-6">
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center font-bold">
              <Palette className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Pull from Figma</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Import your entire design vocabulary - components, styles,
                relationships, - as structured data with pixel-perfect fidelity.
                No explanation or guesswork.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center font-bold">
              <Zap className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Add Rich Interactions and Data
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Express interactions in Rune's native visual language. Add
                animations, transitions, and data flows through direct
                manipulation - as natural as sketching.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-green-50 text-green-500 rounded-lg flex items-center justify-center font-bold">
              <Rocket className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Get Production-Ready Code
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Rune ships your complete system as production-ready code that
                captures your vision perfectly. Intent to reality in one unified
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="not-prose">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">Rune – Figma to Code for the Age of AI</p>
    </motion.div>
  );
}
