"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["Overview", "Account", "Billing", "Features", "Support"];

const data: Record<string, [string, string][]> = {
  Overview: [
    ["What is Shilp?", "A reusable UI system for modern React applications."],
    ["What does it include?", "A collection of reusable interface components."],
  ],
  Account: [
    ["Can I create multiple projects?", "Yes. Components can be reused across projects."],
    ["Can I customize components?", "Yes. Tailwind classes make customization simple."],
  ],
  Billing: [
    ["Is there a free option?", "Yes. Core components can be used freely."],
  ],
  Features: [
    ["Are components responsive?", "Yes. Responsive behavior is built into the layouts."],
  ],
  Support: [
    ["How do I get help?", "Use your project's support or documentation channel."],
  ],
};

export default function Faq04() {
  const [category, setCategory] = useState("Overview");
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[220px_1fr]">
        <aside className="md:sticky md:top-8 md:self-start">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
            Documentation
          </p>

          <div className="space-y-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCategory(item);
                  setOpen(0);
                }}
                className={cn(
                  "flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition",
                  category === item
                    ? "bg-white/[0.05] text-white"
                    : "text-zinc-600 hover:bg-white/[0.025] hover:text-zinc-300"
                )}
              >
                {item}
                {category === item && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-400" />
                )}
              </button>
            ))}
          </div>
        </aside>

        <div>
          <div className="mb-7">
            <span className="text-xs text-violet-300">{category}</span>
            <h2 className="mt-2 text-3xl font-semibold">Frequently asked questions</h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]">
            {data[category].map(([q, a], index) => {
              const active = open === index;

              return (
                <div key={q} className="border-b border-white/[0.06] last:border-0">
                  <button
                    onClick={() => setOpen(active ? null : index)}
                    className="flex w-full items-center justify-between px-5 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-zinc-200">{q}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-zinc-600 transition",
                        active && "rotate-180 text-violet-300"
                      )}
                    />
                  </button>

                  {active && (
                    <div className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                      {a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}