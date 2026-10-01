"use client";

import { useEffect, useRef, useState } from "react";
import type {
  KeyboardEvent,
  ReactNode,
} from "react";
import {
  ArrowRight,
  Command,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface CommandOption {
  id: string;
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface Alert08Props {
  placeholder?: string;
  options?: CommandOption[];
  onSelect?: (option: CommandOption) => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultOptions: CommandOption[] = [
  {
    id: "new",
    label: "Create new component",
    shortcut: "N",
  },
  {
    id: "search",
    label: "Search components",
    shortcut: "S",
  },
  {
    id: "settings",
    label: "Open settings",
    shortcut: "⌘ ,",
  },
  {
    id: "docs",
    label: "Open documentation",
    shortcut: "D",
  },
];

export default function Alert08({
  placeholder = "Search commands...",
  options = defaultOptions,
  onSelect,
  onDismiss,
  className,
}: Alert08Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 150);
  };

  const handleSelect = (option: CommandOption) => {
    onSelect?.(option);
    handleDismiss();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((index) =>
        Math.min(index + 1, filteredOptions.length - 1)
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((index) =>
        Math.max(index - 1, 0)
      );
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const option = filteredOptions[selectedIndex];

      if (option) handleSelect(option);
    }

    if (event.key === "Escape") {
      handleDismiss();
    }
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl transition-all duration-300",
        exiting
          ? "translate-y-1 scale-[0.98] opacity-0"
          : "translate-y-0 scale-100 opacity-100",
        className
      )}
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#09090B] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-zinc-600" />

          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
          />

          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="rounded-full p-1 text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <kbd className="rounded-md border border-white/[0.08] bg-white/[0.025] px-1.5 py-0.5 text-[10px] text-zinc-600">
              ESC
            </kbd>
          )}
        </div>

        <div className="max-h-72 overflow-y-auto p-2">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              const selected = index === selectedIndex;

              return (
                <button
                  key={option.id}
                  type="button"
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(option)}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200",
                    selected
                      ? "bg-violet-500/[0.09] text-white"
                      : "text-zinc-400 hover:bg-white/[0.035] hover:text-white"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                      selected
                        ? "border-violet-400/20 bg-violet-500/[0.1]"
                        : "border-white/[0.06] bg-white/[0.025]"
                    )}
                  >
                    {option.icon ?? (
                      <Command
                        className={cn(
                          "h-4 w-4",
                          selected
                            ? "text-violet-300"
                            : "text-zinc-600"
                        )}
                      />
                    )}
                  </div>

                  <span className="flex-1 text-sm">
                    {option.label}
                  </span>

                  {option.shortcut && (
                    <kbd className="rounded-md border border-white/[0.07] bg-black/20 px-1.5 py-1 text-[10px] text-zinc-600">
                      {option.shortcut}
                    </kbd>
                  )}

                  <ArrowRight
                    className={cn(
                      "h-3.5 w-3.5 transition",
                      selected
                        ? "translate-x-0 text-violet-300 opacity-100"
                        : "-translate-x-1 opacity-0"
                    )}
                  />
                </button>
              );
            })
          ) : (
            <div className="px-4 py-10 text-center">
              <p className="text-sm text-zinc-600">
                No commands found.
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-3 text-[10px] text-zinc-600">
            <span>
              <kbd className="mr-1 rounded border border-white/[0.07] px-1 py-0.5">
                ↑↓
              </kbd>
              Navigate
            </span>

            <span>
              <kbd className="mr-1 rounded border border-white/[0.07] px-1 py-0.5">
                ↵
              </kbd>
              Select
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-700">
            Shilp
          </span>
        </div>
      </div>
    </div>
  );
}