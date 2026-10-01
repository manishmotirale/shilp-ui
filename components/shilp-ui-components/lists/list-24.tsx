"use client";

import {
  FileCode2,
  FileImage,
  FileText,
  MoreHorizontal,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FileItem {
  id: string;
  name: string;
  type: "code" | "document" | "image";
  size: string;
  modified: string;
  starred?: boolean;
}

interface List24Props {
  items?: FileItem[];
  className?: string;
}

const defaultItems: FileItem[] = [
  {
    id: "1",
    name: "dashboard.tsx",
    type: "code",
    size: "12 KB",
    modified: "Today, 2:42 PM",
    starred: true,
  },
  {
    id: "2",
    name: "Project Documentation.pdf",
    type: "document",
    size: "2.4 MB",
    modified: "Today, 11:20 AM",
  },
  {
    id: "3",
    name: "hero-banner.png",
    type: "image",
    size: "846 KB",
    modified: "Yesterday",
    starred: true,
  },
  {
    id: "4",
    name: "README.md",
    type: "document",
    size: "8 KB",
    modified: "Sep 28, 2026",
  },
];

const fileIcons = {
  code: FileCode2,
  document: FileText,
  image: FileImage,
};

export default function List24({
  items = defaultItems,
  className,
}: List24Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
            Workspace
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Recent files
          </h3>
        </div>

        <span className="text-[10px] text-zinc-600">
          {items.length} files
        </span>
      </div>

      <div className="hidden grid-cols-[minmax(0,2fr)_1fr_1fr_40px] border-b border-white/[0.05] px-5 py-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-700 sm:grid">
        <span>Name</span>
        <span>Size</span>
        <span>Modified</span>
        <span />
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => {
          const Icon = fileIcons[item.type];

          return (
            <div
              key={item.id}
              className="group grid grid-cols-[minmax(0,1fr)_40px] items-center gap-3 px-5 py-3.5 transition hover:bg-white/[0.025] sm:grid-cols-[minmax(0,2fr)_1fr_1fr_40px]"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-500 transition group-hover:border-violet-400/[0.15] group-hover:text-violet-300">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-300">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-700 sm:hidden">
                    {item.size} · {item.modified}
                  </p>
                </div>
              </div>

              <span className="hidden text-xs text-zinc-600 sm:block">
                {item.size}
              </span>

              <span className="hidden text-xs text-zinc-600 sm:block">
                {item.modified}
              </span>

              <div className="flex items-center justify-end gap-1">
                {item.starred && (
                  <Star className="h-3.5 w-3.5 fill-violet-300 text-violet-300" />
                )}

                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-700 opacity-0 transition hover:bg-white/[0.05] hover:text-white group-hover:opacity-100"
                  aria-label={`More options for ${item.name}`}
                >
                  <MoreHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}