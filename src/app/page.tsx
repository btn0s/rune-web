"use client";

import { motion } from "motion/react";
import { PiAsteriskBold } from "react-icons/pi";

const DEFAULT_TRANSITION = {
  duration: 0.7,
  ease: "easeInOut",
};
const DEFAULT_HIDDEN_CONFIG = {
  opacity: 0,
  y: 20,
  filter: "blur(10px)",
};
const DEFAULT_VISIBLE_CONFIG = {
  opacity: 1,
  y: 0,
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
      transition={{ ...DEFAULT_TRANSITION, staggerChildren: 0.05 }}
    >
      <motion.div
        variants={DEFAULT_VARIANTS}
        className="flex items-center gap-1 font-bold"
      >
        <PiAsteriskBold /> Rune
      </motion.div>

      <motion.p variants={DEFAULT_VARIANTS}>
        AI is enabling a new kind of builder—someone who can command both the
        visual language of design and the logical flow of engineering with the
        power of intent. As these tools evolve, we're seeing teams transform,
        increasingly built around builders who move seamlessly from ideas to
        execution without the inefficiencies of expensive handoffs.
      </motion.p>

      <motion.p variants={DEFAULT_VARIANTS}>
        This future needs tools built for these builders—expressive and
        intent-driven, AI-native, and designed for the continuous flow from
        imagination to reality.
      </motion.p>

      <motion.h2 variants={DEFAULT_VARIANTS}>Our Vision</motion.h2>

      <motion.p variants={DEFAULT_VARIANTS}>
        A single canvas where design, engineering, and product collaborate in
        the same language—no handoffs or translations, just continuous creation
        where every change is instantly real and ready to evolve.
      </motion.p>

      <motion.h2 variants={DEFAULT_VARIANTS}>Introducing Rune</motion.h2>

      <motion.p variants={DEFAULT_VARIANTS}>
        Rune combines the precision and design-first mindset of Figma, the
        interactive, node-based logic of Unreal Blueprints, and the AI-powered
        code generation of Cursor into a single, unified workspace.
      </motion.p>

      <motion.ul variants={DEFAULT_VARIANTS}>
        <li>
          <strong>Design:</strong> Master visual composition with intuitive
          vector and frame tooling, build with comprehensive component
          libraries, and ensure adaptability with responsive constraints.
          Optimized for design speed and clarity.
        </li>
        <li>
          <strong>Build:</strong> Bring your designs to life with first-class
          logic, data, and state. Model interactions visually, similar to Unreal
          Blueprints, with deep integration for real-time iteration and
          feedback.
        </li>
        <li>
          <strong>Ship:</strong> Seamlessly transition from intent to
          implementation with LLM-powered code generation. Transform your
          high-level designs and prototypes into production-ready software,
          effortlessly.
        </li>
      </motion.ul>

      <motion.p variants={DEFAULT_VARIANTS}>
        Together, these capabilities create a true source of truth for modern
        software, eliminating handoffs and bridging the gap between design and
        production code.
      </motion.p>

      <motion.h2 variants={DEFAULT_VARIANTS}>Why Now?</motion.h2>

      <motion.p variants={DEFAULT_VARIANTS}>
        Three shifts in how we build software make this the perfect moment for
        Rune:
      </motion.p>

      <motion.ul variants={DEFAULT_VARIANTS}>
        <li>
          <strong>The Rise of the Full-Stack Builder:</strong> Teams are
          increasingly built around individuals who can own the entire product
          journey—from pixels to production. These builders need tools that
          match their capabilities.
        </li>
        <li>
          <strong>AI as a Creative Partner:</strong> AI isn't just automating
          tasks—it's becoming a collaborative tool that amplifies human intent
          and creativity, enabling new ways of expressing ideas.
        </li>
        <li>
          <strong>The End of Handoffs:</strong> Modern teams can't afford the
          friction of traditional workflows. They need environments where
          creation and implementation happen in the same space, at the same
          time.
        </li>
      </motion.ul>

      <motion.hr />

      <motion.p className="font-semibold">
        Rune - A new way to build software.
      </motion.p>
    </motion.div>
  );
}
