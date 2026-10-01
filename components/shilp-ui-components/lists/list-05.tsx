"use client";

import { cn } from "@/lib/utils";
import {
  Download,
  File,
  FileText,
  Film,
  Image,
  Trash2,
  type LucideIcon,
} from "lucide-react";

interface ListItem {
  id: string;
  name: string;
  size: string;
  type: "document" | "image" | "video" | "other";
  date: string;
}

interface List05Props {
  items?: ListItem[];
  className?: string;
}

const typeConfig: Record<
  string,
  { icon: LucideIcon; bg: string; color: string }
> = {
  document: {
    icon: FileText,
    bg: "bg-violet-400/10 border-violet-400/15",
    color: "text-violet-300",
  },
  image: {
    icon: Image,
    bg: "bg-indigo-400/10 border-indigo-400/15",
    color: "text-indigo-300",
  },
  video: {
    icon: Film,
    bg: "bg-amber-400/10 border-amber-400/15",
    color: "text-amber-300",
  },
  other: {
    icon: File,
    bg: "bg-white/[0.035] border-white/[0.06]",
    color: "text-zinc-500",
  },
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    name: "Project_Proposal.pdf",
    size: "2.4 MB",
    type: "document",
    date: "Today",
  },
  {
    id: "2",
    name: "Design_Assets.zip",
    size: "156 MB",
    type: "image",
    date: "Yesterday",
  },
  {
    id: "3",
    name: "Demo_Recording.mp4",
    size: "89 MB",
    type: "video",
    date: "Mar 12",
  },
];

export default function List05({ items = ITEMS, className }: List05Props) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600">
          Files
        </p>
        <h2 className="mt-1 text-sm font-medium text-zinc-100">
          Recent files
        </h2>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => {
          const config = typeConfig[item.type];
          const TypeIcon = config.icon;

          return (
            <div
              key={item.id}
              className="group flex items-center gap-4 p-4 transition-colors hover:bg-white/[0.025]"
            >
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-xl border",
                  config.bg,
                )}
              >
                <TypeIcon className={cn("size-4.5", config.color)} />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-medium text-zinc-200">
                  {item.name}
                </h3>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-[11px] text-zinc-600">
                    {item.size}
                  </span>

                  <span className="size-0.5 rounded-full bg-zinc-700" />

                  <span className="text-[11px] text-zinc-600">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
                <button
                  aria-label={`Download ${item.name}`}
                  className="flex size-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300"
                >
                  <Download className="size-4" />
                </button>

                <button
                  aria-label={`Delete ${item.name}`}
                  className="flex size-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-red-400/10 hover:text-red-400"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}