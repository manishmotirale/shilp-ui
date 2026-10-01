"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I get started with the API?",
    answer:
      "Sign up for an account, generate your API key in Settings > Developer, and follow our quickstart guide. We provide SDKs for Python, JavaScript, Ruby, and Go.",
  },
  {
    question: "What are the rate limits?",
    answer:
      "Free: 100 req/min. Pro: 1,000 req/min. Enterprise: Custom limits. All plans include burst allowances for temporary spikes.",
  },
  {
    question: "Do you provide webhooks?",
    answer:
      "Yes! Configure webhooks for any event type. We support retry logic, signature verification, and delivery logs for debugging.",
  },
  {
    question: "Is there sandbox/testing mode?",
    answer:
      "Absolutely. Use our sandbox environment for development and testing. It mirrors production with no rate limits or billing.",
  },
  {
    question: "How do I migrate from a competitor?",
    answer:
      "We offer free migration assistance. Our team will help you map data, run parallel systems, and ensure a smooth transition.",
  },
];

export default function Faq19() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Developer FAQ
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Questions & answers
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Find answers to the most common development questions.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="flex flex-col gap-2 lg:col-span-5">
            {faqs.map((faq, index) => (
              <button
                key={faq.question}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group rounded-xl border px-4 py-4 text-left transition-all duration-200",
                  activeIndex === index
                    ? "border-violet-400/25 bg-violet-400/[0.06]"
                    : "border-white/[0.07] bg-white/[0.018] hover:border-white/[0.12]"
                )}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      "font-mono text-[10px]",
                      activeIndex === index
                        ? "text-violet-300"
                        : "text-zinc-700"
                    )}
                  >
                    0{index + 1}
                  </span>

                  <span
                    className={cn(
                      "text-sm font-medium",
                      activeIndex === index
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-200"
                    )}
                  >
                    {faq.question}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 md:p-8">
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-500/[0.06] blur-3xl" />

              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.18em] text-violet-300">
                  Answer
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {faqs[activeIndex].question}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-500">
                  {faqs[activeIndex].answer}
                </p>

                <div className="mt-8 flex items-center gap-2 text-xs text-zinc-600">
                  API documentation
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}