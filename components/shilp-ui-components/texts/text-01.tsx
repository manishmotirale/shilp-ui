"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text01Props {
  text?: string;
  className?: string;
  containerClassName?: string;
}

export default function Text_01({
  text = "Build with intention.",
  className,
  containerClassName,
}: Text01Props) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative inline-block overflow-hidden",
        containerClassName,
      )}
    >
      <motion.span
        className={cn(
          "relative block text-4xl font-semibold tracking-[-0.04em] text-zinc-200",
          className,
        )}
        variants={{
          initial: { y: 0 },
          hover: { y: -2 },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}

        <motion.span
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-violet-400 to-transparent"
          variants={{
            initial: { scaleX: 0, opacity: 0 },
            hover: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.span>
    </motion.div>
  );
}