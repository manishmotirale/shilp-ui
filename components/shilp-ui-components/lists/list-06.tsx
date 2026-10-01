"use client";

import { cn } from "@/lib/utils";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

interface ListItem {
  id: string;
  label: string;
  value: string;
  change: number;
  trend: "up" | "down" | "neutral";
}

interface List06Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    label: "Total Revenue",
    value: "$48,352",
    change: 12.5,
    trend: "up",
  },
  {
    id: "2",
    label: "Active Users",
    value: "2,847",
    change: -3.2,
    trend: "down",
  },
  {
    id: "3",
    label: "Conversion Rate",
    value: "3.24%",
    change: 0,
    trend: "neutral",
  },
  {
    id: "4",
    label: "Avg. Session",
    value: "4m 23s",
    change: 8.1,
    trend: "up",
  },
];

const trendConfig = {
  up: {
    icon: ArrowUpRight,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/10",
  },
  down: {
    icon: ArrowDownRight,
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/10",
  },
  neutral: {
    icon: Minus,
    color: "text-zinc-500",
    bg: "bg-white/[0.035] border-white/[0.06]",
  },
};

export default function List06({ items = ITEMS, className }: List06Props) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-md grid-cols-2 gap-2",
        className,
      )}
    >
      {items.map((item) => {
        const config = trendConfig[item.trend];
        const TrendIcon = config.icon;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border border-white/[0.07]",
              "bg-[#0C0C0F] p-5",
              "transition-all duration-200",
              "hover:border-white/[0.12] hover:bg-white/[0.025]",
            )}
          >
            <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-600">
              {item.label}
            </p>

            <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
              {item.value}
            </p>

            <div
              className={cn(
                "mt-4 inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] font-medium",
                config.bg,
                config.color,
              )}
            >
              <TrendIcon className="size-3.5" />
              <span>{Math.abs(item.change)}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}