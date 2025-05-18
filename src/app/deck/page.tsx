"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PiAsteriskBold } from "react-icons/pi";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TOTAL_SLIDES = 8;

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === "Space"
      ) {
        setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full bg-black min-h-screen flex items-center justify-center p-6">
      <div className="fixed top-4 right-4 text-white font-mono opacity-50">
        {currentSlide} / {TOTAL_SLIDES}
      </div>

      <div className="w-full max-w-7xl">
        <AspectRatio ratio={16 / 9}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-card text-card-foreground rounded-lg shadow-xl p-12 overflow-y-auto"
          >
            {currentSlide === 1 && <Slide1 />}
            {currentSlide === 2 && <Slide2 />}
            {currentSlide === 3 && <Slide3 />}
            {currentSlide === 4 && <Slide4 />}
            {currentSlide === 5 && <Slide5 />}
            {currentSlide === 6 && <Slide6 />}
            {currentSlide === 7 && <Slide7 />}
            {currentSlide === 8 && <Slide8 />}
          </motion.div>
        </AspectRatio>
      </div>
    </div>
  );
}

// Slide 1: Cover / Executive Summary
function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center max-w-3xl">
        <div className="flex items-center justify-center gap-2 mb-2">
          <PiAsteriskBold className="text-2xl" />
          <h1 className="text-4xl font-bold">Rune</h1>
        </div>
        <h2 className="text-2xl font-medium italic mb-6">
          AI-native visual development environment that unifies design & code.
        </h2>

        <p className="text-lg mb-10">
          Rune collapses design, logic, and deploy into a single, multiplayer
          canvas powered by an AI compiler.
          <br />
          <span className="font-semibold">Private beta opening soon.</span>
        </p>

        <div className="mt-8 space-y-2">
          <p className="font-semibold">
            Founder – Brendan Norris • ex-Backbone Labs, Amex R&D, ConsenSys
          </p>
          <p>
            Status – Functional prototype live • inviting design-partner teams •
            searching for technical co-founder.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-primary/10 p-3 text-sm flex justify-between">
        <span>brendan@playbackbone.com</span>
        <span>rune.ai</span>
        <span>Deck v May 2025</span>
      </div>
    </div>
  );
}

// Slide 2: The Cost of Handoffs
function Slide2() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">The Cost of Handoffs</h1>

      <h2 className="text-2xl font-semibold mb-8">
        Siloed tooling wastes ~30% of every product cycle.
      </h2>

      <div className="flex-1 flex items-center">
        <div className="w-1/2 space-y-4">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Designers iterate in Figma.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Engineers re-create UI in code.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Product managers clarify gaps.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Each loop costs days to weeks, introduces errors, and drains
              creative momentum.
            </li>
          </ul>

          <div className="mt-6 text-sm italic">
            Source: McKinsey Dev-Productivity Report 2024.
          </div>
        </div>

        <div className="w-1/2 pl-8">
          <div className="border rounded-lg p-6 bg-muted/30">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center w-full">
                <div className="w-1/3 text-center p-2 border rounded bg-blue-100 dark:bg-blue-950">
                  Design
                </div>
                <div className="h-0.5 w-1/3 bg-red-500 relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500">
                    Delay
                  </span>
                </div>
                <div className="w-1/3 text-center p-2 border rounded bg-green-100 dark:bg-green-950">
                  Engineering
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/3 text-center p-2 border rounded bg-green-100 dark:bg-green-950">
                  Engineering
                </div>
                <div className="h-0.5 w-1/3 bg-red-500 relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500">
                    Delay
                  </span>
                </div>
                <div className="w-1/3 text-center p-2 border rounded bg-purple-100 dark:bg-purple-950">
                  Product
                </div>
              </div>

              <div className="flex items-center w-full">
                <div className="w-1/3 text-center p-2 border rounded bg-purple-100 dark:bg-purple-950">
                  Product
                </div>
                <div className="h-0.5 w-1/3 bg-red-500 relative">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500">
                    Delay
                  </span>
                </div>
                <div className="w-1/3 text-center p-2 border rounded bg-blue-100 dark:bg-blue-950">
                  Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 3: Why Now: Convergence & Cursor Proof-Point
