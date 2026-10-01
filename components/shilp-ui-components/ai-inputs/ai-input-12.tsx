"use client";

import * as React from "react";
import { ArrowUp, CircleAlert, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput12Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  className?: string;
}

export function AIInput12({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Write your message...",
  disabled = false,
  maxLength = 500,
  className,
}: AIInput12Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled || value.length > maxLength) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const charCount = value.length;
  const remaining = maxLength - charCount;
  const percentage = Math.min(charCount / maxLength, 1);

  const isNearLimit = percentage >= 0.8;
  const isOverLimit = charCount > maxLength;

  const RADIUS = 10;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
  const dashOffset = CIRCUMFERENCE * (1 - percentage);

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "transition-all duration-300",
          isOverLimit
            ? [
                "border-red-500/35",
                "shadow-[0_0_0_3px_rgba(239,68,68,0.06),0_18px_50px_rgba(0,0,0,0.3)]",
              ]
            : isFocused
              ? [
                  "border-violet-400/30",
                  "shadow-[0_0_0_3px_rgba(139,92,246,0.08),0_18px_50px_rgba(0,0,0,0.3)]",
                ]
              : [
                  "border-white/[0.09]",
                  "shadow-[0_16px_45px_rgba(0,0,0,0.25)]",
                ],
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2",
            "h-32 w-64 -translate-x-1/2 rounded-full",
            "bg-violet-500/[0.08] blur-3xl",
            "transition-opacity duration-500",
            isFocused && !isOverLimit ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "flex size-6 items-center justify-center rounded-md",
                "border border-white/[0.07] bg-white/[0.04]",
              )}
            >
              <Sparkles
                className={cn(
                  "size-3",
                  isOverLimit ? "text-red-400" : "text-violet-400",
                )}
              />
            </div>

            <span className="text-[11px] font-medium text-zinc-400">
              Shilp Composer
            </span>
          </div>

          <span className="text-[10px] text-zinc-600">
            {maxLength} character limit
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
            "py-4 pl-4 pr-16",
            "text-sm leading-relaxed text-zinc-100",
            "placeholder:text-zinc-600",
            "outline-none",
            "selection:bg-violet-500/30",
          )}
        />

        {/* Bottom bar */}
        <div className="relative flex items-center justify-between border-t border-white/[0.06] px-3.5 py-2.5">
          {/* Character counter */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex size-7 items-center justify-center">
              <svg
                className="absolute inset-0 -rotate-90"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* Track */}
                <circle
                  cx="12"
                  cy="12"
                  r={RADIUS}
                  strokeWidth="2"
                  className="stroke-white/[0.07]"
                />

                {/* Progress */}
                <circle
                  cx="12"
                  cy="12"
                  r={RADIUS}
                  strokeWidth="2"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={dashOffset}
                  strokeLinecap="round"
                  className={cn(
                    "transition-all duration-300",
                    isOverLimit
                      ? "stroke-red-400"
                      : isNearLimit
                        ? "stroke-violet-400"
                        : "stroke-zinc-500",
                  )}
                />
              </svg>

              <span
                className={cn(
                  "relative text-[8px] font-medium tabular-nums",
                  isOverLimit
                    ? "text-red-400"
                    : isNearLimit
                      ? "text-violet-400"
                      : "text-zinc-500",
                )}
              >
                {Math.round(percentage * 100)}
              </span>
            </div>

            <div className="flex flex-col">
              <span
                className={cn(
                  "text-[11px] font-medium tabular-nums transition-colors",
                  isOverLimit
                    ? "text-red-400"
                    : isNearLimit
                      ? "text-violet-400"
                      : "text-zinc-500",
                )}
              >
                {isOverLimit
                  ? `${Math.abs(remaining)} over limit`
                  : `${remaining} characters left`}
              </span>

              {!isOverLimit && isNearLimit && (
                <span className="text-[9px] text-zinc-700">
                  Approaching limit
                </span>
              )}
            </div>
          </div>

          {/* Send */}
          <button
            type="button"
            disabled={!value.trim() || disabled || isOverLimit}
            onClick={handleSubmit}
            aria-label="Send message"
            className={cn(
              "flex size-8 items-center justify-center rounded-lg",
              "transition-all duration-300",
              value.trim() && !isOverLimit
                ? [
                    "bg-white text-black",
                    "shadow-[0_4px_18px_rgba(255,255,255,0.08)]",
                    "hover:bg-zinc-200",
                    "hover:shadow-[0_6px_24px_rgba(139,92,246,0.2)]",
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

      {/* Error state */}
      {isOverLimit && (
        <div className="mt-2 flex items-center gap-1.5 px-1 text-[11px] font-medium text-red-400">
          <CircleAlert className="size-3.5" />
          <span>
            {Math.abs(remaining)}{" "}
            {Math.abs(remaining) === 1 ? "character" : "characters"} over the
            limit
          </span>
        </div>
      )}
    </div>
  );
}