"use client";

import { Check, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  step: number;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface List17Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    step: 1,
    title: "Create your account",
    description: "Set up your basic account information.",
    status: "completed",
  },
  {
    id: "2",
    step: 2,
    title: "Customize your workspace",
    description: "Configure your workspace for your team.",
    status: "current",
  },
  {
    id: "3",
    step: 3,
    title: "Invite your team",
    description: "Bring your teammates into the workspace.",
    status: "upcoming",
  },
  {
    id: "4",
    step: 4,
    title: "Start building",
    description: "Everything is ready. Start creating.",
    status: "upcoming",
  },
];

export default function List17({
  items = defaultItems,
  className,
}: List17Props) {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-white/[0.08] bg-[#09090B] p-5 sm:p-6",
        className,
      )}
    >
      <div className="mb-6">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          Getting Started
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          Setup progress
        </h3>
      </div>

      <div>
        {items.map((item, index) => {
          const completed = item.status === "completed";
          const current = item.status === "current";

          return (
            <div key={item.id} className="relative flex gap-4">
              {index !== items.length - 1 && (
                <div
                  className={cn(
                    "absolute left-[15px] top-8 h-[calc(100%-8px)] w-px",
                    completed ? "bg-violet-500/50" : "bg-white/[0.08]",
                  )}
                />
              )}

              <div
                className={cn(
                  "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs",
                  completed &&
                    "border-violet-400/30 bg-violet-500/10 text-violet-300",
                  current &&
                    "border-white/20 bg-white text-black",
                  !completed &&
                    !current &&
                    "border-white/[0.08] bg-white/[0.02] text-zinc-600",
                )}
              >
                {completed ? (
                  <Check className="h-3.5 w-3.5" />
                ) : current ? (
                  item.step
                ) : (
                  <Circle className="h-3 w-3 fill-current" />
                )}
              </div>

              <div
                className={cn(
                  "pb-7",
                  index === items.length - 1 && "pb-0",
                )}
              >
                <div className="flex items-center gap-2">
                  <h4
                    className={cn(
                      "text-sm font-medium",
                      current || completed
                        ? "text-zinc-100"
                        : "text-zinc-500",
                    )}
                  >
                    {item.title}
                  </h4>

                  {current && (
                    <span className="rounded-full bg-violet-500/[0.10] px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-violet-300">
                      Current
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
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