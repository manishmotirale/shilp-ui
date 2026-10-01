"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  ["How does Shilp UI work?", "Shilp UI provides reusable React components built around a consistent design language."],
  ["Can I customize the styling?", "Yes. Every component is designed to work naturally with Tailwind CSS."],
  ["Is it responsive?", "Yes. The layout adapts across mobile, tablet and desktop screens."],
  ["Can I use the components commercially?", "Yes. You can adapt the components to your own projects."],
];

export default function Faq02() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Answers, without the noise.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map(([question, answer], index) => {
            const active = open === index;

            return (
              <div
                key={question}
                className="overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.02]"
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="text-sm font-medium text-zinc-200">
                    {question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-zinc-600 transition-transform duration-300 ${
                      active ? "rotate-180 text-violet-300" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
          <div>
            <p className="text-sm font-medium text-zinc-200">Still have questions?</p>
            <p className="mt-1 text-xs text-zinc-600">Our team is happy to help.</p>
          </div>
          <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200">
            <Mail className="h-3.5 w-3.5" />
            Contact
          </button>
        </div>
      </div>
    </section>
  );
}