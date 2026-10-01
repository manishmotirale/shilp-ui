"use client";

import { LucideIcon, ShieldCheck, Zap, Globe2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

interface List12Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    title: "Lightning Fast",
    description: "Optimized for speed with instant interactions and smooth rendering.",
    icon: Zap,
  },
  {
    id: "2",
    title: "Enterprise Security",
    description: "Secure infrastructure and thoughtful defaults built for production.",
    icon: ShieldCheck,
  },
  {
    id: "3",
    title: "Global CDN",
    description: "Deliver your content quickly to users around the world.",
    icon: Globe2,
  },
  {
    id: "4",
    title: "AI Powered",
    description: "Intelligent workflows that help you build and move faster.",
    icon: Sparkles,
  },
];

export default function List12({
  items = defaultItems,
  className,
}: List12Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          Features
        </p>
        <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
          Built for modern products
        </h3>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="group flex gap-4 px-5 py-5 transition hover:bg-white/[0.025]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/[0.15] bg-violet-500/[0.07] text-violet-300 transition group-hover:border-violet-400/[0.25] group-hover:bg-violet-500/[0.10]">
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0">
                <h4 className="text-sm font-medium text-zinc-100">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}