"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricData {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

interface Alert14Props {
  title?: string;
  metrics?: MetricData[];
  onViewDetails?: () => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultMetrics: MetricData[] = [
  {
    label: "Revenue",
    value: "$12.4K",
    change: "+12.5%",
    trend: "up",
  },
  {
    label: "Users",
    value: "2,340",
    change: "+8.2%",
    trend: "up",
  },
  {
    label: "Bounce Rate",
    value: "24%",
    change: "-3.1%",
    trend: "down",
  },
];

export default function Alert14({
  title = "Analytics Overview",
  metrics = defaultMetrics,
  onViewDetails,
  onDismiss,
  className,
}: Alert14Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-xl overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
        <div className="flex size-8 items-center justify-center rounded-full border border-violet-400/15 bg-violet-400/10">
          <BarChart3 className="size-4 text-violet-300" />
        </div>

        <h3 className="flex-1 text-sm font-medium text-zinc-100">{title}</h3>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="flex size-7 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 divide-y divide-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {metrics.map((metric) => {
          const isUp = metric.trend === "up";
          const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight;

          return (
            <div key={metric.label} className="p-5">
              <p className="text-[11px] uppercase tracking-[0.12em] text-zinc-600">
                {metric.label}
              </p>

              <p className="mt-2 text-xl font-semibold tracking-tight text-white">
                {metric.value}
              </p>

              <div
                className={cn(
                  "mt-2 inline-flex items-center gap-1 text-xs font-medium",
                  isUp ? "text-emerald-400" : "text-emerald-400",
                )}
              >
                <TrendIcon className="size-3.5" />
                {metric.change}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3">
        <p className="text-xs text-zinc-600">Updated just now</p>

        <button
          onClick={onViewDetails}
          className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
        >
          View details
        </button>
      </div>
    </div>
  );
}