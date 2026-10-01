"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const faqs = [
  ["Why was Shilp created?", "To provide a consistent visual foundation for modern React products."],
  ["What makes a good Shilp component?", "Clear purpose, restrained styling, useful interaction and strong visual hierarchy."],
  ["Can I extend the system?", "Yes. New components should follow the same design principles without becoming repetitive."],
  ["Is the system only for dark mode?", "The core identity is dark, but the components can be adapted."],
];

export default function Faq12() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-xs text-violet-300">INTERACTIVE FAQ</p>
          <h2 className="mt-2 text-3xl font-semibold">Choose a question.</h2>
        </div>

        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {faqs.map(([q, a], index) => (
            <button
              key={q}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className="group grid w-full grid-cols-[1fr_auto] gap-6 py-5 text-left"
            >
              <div>
                <p
                  className={`text-sm transition ${
                    active === index ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  {q}
                </p>

                {active === index && (
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                    {a}
                  </p>
                )}
              </div>

              <ArrowRight
                className={`mt-0.5 h-4 w-4 transition ${
                  active === index
                    ? "translate-x-1 text-violet-300"
                    : "text-zinc-700 group-hover:text-zinc-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}