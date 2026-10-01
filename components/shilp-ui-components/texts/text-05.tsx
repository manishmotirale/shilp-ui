"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text05Props {
  text?: string;
  className?: string;
  containerClassName?: string;
}

export default function Text_05({
  text = "Design systems that scale.",
  className,
  containerClassName,
}: Text05Props) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative inline-block cursor-default",
        containerClassName,
      )}
    >
      <motion.span
        className={cn(
          "relative block text-4xl font-semibold tracking-[-0.04em] text-zinc-200",
          className,
        )}
        variants={{
          initial: {
            color: "rgb(228 228 231)",
          },
          hover: {
            color: "rgb(255 255 255)",
          },
        }}
        transition={{ duration: 0.25 }}
      >
        {text}

        <motion.span
          className="absolute -bottom-1 left-0 h-px bg-violet-400"
          variants={{
            initial: {
              width: "18%",
              opacity: 0.45,
            },
            hover: {
              width: "100%",
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.span
          className="absolute -bottom-1 left-0 h-px bg-white"
          variants={{
            initial: {
              x: "-100%",
              width: "25%",
              opacity: 0,
            },
            hover: {
              x: "400%",
              width: "25%",
              opacity: 0.8,
            },
          }}
          transition={{
            duration: 0.65,
            ease: "easeInOut",
          }}
        />
      </motion.span>
    </motion.div>
  );
}