"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PiAsteriskBold } from "react-icons/pi";
import demoImg from "@/assets/images/rune.png";
import { BetaSignup } from "@/components/ui/beta-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function Home() {
  return (
    <motion.div
      className="container mx-auto px-4 max-w-prose items-start py-12 sm:py-32 prose prose-neutral dark:prose-invert"
      initial="hidden"
      animate="visible"
      variants={DEFAULT_VARIANTS}
      transition={DEFAULT_TRANSITION}
    >
      <div className="flex justify-between not-prose">
        <div className="flex items-center gap-1 font-bold">
          <PiAsteriskBold /> Rune
        </div>
        {/* <Button variant="outline" size="sm" asChild>
          <Link href="#beta-signup">Join the private beta</Link>
        </Button> */}
      </div>

      <Image className="rounded-lg border shadow" src={demoImg} alt="Rune" />

      <p>
        <b>AI has changed the way we build software.</b> Coding has evolved into
        a more human, intent-driven process, moving beyond raw syntax to capture
        high-level ideas and creative intent. This shift has unlocked a new kind
        of Builder—someone who can sketch ideas, prototype interactions, and
        generate code without the friction of traditional handoffs.
      </p>

      <p>
        <b>But this progress is still limited.</b> Most AI tools rely on text
        chat interfaces, trapping creators in endless loops of prompting and
        correction, erasing context, and forcing a back-and-forth that feels
        more like "vibe coding" than real software development. This approach
        leaves out visual thinkers, reinforces silos, and wastes energy on
        managing instructions instead of building.
      </p>

      <p>
        <b>In order to break this ceiling,</b> we need tools that capture human
        intent without relying on text chat prompts and code snippets. Tools
        that can take all the creative artifacts of software design—mockups,
        prototypes, logic flows, and interactions—and transform them into real,
        production-ready software. Tools that allow creators to work in
        expressive, visual environments without the friction of handoffs, where
        ideas flow directly into execution without losing their creative intent.
      </p>

      <h2>Our Vision</h2>

      <b className="text-sm">
        Rune reimagines software creation as a continuous, collaborative craft.
      </b>

      <p>
        Drawing inspiration from game engines like Unreal, and combining that
        with the power of AI to translate intent into code, Rune is a platform
        that gives both solo creators and teams the freedom to work without
        barriers, moving from idea to execution in a single, seamless
        environment.
      </p>

      <ul>
        <li>
          <strong>Design:</strong> Express your ideas on an infinite canvas with
          familiar tools. Create beautiful, precise experiences.
        </li>
        <li>
          <strong>Build:</strong> Add logic and interactivity directly to your
          designs. Every change makes real, working software—not just a mockup.
        </li>
        <li>
          <strong>Ship:</strong> Turn your designs into real, usable code in
          moments. No more redoing work—your ideas become real products, ready
          to use.
        </li>
      </ul>

      <p>
        Together, these capabilities create a seamless journey from idea to
        implementation. The entire process is powered by cutting-edge AI that
        translates visual intentions directly into production-ready software,
        eliminating handoffs and translation errors.
      </p>

      <h2>Why Rune?</h2>
      <p>
        For the Builders, Rune is a single, unified environment where design,
        logic, and code come together as a continuous, creative loop. For teams,
        it’s a powerful way to eliminate handoffs, break down silos, and keep up
        with a rapidly changing industry. Rune isn’t just a better tool—it’s a
        platform for building the future, empowering creators to work at the
        speed of thought.
      </p>

      {/* <hr />
      <div className="not-prose">
        <BetaSignup />
      </div> */}

      <hr />

      <p className="font-semibold">Rune – A better way to build software.</p>
    </motion.div>
  );
}
