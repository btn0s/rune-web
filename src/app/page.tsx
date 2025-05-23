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
        <b>Creativity remains constrained.</b> AI tools force everyone—humans
        and AI alike—into lossy text chats resulting in endless loops of
        prompting and correction. Teams still struggle to communicate across
        disciplines. Design engineers and polyglots who work cross-functionally
        lack a real home that supports their multilingual workflow. Existing
        tools simply aren't built for modern teams or the structured
        communication that AI needs to excel.
      </p>

      <p>
        <b>What if there was a better way?</b> What if there was a way to
        capture your intent visually? What if every creative decision became
        working software? What if you could design on a canvas that lets
        everyone—including AI—speak the same language?
      </p>

      <h2>Rune is that canvas.</h2>

      <p>
        Inspired by design tools like Figma and game engines like Unreal, Rune
        transforms how creative teams work together. Instead of losing ideas and
        context in endless text prompts and translation gaps, you work directly
        on a visual canvas where design and development unite seamlessly—and
        where AI receives structured, unambiguous specifications instead of
        ambiguous prompts.
      </p>

      <p>
        Every element you create becomes real, working software and structured
        data. Backed by the power of AI that finally understands your visual
        intent precisely, Rune generates production-ready code for any platform,
        eliminating the friction between imagination and implementation.
      </p>

      <h3>Design, Code, Ship—All in One Flow</h3>

      <ul>
        <li>
          <strong>Design:</strong> Create beautiful interfaces, sketch
          interactions, and map logic flows on a unified canvas that merges
          interface design with visual programming.
        </li>
        <li>
          <strong>Code:</strong> Access and edit the generated code directly. AI
          translates your visual designs into structured specifications and
          produces clean code that you can extend and refine.
        </li>
        <li>
          <strong>Ship:</strong> Deploy instantly to any platform. Whether it's
          Vercel, Netlify, AWS, or your preferred service, your visual creations
          become live applications with a single click.
        </li>
      </ul>

      <p>
        Experience the fluidity of professional design tools combined with the
        power of intelligent code generation. Rune scales from rapid prototypes
        to enterprise applications, adapting to your workflow and growing with
        your ambitions.
      </p>

      <h3>Built for Customization</h3>

      <p>
        Oh, and Rune doesn't lock you in—it opens up. Create custom nodes, build
        specialized compilers, and integrate with any service you need. With
        full source code access, you shape Rune to fit your workflow, not the
        other way around.
      </p>

      <h2>Who is Rune for?</h2>

      <p>
        <strong>Product people and designers.</strong> Move beyond text-based AI
        tools and work visually with AI as your creative partner. Your PRDs and
        designs become structured specifications that both your engineering team
        and AI understand perfectly. No more lost context in translation.
      </p>

      <p>
        <strong>Design engineers and polyglots.</strong> Finally have a true
        home for multilingual, cross-functional work. Think in pixels, logic
        flows, and code simultaneously while AI receives the structured data it
        needs to generate clean, extensible code. Code and design stay in sync
        automatically—edit the design, get updated code. Add functionality in
        code, see it in the editor. Everyone works with the same source of
        truth.
      </p>

      <p>
        <strong>Cross-functional teams.</strong> Break down silos between
        disciplines and include AI as an effective team member. Changes happen
        in real-time on the same canvas where everyone can contribute in their
        preferred way—whether you think in pixels, logic flows, or code—while AI
        works with precise, visual specifications instead of ambiguous text
        prompts.
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
