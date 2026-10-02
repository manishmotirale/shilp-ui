"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Boxes, Code2, Layers3, Sparkles } from "lucide-react";

const items = [
  { title: "Composable", text: "Build interfaces from focused primitives.", icon: Boxes, className: "md:col-span-2" },
  { title: "Developer first", text: "Clean APIs and copy-ready components.", icon: Code2, className: "" },
  { title: "Consistent", text: "One visual language across your product.", icon: Layers3, className: "" },
  { title: "Refined motion", text: "Subtle transitions that support interaction.", icon: Sparkles, className: "md:col-span-2" },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-xl ${item.className}`}
          >
            <div className="absolute right-0 top-0 size-32 rounded-full bg-violet-500/[0.07] blur-3xl transition group-hover:bg-violet-500/[0.12]" />
            <div className="relative">
              <div className="mb-10 flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-violet-300">
                  <Icon className="size-5" />
                </div>
                <ArrowUpRight className="size-4 text-zinc-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300" />
              </div>
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">{item.text}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
