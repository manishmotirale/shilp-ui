"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What's your pricing model?",
    answer:
      "We offer transparent per-seat pricing with no hidden fees. Pay monthly or save 20% with annual billing. Volume discounts available for 50+ seats.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Absolutely! Start with our 14-day free trial with full feature access. No credit card required. Upgrade anytime during or after your trial.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with 200+ tools including Slack, GitHub, Jira, Figma, Google Workspace, and Microsoft 365. Use our API for custom integrations.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Get started in minutes with our self-service setup. Enterprise customers receive dedicated onboarding, training sessions, and a success manager.",
  },
  {
    question: "What's your data retention policy?",
    answer:
      "Active accounts: unlimited retention. After cancellation: 30-day grace period, then data is permanently deleted. Enterprise can customize retention.",
  },
];

export default function Faq21() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="lg:sticky lg:top-8">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
              Support
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight lg:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Can&apos;t find what you&apos;re looking for? Feel free to
              contact our team.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs text-zinc-300 transition hover:border-violet-400/25 hover:text-white"
            >
              Contact support
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const active = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-all duration-300",
                    active
                      ? "border-violet-400/20 bg-white/[0.035]"
                      : "border-white/[0.07] bg-white/[0.018]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(active ? null : index)
                    }
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  >
                    <h3
                      className={cn(
                        "text-sm font-medium transition-colors",
                        active ? "text-white" : "text-zinc-300"
                      )}
                    >
                      {faq.question}
                    </h3>

                    <Plus
                      className={cn(
                        "h-4 w-4 shrink-0 transition-transform duration-300",
                        active
                          ? "rotate-45 text-violet-300"
                          : "text-zinc-600"
                      )}
                    />
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
                      <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                        {faq.answer}
                      </p>
                    </div>
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