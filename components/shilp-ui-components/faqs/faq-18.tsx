"use client";

import { useState } from "react";
import { ChevronRight, CircleHelp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What file formats can I upload?",
    answer:
      "We support PDF, DOCX, XLSX, PPTX, images (PNG, JPG, GIF, WebP), videos (MP4, MOV), and more. Maximum file size is 100MB on Pro plans.",
  },
  {
    question: "How does real-time collaboration work?",
    answer:
      "Multiple users can edit simultaneously with live cursors, presence indicators, and instant sync. Changes appear in real-time for all participants.",
  },
  {
    question: "Can I automate workflows?",
    answer:
      "Yes! Use our visual automation builder to create custom workflows. Trigger actions based on events, schedules, or conditions.",
  },
  {
    question: "What's the difference between workspaces and projects?",
    answer:
      "Workspaces are for your organization or team. Projects live inside workspaces and contain your actual work, tasks, and files.",
  },
  {
    question: "How do permissions work?",
    answer:
      "Set granular permissions at workspace, project, and item levels. Choose from Owner, Admin, Editor, Commenter, or Viewer roles.",
  },
];

export default function Faq18() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-[#070708] px-4 py-16 text-white sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06]">
            <CircleHelp className="h-5 w-5 text-violet-300" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Frequently asked questions
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Quick answers to common questions.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]">
          {faqs.map((faq, index) => {
            const active = activeIndex === index;

            return (
              <div
                key={faq.question}
                className={cn(
                  "border-b border-white/[0.06] last:border-0 transition-colors",
                  active && "bg-violet-400/[0.025]"
                )}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex(active ? null : index)
                  }
                  className="flex w-full items-center gap-4 p-5 text-left"
                >
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-200",
                      active
                        ? "rotate-90 text-violet-300"
                        : "text-zinc-600"
                    )}
                  />

                  <span
                    className={cn(
                      "text-sm font-medium transition-colors",
                      active ? "text-white" : "text-zinc-300"
                    )}
                  >
                    {faq.question}
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
                    <p className="pb-5 pl-[60px] pr-5 text-sm leading-6 text-zinc-500">
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