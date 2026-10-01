"use client";

import * as React from "react";
import { ArrowUp, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIInput03Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput03({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Search or ask anything...",
  disabled = false,
  className,
}: AIInput03Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {/* Small label */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.035]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Quick Search
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          Search Shilp
        </span>
      </div>

      {/* Search container */}
      <div className="group relative">
        {/* Focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-full",
            "bg-gradient-to-r from-violet-500/25 via-white/10 to-violet-500/25",
            "blur-sm transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative flex min-h-[58px] items-center gap-3 overflow-hidden rounded-full",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "px-3 pl-4",
            "backdrop-blur-xl",
            "shadow-[0_12px_40px_rgba(0,0,0,0.28)]",
            "transition-all duration-300",
            isFocused && [
              "border-white/[0.16]",
              "shadow-[0_16px_50px_rgba(0,0,0,0.38)]",
            ],
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top highlight */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-0 h-px w-1/3",
              "-translate-x-1/2",
              "bg-gradient-to-r from-transparent via-violet-400/50 to-transparent",
              "transition-opacity duration-500",
              isFocused ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Search icon */}
          <Search
            className={cn(
              "h-[17px] w-[17px] shrink-0 transition-all duration-300",
              isFocused
                ? "text-violet-400"
                : "text-zinc-600",
            )}
          />

          {/* Input */}
          <input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSubmit();
              }
            }}
            className={cn(
              "min-w-0 flex-1 bg-transparent",
              "py-1",
              "text-sm text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none",
              "disabled:cursor-not-allowed",
            )}
          />

          {/* Keyboard hint */}
          {!value && (
            <div className="hidden items-center gap-1.5 sm:flex">
              <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-[9px] text-zinc-700">
                /
              </kbd>
            </div>
          )}

          {/* Submit button */}
          <button
            type="button"
            disabled={!value.trim() || disabled}
            onClick={handleSubmit}
            aria-label="Search"
            className={cn(
              "group/send relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full",
              "border transition-all duration-300",
              value.trim() && !disabled
                ? [
                    "border-white/[0.12]",
                    "bg-white",
                    "text-black",
                    "opacity-100",
                    "scale-100",
                    "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                    "hover:border-violet-300/50",
                    "hover:shadow-[0_5px_28px_rgba(139,92,246,0.25)]",
                    "active:scale-90",
                  ]
                : [
                    "border-white/[0.05]",
                    "bg-white/[0.035]",
                    "text-zinc-700",
                    "opacity-70",
                    "scale-95",
                    "cursor-not-allowed",
                  ],
            )}
          >
            {value.trim() && (
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/30 to-transparent transition-transform duration-500 group-hover/send:translate-x-full" />
            )}

            <ArrowUp
              className={cn(
                "relative z-10 h-4 w-4 transition-transform duration-300",
                value.trim() && "group-hover/send:-translate-y-0.5",
              )}
            />
          </button>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">
          Search components, blocks, or documentation
        </span>
      </div>
    </div>
  );
}