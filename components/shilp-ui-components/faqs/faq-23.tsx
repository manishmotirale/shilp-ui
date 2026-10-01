"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What makes your AI different from competitors?",
    answer:
      "Our AI is trained on your specific use cases and improves over time. It understands context, learns from corrections, and integrates deeply with your workflow.",
  },
  {
    question: "How accurate are the AI predictions?",
    answer:
      "Our models achieve 95%+ accuracy on standard tasks. Accuracy improves as the AI learns from your data and feedback. You can always review and correct predictions.",
  },
  {
    question: "Is my training data kept private?",
    answer:
      "Absolutely. Your data is never shared with other customers or used to train public models. Enterprise customers can opt for fully isolated model instances.",
  },
  {
    question: "Can I fine-tune the AI for my use case?",
    answer:
      "Yes! Pro plans include basic customization. Enterprise plans offer full fine-tuning with your data, custom model training, and dedicated ML engineering support.",
  },
  {
    question: "What's the latency for AI responses?",
    answer:
      "Average response time is under 200ms for standard queries. Complex operations may take 1-2 seconds. Enterprise plans include priority processing for faster responses.",
  },
];

export default function Faq23() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-300">
            AI FAQ
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-500">
            Get quick answers to common questions about our AI platform.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const active = openIndex === index;

            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  active
                    ? "border-violet-400/25 bg-white/[0.035] shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
                    : "border-white/[0.07] bg-white/[0.018]"
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(active ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-5 p-5 text-left md:p-6"
                >
                  <span
                    className={cn(
                      "text-sm font-medium md:text-base",
                      active ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition",
                      active
                        ? "border-violet-400/25 bg-violet-400/10 text-violet-300"
                        : "border-white/[0.07] bg-white/[0.025] text-zinc-600"
                    )}
                  >
                    {active ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    active
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-6 text-zinc-500 md:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}