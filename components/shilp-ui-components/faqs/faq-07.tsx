"use client";

import { useState } from "react";
import { Minus, Plus, ArrowUpRight } from "lucide-react";

const faqs = [
  ["How do I install it?", "Add the component to your React project and install any required dependencies."],
  ["Can I change the visual system?", "Yes. Tailwind makes it easy to adjust spacing, typography, colors and surfaces."],
  ["Is Shilp mobile friendly?", "Every layout is designed to collapse naturally on smaller screens."],
  ["Can I build an entire product with it?", "The components are intended to work together as a reusable design system."],
];

export default function Faq07() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-10 md:self-start">
          <span className="text-xs font-medium text-violet-300">SUPPORT</span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            We made the answers simple.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500">
            Find answers to common questions about using Shilp UI.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-300 transition hover:border-white/[0.14] hover:text-white">
            Visit documentation
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="space-y-2">
          {faqs.map(([q, a], index) => {
            const active = open === index;

            return (
              <div
                key={q}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="text-sm text-zinc-200">{q}</span>
                  {active ? (
                    <Minus className="h-4 w-4 text-violet-300" />
                  ) : (
                    <Plus className="h-4 w-4 text-zinc-600" />
                  )}
                </button>

                {active && (
                  <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                    {a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}