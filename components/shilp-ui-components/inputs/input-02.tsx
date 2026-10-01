"use client";

import { useState, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";
import { X, Check, Plus, Tag as TagIcon } from "lucide-react";
import { useTags } from "@/hooks/use-tags";
import { useClickOutside } from "@/hooks/use-click-outside";

interface Tag {
  id: string;
  label: string;
  color?: string;
}

interface TagInputProps {
  onChange?: (tags: Tag[]) => void;
  defaultTags?: Tag[];
  suggestions?: Tag[];
  maxTags?: number;
  label?: string;
  placeholder?: string;
  error?: string;
}

const defaultKokonutTag: Tag = {
  id: "kokonut-ui",
  label: "codesnippetui",
};

const tagStyles = {
  base: "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-all duration-200",
  colors: {
    blue: "border-violet-400/15 bg-violet-400/[0.08] text-violet-300 hover:border-violet-400/25",
    purple: "border-violet-400/15 bg-violet-400/[0.08] text-violet-300 hover:border-violet-400/25",
    green: "border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300 hover:border-emerald-400/25",
  },
};

export default function Input_02({
  onChange,
  defaultTags = [defaultKokonutTag],
  suggestions = [
    { id: "nextjs", label: "Next.js" },
    { id: "react", label: "React" },
    { id: "tailwind", label: "Tailwind" },
  ],
  maxTags = 10,
  label = "Tags",
  placeholder = "Add tags...",
  error,
}: TagInputProps) {
  const { tags, addTag, removeTag, removeLastTag } = useTags({
    onChange,
    defaultTags,
    maxTags,
  });

  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = suggestions
    .filter(
      (suggestion) =>
        suggestion.label.toLowerCase().includes(input.toLowerCase()) &&
        !tags.find((tag) => tag.id === suggestion.id),
    )
    .slice(0, 5);

  const canAddNewTag =
    !suggestions.find(
      (s) => s.label.toLowerCase() === input.toLowerCase(),
    ) && input.length > 0;

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Backspace" && input === "" && tags.length > 0) {
      removeLastTag();
    } else if (e.key === "Enter" && input) {
      e.preventDefault();

      if (isOpen && filteredSuggestions[selectedIndex]) {
        addTag(filteredSuggestions[selectedIndex]);
        setInput("");
        setIsOpen(false);
      } else if (canAddNewTag) {
        addTag({ id: input, label: input });
        setInput("");
        setIsOpen(false);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  useClickOutside(
    containerRef as RefObject<HTMLElement>,
    () => setIsOpen(false),
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full space-y-2 sm:max-w-2xl"
    >
      {label && (
        <label
          className="text-xs font-medium text-zinc-300"
          htmlFor={label}
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "relative flex min-h-11 flex-row flex-wrap items-center gap-1.5",
          "rounded-xl border p-2",
          "border-white/[0.08]",
          "bg-white/[0.025]",
          "backdrop-blur-xl",
          "transition-all duration-200",
          "hover:border-white/[0.12]",
          "focus-within:border-violet-400/50",
          "focus-within:ring-2 focus-within:ring-violet-500/10",
        )}
      >
        {tags.map((tag) => (
          <span
            key={tag.id}
            className={cn(
              tagStyles.base,
              tag.color || tagStyles.colors.blue,
            )}
          >
            {tag.label}

            <button
              type="button"
              onClick={() => removeTag(tag.id)}
              aria-label={`Remove ${tag.label}`}
              className="rounded-full p-0.5 text-current/50 transition-colors hover:bg-white/[0.08] hover:text-current"
            >
              <X className="h-3 w-3" />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ""}
          className={cn(
            "h-7 min-w-[120px] flex-1 bg-transparent px-1",
            "text-sm text-white",
            "placeholder:text-zinc-600",
            "focus:outline-none",
          )}
        />

        {isOpen && (input || filteredSuggestions.length > 0) && (
          <div
            className={cn(
              "absolute left-0 right-0 top-full z-50 mt-2",
              "max-h-[300px] overflow-y-auto",
              "rounded-xl border border-white/[0.08]",
              "bg-[#0c0c0f]/95 backdrop-blur-xl",
              "shadow-[0_15px_50px_rgba(0,0,0,0.45)]",
            )}
          >
            <div className="border-b border-white/[0.06] px-3 py-2.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                Choose or create
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 p-2">
              {filteredSuggestions.map((suggestion, index) => (
                <button
                  type="button"
                  key={suggestion.id}
                  onClick={() => {
                    addTag(suggestion);
                    setInput("");
                    setIsOpen(false);
                  }}
                  className={cn(
                    tagStyles.base,
                    selectedIndex === index
                      ? tagStyles.colors.blue
                      : "border-white/[0.07] bg-white/[0.025] text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200",
                  )}
                >
                  {suggestion.label}

                  {selectedIndex === index && (
                    <Check className="h-3 w-3" />
                  )}
                </button>
              ))}

              {canAddNewTag && (
                <button
                  type="button"
                  onClick={() => {
                    addTag({
                      id: input,
                      label: input,
                      color: tagStyles.colors.blue,
                    });
                    setInput("");
                    setIsOpen(false);
                  }}
                  className={cn(
                    tagStyles.base,
                    "border-violet-400/15 bg-violet-400/[0.06] text-violet-300 hover:bg-violet-400/[0.1]",
                  )}
                >
                  <Plus className="h-3 w-3" />
                  Create "{input}"
                </button>
              )}

              {!filteredSuggestions.length && !canAddNewTag && (
                <div className="flex w-full items-center gap-2 px-2 py-3 text-xs text-zinc-600">
                  <TagIcon className="h-3.5 w-3.5" />
                  No matching tags
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}