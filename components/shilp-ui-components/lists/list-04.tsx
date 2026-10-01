"use client";

import { cn } from "@/lib/utils";
import { MoreHorizontal, Star } from "lucide-react";
import { useState } from "react";

interface ListItem {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  starred?: boolean;
}

interface List04Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    name: "Emma Wilson",
    email: "emma@company.com",
    avatar: "EW",
    role: "Product Designer",
    starred: true,
  },
  {
    id: "2",
    name: "James Chen",
    email: "james@company.com",
    avatar: "JC",
    role: "Senior Developer",
    starred: false,
  },
  {
    id: "3",
    name: "Sofia Martinez",
    email: "sofia@company.com",
    avatar: "SM",
    role: "Marketing Lead",
    starred: true,
  },
];

export default function List04({ items = ITEMS, className }: List04Props) {
  const [starredItems, setStarredItems] = useState<Record<string, boolean>>(
    items.reduce(
      (acc, item) => ({
        ...acc,
        [item.id]: item.starred ?? false,
      }),
      {},
    ),
  );

  const toggleStar = (id: string) => {
    setStarredItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl space-y-2", className)}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "group flex items-center gap-3 rounded-2xl p-3.5",
            "border border-white/[0.07]",
            "bg-[#0C0C0F]",
            "transition-all duration-200",
            "hover:border-white/[0.12] hover:bg-white/[0.025]",
          )}
        >
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-violet-400/15 bg-violet-400/10 text-xs font-semibold text-violet-300">
            {item.avatar}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-medium text-zinc-100">
              {item.name}
            </h3>
            <p className="truncate text-xs text-zinc-600">{item.email}</p>
          </div>

          <span className="hidden rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-zinc-500 sm:block">
            {item.role}
          </span>

          <div className="flex items-center gap-0.5">
            <button
              onClick={() => toggleStar(item.id)}
              aria-label={starredItems[item.id] ? "Unstar" : "Star"}
              className={cn(
                "flex size-8 items-center justify-center rounded-full transition-colors",
                starredItems[item.id]
                  ? "text-amber-400"
                  : "text-zinc-700 hover:bg-white/[0.05] hover:text-zinc-400",
              )}
            >
              <Star
                className="size-4"
                fill={starredItems[item.id] ? "currentColor" : "none"}
              />
            </button>

            <button
              aria-label={`More options for ${item.name}`}
              className="flex size-8 items-center justify-center rounded-full text-zinc-700 opacity-0 transition-all hover:bg-white/[0.05] hover:text-zinc-300 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none"
            >
              <MoreHorizontal className="size-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}