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

      <h1>Figma prototyping for design engineers</h1>

      <p>
        <strong>Our hybrid skills are a superpower.</strong> We think in
        systems, components, and visual relationships. We understand both design
        constraints and engineering trade-offs. We shouldn't have to settle for
        less.
      </p>

      <p>
        <strong>Current tools force us to choose sides.</strong> Design over
        here, code over here -- with nothing in between. Figma prototyping falls
        short of the fidelity of code, while IDEs ignore our visual creativity.
        AI tools have introduced some novelty, but intent capture through text
        chats is still lossy and tedious.
      </p>

      <p>
        <strong>We deserve better.</strong>
      </p>

      <h2>Enter Rune.</h2>

      <p>
        <strong>
          Rune is a high-fidelity prototyping tool built by design engineers for
          design engineers.
        </strong>{" "}
        We provide the power and flexibility of code with the ease of use of a
        visual editor, starting with our Figma designs.
      </p>

      <p>
        Add real logic, data flows, and complex behaviors through a natural
        visual language. Rune translates our design intent into high-fidelity
        structured data that AI can use to build real, production-ready
        prototypes.
      </p>

      <div className="not-prose pt-8">
        <div className="grid gap-6">
          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center font-bold">
              <Palette className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">
                Advanced Figma Integration
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                Import Figma designs as structured data that preserves all your
                design decisions and engineering constraints, ready for
                high-fidelity prototyping.
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
                Express complex behaviors and data flows through an intuitive
                visual language that captures your true design intent without
                compromise.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="size-6 shrink-0 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center font-bold">
              <Code className="size-4" />
            </div>
            <div>
              <h4 className="font-semibold text-lg m-0">Open Source DNA</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0 ">
                As design engineers, we believe in transparency and
                extensibility. Rune is fully open-source giving you full freedom
                to inspect, modify, and enhance to match your team's unique
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Our Vision</h2>

      <p>
        <strong>
          The next generation of AI tools are expressive, visual, and human.
        </strong>
      </p>

      <p>
        Today's AI tools rely heavily on back-and-forth text conversations and
        repetitive prompting. While this approach helped bring AI to market
        quickly, it creates a frustrating experience where design intent gets
        lost in translation.
      </p>

      <p>
        We're building something fundamentally different: a visual language that
        captures design decisions as structured data, enabling AI to truly
        understand and execute on your creative vision.
      </p>

      <p>
        This isn't just about better prototyping – it's about empowering design
        engineers with tools that speak their language and amplify their unique
        ability to bridge design and development. Rune represents the first step
        toward a future where the boundaries between design and code dissolve,
        and creative expression flows seamlessly from concept to production.
      </p>

      <div className="not-prose mt-12">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">
        Rune – Figma Prototyping for Design Engineers
      </p>
    </motion.div>
  );
}
