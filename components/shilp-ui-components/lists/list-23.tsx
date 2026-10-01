"use client";

import { Bell, Check, CheckCheck, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  type: "update" | "mention" | "system" | "success";
}

interface List23Props {
  items?: NotificationItem[];
  className?: string;
}

const defaultItems: NotificationItem[] = [
  {
    id: "1",
    title: "New component update",
    message: "Shilp UI 2.4 introduces 12 new components.",
    time: "5 min ago",
    unread: true,
    type: "update",
  },
  {
    id: "2",
    title: "You were mentioned",
    message: "Priya mentioned you in Dashboard redesign.",
    time: "32 min ago",
    unread: true,
    type: "mention",
  },
  {
    id: "3",
    title: "Deployment successful",
    message: "Production deployment completed without errors.",
    time: "2 hours ago",
    unread: false,
    type: "success",
  },
  {
    id: "4",
    title: "System maintenance",
    message: "Scheduled maintenance starts tonight at 2:00 AM.",
    time: "Yesterday",
    unread: false,
    type: "system",
  },
];

export default function List23({
  items = defaultItems,
  className,
}: List23Props) {
  const [notifications, setNotifications] = useState(items);

  const markRead = (id: string) => {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: false } : item,
      ),
    );
  };

  const markAllRead = () => {
    setNotifications((current) =>
      current.map((item) => ({ ...item, unread: false })),
    );
  };

  const unreadCount = notifications.filter(
    (item) => item.unread,
  ).length;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/[0.15] bg-violet-500/[0.07] text-violet-300">
            <Bell className="h-4 w-4" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-white">
                Notifications
              </h3>

              {unreadCount > 0 && (
                <span className="rounded-full bg-violet-500 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                  {unreadCount}
                </span>
              )}
            </div>

            <p className="mt-0.5 text-[10px] text-zinc-600">
              Stay up to date
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={markAllRead}
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
        >
          <CheckCheck className="h-3 w-3" />
          Mark all read
        </button>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={cn(
              "group relative flex gap-3 px-5 py-4 transition",
              item.unread
                ? "bg-violet-500/[0.025]"
                : "hover:bg-white/[0.02]",
            )}
          >
            {item.unread && (
              <span className="absolute bottom-0 left-0 top-0 w-0.5 bg-violet-400" />
            )}

            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.025] text-zinc-500">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  item.type === "success"
                    ? "bg-emerald-400"
                    : item.type === "system"
                      ? "bg-amber-400"
                      : "bg-violet-400",
                )}
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <p
                  className={cn(
                    "text-sm",
                    item.unread
                      ? "font-semibold text-zinc-100"
                      : "font-medium text-zinc-400",
                  )}
                >
                  {item.title}
                </p>

                <span className="shrink-0 text-[10px] text-zinc-600">
                  {item.time}
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-zinc-600">
                {item.message}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100">
              {item.unread && (
                <button
                  type="button"
                  onClick={() => markRead(item.id)}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-white/[0.05] hover:text-white"
                  aria-label="Mark as read"
                >
                  <Check className="h-3.5 w-3.5" />
                </button>
              )}

              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-white/[0.05] hover:text-white"
                aria-label="Dismiss notification"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}