function Slide3() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">
        Why Now: Convergence & Cursor Proof-Point
      </h1>

      <h2 className="text-2xl font-semibold mb-8">
        AI coding is mainstream – the next leap is visual collaboration.
      </h2>

      <div className="flex-1 space-y-8">
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <Badge className="mr-2 mt-1">2016</Badge>
            <span className="flex-1">
              <strong>Figma</strong> proves real-time, cloud-native design.
            </span>
          </li>
          <li className="flex items-start">
            <Badge className="mr-2 mt-1">2023</Badge>
            <span className="flex-1">
              <strong>Cursor</strong> shows developers will pay and switch for
              AI-first coding (rapid 200k+ MAU, strong paid adoption).*
            </span>
          </li>
          <li className="flex items-start">
            <Badge className="mr-2 mt-1">2025</Badge>
            <span className="flex-1">
              <strong>Rune</strong> melds the visual precision of Figma with
              Cursor-level AI power, eliminating the hand-off entirely.
            </span>
          </li>
        </ul>

        <div className="mt-12 relative">
          <div className="w-full h-1 bg-gray-200 dark:bg-gray-800 absolute top-6"></div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary mb-2"></div>
              <span className="text-sm font-medium">2016</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary mb-2"></div>
              <span className="text-sm font-medium">2023</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary mb-2"></div>
              <span className="text-sm font-medium">2025</span>
            </div>
          </div>
        </div>

        <div className="text-sm italic mt-4">
          *Cursor usage data from public blog posts and press coverage.
        </div>
      </div>
    </div>
  );
}

// Slide 4: What Rune Feels Like
function Slide4() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">What Rune Feels Like</h1>

      <h2 className="text-2xl font-semibold mb-8">
        Sketch → Connect Logic → Ship – all in one flow.
      </h2>

      <div className="flex-1 flex gap-8">
        <div className="w-1/2">
          <div className="border rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 h-[400px] flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              [15-sec looping GIF showing workflow]
              <br />
              1. Draw UI elements
              <br />
              2. Drag node connections
              <br />
              3. Press Run → live app appears
            </p>
          </div>
        </div>

        <div className="w-1/2 space-y-6">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              No prompt engineering.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Changes stay in sync with production code (React, Swift, or
              WebAssembly).
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Multiplayer by default – designers and engineers edit the same
              objects.
            </li>
          </ul>

          <div className="mt-4 text-sm italic bg-muted/30 p-4 rounded-lg">
            Captured from internal build • May 2025. Tech risk retired.
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 5: Under the Hood (Innovation Stack)
function Slide5() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">
        Under the Hood (Innovation Stack)
      </h1>

      <div className="flex-1 flex gap-8">
        <div className="w-2/3 space-y-6">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-xl font-bold">Canvas</h3>
              <p>
                Figma-grade vector editing, real-time CRDT sync. Collaborative
                precision enables fine control over visual elements.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="text-xl font-bold">Logic Graph</h3>
              <p>
                Type-safe, node-based environment inspired by Unreal Blueprints;
                Turing-complete. Visualizes complex logic as connected
                components.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="text-xl font-bold">AI Compiler</h3>
              <p>
                Proprietary intermediate representation translates visual intent
                to optimized, readable source. Bridges the gap between design
                and implementation.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h3 className="text-xl font-bold">Runtime Targets</h3>
              <p>
                Web, iOS, desktop; one-click cloud deploy or local preview.
                Seamless delivery to multiple platforms from the same source of
                truth.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Rune vs. Cursor</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Feature</TableHead>
                <TableHead>Cursor (text IDE)</TableHead>
                <TableHead>Rune (visual IDE)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Input modality</TableCell>
                <TableCell>Prompt + code</TableCell>
                <TableCell>Direct manipulation + nodes</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Collaboration</TableCell>
                <TableCell>Single-player</TableCell>
                <TableCell>Multiplayer</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Design fidelity</TableCell>
                <TableCell>—</TableCell>
                <TableCell>Pixel-perfect</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Output</TableCell>
                <TableCell>Code snippets</TableCell>
                <TableCell>Running product</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// Slide 6: Market Opportunity
