"use client";

import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Code2,
  GitBranch,
  MessageSquare,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface ListItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  meta: string;
  accent?: "violet" | "emerald" | "amber";
}

interface List10Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "New component generated",
    description: "Created a responsive pricing card with Shilp styling.",
    icon: Sparkles,
    meta: "2 min ago",
    accent: "violet",
  },
  {
    id: "2",
    title: "Pull request updated",
    description: "The authentication flow has been updated successfully.",
    icon: GitBranch,
    meta: "18 min ago",
    accent: "emerald",
  },
  {
    id: "3",
    title: "Code review requested",
    description: "A review was requested for the dashboard components.",
    icon: Code2,
    meta: "42 min ago",
    accent: "amber",
  },
  {
    id: "4",
    title: "New message",
    description: "You received a message about the latest UI release.",
    icon: MessageSquare,
    meta: "1 hr ago",
    accent: "violet",
  },
];

const accentStyles = {
  violet: {
    icon: "border-violet-400/15 bg-violet-400/10 text-violet-300",
    dot: "bg-violet-400",
  },
  emerald: {
    icon: "border-emerald-400/15 bg-emerald-400/10 text-emerald-400",
    dot: "bg-emerald-400",
  },
  amber: {
    icon: "border-amber-400/15 bg-amber-400/10 text-amber-400",
    dot: "bg-amber-400",
  },
};

export default function List10({
  items = ITEMS,
  className,
}: List10Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600">
            Workspace
          </p>
          <h2 className="mt-1 text-sm font-medium text-zinc-100">
            Recent activity
          </h2>
        </div>

        <button
          className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[11px] font-medium text-zinc-500 transition hover:bg-white/[0.06] hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
        >
          View all
          <ArrowUpRight className="size-3" />
        </button>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => {
          const Icon = item.icon;
          const accent = accentStyles[item.accent ?? "violet"];

          return (
            <div
              key={item.id}
              className="group flex gap-3.5 p-4 transition-colors hover:bg-white/[0.025]"
            >
              <div
                className={cn(
                  "relative flex size-9 shrink-0 items-center justify-center rounded-xl border",
                  accent.icon,
                )}
              >
                <Icon className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-medium text-zinc-200">
                      {item.title}
                    </h3>

                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-600">
                      {item.description}
                    </p>
                  </div>

                  <span className="shrink-0 text-[10px] text-zinc-700">
                    {item.meta}
                  </span>
                </div>

                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className={cn(
                      "size-1.5 rounded-full",
                      accent.dot,
                    )}
                  />
                  <span className="text-[10px] uppercase tracking-[0.08em] text-zinc-700">
                    Activity
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.06] px-5 py-3">
        <div className="flex size-6 items-center justify-center rounded-full bg-violet-400/10 text-violet-300">
          <Sparkles className="size-3" />
        </div>

        <span className="text-[11px] text-zinc-600">
          Shilp workspace activity
        </span>
      </div>
    </div>
  );
}