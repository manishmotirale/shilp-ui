"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleHelp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is Shilp suitable for production applications?",
    answer:
      "Yes. Shilp components are designed as reusable building blocks for real-world React and Next.js applications.",
  },
  {
    question: "Can I use Shilp with my existing design system?",
    answer:
      "Yes. You can use individual components or adapt the visual tokens to complement your existing design language.",
  },
  {
    question: "How customizable are the components?",
    answer:
      "The components use familiar React and Tailwind patterns, making typography, spacing, colors, states and layouts easy to customize.",
  },
  {
    question: "Can I create new Shilp components?",
    answer:
      "Absolutely. New components should follow the same principles while maintaining their own purpose and personality.",
  },
  {
    question: "Is accessibility considered?",
    answer:
      "Interactive components use semantic controls and accessible interaction patterns. You can further adapt them to your application's accessibility requirements.",
  },
  {
    question: "Can Shilp be used for SaaS products?",
    answer:
      "Yes. The system is particularly suited to dashboards, developer tools, SaaS products, AI applications and modern web interfaces.",
  },
];

export default function Faq25() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-500/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400">
              <CircleHelp className="h-3.5 w-3.5 text-violet-300" />
              Shilp FAQ
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to know.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
              Explore the most common questions about building with Shilp.
            </p>
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
            06 Questions
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {faqs.map((faq, index) => {
              const active = selected === index;

              return (
                <button
                  key={faq.question}
                  type="button"
                  onClick={() => setSelected(index)}
                  className={cn(
                    "group rounded-xl border p-4 text-left transition-all duration-200",
                    active
                      ? "border-violet-400/20 bg-violet-400/[0.05]"
                      : "border-white/[0.07] bg-white/[0.018] hover:border-white/[0.12]"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 font-mono text-[10px]",
                        active
                          ? "text-violet-300"
                          : "text-zinc-700"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "text-sm leading-5 transition-colors",
                        active
                          ? "text-white"
                          : "text-zinc-400 group-hover:text-zinc-200"
                      )}
                    >
                      {faq.question}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/[0.06] blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-xs text-violet-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Answer
                </span>

                <span className="font-mono text-[10px] text-zinc-700">
                  {String(selected + 1).padStart(2, "0")}/06
                </span>
              </div>

              <div className="mt-10">
                <h3 className="max-w-xl text-2xl font-semibold leading-tight text-white">
                  {faqs[selected].question}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                  {faqs[selected].answer}
                </p>
              </div>

              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-white/[0.06]" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-zinc-700">
                    Shilp UI · Developer focused
                  </span>

                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-500 transition hover:text-violet-300"
                  >
                    Documentation
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}