function Slide6() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Market Opportunity</h1>

      <h2 className="text-2xl font-semibold mb-8">
        A $10B+ wedge where low-code meets Gen-AI dev tooling.
      </h2>

      <div className="flex-1 flex gap-8 items-center">
        <div className="w-1/2">
          <div className="border rounded-lg p-6 bg-muted/30 h-[320px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-blue-500/30 flex items-center justify-center">
                <p className="text-center font-medium">
                  Low-/No-code platforms
                  <br />
                  $12.9B (2025)
                  <br />→ $82B (2034)
                </p>
              </div>
              <div className="absolute right-1/4 top-1/2 translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-purple-500/30 flex items-center justify-center">
                <p className="text-center font-medium">
                  Gen-AI developer tools
                  <br />
                  $41B (2023)
                  <br />→ $287B (2033)
                </p>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] bg-green-500/40 rounded-full flex items-center justify-center z-10">
                <p className="text-center font-semibold">
                  Rune
                  <br />
                  High-fidelity product UIs
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 space-y-6">
          <p className="text-lg">
            Early tools address dashboards or code snippets; Rune targets
            full-fidelity consumer-grade products where budgets and pain are
            largest.
          </p>

          <div className="text-sm italic">
            *Sources: IDC 2024, CB Insights 2025
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 7: Traction & Roadmap
function Slide7() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Traction & Roadmap</h1>

      <div className="flex-1 flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Current signals</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Functional prototype in daily use by founder.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <strong>8</strong> early design-partner sign-ups (2 design
              agencies, 1 startup tooling team).
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Feedback:{" "}
              <em>
                "We built an interactive prototype in 2 days vs 3 weeks."
              </em>{" "}
              – Alpha user
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">12-Month roadmap</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quarter</TableHead>
                <TableHead>Milestone</TableHead>
                <TableHead>KPI</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Q3 '25</TableCell>
                <TableCell>Onboard 10 design-partner teams</TableCell>
                <TableCell>NPS &gt; 40</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Q4 '25</TableCell>
                <TableCell>Public wait-list + community template hub</TableCell>
                <TableCell>1k sign-ups</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Q2 '26</TableCell>
                <TableCell>Paid beta seats & template marketplace</TableCell>
                <TableCell>$10k MRR</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Founder, Edge & Call-to-Action
function Slide8() {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6">
        Founder, Edge & Call-to-Action
      </h1>

      <div className="flex-1 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Brendan Norris</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <strong>Design engineer & founder</strong>.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Built <strong>Backbone Labs</strong> prototyping org (hardware +
              software to millions of gamers).
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Shipped "TimeMachine" architecture project at Amex; smart-contract
              dev tooling at ConsenSys.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Solo but shipping at <em>small-team velocity</em> by leveraging
              Cursor, GPT-4o, and automated DevOps.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Rune can win</h2>
            <ul className="space-y-2 text-lg">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Compiler IP + growing template dataset = fast-compounding moat.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Community flywheel (shareable templates & logic graphs).
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                Founder's hybrid design / engineering DNA uniquely suits the
                convergence wave.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Looking for</h2>
            <ol className="list-decimal pl-6 space-y-2 text-lg">
              <li>
                <strong>Design-partner teams</strong> to stress-test workflows.
              </li>
              <li>
                <strong>Technical co-founder</strong> with compiler / runtime
                chops.
              </li>
              <li>
                Early investors and advisors who resonate with the vision.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center border-t pt-6">
        <p className="text-xl italic mb-2">
          "Rune unleashes a generation of builders who think visually and ship
          instantly."
        </p>
        <Button size="lg" variant="default" className="mt-2">
          <strong>Reach out:</strong> brendan@playbackbone.com
        </Button>
      </div>
    </div>
  );
}
