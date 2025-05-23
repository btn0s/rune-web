"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BetaSignup } from "@/components/ui/beta-signup";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import logo from "../../public/logo.svg";

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
      <div className="flex justify-between not-prose mb-12">
        <div className="flex items-center gap-2 font-bold">
          <Image src={logo} alt="Rune" width={24} height={24} /> rune.design
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="#beta-signup">Join the private beta</Link>
        </Button>
      </div>

      <p>
        <b>AI has changed how we build software.</b> Product people collaborate
        with AI to write PRDs, designers use it for inspiration and iteration,
        developers pair-program with AI daily. AI has become the newest member
        of every creative team—but like any team member, it's only as effective
        as the communication it receives.
      </p>

      <p>
        <b>Creativity remains constrained.</b> AI tools force everyone into
        lossy text chats, creating endless loops of prompting and correction.
        This happens because existing tools simply aren't built for the
        structured communication that AI needs to excel—leaving teams frustrated
        and AI underutilized.
      </p>

      <p>
        <b>What if there was a better way?</b> What if there was a way to
        capture your intent visually? What if every creative decision became
        working software? What if you could design on a canvas that lets your
        whole team—product, design, engineering, and even AI—speak a universal
        language?
      </p>

      <h2>Rune is that canvas.</h2>

      <p>
        Inspired by design tools like Figma and game engines like Unreal, Rune
        transforms how creative teams work together. Work directly on a visual
        canvas where design and development unite seamlessly—and where AI
        receives structured specifications instead of ambiguous prompts.
      </p>

      <p>
        Every element becomes real, working software. AI understands your visual
        intent precisely and generates clean, extensible code that you can
        deploy to modern platforms.
      </p>

      <h3>One Canvas, Three Ways to Work</h3>

      <ul>
        <li>
          <strong>Design:</strong> Create interfaces and map logic flows on a
          unified canvas that merges visual design with programming.
        </li>
        <li>
          <strong>Code:</strong> Access and edit the generated code directly. AI
          translates your visual designs into clean code that you can extend.
        </li>
        <li>
          <strong>Ship:</strong> Deploy to platforms like Vercel, Netlify, or
          AWS. Your visual creations become live applications.
        </li>
      </ul>

      <p>
        Experience the fluidity of professional design tools combined with
        intelligent code generation. Rune scales from rapid prototypes to
        production applications.
      </p>

      <h3>Built for Customization</h3>

      <p>
        Rune doesn't lock you in—it opens up. Create custom nodes, integrate
        with any service, and access the full source code. Shape Rune to fit
        your workflow.
      </p>

      <h2>Who is Rune for?</h2>

      <p className="font-bold">Modern product teams</p>
      <p className="mt-2">
        Work visually with AI as your creative partner. Your designs become
        structured specifications and real, working software that everyone
        understands perfectly.
      </p>

      <p className="font-bold mt-6">Design engineers and polyglots</p>
      <p className="mt-2">
        Think in pixels, logic flows, and code simultaneously. Make your home in
        Rune and extend the platform to match your workflow.
      </p>

      <p className="font-bold mt-6">Solopreneurs</p>
      <p className="mt-2">
        Work end-to-end on your product. Transform your ideas from expressive
        canvas directly into production-ready applications.
      </p>

      <h2>The Future of Creative Software is Here</h2>

      <p>
        The boundaries between design and development are blurring. Rune
        represents a unified creative environment where ideas flow directly from
        concept to code to deployment—no translation layers, no context loss.
      </p>

      <p>
        It's a different approach to creative collaboration. When everyone can
        work in their preferred medium—visual design, logical flows, or
        code—teams move faster and build better products--and your new AI team
        mates can do what they do best.
      </p>

      <p>
        <strong>We're building this with early adopters.</strong> Your feedback
        and real-world use cases directly shape the platform. If you're
        interested in this kind of workflow, we'd love to work with you.
      </p>

      <p>Ready to see what happens when your canvas becomes your codebase?</p>

      <hr />

      <div className="not-prose">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">Rune – Visual programming for the AI Era.</p>
    </motion.div>
  );
}
