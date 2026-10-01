"use client";

import { useMemo, useState } from "react";
import { ChevronRight, Search, LifeBuoy } from "lucide-react";

const faqs = [
  ["How do I get started with Shilp?", "Choose a component, copy it into your project and customize it to your needs."],
  ["Can I use Shilp with Tailwind?", "Yes. Tailwind is central to the component styling."],
  ["Are the components accessible?", "The interactive components use standard buttons, inputs and keyboard-friendly controls."],
  ["Where are the components located?", "Keep your components organized in your project's preferred component directory."],
  ["Can I create my own components?", "Absolutely. Follow the Shilp visual language to extend the library."],
];

export default function Faq09() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      faqs.filter(([q, a]) =>
        `${q} ${a}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
          <div className="flex items-center gap-2 text-xs text-violet-300">
            <LifeBuoy className="h-4 w-4" />
            Help Center
          </div>
          <h2 className="mt-3 text-3xl font-semibold">How can we help?</h2>

          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the help center..."
              className="h-12 w-full rounded-xl border border-white/[0.08] bg-black/20 pl-11 pr-4 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-violet-400/40"
            />
          </div>
        </div>

        <div className="space-y-1">
          {filtered.map(([q, a], index) => {
            const active = open === index;

            return (
              <div key={q} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="group flex w-full items-center gap-4 py-5 text-left"
                >
                  <ChevronRight
                    className={`h-4 w-4 text-zinc-700 transition ${
                      active ? "rotate-90 text-violet-300" : "group-hover:text-zinc-400"
                    }`}
                  />
                  <span className="text-sm text-zinc-300">{q}</span>
                </button>

                {active && (
                  <p className="pb-5 pl-8 text-sm leading-6 text-zinc-500">{a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}