"use client";

import { motion } from "motion/react";

interface HandWrittenTitleProps {
  text?: string;
  subtitle?: string;
}

export default function HandWrittenTitle({
  text = "Build beautifully.",
  subtitle = "A refined component language for modern products.",
}: HandWrittenTitleProps) {
  return (
    <div className="text-center">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl"
      >
        {text}
        <span className="relative ml-2 inline-block text-violet-300">
          <span className="font-serif italic font-normal">with intent.</span>
          <svg className="absolute -bottom-3 left-0 h-3 w-full" viewBox="0 0 180 12" fill="none" aria-hidden="true">
            <path d="M2 8C40 2 90 12 178 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </motion.h1>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-zinc-500">{subtitle}</p>
    </div>
  );
}
