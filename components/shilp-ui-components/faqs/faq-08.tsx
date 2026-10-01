"use client";

import { useState } from "react";
import { Check, Layers3 } from "lucide-react";
import { cn } from "@/lib/utils";

const groups = {
  General: [
    ["What is Shilp?", "A reusable component system for modern applications."],
    ["Who is it for?", "Developers and teams building polished React interfaces."],
    ["Is it responsive?", "Yes. Components adapt to different screen sizes."],
  ],
  Design: [
    ["What style does Shilp use?", "A premium dark aesthetic with subtle glass surfaces and violet accents."],
    ["Can I customize it?", "Yes. Tailwind utilities make the visual system easy to adapt."],
  ],
  Development: [
    ["Can I copy individual components?", "Yes. Components are intentionally modular."],
    ["Does it work with Next.js?", "Yes. The components are suitable for Next.js applications."],
  ],
};

export default function Faq08() {
  const [tab, setTab] = useState<keyof typeof groups>("General");

  return (
    <section className="w-full bg-[#050506] px-4 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs text-violet-300">
              <Layers3 className="h-4 w-4" />
              FAQ Library
            </div>
            <h2 className="text-3xl font-semibold">Explore by topic</h2>
          </div>

          <div className="flex rounded-full border border-white/[0.07] bg-white/[0.02] p-1">
            {Object.keys(groups).map((item) => (
              <button
                key={item}
                onClick={() => setTab(item as keyof typeof groups)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs transition",
                  tab === item
                    ? "bg-white text-black"
                    : "text-zinc-600 hover:text-zinc-300"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {groups[tab].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition hover:border-white/[0.12]"
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06]">
                <Check className="h-3.5 w-3.5 text-violet-300" />
              </div>
              <h3 className="text-sm font-medium text-zinc-200">{q}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}