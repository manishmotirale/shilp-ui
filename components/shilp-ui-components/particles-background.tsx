"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface ParticlesBackgroundProps {
  children?: ReactNode;
  className?: string;
}

const particles = Array.from({ length: 28 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  delay: (i % 8) * 0.35,
}));

export default function ParticlesBackground({
  children,
  className = "",
}: ParticlesBackgroundProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#050506] ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.15, y: 0 }}
            animate={{ opacity: [0.15, 0.55, 0.15], y: [0, -12, 0] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: p.delay }}
            className="absolute size-1 rounded-full bg-violet-300"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,.08),transparent_45%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
