"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { PiAsteriskBold, PiGithubLogoFill } from "react-icons/pi";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  LineChart,
  Line,
} from "recharts";
import { ArrowLeft, ArrowRight, Users, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const TOTAL_SLIDES = 8;
const CONTACT_EMAIL = "brendan.t.norris@gmail.com";
const CONTACT_WEBSITE = "rune.design";
const CONTACT_VERSION = "Deck v May 2025";

const Slide: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className="h-full relative aspect-video flex flex-col bg-card">
      <div className="flex justify-between p-4">
        <Badge variant="outline">Private beta opening soon.</Badge>

        <Badge variant="outline">Seeking technical co-founder</Badge>
      </div>
      <div
        className={cn("p-4 pt-0 flex justify-between flex-1 h-full", className)}
      >
        {children}
      </div>
      <div className="bg-muted text-muted-foreground p-4 text-sm flex justify-between border-t border-primary/10">
        <span>{CONTACT_EMAIL}</span>
        <span>
          <a href={CONTACT_WEBSITE} target="_blank" rel="noopener noreferrer">
            {CONTACT_WEBSITE}
          </a>
        </span>
        <span>{CONTACT_VERSION}</span>
      </div>
    </div>
  );
};

export default function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
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
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 flex items-center gap-2 text-sm z-10">
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 1))}
          className="p-1 rounded-full hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentSlide === 1}
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div className="font-mono">
          {currentSlide} <span className="text-muted-foreground">/</span>{" "}
          {TOTAL_SLIDES}
        </div>
        <button
          onClick={() =>
            setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES))
          }
          className="p-1 rounded-full hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed"
          disabled={currentSlide === TOTAL_SLIDES}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <div className="w-full max-w-7xl">
        <AspectRatio ratio={16 / 9}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-card text-card-foreground rounded-lg shadow-xl overflow-hidden"
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
    <Slide>
      <div className="flex flex-col gap-8 self-center p-4">
        <div className="flex items-center gap-2">
          <PiAsteriskBold className="text-3xl text-primary" />
          <h1 className="text-5xl font-bold">Rune</h1>
        </div>

        <h2 className="text-2xl font-medium text-muted-foreground text-balance">
          AI-native visual development environment that unifies design & code.
        </h2>

        <div className="flex items-center gap-3">
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>BTN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-semibold">bt norris</p>
            <p className="text-sm text-muted-foreground">
              Backbone Labs, Amex R&D, ConsenSys
            </p>
          </div>
        </div>
      </div>

      <div className="aspect-square border bg-muted/30 rounded-lg"></div>
    </Slide>
  );
}

// Slide 2: The Cost of Handoffs
function Slide2() {
  const handoffData = [
    { name: "Design → Engineer", value: 30, fill: "var(--color-design)" },
    { name: "Engineer → Product", value: 25, fill: "var(--color-engineer)" },
    { name: "Product → Design", value: 20, fill: "var(--color-product)" },
  ];

  const chartConfig = {
    design: {
      label: "Design",
      color: "hsl(210, 90%, 50%)",
    },
    engineer: {
      label: "Engineer",
      color: "hsl(150, 70%, 40%)",
    },
    product: {
      label: "Product",
      color: "hsl(280, 70%, 50%)",
    },
  };

  return (
    <Slide className="items-center">
      <div className="flex flex-col gap-8 self-center p-4 flex-1">
        <h1 className="text-4xl font-bold text-balance">
          Siloed tooling wastes ~30% of every product cycle.
        </h1>

        <p className="font-medium text-balance">
          Each handoff loop costs days to weeks, introduces errors, and drains
          creative momentum.
        </p>

        <ol className="list-decimal list-inside">
          <li>
            <span>Product creates a spec.</span>
          </li>
          <li>
            <span>Designers iterate in Figma.</span>
          </li>
          <li>
            <span>Engineers re-create UI in code.</span>
          </li>
          <li>
            <span>Repeat.</span>
          </li>
        </ol>

        <div className="text-xs text-muted-foreground">
          Source: McKinsey Dev-Productivity Report 2024
        </div>
      </div>

      <div className="aspect-square border bg-muted/30 rounded-lg flex-1"></div>
    </Slide>
  );
}

