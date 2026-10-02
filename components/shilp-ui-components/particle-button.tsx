"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ParticleButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function ParticleButton({
  children = "Create component",
  onClick,
}: ParticleButtonProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        setActive(true);
        onClick?.();
        window.setTimeout(() => setActive(false), 500);
      }}
      className="group relative overflow-hidden rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-[0_8px_30px_rgba(0,0,0,.2)]"
    >
      {active &&
        Array.from({ length: 8 }).map((_, i) => (
          <motion.i
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: Math.cos(i * 0.8) * 45,
              y: Math.sin(i * 0.8) * 30,
              scale: 0,
            }}
            transition={{ duration: 0.5 }}
            className="absolute left-1/2 top-1/2 size-1.5 rounded-full bg-violet-500"
          />
        ))}
      <span className="relative inline-flex items-center gap-2">
        <Sparkles className="size-4" />
        {children}
      </span>
    </motion.button>
  );
}
