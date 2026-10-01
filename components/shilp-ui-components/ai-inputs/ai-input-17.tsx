"use client";

import * as React from "react";
import { ArrowUp, RefreshCw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const SUGGESTION_POOLS = [
  [
    "Summarize this document for me",
    "Write a professional email",
    "Explain this concept simply",
    "Debug my code",
    "Create a project plan",
    "Draft a blog post",
    "Translate this text",
    "Compare these options",
  ],
];

function getRandomSuggestions(count = 4) {
  const pool = SUGGESTION_POOLS[0];

  return [...pool]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

interface AIInput17Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput17({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Ask anything, or pick a suggestion...",
  disabled = false,
  className,
}: AIInput17Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState(() =>
    getRandomSuggestions(),
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const handleSuggestion = (suggestion: string) => {
    if (disabled) return;

    setValue(suggestion);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
      adjustHeight();
    });
  };

  const handleRefresh = () => {
    if (disabled || refreshing) return;

    setRefreshing(true);

    setTimeout(() => {
      setSuggestions(getRandomSuggestions());
      setRefreshing(false);
    }, 400);
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {/* Composer */}
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "transition-all duration-300",
          isFocused
            ? [
                "border-violet-400/30",
                "shadow-[0_0_0_3px_rgba(139,92,246,0.07),0_18px_55px_rgba(0,0,0,0.35)]",
              ]
            : [
                "border-white/[0.09]",
                "shadow-[0_14px_45px_rgba(0,0,0,0.25)]",
              ],
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2",
            "h-32 w-64 -translate-x-1/2 rounded-full",
            "bg-violet-500/[0.08] blur-3xl",
            "transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-md border border-violet-400/15 bg-violet-500/10">
              <Sparkles className="size-3 text-violet-400" />
            </div>

            <span className="text-[11px] font-medium text-zinc-400">
              Start with an idea
            </span>
          </div>

          <span className="text-[10px] text-zinc-700">
            Quick prompts
          </span>
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => {
            setValue(event.target.value);
            adjustHeight();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              handleSubmit();
            }
          }}
          rows={1}
          className={cn(
            "relative w-full resize-none bg-transparent",
            "min-h-[58px] max-h-[200px]",
            "px-4 py-4 pr-16",
            "text-sm leading-relaxed text-zinc-100",
            "placeholder:text-zinc-600",
            "outline-none",
            "selection:bg-violet-500/30",
          )}
        />

        {/* Bottom toolbar */}
        <div className="relative flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5">
          <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
            <span className="size-1.5 rounded-full bg-violet-400/60" />
            <span>Shilp AI</span>
          </div>

          <button
            type="button"
            disabled={!value.trim() || disabled}
            onClick={handleSubmit}
            aria-label="Send message"
            className={cn(
              "flex size-8 items-center justify-center rounded-lg",
              "transition-all duration-300",
              value.trim()
                ? [
                    "bg-white text-black",
                    "shadow-[0_4px_18px_rgba(255,255,255,0.08)]",
                    "hover:bg-zinc-200",
                    "hover:shadow-[0_5px_20px_rgba(139,92,246,0.2)]",
                    "active:scale-95",
                  ]
                : [
                    "cursor-not-allowed",
                    "bg-white/[0.05]",
                    "text-zinc-700",
                  ],
            )}
          >
            <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Suggestions */}
      {!value && (
        <div className="mt-3">
          <div
            className={cn(
              "flex items-start gap-2",
              refreshing && "opacity-60",
              "transition-opacity duration-200",
            )}
          >
            <div className="flex flex-1 flex-wrap gap-1.5">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  disabled={disabled || refreshing}
                  onClick={() => handleSuggestion(suggestion)}
                  className={cn(
                    "group/chip flex items-center rounded-full",
                    "border border-white/[0.08]",
                    "bg-white/[0.025]",
                    "px-3 py-1.5",
                    "text-[10px] font-medium text-zinc-500",
                    "backdrop-blur-xl",
                    "transition-all duration-200",
                    "hover:border-violet-400/20",
                    "hover:bg-violet-500/[0.06]",
                    "hover:text-zinc-300",
                    "active:scale-[0.98]",
                    "disabled:pointer-events-none disabled:opacity-50",
                  )}
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Refresh */}
            <button
              type="button"
              disabled={disabled || refreshing}
              onClick={handleRefresh}
              title="Refresh suggestions"
              aria-label="Refresh suggestions"
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full",
                "border border-white/[0.08]",
                "bg-white/[0.025]",
                "text-zinc-600",
                "transition-all duration-200",
                "hover:border-violet-400/20",
                "hover:bg-violet-500/[0.06]",
                "hover:text-violet-400",
                "active:scale-95",
                "disabled:pointer-events-none disabled:opacity-40",
              )}
            >
              <RefreshCw
                className={cn(
                  "size-3.5",
                  refreshing && "animate-spin",
                )}
              />
            </button>
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-[9px] text-zinc-700">
            <Sparkles className="size-3 text-violet-500/50" />
            <span>Choose a prompt or write your own</span>
          </div>
        </div>
      )}
    </div>
  );
}