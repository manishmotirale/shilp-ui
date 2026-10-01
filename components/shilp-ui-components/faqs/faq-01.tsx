"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Getting Started", "Billing", "Features", "Support"];

const faqs = [
  { q: "What is Shilp UI?", a: "Shilp UI is a premium React component library designed around a refined dark interface system.", c: "Getting Started" },
  { q: "How do I install Shilp UI?", a: "Install the required dependencies and copy the component into your project.", c: "Getting Started" },
  { q: "Can I customize the components?", a: "Yes. Components are designed to be easily customized with Tailwind CSS.", c: "Features" },
  { q: "Do you offer a free version?", a: "Yes. Core components can be used freely in your projects.", c: "Billing" },
  { q: "Can I use Shilp in production?", a: "Yes. The components are designed for real-world applications and production interfaces.", c: "Features" },
  { q: "Where can I get support?", a: "Use the project documentation or contact the support team for help.", c: "Support" },
];

export default function Faq01() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [open, setOpen] = useState<number | null>(0);

  const filtered = useMemo(
    () =>
      faqs.filter(
        (item) =>
          (category === "All" || item.c === category) &&
          `${item.q} ${item.a}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query, category]
  );

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
            <SlidersHorizontal className="h-3.5 w-3.5 text-violet-300" />
            Help Center
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions..."
              className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-11 pr-4 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-600 focus:border-violet-400/40 focus:bg-white/[0.04]"
            />
          </div>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={cn(
                "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs transition",
                category === item
                  ? "border-violet-400/30 bg-violet-400/10 text-violet-200"
                  : "border-white/[0.07] bg-white/[0.02] text-zinc-500 hover:border-white/[0.12] hover:text-zinc-300"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018]">
          {filtered.map((item, index) => (
            <div key={item.q} className="border-b border-white/[0.06] last:border-0">
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
              >
                <span className="text-sm font-medium text-zinc-200">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-zinc-600 transition-transform",
                    open === index && "rotate-180 text-violet-300"
                  )}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 pr-12 text-sm leading-6 text-zinc-500">
                  {item.a}
                </div>
              )}
            </div>
          ))}

          {!filtered.length && (
            <div className="px-5 py-12 text-center text-sm text-zinc-600">
              No questions found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}