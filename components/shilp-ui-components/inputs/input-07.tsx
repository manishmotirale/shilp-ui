"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Search,
  Command,
  ArrowRight,
  X,
} from "lucide-react";

interface CommandInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  label?: string;
}

export default function Input_07({
  placeholder = "Search components...",
  onChange,
  onSubmit,
  label = "Command Search",
}: CommandInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit?.(value.trim());
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleClear = () => {
    setValue("");
    onChange?.("");
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {label && (
        <label className="text-xs font-medium text-zinc-300">
          {label}
        </label>
      )}

      <div
        className={cn(
          "group relative flex h-12 items-center gap-3",
          "rounded-xl border",
          "bg-white/[0.025]",
          "backdrop-blur-xl",
          "px-3",
          "transition-all duration-300",
          isFocused
            ? [
                "border-violet-400/40",
                "bg-white/[0.035]",
                "shadow-[0_0_0_3px_rgba(139,92,246,0.08)]",
              ]
            : [
                "border-white/[0.08]",
                "hover:border-white/[0.12]",
              ],
        )}
      >
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center",
            "rounded-lg",
            "border border-white/[0.06]",
            "bg-white/[0.035]",
            "transition-all duration-300",
            isFocused && "border-violet-400/20 bg-violet-400/[0.07]",
          )}
        >
          <Search
            className={cn(
              "h-3.5 w-3.5 transition-colors duration-200",
              isFocused
                ? "text-violet-300"
                : "text-zinc-600 group-hover:text-zinc-400",
            )}
          />
        </div>

        <input
          type="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange?.(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "min-w-0 flex-1 bg-transparent",
            "text-sm text-zinc-200",
            "placeholder:text-zinc-600",
            "focus:outline-none",
            "[&::-webkit-search-cancel-button]:appearance-none",
          )}
        />

        {value ? (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center",
              "rounded-lg",
              "text-zinc-600",
              "transition-all duration-200",
              "hover:bg-white/[0.06] hover:text-zinc-300",
            )}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : (
          <div
            className={cn(
              "hidden items-center gap-1 sm:flex",
              "rounded-md border border-white/[0.06]",
              "bg-white/[0.025]",
              "px-1.5 py-1",
              "text-[10px] text-zinc-600",
            )}
          >
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!value.trim()}
          aria-label="Submit search"
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center",
            "rounded-lg",
            "transition-all duration-200",
            value.trim()
              ? [
                  "bg-white text-black",
                  "hover:bg-zinc-200",
                  "active:scale-95",
                ]
              : [
                  "bg-white/[0.035]",
                  "text-zinc-700",
                  "cursor-not-allowed",
                ],
          )}
        >
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <p className="text-[10px] text-zinc-600">
        Press <span className="text-zinc-400">Enter</span> to
        search
      </p>
    </div>
  );
}