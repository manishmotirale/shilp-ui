"use client";

import { useState } from "react";
import { Code2, Palette, LifeBuoy, ChevronDown } from "lucide-react";

const topics = [
  {
    title: "Development",
    icon: Code2,
    items: [
      ["Can I use Shilp with Next.js?", "Yes. Shilp works naturally with React and Next.js applications."],
      ["Can I customize components?", "Yes. Components are built to be edited and extended."],
    ],
  },
  {
    title: "Design",
    icon: Palette,
    items: [
      ["What is the Shilp style?", "Premium dark surfaces, refined typography and restrained violet accents."],
      ["Can I change the accent?", "Yes. The accent can be adapted to your product identity."],
    ],
  },
  {
    title: "Support",
    icon: LifeBuoy,
    items: [
      ["Where can I find help?", "Use the documentation and project support resources."],
      ["Can I request a component?", "Yes. Component requirements can be documented and added to the system."],
    ],
  },
];

export default function Faq11() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Explore by topic</h2>
          <p className="mt-3 text-sm text-zinc-600">
            Everything organized around how you build.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                key={topic.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                  <Icon className="h-4 w-4 text-violet-300" />
                </div>

                <h3 className="text-sm font-medium text-white">{topic.title}</h3>

                <div className="mt-5 space-y-1">
                  {topic.items.map(([q, a]) => {
                    const id = `${topic.title}-${q}`;
                    const active = open === id;

                    return (
                      <div key={id} className="border-t border-white/[0.06]">
                        <button
                          onClick={() => setOpen(active ? null : id)}
                          className="flex w-full items-center justify-between py-4 text-left"
                        >
                          <span className="pr-3 text-xs text-zinc-400">{q}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 shrink-0 text-zinc-700 transition ${
                              active ? "rotate-180 text-violet-300" : ""
                            }`}
                          />
                        </button>

                        {active && (
                          <p className="pb-4 text-xs leading-5 text-zinc-600">{a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}