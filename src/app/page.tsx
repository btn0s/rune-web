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
        AI is fundamentally transforming how we build software. It's erasing the
        traditional boundaries between designers, engineers, and product
        managers, creating a landscape where roles blur and innovation
        accelerates through seamless collaboration.
      </p>

      <p>
        For too long, product creation has been fragmented—designers crafting
        visuals, engineers writing code, product managers mediating between
        them. This siloed approach created a cycle of handoffs and translations
        that slowed innovation and limited creative potential.
      </p>

      <p>
        Now teams can speak a unified language of creation. AI bridges the gap
        between design and implementation, allowing collaboration through intent
        rather than technical specifications. The teams of tomorrow will thrive
        on this shared creative language, turning ideas into reality without the
        friction of specialized translation layers.
      </p>

      <p>
        Rune is purpose-built for this collaborative future—a singular tool
        that's expressive, intent-driven, and AI-native. We're designing for the
        continuous flow from imagination to reality, without the traditional
        barriers between thinking and making.
      </p>

      <h2>Our Vision</h2>

      <p>
        A single canvas where design, engineering, and product collaborate in
        the same language—no handoffs or translations, just continuous creation
        where every change is instantly real and ready to evolve.
      </p>

      <h2>The Product</h2>

      <p>
        Rune combines the precision and design-first mindset of Figma, the
        interactive, node-based logic of Unreal Blueprints, and the AI-powered
        code generation of Cursor into a single, unified workspace.
      </p>

      <ul>
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
      </ul>

      <p>
        Together, these capabilities create a true source of truth for modern
        software, eliminating handoffs and bridging the gap between design and
        production code.
      </p>

      <h2>Why Now?</h2>

      <p>
        Three shifts in how we build software make this the perfect moment for
        Rune:
      </p>

      <ul>
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
      </ul>

      <hr />

      <p className="font-semibold">Rune - A new way to build software.</p>
    </motion.div>
  );
}
