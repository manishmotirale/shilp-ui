"use client";

import * as React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput05Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput05({
  value: controlledValue,
  onChange,
  onSubmit,
  label = "Your message",
  disabled = false,
  className,
}: AIInput05Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 68,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const isActive = isFocused || value.length > 0;

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {/* Input */}
      <div className="group relative">
        {/* Ambient focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[19px]",
            "bg-gradient-to-r from-violet-500/25 via-white/10 to-violet-500/25",
            "blur-sm transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Main surface */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[18px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_18px_55px_rgba(0,0,0,0.28)]",
            "transition-all duration-300",
            isFocused && [
              "border-white/[0.16]",
              "shadow-[0_20px_65px_rgba(0,0,0,0.4)]",
            ],
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top highlight */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-0 h-px w-1/2",
              "-translate-x-1/2",
              "bg-gradient-to-r from-transparent via-violet-400/50 to-transparent",
              "transition-opacity duration-500",
              isFocused ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Floating label */}
          <label
            className={cn(
              "pointer-events-none absolute left-4 z-10",
              "transition-all duration-250 ease-out",
              isActive
                ? [
                    "top-3",
                    "text-[9px]",
                    "font-medium",
                    "uppercase",
                    "tracking-[0.18em]",
                    isFocused ? "text-violet-400" : "text-zinc-600",
                  ]
                : ["top-1/2", "-translate-y-1/2", "text-sm", "text-zinc-700"],
            )}
          >
            {label}
          </label>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
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
              "block w-full resize-none bg-transparent",
              "min-h-[68px] max-h-[200px]",
              "pr-[62px]",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
              isActive ? "pb-3 pl-4 pt-7" : "px-4 py-5",
            )}
          />

          {/* Send button */}
          <button
            type="button"
            disabled={!value.trim() || disabled}
            onClick={handleSubmit}
            aria-label="Send message"
            className={cn(
              "group/send absolute bottom-2.5 right-2.5",
              "flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
              "border transition-all duration-300",
              value.trim() && !disabled
                ? [
                    "border-white/[0.12]",
                    "bg-white",
                    "text-black",
                    "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                    "hover:border-violet-300/50",
                    "hover:shadow-[0_5px_28px_rgba(139,92,246,0.25)]",
                    "active:scale-90",
                  ]
                : [
                    "cursor-not-allowed",
                    "border-white/[0.05]",
                    "bg-white/[0.035]",
                    "text-zinc-700",
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

          {/* Small active indicator */}
          {isFocused && (
            <div className="pointer-events-none absolute bottom-0 left-4 flex items-center gap-1.5 pb-1.5">
              <Sparkles className="h-2.5 w-2.5 text-violet-500/50" />
              <span className="text-[8px] uppercase tracking-[0.15em] text-zinc-700">
                Ready
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Helper */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">Press Enter to send</span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          Shift + Enter for new line
        </span>
      </div>
    </div>
  );
}
