"use client";

import { useState } from "react";

const faqs = [
  ["Can I customize every component?", "Yes. Components are intentionally designed to be modified.",],
  ["Is Shilp responsive?", "Yes. Responsive layouts are part of the component system.",],
  ["Does Shilp require a design system?", "No. Shilp itself provides the visual foundation.",],
  ["Can I use the components independently?", "Yes. Each component is designed to stand on its own.",],
];

export default function Faq10() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <p className="font-mono text-xs text-violet-300">FAQ / 04</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight">
            Frequently asked.
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map(([q, a], index) => {
            const active = open === index;

            return (
              <button
                key={q}
                onClick={() => setOpen(index)}
                className="group grid w-full grid-cols-[48px_1fr] border-t border-white/[0.07] py-6 text-left"
              >
                <span className={`font-mono text-xs ${active ? "text-violet-300" : "text-zinc-700"}`}>
                  0{index + 1}
                </span>

                <div>
                  <h3 className={`text-lg transition ${active ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"}`}>
                    {q}
                  </h3>

                  {active && (
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-500">
                      {a}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}