// Slide 3: Why Now: Convergence & Cursor Proof-Point
function Slide3() {
  const timelineData = [
    {
      year: 2016,
      name: "Figma",
      users: 20,
      description: "Cloud-native design",
    },
    { year: 2023, name: "Cursor", users: 200, description: "AI-first coding" },
    {
      year: 2025,
      name: "Rune",
      users: 0,
      description: "Design & code unified",
    },
  ];

  const chartConfig = {
    figma: {
      label: "Figma",
      color: "hsl(270, 70%, 50%)",
    },
    cursor: {
      label: "Cursor",
      color: "hsl(200, 70%, 50%)",
    },
    rune: {
      label: "Rune",
      color: "hsl(10, 70%, 50%)",
    },
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Timing
            </Badge>
            <h1 className="text-4xl font-bold mb-3">
              Why Now: Convergence & Cursor Proof-Point
            </h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                AI coding is mainstream – the next leap is visual collaboration.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              {timelineData.map((item) => (
                <div
                  key={item.year}
                  className={cn(
                    "p-4 rounded-lg border",
                    item.year === 2025
                      ? "bg-primary/10 border-primary/20"
                      : "bg-muted/30"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <Badge
                      className="shrink-0 mt-0.5"
                      variant={item.year === 2025 ? "default" : "secondary"}
                    >
                      {item.year}
                    </Badge>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>

                      {item.year === 2023 && (
                        <p className="mt-2 text-sm bg-secondary/20 p-2 rounded">
                          <span className="font-medium">Rapid 200k+ MAU</span>{" "}
                          with strong paid user adoption
                        </p>
                      )}

                      {item.year === 2025 && (
                        <p className="mt-2 text-sm bg-primary/20 p-2 rounded">
                          <span className="font-medium">Visual + AI power</span>{" "}
                          eliminates handoffs entirely
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm italic flex items-center gap-2">
              <span className="h-1 w-3 bg-muted-foreground rounded-full"></span>
              *Cursor usage data from public blog posts and press coverage
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center">
          <div className="border rounded-lg p-10 bg-muted/30 h-[500px] flex flex-col justify-center relative">
            <div className="w-full h-1 bg-muted rounded-full absolute top-1/2"></div>

            <div className="flex justify-between relative">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 border-4 border-background flex items-center justify-center mb-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    2016
                  </Badge>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="font-bold text-lg">Figma</h4>
                  <p className="text-sm text-muted-foreground">Cloud design</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-secondary/20 border-4 border-background flex items-center justify-center mb-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    2023
                  </Badge>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="font-bold text-lg">Cursor</h4>
                  <p className="text-sm text-muted-foreground">AI coding</p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center mb-4">
                  <Badge variant="default" className="text-lg px-3 py-1">
                    2025
                  </Badge>
                </div>
                <div className="text-center space-y-1">
                  <h4 className="font-bold text-lg">Rune</h4>
                  <p className="text-sm text-muted-foreground">Unified</p>
                </div>
              </div>
            </div>

            <div className="pt-16 text-center px-8">
              <p className="text-lg font-medium">
                The moment for design + code unification is now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 4: What Rune Feels Like
function Slide4() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Experience
            </Badge>
            <h1 className="text-4xl font-bold mb-3">What Rune Feels Like</h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Sketch → Connect Logic → Ship – all in one flow.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6">
            <ul className="space-y-5">
              <li className="flex gap-4 items-start bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">No prompt engineering</p>
                  <p className="text-muted-foreground">
                    Direct manipulation replaces text-based prompting
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <PiGithubLogoFill className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Synced production code</p>
                  <p className="text-muted-foreground">
                    Changes stay in sync with React, Swift, or WebAssembly
                  </p>
                </div>
              </li>

              <li className="flex gap-4 items-start bg-secondary/20 p-4 rounded-lg border border-secondary/30">
                <div className="h-10 w-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-lg">Multiplayer by default</p>
                  <p className="text-muted-foreground">
                    Designers and engineers edit the same objects together
                  </p>
                </div>
              </li>
            </ul>

            <div className="text-sm italic bg-muted p-4 rounded-lg border">
              Captured from internal build • May 2025. Tech risk retired.
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col justify-center">
          <div className="border rounded-lg overflow-hidden bg-muted/30 h-[500px] flex flex-col">
            <div className="border-b p-4 bg-muted/50">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm font-medium">
                  Rune Visual IDE
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col p-6 gap-4">
              <div className="bg-card rounded-lg flex-1 border p-4 flex items-center justify-center">
                <p className="font-medium text-center">
                  1. Draw UI elements on the infinite canvas
                </p>
              </div>

              <div className="bg-card rounded-lg flex-1 border p-4 flex items-center justify-center">
                <p className="font-medium text-center">
                  2. Drag node connections to add behavior
                </p>
              </div>

              <div className="bg-primary/10 border-primary/30 rounded-lg flex-1 border p-4 flex items-center justify-center">
                <p className="font-medium text-center">
                  3. Press <Badge variant="default">Run</Badge> → live app
                  appears instantly
                </p>
              </div>
            </div>

            <div className="border-t p-3 bg-muted/50 text-center text-sm text-muted-foreground">
              [15-sec looping GIF would show this workflow]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 5: Under the Hood (Innovation Stack)
function Slide5() {
  const compareData = [
    {
      name: "Input modality",
      cursor: "Prompt + code",
      rune: "Direct manipulation + nodes",
    },
    { name: "Collaboration", cursor: "Single-player", rune: "Multiplayer" },
    { name: "Design fidelity", cursor: "—", rune: "Pixel-perfect" },
    { name: "Output", cursor: "Code snippets", rune: "Running product" },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Technology
            </Badge>
            <h1 className="text-4xl font-bold mb-3">
              Under the Hood (Innovation Stack)
            </h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Proprietary stack built for visual + AI development.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-500 mb-1">
                    Canvas
                  </h3>
                  <p>
                    Figma-grade vector editing, real-time CRDT sync.
                    Collaborative precision enables fine control over visual
                    elements.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-500 mb-1">
                    Logic Graph
                  </h3>
                  <p>
                    Type-safe, node-based environment inspired by Unreal
                    Blueprints; Turing-complete. Visualizes complex logic as
                    connected components.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-500 mb-1">
                    AI Compiler
                  </h3>
                  <p>
                    Proprietary intermediate representation translates visual
                    intent to optimized, readable source. Bridges the gap
                    between design and implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-500 mb-1">
                    Runtime Targets
                  </h3>
                  <p>
                    Web, iOS, desktop; one-click cloud deploy or local preview.
                    Seamless delivery to multiple platforms from the same source
                    of truth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="border rounded-lg p-5 bg-muted/30 w-full h-[500px] flex flex-col">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Badge variant="default">Rune</Badge> vs{" "}
              <Badge variant="secondary">Cursor</Badge>
            </h3>

            <div className="flex-1 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[120px]">Feature</TableHead>
                    <TableHead>
                      <span className="flex items-center gap-1">
                        <Badge variant="secondary" className="font-normal">
                          Cursor
                        </Badge>
                      </span>
                    </TableHead>
                    <TableHead>
                      <span className="flex items-center gap-1">
                        <Badge variant="default" className="font-normal">
                          Rune
                        </Badge>
                      </span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {compareData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>{row.cursor}</TableCell>
                      <TableCell className="font-medium text-primary">
                        {row.rune}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 pt-6 border-t">
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-medium mb-2">Competitive Advantage</h4>
                  <p>
                    Rune combines the visual precision of design tools with the
                    generative capabilities of AI coding assistants to create a
                    unified product development environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 6: Market Opportunity
function Slide6() {
  const chartConfig = {
    lowcode: {
      label: "Low/No-code",
      color: "hsl(210, 70%, 60%)",
    },
    genai: {
      label: "Gen-AI dev tools",
      color: "hsl(270, 70%, 60%)",
    },
    rune: {
      label: "Rune",
      color: "hsl(0, 70%, 60%)",
    },
  };

  const pieData = [
    { name: "Low/No-code", value: 13, fill: "var(--color-lowcode)" },
    { name: "Gen-AI dev tools", value: 41, fill: "var(--color-genai)" },
    { name: "Overlap", value: 8, fill: "var(--color-rune)" },
  ];

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Business
            </Badge>
            <h1 className="text-4xl font-bold mb-3">Market Opportunity</h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                A $10B+ wedge where low-code meets Gen-AI dev tooling.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">
                Opportunity at the intersection
              </h3>
              <p className="text-lg">
                Early tools address dashboards or code snippets; Rune targets
                full-fidelity consumer-grade products where budgets and pain are
                largest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 bg-blue-50 dark:bg-blue-950/30">
                <div className="text-sm font-medium text-muted-foreground">
                  Low/No-code platforms
                </div>
                <div className="text-lg font-bold">$12.9B (2025)</div>
                <div className="text-sm font-medium">→ $82B (2034)</div>
              </div>

              <div className="border rounded-lg p-4 bg-purple-50 dark:bg-purple-950/30">
                <div className="text-sm font-medium text-muted-foreground">
                  Gen-AI developer tools
                </div>
                <div className="text-lg font-bold">$41B (2023)</div>
                <div className="text-sm font-medium">→ $287B (2033)</div>
              </div>
            </div>

            <div className="bg-card p-4 rounded-lg border">
              <div className="flex items-center gap-2">
                <Badge variant="default">Key differentiator</Badge>
                <span className="text-muted-foreground">
                  High-fidelity product UIs
                </span>
              </div>
            </div>

            <div className="text-sm italic flex items-center gap-2">
              <span className="h-1 w-3 bg-muted-foreground rounded-full"></span>
              Sources: IDC 2024, CB Insights 2025
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="border rounded-lg p-6 bg-muted/30 w-full h-[500px] flex items-center justify-center">
            <ChartContainer config={chartConfig} className="w-full h-[400px]">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 7: Traction & Roadmap
function Slide7() {
  const roadmapData = [
    {
      quarter: "Q3 '25",
      value: 10,
      milestone: "Onboard 10 design-partner teams",
      kpi: "NPS > 40",
    },
    {
      quarter: "Q4 '25",
      value: 25,
      milestone: "Public wait-list + community template hub",
      kpi: "1k sign-ups",
    },
    {
      quarter: "Q2 '26",
      value: 50,
      milestone: "Paid beta seats & template marketplace",
      kpi: "$10k MRR",
    },
  ];

  const chartConfig = {
    roadmap: {
      label: "Roadmap",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Progress
            </Badge>
            <h1 className="text-4xl font-bold mb-3">Traction & Roadmap</h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Building momentum with key design partners.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Current signals</h3>

              <ul className="space-y-4">
                <li className="bg-card rounded-lg p-4 border">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">
                        Functional prototype in daily use by founder
                      </p>
                    </div>
                  </div>
                </li>

                <li className="bg-card rounded-lg p-4 border">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex items-center justify-center font-medium">
                      8
                    </div>
                    <div>
                      <p className="font-medium">
                        Early design-partner sign-ups
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2 design agencies, 1 startup tooling team
                      </p>
                    </div>
                  </div>
                </li>

                <li className="bg-card rounded-lg p-4 border relative overflow-hidden">
                  <div className="absolute -right-1 -top-1">
                    <Badge
                      variant="default"
                      className="rounded-tl-none rounded-br-none"
                    >
                      Feedback
                    </Badge>
                  </div>
                  <div className="pt-3">
                    <blockquote className="italic">
                      "We built an interactive prototype in 2 days vs 3 weeks."
                    </blockquote>
                    <p className="text-sm text-right mt-2">– Alpha user</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="bg-muted/30 border rounded-lg p-6 w-full h-[500px] flex flex-col">
            <h3 className="text-xl font-bold mb-4">12-Month roadmap</h3>

            <div className="flex-1">
              <ChartContainer config={chartConfig} className="w-full h-[180px]">
                <BarChart data={roadmapData}>
                  <Bar
                    dataKey="value"
                    fill="var(--color-roadmap)"
                    radius={[4, 4, 0, 0]}
                  />
                  <XAxis dataKey="quarter" tickLine={false} axisLine={false} />
                </BarChart>
              </ChartContainer>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quarter</TableHead>
                  <TableHead>Milestone</TableHead>
                  <TableHead>KPI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {roadmapData.map((row) => (
                  <TableRow key={row.quarter}>
                    <TableCell className="font-medium">{row.quarter}</TableCell>
                    <TableCell>{row.milestone}</TableCell>
                    <TableCell className="font-medium text-primary">
                      {row.kpi}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Founder, Edge & Call-to-Action
function Slide8() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-background to-background/70">
      <div className="p-12 flex flex-1 h-full">
        <div className="w-1/2 flex flex-col pr-8">
          <div>
            <Badge
              variant="secondary"
              className="mb-2 text-xs font-medium uppercase tracking-wider"
            >
              Team & Next Steps
            </Badge>
            <h1 className="text-4xl font-bold mb-3">
              Founder, Edge & Call-to-Action
            </h1>

            <div className="flex items-center gap-2 mb-8">
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-semibold">
                Join us in building the future of visual software development.
              </h2>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div className="bg-card rounded-lg border p-6">
              <div className="mb-3 flex gap-3 items-center">
                <Badge variant="default">Founder</Badge>
                <h3 className="text-xl font-bold">Brendan Norris</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Design engineer & founder</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Built Backbone Labs prototyping org
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Hardware + software to millions of gamers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Shipped "TimeMachine" architecture at Amex
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Smart-contract dev tooling at ConsenSys
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">
                      Solo but shipping at small-team velocity
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Leveraging Cursor, GPT-4o, and automated DevOps
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <div className="mb-3">
                <Badge variant="default">Why Rune can win</Badge>
              </div>

              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    Compiler IP + growing template dataset = fast-compounding
                    moat
                  </p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <p>Community flywheel (shareable templates & logic graphs)</p>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <p>
                    Founder's hybrid design / engineering DNA uniquely suits the
                    convergence wave
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="border rounded-lg w-full h-[500px] flex flex-col">
            <div className="bg-primary/10 border-primary/20 rounded-t-lg border-b p-6">
              <h3 className="text-xl font-bold mb-4">Looking for</h3>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-2">
                    <span className="font-bold text-lg">1</span>
                  </div>
                  <p className="font-medium">Design-partner teams</p>
                  <p className="text-sm text-muted-foreground">
                    To stress-test workflows
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-2">
                    <span className="font-bold text-lg">2</span>
                  </div>
                  <p className="font-medium">Technical co-founder</p>
                  <p className="text-sm text-muted-foreground">
                    With compiler/runtime expertise
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-2">
                    <span className="font-bold text-lg">3</span>
                  </div>
                  <p className="font-medium">Early investors</p>
                  <p className="text-sm text-muted-foreground">
                    Who resonate with the vision
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center p-8 text-center">
              <blockquote className="text-xl italic mb-6 px-8">
                "Rune unleashes a generation of builders who think visually and
                ship instantly."
              </blockquote>

              <Button size="lg" variant="default" className="px-8 mx-auto">
                <strong>Reach out:</strong> brendan@playbackbone.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
