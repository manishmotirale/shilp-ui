"use client";

import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I customize my dashboard?",
    answer:
      "Click the gear icon in the top-right corner of your dashboard. Drag and drop widgets, resize panels, and save custom layouts for different workflows.",
  },
  {
    question: "Can I create custom reports?",
    answer:
      "Yes! Use our report builder to create custom reports with your chosen metrics, filters, and visualizations. Schedule automated delivery to your team.",
  },
  {
    question: "How does the AI assistant work?",
    answer:
      "Our AI learns from your usage patterns to suggest actions, automate repetitive tasks, and surface relevant information. It improves over time.",
  },
  {
    question: "What keyboard shortcuts are available?",
    answer:
      "Press Cmd/Ctrl + K to open the command palette and see all available shortcuts. You can also customize shortcuts in Settings > Preferences.",
  },
  {
    question: "How do I set up SSO?",
    answer:
      "Enterprise plans include SSO setup. We support SAML 2.0 and OAuth with providers like Okta, Azure AD, Google Workspace, and OneLogin.",
  },
];

export default function Faq22() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#070708] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-zinc-400">
            <MessageSquare className="h-3.5 w-3.5 text-violet-300" />
            FAQ
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Have questions?
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Here are answers to some of our most common questions.
          </p>
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
                    : "border-white/[0.07] bg-white/[0.02]"
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(active ? null : index)
                  }
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition",
                      active
                        ? "bg-white text-black"
                        : "border border-white/[0.07] bg-white/[0.025] text-zinc-600"
                    )}
                  >
                    {index + 1}
                  </span>

                  <span className="flex-1 text-sm font-medium text-zinc-200">
                    {faq.question}
                  </span>

                  <Send
                    className={cn(
                      "h-4 w-4 shrink-0 transition-all duration-300",
                      active
                        ? "rotate-45 text-violet-300"
                        : "-rotate-45 text-zinc-700"
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
                    <p className="px-5 pb-5 pl-[68px] text-sm leading-6 text-zinc-500">
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