"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

import TailwindCSS from "@/components/icons/tailwind-css";
import { BrowseBlocksButton } from "../ui/browse-blocks";
import { BrowseComponentsButton } from "../ui/browse-button";
import Features from "@/components/landing/features";
import Card_01 from "../shilp-ui-components/cards/card-01";
import Card_25 from "../shilp-ui-components/cards/card-25";
import { AIInput04 } from "../shilp-ui-components/ai-inputs/ai-input-04";
import Input_01 from "../shilp-ui-components/inputs/input-01";
import Input_06 from "../shilp-ui-components/inputs/input-06";
import Btn01 from "../shilp-ui-components/buttons/button-01";
import Button02 from "../shilp-ui-components/buttons/button-02";
import Button08 from "../shilp-ui-components/buttons/button-08";
import Button09 from "../shilp-ui-components/buttons/button-09";

interface ShowcaseCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function ShowcaseCard({
  children,
  className = "",
  delay = 0,
}: ShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0d]/80 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.09),transparent_55%)]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#050506] text-white">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-260px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[140px]" />

        <div className="absolute right-[-200px] top-[25%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.05] blur-[140px]" />

        <div className="absolute bottom-[-250px] left-[-150px] h-[500px] w-[500px] rounded-full bg-purple-600/[0.05] blur-[140px]" />

        {/* Shilp Grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-4 py-2 text-xs text-zinc-400 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span>Crafted for modern interfaces</span>
          </div>
        </motion.div>

        {/* Hero Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-balance font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Craft beautiful
            <br />
            <span className="relative">
              interfaces.
              <span className="absolute -bottom-3 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent sm:w-44" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8"
          >
            Shilp UI is a collection of carefully crafted, accessible components
            designed to help you build refined React and Next.js interfaces with
            precision.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <BrowseComponentsButton />
          <BrowseBlocksButton />

          <Link
            href="/docs"
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-5 text-sm text-zinc-300 transition-all duration-300 hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
          >
            Explore docs
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Tailwind Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 flex justify-center"
        >
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <TailwindCSS />
            <span>Updated for Tailwind CSS 4.0</span>

            <span className="inline-flex items-center gap-1 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-2 py-0.5 text-[10px] font-medium text-violet-300">
              <Sparkles className="h-2.5 w-2.5" />
              New
            </span>
          </div>
        </motion.div>

        {/* Component Showcase */}
        <div className="relative mx-auto mt-20 w-full max-w-6xl">
          {/* Showcase Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.055] blur-[120px]" />

          <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-12">
            {/* Card */}
            <ShowcaseCard delay={0.35} className="min-h-[300px] lg:col-span-5">
              <div className="flex h-full min-h-[300px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Component
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">Card</p>
                  </div>

                  <div className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] text-zinc-500">
                    01
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center p-7">
                  <div className="w-full max-w-[320px]">
                    <Card_01 href="/docs/components/card" />
                  </div>
                </div>
              </div>
            </ShowcaseCard>

            {/* Search / Action */}
            <ShowcaseCard delay={0.45} className="min-h-[300px] lg:col-span-7">
              <div className="flex h-full min-h-[300px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Component
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">
                      Action interface
                    </p>
                  </div>

                  <div className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] text-zinc-500">
                    02
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
                  <div className="w-full max-w-xl">
                    <Card_25 />
                  </div>
                </div>
              </div>
            </ShowcaseCard>

            {/* AI Input */}
            <ShowcaseCard delay={0.55} className="min-h-[250px] lg:col-span-12">
              <div className="flex h-full min-h-[250px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Component
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">AI Input</p>
                  </div>

                  <div className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] text-zinc-500">
                    03
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center p-6 sm:p-10">
                  <div className="w-full max-w-3xl">
                    <AIInput04 />
                  </div>
                </div>
              </div>
            </ShowcaseCard>

            {/* Buttons */}
            <ShowcaseCard delay={0.65} className="min-h-[390px] lg:col-span-5">
              <div className="flex h-full min-h-[390px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Component
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">Buttons</p>
                  </div>

                  <div className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] text-zinc-500">
                    04
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8">
                  <Link
                    href="/docs/components/button"
                    className="w-full max-w-[220px]"
                  >
                    <Button02 className="w-full py-5" />
                  </Link>

                  <Link
                    href="/docs/components/button"
                    className="w-full max-w-[220px]"
                  >
                    <Button09 className="w-full py-5" />
                  </Link>

                  <Link
                    href="/docs/components/button"
                    className="w-full max-w-[220px]"
                  >
                    <Btn01 className="w-full py-5" />
                  </Link>

                  <Link
                    href="/docs/components/button"
                    className="w-full max-w-[220px]"
                  >
                    <Button08 className="w-full py-5" />
                  </Link>
                </div>
              </div>
            </ShowcaseCard>

            {/* Inputs */}
            <ShowcaseCard delay={0.75} className="min-h-[390px] lg:col-span-7">
              <div className="flex h-full min-h-[390px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Component
                    </p>
                    <p className="mt-1 text-sm text-zinc-300">Inputs</p>
                  </div>

                  <div className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[10px] text-zinc-500">
                    05
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center p-7 sm:p-12">
                  <div className="flex w-full max-w-xl flex-col gap-5">
                    <Link href="/docs/components/input">
                      <Input_01 />
                    </Link>

                    <Link href="/docs/components/input">
                      <Input_06 />
                    </Link>
                  </div>
                </div>
              </div>
            </ShowcaseCard>
          </div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-24 w-full max-w-5xl"
        >
          <Features />
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-24 max-w-2xl text-center"
        >
          <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <p className="text-sm leading-7 text-zinc-500">
            Thoughtfully designed components for developers who care about
            details.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
