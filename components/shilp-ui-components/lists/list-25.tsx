"use client";

import {
  ArrowUpRight,
  Clock3,
  Command,
  Search,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface SearchItem {
  id: string;
  query: string;
  category: string;
  time: string;
}

interface List25Props {
  items?: SearchItem[];
  className?: string;
}

const defaultItems: SearchItem[] = [
  {
    id: "1",
    query: "Shilp button components",
    category: "Components",
    time: "2 min ago",
  },
  {
    id: "2",
    query: "Dark dashboard inspiration",
    category: "Design",
    time: "18 min ago",
  },
  {
    id: "3",
    query: "Authentication setup",
    category: "Development",
    time: "1 hour ago",
  },
  {
    id: "4",
    query: "Deployment configuration",
    category: "Projects",
    time: "Yesterday",
  },
];

export default function List25({
  items = defaultItems,
  className,
}: List25Props) {
  const [search, setSearch] = useState("");
  const [recentItems, setRecentItems] = useState(items);

  const filteredItems = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return recentItems;

    return recentItems.filter(
      (item) =>
        item.query.toLowerCase().includes(value) ||
        item.category.toLowerCase().includes(value),
    );
  }, [recentItems, search]);

  const removeItem = (id: string) => {
    setRecentItems((current) =>
      current.filter((item) => item.id !== id),
    );
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] p-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-600" />

          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search anything..."
            className="h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.025] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-violet-400/[0.30] focus:bg-white/[0.04]"
          />

          <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-white/[0.06] hover:text-white"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}

            <span className="hidden items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.025] px-2 py-1 text-[9px] text-zinc-600 sm:flex">
              <Command className="h-2.5 w-2.5" /> K
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <Clock3 className="h-3.5 w-3.5 text-zinc-700" />
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
            Recent searches
          </span>
        </div>

        <span className="text-[10px] text-zinc-700">
          {filteredItems.length} results
        </span>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex items-center gap-3 px-5 py-3.5 transition hover:bg-white/[0.025]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-600 group-hover:border-violet-400/[0.15] group-hover:text-violet-300">
                <Search className="h-3.5 w-3.5" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-zinc-300">
                  {item.query}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[10px] text-violet-300/70">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-zinc-700">
                    {item.time}
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="hidden h-7 w-7 items-center justify-center rounded-full text-zinc-700 transition hover:bg-white/[0.05] hover:text-white sm:flex"
                aria-label={`Open ${item.query}`}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-700 transition hover:bg-white/[0.05] hover:text-white"
                aria-label={`Remove ${item.query}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))
        ) : (
          <div className="px-5 py-10 text-center">
            <Search className="mx-auto h-5 w-5 text-zinc-700" />
            <p className="mt-3 text-sm text-zinc-500">
              No results found
            </p>
            <p className="mt-1 text-xs text-zinc-700">
              Try a different search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}