"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Blocks } from "lucide-react";

import { Button } from "./button";
import { cn } from "@/lib/utils";

export function BrowseBlocksButton() {
  return (
    <Link
      id="browse-blocks-button"
      href="/docs/blocks"
      className="inline-flex"
    >
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className={cn(
            "group relative inline-flex h-11 min-w-[190px] items-center justify-center gap-3 overflow-hidden rounded-full px-6",
            "border border-white/[0.1]",
            "bg-white/[0.035]",
            "text-zinc-300",
            "font-medium text-sm",
            "backdrop-blur-xl",
            "transition-all duration-300",
            "hover:border-white/[0.18]",
            "hover:bg-white/[0.07]",
            "hover:text-white",
            "hover:shadow-[0_10px_40px_rgba(139,92,246,0.10)]",
          )}
        >
          {/* Subtle Shilp glow */}
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-30%,rgba(139,92,246,0.16),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-2.5">
            <Blocks className="h-4 w-4 text-zinc-500 transition-colors duration-300 group-hover:text-violet-400" />

            <span>Browse Blocks</span>
          </span>

          {/* Arrow */}
          <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] transition-all duration-300 group-hover:border-violet-400/30 group-hover:bg-violet-500/10">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Button>
      </motion.div>
    </Link>
  );
}