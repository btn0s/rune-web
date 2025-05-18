"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { PiAsteriskBold } from "react-icons/pi";
import demoImg from "@/assets/images/rune.png";

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
      <div className="flex items-center gap-1 font-bold">
        <PiAsteriskBold /> Rune
      </div>

      <Image className="rounded-lg border shadow" src={demoImg} alt="Rune" />

      <p>
        AI is reshaping how we build software. The old boundaries between
        designers, engineers, and product managers are dissolving, giving rise
        to a new era where roles blend and ideas can thrive without boundaries.
      </p>

      <p>
        For too long, product creation has been fragmented—designers focused on
        visuals, engineers on code, and product managers on translation. This
        siloed process slowed progress and stifled creativity.
      </p>

      <p>
        Now, teams can create together in a shared language. AI bridges the gap
        between design and implementation, enabling collaboration through
        intent, not just technical specs. The teams of tomorrow will thrive on
        this creative unity, turning ideas into reality without friction.
      </p>

      <p className="font-semibold">
        Rune brings everyone—design, engineering, and product—together in a
        single, visual workspace:
      </p>

      <p>
        Teams design interfaces and connect logic side by side, watching their
        product take shape as they work. AI translates these visual
        specifications directly into real, usable software, so your team's
        intent is always reflected in the product—no handoffs, no
        miscommunication, just a seamless path from idea to reality.
      </p>

      <h2>Our Vision</h2>

      <p>
        By blending the precision of Figma, the interactive logic of Unreal
        Engine Blueprints, and the AI-powered code generation of Cursor, Rune
        creates a seamless journey from idea to implementation.
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
        Together, these features let you go from idea to real product in one
        smooth process—so every change you make is reflected in real, usable
        software.
      </p>

      <h2>Why Now?</h2>
      <ul>
        <li>
          <strong>Design and code are converging:</strong> Bleeding edge teams
          are already working in unified, AI-powered environments—moving
          seamlessly from idea to implementation. This way of working will soon
          become the norm.
        </li>
        <li>
          <strong>AI is extremely powerful—when guided well:</strong> Great
          outputs require precise inputs, but today's AI tools are trapped
          behind text interfaces that make it hard to express the complexity of
          software.
        </li>
        <li>
          <strong>Market pressure demands unprecedented speed:</strong>{" "}
          Companies can no longer afford months-long development
          cycles—successful teams need tools that collapse ideation, creation,
          and shipping into days, not quarters.
        </li>
      </ul>

      <hr />

      <p className="font-semibold">Rune – A better way to build software.</p>
    </motion.div>
  );
}
