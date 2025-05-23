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
        <b>AI has changed how we build software.</b> Product people are using AI
        to write PRDs, designers for imagegen and inspiration--even coding has
        evolved from raw syntax into a more human, intent-driven process that
        captures high-level ideas and creative intent.
      </p>

      <p>
        <b>But creativity remains constrained.</b> AI tools force everyone into
        lossy text chats resulting in endless loops of prompting and correction.
        Teams still struggle to communicate across disciplines, and even design
        engineers and those who work cross-functionally lack a real home that
        supports their workflow. Existing tools simply aren't built for
        cross-functional teams or multilingual individuals.
      </p>

      <p>
        <b>What if there was a better way?</b> What if every creative decision
        became working software? What if everyone could speak the same language?
        What if you could design on a canvas and make it real?
      </p>

      <h2>Rune is that canvas.</h2>

      <p>
        Inspired by design tools like Figma and game engines like Unreal, Rune
        replaces lossy text conversations with a visual language that everyone
        understands. Instead of endless prompting loops, you work directly on a
        canvas where design and development happen together—everything you
        create becomes real software, powered by AI that understands your intent
        and generates production-ready code for any platform.
      </p>

      <ul>
        <li>
          <strong>Express:</strong> Design your vision on an infinite canvas.
          Create interfaces, sketch interactions, and visualize data flows with
          complete creative freedom.
        </li>
        <li>
          <strong>Connect:</strong> Add logic and behavior through visual flows.
          Connect your designs to real data, APIs, and services.
        </li>
        <li>
          <strong>Deploy:</strong> Your creative vision becomes real software
          running on any platform. No handoffs, no translation—just working
          applications.
        </li>
      </ul>

      <p>
        Work with the fluidity and precision of professional design tools while
        AI interprets your designs as rich, structured specifications and
        generates code automatically. From simple prototypes to complex
        enterprise software, Rune scales with your ambitions and adapts to your
        workflow.
      </p>

      <p className="font-bold">Did we mention Rune is fully customizable?</p>

      <p>
        Create custom nodes, build your own compilers, integrate with any
        service. Rune gives you full source code so you can adapt it to your
        workflow, not the other way around.
      </p>

      <h2>Who is Rune for?</h2>

      <p>
        <strong>Product people and designers.</strong> Move beyond text-based AI
        tools and work visually. Your PRDs and designs become real code
        prototypes that your engineers can build on directly. No more lost
        context in translation.
      </p>

      <p>
        <strong>Developers and design engineers.</strong> Finally have a true
        home for cross-functional work. Code and design stay in sync
        automatically—edit the design, get updated code. Add functionality in
        code, see it in the editor. Everyone works with the same source of
        truth.
      </p>

      <p>
        <strong>Cross-functional teams.</strong> Break down silos between
        disciplines. Changes happen in real-time on the same canvas where
        everyone can contribute in their preferred way—whether you think in
        pixels, logic flows, or code.
      </p>

      <hr />

      <div className="not-prose">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">
        Rune – Design and build software visually.
      </p>
    </motion.div>
  );
}
