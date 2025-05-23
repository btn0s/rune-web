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
        <strong>AI has changed how we build software.</strong> Product people
        collaborate with AI to write PRDs, designers use it for inspiration and
        iteration, developers pair-program with AI daily. AI has become the
        newest member of every creative team—but like any team member, it's only
        as effective as the communication it receives.
      </p>

      <p>
        <strong>Creativity remains constrained.</strong> Despite all these AI
        advances, teams still struggle with fragmented tooling, lost context in
        translation, and now endless text chat loops of prompting and
        correction. There's still a lot left to fix.
      </p>

      <p>
        <strong>What if there's a better way?</strong> What if this problem is
        actually a symptom of something deeper—that product, engineering, and
        design have never truly spoken the same language? What if there was a
        way to capture your intent visually that everyone, including AI, could
        understand perfectly? What if by solving this we unlocked something even
        bigger?
      </p>

      <p className="font-bold">What we discovered</p>

      <p>The problem is universal, and fundamentally about communication:</p>

      <ul>
        <li>Product and design think in user flows and visuals</li>
        <li>Engineering thinks in code</li>
        <li>AI works best with structured data</li>
      </ul>

      <p>
        Existing AI tools only add to the fragmented feedback loops, lost
        translation, and endless frustration. What we need is a way to capture
        intent that everyone—including AI—can understand perfectly. A single
        common language.
      </p>

      <h2>Rune is that language.</h2>

      <p>
        Inspired by design tools like Figma and game engines like Unreal, Rune
        transforms how creative teams work together. Work directly on a visual
        canvas where every element becomes structured data that both humans and
        AI understand perfectly.
      </p>

      <p>
        Your designs aren't just mockups—they're precise specifications. Your
        logic flows aren't just diagrams—they're executable code. Your creative
        intent becomes a shared language that eliminates translation gaps
        between disciplines and gives AI the structured input it needs to
        generate exceptional results.
      </p>

      <h3>From Canvas to Code to Production</h3>

      <p className="mt-6">
        <strong>Design</strong>
        <br />
        Create interfaces and map logic flows on a unified canvas that merges
        visual design with programming.
      </p>

      <p>
        <strong>Develop</strong>
        <br />
        AI translates your visual designs into clean, extensible code that you
        can extend.
      </p>

      <p>
        <strong>Deploy</strong>
        <br />
        Ship to platforms like Vercel, Netlify, or AWS. Your visual creations
        become live applications.
      </p>

      <h2>Who is Rune for?</h2>

      <p>
        <strong>Modern product teams</strong>
        <br />
        Work visually with AI as your creative partner. Your designs become
        structured specifications and real, working software that everyone
        understands perfectly.
      </p>

      <p>
        <strong>Design engineers and polyglots</strong>
        <br />
        Think in pixels, logic flows, and code simultaneously. Make your home in
        Rune and extend the platform to match your workflow.
      </p>

      <p>
        <strong>Solopreneurs</strong>
        <br />
        Work end-to-end on your product. Transform your ideas from expressive
        canvas directly into production-ready applications.
      </p>

      <h2>The Future of Creative Software</h2>

      <p>
        We started by asking: "How do we communicate better with AI?" But we
        ended up answering a bigger question: "How do creative teams communicate
        better, period?" We found out that when everyone—including AI—can speak
        their native language without having to worry about translation and
        handoff, teams move faster and build better products.
      </p>

      <p>
        Rune represents a unified creative environment where your visual designs
        become executable code, your logic flows become working applications,
        and your ideas flow directly from concept to deployment.
      </p>

      <p>
        We're building this with early adopters who believe creative teams
        deserve better tools. Your real-world use cases and feedback directly
        shape how Rune evolves. If you're interested in this kind of workflow,
        we'd love to work with you.
      </p>

      <p>Ready to see what happens when your canvas becomes your codebase?</p>

      <hr />

      <div className="not-prose">
        <BetaSignup />
      </div>

      <hr />

      <p className="font-semibold">
        Rune – The unified creative development platform
      </p>
    </motion.div>
  );
}
