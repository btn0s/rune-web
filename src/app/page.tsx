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
        Rune is purpose-built for this collaborative future—a unified canvas
        where design, engineering, and product teams speak the same creative
        language. Without handoffs or translations, it enables continuous
        creation where every change is instantly realized and ready to evolve.
        It's a singular tool that empowers teams through its expressive,
        intent-driven, and AI-native capabilities.
      </p>

      <h2>Our Vision</h2>

      <p>
        By combining the precision and design-first mindset of Figma, the
        interactive, node-based logic of Unreal Engine Blueprints, and the
        AI-powered code generation of Cursor, we're creating a seamless
        environment for the full journey from idea to implementation.
      </p>

      <ul>
        <li>
          <strong>Design:</strong> Express your ideas on a fluid, infinite
          canvas with familiar design tools you already know and love. Create
          visually compelling experiences with precision and creative freedom.
        </li>
        <li>
          <strong>Build:</strong> Add logic and interactivity to designs
          directly. Remove the barrier between visual design and functional
          implementation.
        </li>
        <li>
          <strong>Ship:</strong> Convert designs to production-ready code
          quickly. Bridge the gap between prototypes and finished products with
          AI that understands your goals.
        </li>
      </ul>

      <p>
        Together, these capabilities create a true source of truth for modern
        software, eliminating handoffs and bridging the gap between design and
        production code.
      </p>

      <h2>Why Now?</h2>

      <p>
        Three fundamental shifts in software creation make this the perfect
        moment for Rune:
      </p>

      <ul>
        <li>
          <strong>The Rise of Full-Stack Creators:</strong> Today's most
          effective builders work across the entire product stack. They need
          tools that match this versatility—letting them move seamlessly between
          design, logic, and implementation without context switching.
        </li>
        <li>
          <strong>AI as a Creative Multiplier:</strong> AI has evolved from
          automating repetitive tasks to understanding and amplifying creative
          intent. This enables tools that can translate high-level ideas
          directly into functioning software.
        </li>
        <li>
          <strong>Real-Time Collaboration:</strong> Modern teams demand
          immediate feedback loops. The future of software creation is
          environments where ideas become reality in real-time, with everyone
          creating in the same space simultaneously.
        </li>
      </ul>

      <hr />

      <p className="font-semibold">Rune - A new way to build software.</p>
    </motion.div>
  );
}
