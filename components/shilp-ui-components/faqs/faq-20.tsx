"use client";

import { useState } from "react";
import {
  Command,
  Search,
  ChevronDown,
  Keyboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I open the command palette?",
    answer:
      "Press Cmd + K on macOS or Ctrl + K on Windows and Linux to quickly search actions, pages, components, and settings.",
  },
  {
    question: "Can I customize keyboard shortcuts?",
    answer:
      "Yes. Open Settings > Keyboard Shortcuts to view available shortcuts and customize supported actions.",
  },
  {
    question: "Does the command palette search everything?",
    answer:
      "It can search available commands, navigation items, components, and other registered actions within your application.",
  },
  {
    question: "Can I add my own commands?",
    answer:
      "Yes. You can register custom commands and connect them to application actions such as navigation, dialogs, filters, or workflows.",
  },
  {
    question: "Are keyboard shortcuts available on mobile?",
    answer:
      "Keyboard-specific shortcuts are optimized for desktop. On mobile, the same actions remain accessible through the interface.",
  },
];

export default function Faq20() {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-2 text-xs text-violet-300">
            <Keyboard className="h-4 w-4" />
            Developer Help
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Search the answers.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Find shortcuts, commands and answers without leaving your workflow.
          </p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-20 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-600 focus:border-violet-400/35 focus:bg-white/[0.035]"
          />

          <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[10px] text-zinc-600 sm:flex">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]">
          {filteredFaqs.map((faq, index) => {
            const active = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-white/[0.06] last:border-0"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(active ? null : index)
                  }
                  className="group flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px]",
                      active
                        ? "border-violet-400/20 bg-violet-400/[0.07] text-violet-300"
                        : "border-white/[0.06] bg-white/[0.02] text-zinc-700"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={cn(
                      "flex-1 text-sm font-medium transition-colors",
                      active
                        ? "text-white"
                        : "text-zinc-300 group-hover:text-white"
                    )}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-zinc-600 transition-transform duration-300",
                      active && "rotate-180 text-violet-300"
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
                    <p className="pb-5 pl-16 pr-5 text-sm leading-6 text-zinc-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {!filteredFaqs.length && (
            <div className="px-5 py-12 text-center">
              <Search className="mx-auto h-5 w-5 text-zinc-700" />
              <p className="mt-3 text-sm text-zinc-600">
                No questions found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}