"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const groups = [
  {
    title: "Getting Started",
    items: [
      ["How do I start?", "Install the required dependencies and import the component you need."],
      ["Is Shilp beginner friendly?", "Yes. Components use familiar React and Tailwind patterns."],
    ],
  },
  {
    title: "Features",
    items: [
      ["Are components responsive?", "Yes. Components are designed for responsive interfaces."],
      ["Can I change colors?", "Yes. Tailwind utilities make visual customization straightforward."],
    ],
  },
  {
    title: "Support",
    items: [
      ["Where can I ask questions?", "Use your project's documentation or support channel."],
    ],
  },
];

export default function Faq03() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="text-xs font-medium text-violet-300">KNOWLEDGE BASE</p>
          <h2 className="mt-3 text-3xl font-semibold">Common questions</h2>
        </div>

        <div className="space-y-8">
          {groups.map((group) => (
            <div key={group.title}>
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-medium text-zinc-200">{group.title}</h3>
                <span className="rounded-full border border-white/[0.06] px-2 py-1 text-[10px] text-zinc-600">
                  {group.items.length} topics
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-white/[0.07]">
                {group.items.map(([q, a]) => {
                  const id = `${group.title}-${q}`;
                  const active = open === id;

                  return (
                    <div key={id} className="border-b border-white/[0.06] last:border-0">
                      <button
                        onClick={() => setOpen(active ? null : id)}
                        className="flex w-full items-center justify-between px-5 py-4 text-left"
                      >
                        <span className="text-sm text-zinc-300">{q}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-zinc-600 transition ${
                            active ? "rotate-180 text-violet-300" : ""
                          }`}
                        />
                      </button>

                      {active && (
                        <p className="px-5 pb-5 text-sm leading-6 text-zinc-500">
                          {a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3 text-xs text-zinc-500">
          <MessageCircle className="h-4 w-4 text-violet-300" />
          Can't find what you're looking for?
        </div>
      </div>
    </section>
  );
}