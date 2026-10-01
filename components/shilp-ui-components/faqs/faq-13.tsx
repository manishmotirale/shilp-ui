"use client";

import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const faqs = [
  ["What is included?", "Shilp includes reusable interface components following a consistent visual language."],
  ["Can I modify the source?", "Yes. You are encouraged to adapt components for your application."],
  ["Does it work on mobile?", "Yes. Layouts are designed responsively."],
  ["How do I get support?", "Use the documentation or your project's support channel."],
];

export default function Faq13() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1.4fr_0.6fr]">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018]">
          {faqs.map(([q, a], index) => {
            const active = open === index;

            return (
              <div key={q} className="border-b border-white/[0.06] last:border-0">
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="text-sm text-zinc-300">{q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-zinc-600 transition ${
                      active ? "rotate-180 text-violet-300" : ""
                    }`}
                  />
                </button>

                {active && (
                  <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">{a}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-violet-400/15 bg-violet-400/[0.035] p-6">
          <span className="text-xs text-violet-300">NEED HELP?</span>
          <h3 className="mt-3 text-xl font-semibold">Can't find your answer?</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Reach out and we'll help you find the information you need.
          </p>

          <button className="mt-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-medium text-black transition hover:bg-zinc-200">
            Contact support
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}