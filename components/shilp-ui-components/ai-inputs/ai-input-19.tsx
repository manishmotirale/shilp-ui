"use client";

import * as React from "react";
import {
  ArrowUp,
  Mic,
  Paperclip,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput19Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput19({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "What's on your mind?",
  disabled = false,
  className,
}: AIInput19Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <style>{`
        @keyframes shilpAurora {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>

      <div className="relative">
        {/* Aurora glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-[2px]",
            "rounded-[25px]",
            "blur-[8px]",
            "transition-opacity duration-500",
            isFocused ? "opacity-70" : "opacity-25",
          )}
          style={{
            background:
              "linear-gradient(120deg, rgba(99,102,241,.5), rgba(139,92,246,.55), rgba(167,139,250,.3), rgba(99,102,241,.5))",
            backgroundSize: "300% 300%",
            animation: "shilpAurora 8s ease infinite",
          }}
        />

        {/* Animated border */}
        <div
          className={cn(
            "relative rounded-[24px] p-px",
            "transition-all duration-500",
          )}
          style={{
            background: isFocused
              ? "linear-gradient(120deg, rgba(99,102,241,.7), rgba(139,92,246,.45), rgba(167,139,250,.35), rgba(99,102,241,.7))"
              : "linear-gradient(120deg, rgba(255,255,255,.12), rgba(255,255,255,.04))",
            backgroundSize: "300% 300%",
            animation: isFocused
              ? "shilpAurora 6s ease infinite"
              : "none",
          }}
        >
          <div
            className={cn(
              "relative overflow-hidden rounded-[23px]",
              "bg-[#08080a]",
              "shadow-[0_20px_65px_rgba(0,0,0,0.35)]",
              disabled && "opacity-50",
            )}
          >
            {/* Inner ambient light */}
            <div
              className={cn(
                "pointer-events-none absolute -top-24 left-1/2",
                "h-40 w-72 -translate-x-1/2",
                "rounded-full bg-violet-500/[0.08] blur-3xl",
                "transition-opacity duration-500",
                isFocused ? "opacity-100" : "opacity-0",
              )}
            />

            {/* Header */}
            <div className="relative flex items-center gap-2 px-4 pt-4">
              <div className="flex size-6 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/10">
                <Sparkles className="size-3 text-violet-400" />
              </div>

              <span className="text-[11px] font-medium text-zinc-500">
                AI Assistant
              </span>

              <div className="ml-auto flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-violet-400/80" />
                <span className="text-[9px] text-zinc-700">
                  ready
                </span>
              </div>
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
                "min-h-[60px] max-h-[200px]",
                "px-5 py-4 pr-16",
                "text-sm leading-relaxed text-zinc-100",
                "placeholder:text-zinc-600",
                "outline-none",
                "selection:bg-violet-500/30",
                "caret-violet-400",
              )}
            />

            {/* Toolbar */}
            <div className="relative flex items-center justify-between border-t border-white/[0.06] px-3 py-3">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  title="Voice"
                  disabled={disabled}
                  className="flex size-8 items-center justify-center rounded-lg text-zinc-600 transition-all hover:bg-white/[0.05] hover:text-zinc-300"
                >
                  <Mic className="size-3.5" />
                </button>

                <button
                  type="button"
                  title="Attach"
                  disabled={disabled}
                  className="flex size-8 items-center justify-center rounded-lg text-zinc-600 transition-all hover:bg-white/[0.05] hover:text-zinc-300"
                >
                  <Paperclip className="size-3.5" />
                </button>
              </div>

              <button
                type="button"
                disabled={!value.trim() || disabled}
                onClick={handleSubmit}
                aria-label="Send message"
                className={cn(
                  "flex size-9 items-center justify-center rounded-xl",
                  "transition-all duration-300",
                  value.trim()
                    ? [
                        "bg-white text-black",
                        "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                        "hover:bg-zinc-200",
                        "hover:shadow-[0_5px_24px_rgba(139,92,246,0.25)]",
                        "hover:scale-[1.03]",
                        "active:scale-95",
                      ]
                    : "cursor-not-allowed bg-white/[0.05] text-zinc-700",
                )}
              >
                <ArrowUp className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}