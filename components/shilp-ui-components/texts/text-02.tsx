"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface TextSplitProps {
  text?: string;
  className?: string;
  containerClassName?: string;
  splitSpacing?: number;
}

export default function Text_02({
  text = "Payout fees",
  className = "",
  containerClassName = "",
  splitSpacing = 3,
}: TextSplitProps) {
  return (
    <motion.div
      initial="default"
      whileHover="hover"
      className={cn(
        "relative inline-block w-full text-center",
        containerClassName,
      )}
    >
      <motion.div
        className={cn(
          "absolute inset-x-0 text-4xl font-semibold tracking-[-0.04em]",
          className,
        )}
        variants={{
          default: {
            clipPath: "inset(0 0 50% 0)",
            y: -splitSpacing / 2,
          },
          hover: {
            clipPath: "inset(0 0 100% 0)",
            y: -splitSpacing,
          },
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>

      <motion.div
        className={cn(
          "absolute inset-x-0 text-4xl font-semibold tracking-[-0.04em]",
          className,
        )}
        variants={{
          default: {
            clipPath: "inset(50% 0 0 0)",
            y: splitSpacing / 2,
          },
          hover: {
            clipPath: "inset(100% 0 0 0)",
            y: splitSpacing,
          },
        }}
        transition={{
          duration: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {text}
      </motion.div>

      <motion.div
        className={cn(
          "relative text-4xl font-semibold tracking-[-0.04em] text-zinc-200",
          className,
        )}
        variants={{
          default: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.2,
          delay: 0.08,
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );
}