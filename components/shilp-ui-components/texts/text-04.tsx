"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text04Props {
  text?: string;
  className?: string;
  containerClassName?: string;
}

export default function Text_04({
  text = "System online.",
  className,
  containerClassName,
}: Text04Props) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "relative inline-block",
        containerClassName,
      )}
    >
      <span
        className={cn(
          "relative z-10 text-4xl font-semibold tracking-[-0.04em] text-zinc-200",
          className,
        )}
      >
        {text}
      </span>

      <motion.span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 text-4xl font-semibold tracking-[-0.04em] text-violet-400/70",
          className,
        )}
        variants={{
          initial: {
            x: 0,
            opacity: 0,
          },
          hover: {
            x: -2,
            opacity: 0.7,
          },
        }}
        transition={{
          duration: 0.12,
          ease: "easeOut",
        }}
      >
        {text}
      </motion.span>

      <motion.span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 text-4xl font-semibold tracking-[-0.04em] text-indigo-400/50",
          className,
        )}
        variants={{
          initial: {
            x: 0,
            opacity: 0,
          },
          hover: {
            x: 2,
            opacity: 0.5,
          },
        }}
        transition={{
          duration: 0.1,
          delay: 0.03,
          ease: "easeOut",
        }}
      >
        {text}
      </motion.span>

      <motion.span
        className="absolute -bottom-2 left-0 h-px bg-violet-400"
        variants={{
          initial: {
            width: 0,
            opacity: 0,
          },
          hover: {
            width: "28%",
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}