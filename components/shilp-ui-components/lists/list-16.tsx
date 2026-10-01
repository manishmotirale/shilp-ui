"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  title: string;
  color: string;
}

interface List16Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  { id: "1", title: "React", color: "violet" },
  { id: "2", title: "TypeScript", color: "violet" },
  { id: "3", title: "Next.js", color: "violet" },
  { id: "4", title: "Tailwind", color: "violet" },
];

export default function List16({
  items = defaultItems,
  className,
}: List16Props) {
  const [tags, setTags] = useState(items);
  const [newTag, setNewTag] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const addTag = () => {
    const value = newTag.trim();

    if (!value) return;

    setTags((current) => [
      ...current,
      {
        id: Date.now().toString(),
        title: value,
        color: "violet",
      },
    ]);

    setNewTag("");
    setIsAdding(false);
  };

  const removeTag = (id: string) => {
    setTags((current) => current.filter((tag) => tag.id !== id));
  };

  return (
    <div
      className={cn(
        "w-full rounded-2xl border border-white/[0.08] bg-[#09090B] p-5",
        className,
      )}
    >
      <div className="mb-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          Collection
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          Tags
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.id}
            className="group inline-flex items-center gap-2 rounded-full border border-violet-400/[0.15] bg-violet-500/[0.07] py-1.5 pl-3 pr-1.5 text-xs text-violet-200"
          >
            {tag.title}

            <button
              type="button"
              onClick={() => removeTag(tag.id)}
              className="flex h-5 w-5 items-center justify-center rounded-full text-violet-300/60 transition hover:bg-violet-400/[0.12] hover:text-violet-100"
              aria-label={`Remove ${tag.title}`}
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        {isAdding ? (
          <div className="flex items-center gap-1 rounded-full border border-violet-400/[0.25] bg-white/[0.03] py-1 pl-3 pr-1">
            <input
              autoFocus
              value={newTag}
              onChange={(event) => setNewTag(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") addTag();
                if (event.key === "Escape") {
                  setNewTag("");
                  setIsAdding(false);
                }
              }}
              className="w-24 bg-transparent text-xs text-white outline-none placeholder:text-zinc-700"
              placeholder="New tag"
            />

            <button
              type="button"
              onClick={() => {
                setNewTag("");
                setIsAdding(false);
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full text-zinc-600 hover:text-white"
              aria-label="Cancel"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setIsAdding(true)}
            className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-white/[0.12] px-3 py-1.5 text-xs text-zinc-500 transition hover:border-violet-400/[0.30] hover:bg-violet-500/[0.05] hover:text-violet-300"
          >
            <Plus className="h-3 w-3" />
            Add tag
          </button>
        )}
      </div>
    </div>
  );
}