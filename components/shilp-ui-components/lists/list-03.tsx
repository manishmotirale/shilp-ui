"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, Check, Clock } from "lucide-react";

interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  status: "completed" | "pending" | "failed";
  progress?: number;
}

interface List03Props {
  items?: ListItem[];
  className?: string;
}

const statusConfig = {
  completed: {
    icon: Check,
    iconClass: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    text: "text-emerald-400",
    label: "Completed",
    bar: "bg-emerald-400",
  },
  pending: {
    icon: Clock,
    iconClass: "border-amber-400/20 bg-amber-400/10 text-amber-400",
    text: "text-amber-400",
    label: "Pending",
    bar: "bg-amber-400",
  },
  failed: {
    icon: AlertCircle,
    iconClass: "border-red-400/20 bg-red-400/10 text-red-400",
    text: "text-red-400",
    label: "Failed",
    bar: "bg-red-400",
  },
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "Database Migration",
    subtitle: "Production server",
    status: "completed",
    progress: 100,
  },
  {
    id: "2",
    title: "API Integration",
    subtitle: "Payment gateway",
    status: "pending",
    progress: 65,
  },
  {
    id: "3",
    title: "SSL Certificate",
    subtitle: "Domain renewal",
    status: "failed",
    progress: 0,
  },
];

export default function List03({ items = ITEMS, className }: List03Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-lg overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {items.map((item, index) => {
        const config = statusConfig[item.status];
        const StatusIcon = config.icon;

        return (
          <div
            key={item.id}
            className={cn(
              "p-5 transition-colors hover:bg-white/[0.02]",
              index !== items.length - 1 && "border-b border-white/[0.06]",
            )}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-xl border",
                    config.iconClass,
                  )}
                >
                  <StatusIcon className="size-4" />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-medium text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-zinc-600">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <span
                className={cn(
                  "shrink-0 text-[10px] font-medium uppercase tracking-[0.08em]",
                  config.text,
                )}
              >
                {config.label}
              </span>
            </div>

            {item.progress !== undefined && (
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    config.bar,
                  )}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}