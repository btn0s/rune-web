"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BetaSignup } from "@/components/ui/beta-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Palette, Rocket, Zap, Code } from "lucide-react";
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

      <h1>Visual prototyping for design engineers</h1>

      <p>
        <strong>Our hybrid skills are a superpower.</strong> As design
        engineers, we think in systems and visual relationships while
        understanding both design constraints and engineering trade-offs. The
        fluidity of our unique skillset has become increasingly valuable in the
        age of AI.
      </p>

      <p>
        <strong>Current tools force us to choose sides.</strong> Design here,
        code there—with nothing in between. Figma prototyping lacks the fidelity
        of code, while IDEs ignore our visual creativity. Even AI tools, despite
        their novelty, lose context through text-based interfaces.
      </p>

      <p>
        <strong>We deserve tools that speak our language</strong>—visual and
        technical, creative and structured.
      </p>

      <h2>Enter Rune.</h2>

      <p>
        <strong>
          Visual prototyping built by design engineers, for design engineers.
        </strong>
      </p>

      <p>
        Import from Figma, add real logic and behaviors through visual
        programming. Build and test in a live preview environment where your
        prototypes actually run. Export as AI-ready specifications for seamless
        implementation.
      </p>

      <div className="not-prose pt-8 pb-4">
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center font-bold">
              <Palette className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Figma Import</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Import designs as structured data that preserves your design
                decisions—creating a foundation for AI to understand not just
                what you designed, but why.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center font-bold">
              <Zap className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Visual Programming</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Express complex behaviors through an intuitive visual
                language—bridging human creativity and machine understanding.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-green-50 text-green-500 rounded-lg flex items-center justify-center font-bold">
              <Rocket className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Real prototypes</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Run actual prototypes in a live environment—think Origami Studio
                meets Unreal Engine. Export as AI-ready specs that capture every
                nuance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-bold">
              <Code className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Free and Open Source
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Fully open-source and extensible—because creative tools should
                be shaped by the community that uses them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        But Rune is more than a tool—it's a glimpse into a new paradigm where
        visual thinking and technical implementation naturally converge, where
        your creative intent is preserved and amplified through every stage of
        the building process.
      </p>

      <h2>Our Vision</h2>

      <p>
        <strong>
          The next generation of creative tools will be visual, structured, and
          built for the age of AI.
        </strong>
      </p>

      <p>
        Today's tools fragment our workflow. Design tools can't express
        engineering constraints. Coding tools can't preserve design intent. The
        result? Creative vision lost in translation.
      </p>

      <p>
        AI needs structure and context to understand our intent. Visual
        programming bridges this gap, creating the rich specifications AI needs
        to faithfully implement our vision.
      </p>

      <p>
        Rune is the first step toward a future where visual thinking and
        technical implementation converge—where tools amplify rather than
        constrain our creativity.
      </p>

      <p>Join us in building this future.</p>

      <div className="not-prose mt-12">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">
        Rune – Visual prototyping for the Age of AI
      </p>
    </motion.div>
  );
}
