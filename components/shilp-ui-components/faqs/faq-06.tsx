"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  ["What makes Shilp different?", "Shilp focuses on consistency without repetition, giving every component a shared visual language while preserving its purpose."],
  ["Does Shilp support dark interfaces?", "Dark interfaces are at the center of the Shilp visual system."],
  ["Can components be composed together?", "Yes. Components are designed to work as building blocks for larger interfaces."],
  ["Is motion required?", "No. Motion is restrained and can be removed or customized according to the application."],
];

export default function Faq06() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight">
          Questions worth asking.
        </h2>

        <div className="space-y-3">
          {faqs.map(([q, a], index) => {
            const active = open === index;

            return (
              <div
                key={q}
                className={`rounded-2xl border transition ${
                  active
                    ? "border-violet-400/20 bg-white/[0.035]"
                    : "border-white/[0.07] bg-white/[0.018]"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                      active
                        ? "border-violet-400/30 bg-violet-400/10 text-violet-300"
                        : "border-white/[0.08] text-zinc-600"
                    }`}
                  >
                    {active ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>

                  <span className="text-sm font-medium text-zinc-200">{q}</span>
                </button>

                {active && (
                  <div className="border-t border-white/[0.06] px-5 py-5 pl-16 text-sm leading-6 text-zinc-500">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}