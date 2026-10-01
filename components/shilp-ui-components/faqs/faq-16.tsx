"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

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
    <section className="py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Get quick answers to common questions about our platform
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-2xl border-2 transition-all duration-300 overflow-hidden",
                  openIndex === index
                    ? "border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px]"
                    : "border-zinc-200 dark:border-zinc-800",
                )}
              >
                <div className={cn("rounded-[14px] bg-white dark:bg-zinc-950 h-full")}>
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-6"
                  >
                    <span
                      className={cn(
                        "text-left font-semibold text-lg transition-colors",
                        openIndex === index
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
                          : "text-zinc-900 dark:text-white",
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all",
                        openIndex === index
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                      )}
                    >
                      {openIndex === index ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300",
                      openIndex === index ? "max-h-48" : "max-h-0",
                    )}
                  >
                    <p className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}