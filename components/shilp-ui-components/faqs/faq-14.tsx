"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  ["Start with the basics", "Understand the structure of the Shilp component system and how components fit together."],
  ["Choose a component", "Select the component that matches the interaction or layout you need."],
  ["Customize it", "Adjust typography, spacing, colors and behavior to match your application."],
  ["Compose your interface", "Combine components into complete product experiences."],
  ["Extend the system", "Create new components while maintaining the Shilp visual language."],
];

export default function Faq14() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-xs text-violet-300">HOW IT WORKS</p>
          <h2 className="mt-2 text-3xl font-semibold">From idea to interface.</h2>
        </div>

        <div className="relative pl-8">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-violet-400/50 via-white/[0.08] to-transparent" />

          <div className="space-y-3">
            {faqs.map(([q, a], index) => {
              const active = open === index;

              return (
                <div key={q} className="relative">
                  <div
                    className={`absolute -left-8 top-5 h-3.5 w-3.5 rounded-full border-2 ${
                      active
                        ? "border-violet-300 bg-[#050506] shadow-[0_0_12px_rgba(139,92,246,0.35)]"
                        : "border-zinc-700 bg-[#050506]"
                    }`}
                  />

                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.02]">
                    <button
                      onClick={() => setOpen(active ? null : index)}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-zinc-700">
                          0{index + 1}
                        </span>
                        <h3 className="mt-1 text-sm font-medium text-zinc-200">{q}</h3>
                      </div>

                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-zinc-600 transition ${
                          active ? "rotate-180 text-violet-300" : ""
                        }`}
                      />
                    </button>

                    {active && (
                      <p className="border-t border-white/[0.06] px-5 py-5 text-sm leading-6 text-zinc-500">
                        {a}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}