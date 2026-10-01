"use client";

import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is Shilp UI?",
    a: "Shilp UI is a reusable component system focused on premium, minimal and developer-friendly interfaces.",
  },
  {
    q: "What design language does it use?",
    a: "Shilp uses dark near-black surfaces, zinc typography, subtle borders, glass effects and restrained violet accents.",
  },
  {
    q: "Can I customize the components?",
    a: "Yes. Every component is intended to be adapted to your application's requirements.",
  },
  {
    q: "Is Shilp only for dashboards?",
    a: "No. The system can be used for dashboards, marketing pages, developer tools, AI products and application interfaces.",
  },
  {
    q: "How should I create new components?",
    a: "Follow the principle of consistency without repetition: share the design language while keeping the component's purpose visually distinct.",
  },
];

export default function Faq15() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.05] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-violet-300">
            <Sparkles className="h-3 w-3" />
            Shilp Knowledge
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Everything about the system.
          </h2>
        </div>

        <div className="grid min-h-[420px] gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.018] p-2">
            {faqs.map((item, index) => (
              <button
                key={item.q}
                onClick={() => setSelected(index)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-xl px-4 py-4 text-left transition",
                  selected === index
                    ? "bg-white/[0.05]"
                    : "hover:bg-white/[0.025]"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    selected === index ? "text-violet-300" : "text-zinc-700"
                  )}
                >
                  0{index + 1}
                </span>

                <span
                  className={cn(
                    "flex-1 text-sm",
                    selected === index ? "text-white" : "text-zinc-500"
                  )}
                >
                  {item.q}
                </span>

                <ArrowRight
                  className={cn(
                    "h-3.5 w-3.5 transition",
                    selected === index
                      ? "translate-x-0 text-violet-300"
                      : "-translate-x-1 text-zinc-800 group-hover:text-zinc-500"
                  )}
                />
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 md:p-9">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-3xl" />

            <div className="relative">
              <span className="font-mono text-xs text-violet-300">
                0{selected + 1} / {faqs.length}
              </span>

              <h3 className="mt-6 max-w-xl text-2xl font-semibold leading-tight">
                {faqs[selected].q}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                {faqs[selected].a}
              </p>

              <div className="mt-10 h-px w-full bg-white/[0.06]" />

              <p className="mt-5 text-xs text-zinc-700">
                Shilp UI · Consistency without repetition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}