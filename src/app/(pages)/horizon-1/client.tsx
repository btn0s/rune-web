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
          <Link href="#beta-signup">Join the community</Link>
        </Button>
      </div>

      <h1>Open source visual development for design engineers</h1>

      <p>
        <strong>Design engineers deserve their own platform.</strong> You bridge
        the gap between design and engineering, but your tools force you to
        choose sides. Design tools don't respect your engineering expertise,
        while development environments ignore your visual creativity. It's time
        for a platform that celebrates your unique skillset.
      </p>

      <p>
        <strong>Your hybrid skills are your superpower.</strong> You think in
        systems, components, and visual relationships. You understand both
        design constraints and engineering trade-offs. You shouldn't have to
        translate your ideas through prompts or screenshots - you need a canvas
        that speaks your native language.
      </p>

      <h2>Welcome home, design engineers</h2>

      <p>
        Rune is an open source platform that puts design engineers first. From
        Figma designs to production code, we've built an environment where
        visual thinking and engineering excellence work as one - because that's
        how you work best.
      </p>

      <p>
        Import your Figma designs as living, interactive elements. Define
        behaviors visually. Create production-ready applications that perfectly
        match your design intent - all in a powerful open source platform built
        for the way you think and work.
      </p>

      <div className="not-prose py-6 mb-6">
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center font-bold">
              <Palette className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Figma Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Transform your Figma designs into structured, type-safe
                components. Maintain perfect fidelity with your design tokens,
                variants, and constraints.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center font-bold">
              <Zap className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Visual Programming for Engineers
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Express complex logic and data flows in a visual language that
                matches your thinking. Full TypeScript support and extensibility
                for serious engineering work.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-green-50 text-green-500 rounded-lg flex items-center justify-center font-bold">
              <Rocket className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Production-Ready Output
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Generate clean, maintainable TypeScript and React components
                that meet your standards. Customize every aspect of the output
                to match your team's conventions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">
        Rune – Open Source Visual Development for Design Engineers
      </p>
    </motion.div>
  );
}
