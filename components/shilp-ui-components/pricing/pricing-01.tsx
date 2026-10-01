"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Infinity,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const features: Feature[] = [
  {
    icon: <Infinity className="h-4 w-4" />,
    title: "Unlimited Projects",
    description: "Create as many projects as you need",
    highlight: true,
  },
  {
    icon: <Shield className="h-4 w-4" />,
    title: "Enterprise Security",
    description: "Advanced security protocols & encryption",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Priority Access",
    description: "Early access to new features",
    highlight: true,
  },
];

export default function Pricing_01() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-auto w-full max-w-sm">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
      >
        <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-500/[0.10] blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-white/[0.06] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                Enterprise Plan
              </h3>
              <p className="mt-0.5 text-xs text-zinc-500">
                For growing teams
              </p>
            </div>
          </div>

          <span className="rounded-full border border-violet-400/[0.15] bg-violet-500/[0.08] px-2.5 py-1 text-[10px] font-medium text-violet-300">
            Popular
          </span>
        </div>

        <div className="relative border-b border-white/[0.06] p-6">
          <div className="flex items-end gap-1.5">
            <span className="text-4xl font-semibold tracking-tight text-white">
              $49
            </span>
            <span className="mb-1 text-sm text-zinc-500">/month</span>
          </div>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Everything you need to scale your business.
          </p>
        </div>

        <div className="relative space-y-2 p-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 * index }}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-3 transition",
                feature.highlight
                  ? "border-violet-400/[0.10] bg-violet-500/[0.045]"
                  : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.025]",
              )}
            >
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                  feature.highlight
                    ? "border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300"
                    : "border-white/[0.07] bg-white/[0.025] text-zinc-500",
                )}
              >
                {feature.icon}
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  {feature.title}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative border-t border-white/[0.06] p-5">
          <motion.button
            type="button"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileTap={{ scale: 0.985 }}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Get started
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}