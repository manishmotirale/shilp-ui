"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "./button";
import { cn } from "@/lib/utils";

export function BrowseComponentsButton() {
  return (
    <Link href="/docs/components/button" className="inline-flex">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          className={cn(
            "group relative inline-flex h-11 min-w-[190px] items-center justify-center gap-3 overflow-hidden rounded-full px-6",
            "border border-white/[0.12]",
            "bg-white text-black",
            "font-medium text-sm",
            "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
            "transition-all duration-300",
            "hover:border-violet-300/40",
            "hover:bg-zinc-100",
            "hover:shadow-[0_10px_40px_rgba(139,92,246,0.18)]",
          )}
        >
          {/* Hover Glow */}
          <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          {/* Content */}
          <span className="relative z-10">Browse Components</span>

          {/* Icon */}
          <span className="relative z-10 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-black text-white transition-all duration-300 group-hover:bg-violet-600">
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </Button>
      </motion.div>
    </Link>
  );
}
