"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  Info,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface StackedItem {
  id: string;
  title: string;
  message: string;
  time: string;
}

interface Alert06Props {
  items?: StackedItem[];
  onDismiss?: (id: string) => void;
  onDismissAll?: () => void;
  className?: string;
}

const defaultItems: StackedItem[] = [
  {
    id: "1",
    title: "Deployment complete",
    message: "Production deployment finished successfully.",
    time: "2m ago",
  },
  {
    id: "2",
    title: "New pull request",
    message: "A new pull request needs your review.",
    time: "8m ago",
  },
  {
    id: "3",
    title: "Build completed",
    message: "Your latest build completed successfully.",
    time: "14m ago",
  },
];

export default function Alert06({
  items = defaultItems,
  onDismiss,
  onDismissAll,
  className,
}: Alert06Props) {
  const [expanded, setExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(items);
  const [exitingId, setExitingId] = useState<string | null>(null);

  const displayedItems = expanded
    ? visibleItems
    : visibleItems.slice(0, 2);

  const handleDismiss = (id: string) => {
    setExitingId(id);

    setTimeout(() => {
      setVisibleItems((current) =>
        current.filter((item) => item.id !== id)
      );
      setExitingId(null);
      onDismiss?.(id);
    }, 200);
  };

  const handleDismissAll = () => {
    setVisibleItems([]);
    onDismissAll?.();
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0F] shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/15 bg-violet-500/[0.08]">
            <Bell className="h-4 w-4 text-violet-300" />
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">
              Notifications
            </h3>

            <p className="text-[9px] uppercase tracking-[0.14em] text-zinc-700">
              {visibleItems.length} unread
            </p>
          </div>
        </div>

        {visibleItems.length > 0 && (
          <button
            type="button"
            onClick={handleDismissAll}
            className="text-xs text-zinc-600 transition hover:text-zinc-300"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="divide-y divide-white/[0.05]">
        {displayedItems.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex gap-3 p-4 transition-all duration-200",
              exitingId === item.id
                ? "translate-x-3 opacity-0"
                : "translate-x-0 opacity-100"
            )}
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025]">
              <Info className="h-4 w-4 text-violet-300" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-xs font-medium text-zinc-200">
                  {item.title}
                </h4>

                <span className="shrink-0 text-[10px] text-zinc-700">
                  {item.time}
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {item.message}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleDismiss(item.id)}
              aria-label={`Dismiss ${item.title}`}
              className="shrink-0 self-start rounded-full p-1 text-zinc-700 transition hover:bg-white/[0.05] hover:text-zinc-300"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {visibleItems.length > 2 && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="flex w-full items-center justify-center gap-1.5 border-t border-white/[0.06] py-3 text-xs text-zinc-600 transition hover:bg-white/[0.025] hover:text-zinc-300"
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Show more
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}