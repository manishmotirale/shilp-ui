"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function HeroGeometric() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/[0.07] bg-[#070708] px-6 py-20 text-center md:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.08]" />
        <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/[0.04]" />
        <div className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 -rotate-45 border border-white/[0.04]" />
        <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[90px]" />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex rounded-full border border-violet-400/15 bg-violet-400/[0.05] px-3 py-1 text-[11px] font-medium text-violet-200">
          SHILP UI
        </span>
        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
          Interfaces with <span className="text-violet-300">intention.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-500 md:text-base">
          Premium React components for products that need clarity, consistency, and character.
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
        >
          Explore components <ArrowRight className="size-4" />
        </motion.button>
      </div>
    </section>
  );
}
