"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface Text03Props {
  text?: string;
  className?: string;
  containerClassName?: string;
}

export default function Text_03({
  text = "Move faster.",
  className,
  containerClassName,
}: Text03Props) {
  const characters = [...text];

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cn(
        "inline-flex flex-wrap",
        containerClassName,
      )}
      aria-label={text}
    >
      {characters.map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          className={cn(
            "inline-block whitespace-pre text-4xl font-semibold tracking-[-0.04em] text-zinc-200",
            className,
          )}
          variants={{
            initial: {
              y: 0,
              opacity: 1,
            },
            hover: {
              y: character === " " ? 0 : -5,
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.25,
            delay: index * 0.018,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {character}
        </motion.span>
      ))}
    </motion.div>
  );
}