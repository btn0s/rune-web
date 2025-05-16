"use client";

import { motion } from "motion/react";
import { PiAsteriskBold } from "react-icons/pi";

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

      <p>
        AI is reshaping how we build software. The old boundaries between
        designers, engineers, and product managers are dissolving, giving rise
        to a new era where roles blend and innovation accelerates through true
        collaboration.
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

      <p>
        Rune unifies design, engineering, and product into a single canvas. No
        more handoffs or translation layers—just continuous creation, where
        every change is instantly realized as real, working software, ready to
        evolve. With Rune, teams create, iterate, and ship as one—bridging
        expressive intent and production-ready results, all with the help of AI.
      </p>

      <h2>Our Vision</h2>

      <p>
        By blending the precision of Figma, the interactive logic of Unreal
        Engine Blueprints, and the AI-powered code generation of Cursor, Rune
        creates a seamless journey from idea to implementation.
      </p>

      <ul>
        <li>
          <strong>Design:</strong> Express ideas on a fluid, infinite canvas
          with familiar tools. Create visually compelling experiences with
          precision and freedom.
        </li>
        <li>
          <strong>Build:</strong> Add logic and interactivity directly to
          designs. Remove the barrier between visual design and functional
          implementation—so every change builds real, working software, not just
          a mockup.
        </li>
        <li>
          <strong>Ship:</strong> Convert designs to production-ready code in
          moments. Bridge the gap between prototypes and real, production-grade
          software with AI that understands your goals.
        </li>
      </ul>

      <p>
        Together, these capabilities make it possible to move from concept to
        production in one continuous flow—where every change results in real,
        interactive software, not just a prototype or mockup.
      </p>

      <h2>Why Now?</h2>

      <p>The way software is built is changing fast:</p>
      <ul>
        <li>
          <strong>Design and code are converging:</strong> Bleeding edge teams
          are already working in unified, AI-powered environments—moving
          seamlessly from idea to implementation. This way of working will soon
          become the norm.
        </li>
        <li>
          <strong>AI is a true creative partner—when guided well:</strong> AI is
          now extremely powerful, but current tools rely on text input and chat
          interfaces, which are limiting and inefficient for modeling complex
          software.
        </li>
        <li>
          <strong>Disciplines are converging:</strong> The lines between design,
          engineering, and product are dissolving—teams are becoming
          increasingly generalist, yet current tools don't cater to these new
          builders.
        </li>
      </ul>
      <p>
        Rune is built for this new era—where boundaries disappear, AI is a true
        partner, and teams create as one.
      </p>

      <hr />

      <p className="font-semibold">Rune – Unifying creation for the AI era.</p>
    </motion.div>
  );
}
