"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do notifications work?",
    answer:
      "Customize notifications for email, push, and in-app. Set quiet hours, choose notification types, and control frequency for each channel.",
  },
  {
    question: "Can I white-label the product?",
    answer:
      "Enterprise plans include full white-label capabilities including custom domains, branding, and removal of our logo.",
  },
  {
    question: "What languages are supported?",
    answer:
      "We support 25+ languages including English, Spanish, French, German, Japanese, Chinese, and more. The interface adapts automatically.",
  },
  {
    question: "How do I report a bug?",
    answer:
      "Use the in-app feedback button or email bugs@example.com. Include steps to reproduce, screenshots, and your browser/OS details.",
  },
  {
    question: "Is there a community forum?",
    answer:
      "Yes! Join our community of 50,000+ users to share tips, get help, and connect with other professionals in your industry.",
  },
];

export default function Faq17() {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            Knowledge Base
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-3 text-sm text-zinc-500">
            Click any question to reveal the answer.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-all duration-300",
                  isOpen
                    ? "border-violet-400/20 bg-white/[0.035]"
                    : "border-white/[0.07] bg-white/[0.018]"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isOpen ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-violet-300" : "text-zinc-600"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen
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
    </section>
  );
}