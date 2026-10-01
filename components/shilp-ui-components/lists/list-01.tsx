"use client";

import { cn } from "@/lib/utils";
import { MessageSquare, type LucideIcon, Music, Store } from "lucide-react";

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  iconStyle: string;
  time: string;
  badge?: {
    text: string;
    variant: "pink" | "indigo" | "orange";
  };
  starred?: boolean;
}

interface List01Props {
  items?: ListItem[];
  className?: string;
}

const iconStyles = {
  music:
    "bg-violet-400/10 text-violet-300 border-violet-400/15",
  store:
    "bg-indigo-400/10 text-indigo-300 border-indigo-400/15",
  message:
    "bg-emerald-400/10 text-emerald-400 border-emerald-400/15",
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "iMessage",
    description: 'John sent you a message: "Hey, what do you think about..."',
    icon: MessageSquare,
    iconStyle: "message",
    time: "now",
    badge: { text: "New", variant: "orange" },
  },
  {
    id: "2",
    title: "Apple Music",
    description: "Your Daily Mix is ready with 25 new songs",
    icon: Music,
    iconStyle: "music",
    time: "2 min ago",
    badge: { text: "Music", variant: "pink" },
  },
  {
    id: "3",
    title: "App Store",
    description: "Figma has been updated to version 2.0",
    icon: Store,
    iconStyle: "store",
    time: "5 min ago",
    badge: { text: "Update", variant: "indigo" },
  },
];

const badgeVariants = {
  pink: "bg-violet-400/10 text-violet-300 border-violet-400/10",
  indigo: "bg-indigo-400/10 text-indigo-300 border-indigo-400/10",
  orange: "bg-amber-400/10 text-amber-300 border-amber-400/10",
};

export default function List01({ items = ITEMS, className }: List01Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#09090B]/90 p-2",
        "backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              "group flex items-start gap-4 rounded-xl p-4",
              "border border-transparent",
              "transition-all duration-200",
              "hover:border-white/[0.06] hover:bg-white/[0.025]",
            )}
          >
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-xl border",
                iconStyles[item.iconStyle as keyof typeof iconStyles],
              )}
            >
              <item.icon className="size-4.5" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm font-medium text-zinc-100">
                  {item.title}
                </h3>

                {item.badge && (
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                      badgeVariants[item.badge.variant],
                    )}
                  >
                    {item.badge.text}
                  </span>
                )}
              </div>

              {item.description && (
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-500">
                  {item.description}
                </p>
              )}

              <span className="mt-2 block text-[10px] uppercase tracking-[0.08em] text-zinc-700">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}