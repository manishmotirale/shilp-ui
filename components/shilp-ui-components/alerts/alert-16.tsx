"use client";

import { useState } from "react";
import {
  Activity,
  MoreHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityItem {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
  time: string;
}

interface Alert16Props {
  title?: string;
  activities?: ActivityItem[];
  onViewAll?: () => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultActivities: ActivityItem[] = [
  {
    id: "1",
    user: "Sarah Chen",
    avatar: "https://i.pravatar.cc/100?img=47",
    action: "updated",
    target: "Dashboard settings",
    time: "2 min ago",
  },
  {
    id: "2",
    user: "Mike Ross",
    avatar: "https://i.pravatar.cc/100?img=12",
    action: "created",
    target: "New project",
    time: "18 min ago",
  },
  {
    id: "3",
    user: "Emma Wilson",
    avatar: "https://i.pravatar.cc/100?img=32",
    action: "commented on",
    target: "Design review",
    time: "42 min ago",
  },
];

export default function Alert16({
  title = "Recent activity",
  activities = defaultActivities,
  onViewAll,
  onDismiss,
  className,
}: Alert16Props) {
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
      role="log"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-2xl",
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
          <Activity className="size-4 text-violet-300" />
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

      <div className="divide-y divide-white/[0.05]">
        {activities.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-white/[0.02]"
          >
            <img
              src={item.avatar}
              alt=""
              className="size-8 shrink-0 rounded-full border border-white/[0.08] object-cover"
            />

            <div className="min-w-0 flex-1">
              <p className="text-sm leading-5 text-zinc-300">
                <span className="font-medium text-zinc-100">{item.user}</span>{" "}
                {item.action}{" "}
                <span className="text-zinc-400">{item.target}</span>
              </p>

              <p className="mt-0.5 text-[11px] text-zinc-600">{item.time}</p>
            </div>

            <button
              aria-label={`More options for ${item.user}`}
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-zinc-700 opacity-0 transition group-hover:opacity-100 hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
            >
              <MoreHorizontal className="size-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.06] p-3">
        <button
          onClick={onViewAll}
          className="w-full rounded-xl border border-white/[0.06] bg-white/[0.025] py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
        >
          View all activity
        </button>
      </div>
    </div>
  );
}