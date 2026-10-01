"use client";

import * as React from "react";
import { ArrowUp, Zap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIInput14Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput14({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Quick question...",
  disabled = false,
  className,
}: AIInput14Props) {
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
    <div className={cn("mx-auto w-full max-w-sm", className)}>
      <div
        className={cn(
          "group relative flex items-center gap-2 rounded-xl",
          "border bg-[#09090b]/95",
          "px-2.5 py-2",
          "backdrop-blur-xl",
          "transition-all duration-300",
          isFocused
            ? [
                "border-violet-400/30",
                "shadow-[0_0_0_3px_rgba(139,92,246,0.07),0_10px_30px_rgba(0,0,0,0.3)]",
              ]
            : [
                "border-white/[0.09]",
                "shadow-[0_8px_25px_rgba(0,0,0,0.2)]",
              ],
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Subtle focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-xl",
            "bg-[radial-gradient(circle_at_15%_50%,rgba(139,92,246,0.10),transparent_45%)]",
            "transition-opacity duration-300",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Quick action icon */}
        <div
          className={cn(
            "relative flex size-6 shrink-0 items-center justify-center rounded-lg",
            "border transition-all duration-300",
            isFocused
              ? "border-violet-400/20 bg-violet-500/10"
              : "border-white/[0.07] bg-white/[0.035]",
          )}
        >
          <Zap
            className={cn(
              "size-3.5 transition-colors duration-300",
              isFocused ? "text-violet-400" : "text-zinc-500",
            )}
          />
        </div>

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
            "relative min-w-0 flex-1 bg-transparent",
            "text-[12px] leading-5",
            "text-zinc-100",
            "placeholder:text-zinc-600",
            "outline-none",
            "disabled:cursor-not-allowed",
            "selection:bg-violet-500/30",
          )}
        />

        {/* Submit */}
        <button
          type="button"
          disabled={!value.trim() || disabled}
          onClick={handleSubmit}
          aria-label="Submit quick question"
          className={cn(
            "relative flex size-7 shrink-0 items-center justify-center rounded-lg",
            "transition-all duration-300",
            value.trim()
              ? [
                  "bg-white text-black",
                  "shadow-[0_3px_12px_rgba(255,255,255,0.08)]",
                  "hover:bg-zinc-200",
                  "hover:shadow-[0_4px_16px_rgba(139,92,246,0.18)]",
                  "active:scale-90",
                ]
              : [
                  "cursor-not-allowed",
                  "bg-white/[0.05]",
                  "text-zinc-700",
                ],
          )}
        >
          {value.trim() ? (
            <ArrowUp className="size-3" />
          ) : (
            <Sparkles className="size-3" />
          )}
        </button>
      </div>

      {/* Tiny helper */}
      <div className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-zinc-700">
        <span className="rounded border border-white/[0.06] bg-white/[0.02] px-1 py-0.5">
          Enter
        </span>
        <span>to ask Shilp</span>
      </div>
    </div>
  );
}