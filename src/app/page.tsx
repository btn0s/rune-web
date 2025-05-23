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
      <div className="flex justify-between not-prose">
        <div className="flex items-center gap-2 font-bold">
          <Image src={logo} alt="Rune" width={24} height={24} /> Rune
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="#beta-signup">Join the private beta</Link>
        </Button>
      </div>

      <p>
        <b>AI has changed the way we build software.</b> Coding has evolved into
        a more human, intent-driven process, moving beyond raw syntax to capture
        high-level ideas and creative intent. This shift has unlocked a new kind
        of Builder—someone who can sketch ideas, prototype interactions, and
        generate code without the friction of traditional handoffs.
      </p>

      <p>
        <b>But creativity is still constrained.</b> Most AI tools rely on text
        chat interfaces, trapping creators in endless loops of prompting and
        correction, erasing context, and forcing a back-and-forth that feels
        more like "vibe coding" than real software development. This approach
        leaves out visual thinkers, reinforces silos, and wastes energy on
        managing instructions instead of building.
      </p>

      <p>
        Design tools let you create beautiful interfaces, but they remain static
        pictures. Code is incredibly creative and powerful, but lives in a
        separate world from design—requiring constant translation between visual
        ideas and implementation.
      </p>

      <p>
        <b>What if you could design on a canvas and make it real?</b> What if
        every creative decision became working software?
      </p>

      <h2>Rune is that canvas.</h2>

      <p>
        Drawing inspiration from popular design tools like Figma and powerful
        game engines like Unreal, Rune reimagines software creation as a
        continuous, collaborative craft. Design with creative freedom, and
        everything you create becomes real software—powered by AI that
        understands your intent and generates production-ready code across any
        platform.
      </p>

      <ul>
        <li>
          <strong>Express:</strong> Design your vision on an infinite canvas.
          Create interfaces, sketch interactions, visualize data flows with
          complete creative freedom.
        </li>
        <li>
          <strong>Connect:</strong> Add logic and behavior through visual flows.
          Connect your designs to real data, APIs, and services.
        </li>
        <li>
          <strong>Deploy:</strong> Your creative vision becomes real software,
          running on any platform. No handoffs, no translation—just working
          applications.
        </li>
      </ul>

      <p>
        This bridges the gap between creative expression and working software.
        Work on a canvas with the fluidity and precision of professional design
        tools, while AI interprets your designs as rich, structured
        specifications and generates code automatically.
      </p>

      <p>
        Whether you're prototyping a simple app or building complex enterprise
        software, Rune scales with your ambitions. And because Rune is{" "}
        <b>fully extensible from day one</b>, you have complete control to add
        new features, create custom nodes, and shape the platform to fit your
        workflow. Build your own compilers, extend the behavior graph, integrate
        with any service—Rune adapts to you, not the other way around.
      </p>

      <h2>Why Rune?</h2>
      <p>Ship faster. Design once, ship everywhere.</p>

      <p>
        Skip the handoffs. Designers and developers work on the same canvas.
        Changes happen in real-time. No more lost context or broken designs.
      </p>

      <p>
        Keep creative control. Your designs become the source of truth for your
        software. Every pixel, every interaction works exactly as you intended.
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
