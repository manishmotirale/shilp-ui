"use client";

import { cn } from "@/lib/utils";
import { Bell, Calendar, Mail, type LucideIcon } from "lucide-react";

interface ListItem {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  time: string;
  unread?: boolean;
}

interface List02Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "New email received",
    description: "Sarah sent you a project update",
    icon: Mail,
    time: "Just now",
    unread: true,
  },
  {
    id: "2",
    title: "Meeting reminder",
    description: "Team standup in 15 minutes",
    icon: Calendar,
    time: "15 min",
    unread: true,
  },
  {
    id: "3",
    title: "System notification",
    description: "Your backup completed successfully",
    icon: Bell,
    time: "1 hour ago",
    unread: false,
  },
];

export default function List02({ items = ITEMS, className }: List02Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]",
        "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "group flex items-center gap-3 p-4",
            "transition-colors duration-200",
            "hover:bg-white/[0.025]",
            index !== items.length - 1 && "border-b border-white/[0.06]",
            item.unread && "bg-violet-400/[0.025]",
          )}
        >
          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-xl border",
              item.unread
                ? "border-violet-400/20 bg-violet-400/10 text-violet-300"
                : "border-white/[0.06] bg-white/[0.025] text-zinc-500",
            )}
          >
            <item.icon className="size-4" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3
                className={cn(
                  "truncate text-sm",
                  item.unread
                    ? "font-medium text-zinc-100"
                    : "font-normal text-zinc-400",
                )}
              >
                {item.title}
              </h3>

              {item.unread && (
                <span className="size-1.5 shrink-0 rounded-full bg-violet-400" />
              )}
            </div>

            {item.description && (
              <p className="mt-0.5 truncate text-xs text-zinc-600">
                {item.description}
              </p>
            )}
          </div>

          <span className="shrink-0 text-[10px] text-zinc-700">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}