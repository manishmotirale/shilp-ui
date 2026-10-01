"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import TailwindCSS from "../icons/tailwind-css";
import Motion from "../icons/motion";
import ShadcnIcon from "../icons/shadcn";
import Nextjs from "../icons/nextjs";
import ReactIcon from "../icons/react";

interface Feature {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description: "Utility-first styling",
    icon: <TailwindCSS className="h-5 w-5 text-zinc-400" />,
  },
  {
    id: "motion",
    name: "Motion",
    description: "Smooth interactions",
    icon: <Motion width={20} height={20} />,
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    description: "Accessible primitives",
    icon: <ShadcnIcon className="h-5 w-5 text-zinc-300" />,
  },
  {
    id: "next",
    name: "Next.js",
    description: "Modern React framework",
    icon: <Nextjs className="h-5 w-5 text-zinc-300" />,
  },
  {
    id: "react",
    name: "React",
    description: "Component architecture",
    icon: <ReactIcon className="h-5 w-5" />,
  },
];

export default function Features() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-5 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03]">
            <Layers3 className="h-4 w-4 text-zinc-500" />
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              Built with
            </p>

            <p className="mt-0.5 text-xs text-zinc-400">Modern technologies</p>
          </div>
        </div>

        <span className="hidden text-[10px] uppercase tracking-[0.18em] text-zinc-700 sm:block">
          Shilp stack
        </span>
      </motion.div>

      {/* Technology Grid */}
      <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:grid-cols-3 lg:grid-cols-5">
        {features.map((feature, index) => {
          const isHovered = hoveredItem === feature.id;

          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
                ease: [0.23, 1, 0.32, 1],
              }}
              onMouseEnter={() => setHoveredItem(feature.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={cn(
                "group relative min-h-[115px] cursor-default overflow-hidden p-5",
                "border-b border-white/[0.06] sm:border-r",
                "transition-colors duration-300",
                "hover:bg-white/[0.035]",
                index === 1 && "sm:border-r",
                index === 2 && "lg:border-r",
                index === 4 && "sm:border-r-0",
              )}
            >
              {/* Hover glow */}
              <div
                className={cn(
                  "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full",
                  "bg-violet-500/[0.08] blur-2xl",
                  "transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0",
                )}
              />

              {/* Top line */}
              <div
                className={cn(
                  "absolute left-0 right-0 top-0 h-px",
                  "bg-gradient-to-r from-transparent via-violet-400/40 to-transparent",
                  "transition-opacity duration-500",
                  isHovered ? "opacity-100" : "opacity-0",
                )}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  animate={{
                    y: isHovered ? -2 : 0,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-lg",
                    "border border-white/[0.07]",
                    "bg-white/[0.025]",
                    "transition-all duration-300",
                    isHovered && "border-white/[0.12] bg-white/[0.06]",
                  )}
                >
                  {feature.icon}
                </motion.div>

                {/* Text */}
                <div className="mt-4">
                  <div className="flex items-center gap-1.5">
                    <motion.span
                      animate={{
                        color: isHovered ? "#ffffff" : "#a1a1aa",
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-xs font-medium"
                    >
                      {feature.name}
                    </motion.span>

                    <ArrowUpRight
                      className={cn(
                        "h-3 w-3 text-violet-400",
                        "transition-all duration-300",
                        isHovered
                          ? "translate-x-0 translate-y-0 opacity-100"
                          : "-translate-x-1 translate-y-1 opacity-0",
                      )}
                    />
                  </div>

                  <p className="mt-1 text-[10px] text-zinc-700 transition-colors duration-300 group-hover:text-zinc-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 flex items-center justify-center gap-2 text-[10px] text-zinc-700"
      >
        <span className="h-1 w-1 rounded-full bg-emerald-400/60" />
        <span>Open source friendly</span>
        <span className="text-zinc-800">·</span>
        <span>Built for the modern web</span>
      </motion.div>
    </section>
  );
}
