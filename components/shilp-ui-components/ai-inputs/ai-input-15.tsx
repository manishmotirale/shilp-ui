"use client";

import * as React from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput15Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput15({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Ask anything...",
  disabled = false,
  className,
}: AIInput15Props) {
  const [internalValue, setInternalValue] = React.useState("");
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

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <style>{`
        @keyframes shilpGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .shilp-gradient-border {
          background: linear-gradient(
            270deg,
            #6366f1,
            #8b5cf6,
            #a78bfa,
            #6366f1
          );
          background-size: 300% 300%;
          animation: shilpGradient 8s ease infinite;
        }

        .shilp-gradient-border-fast {
          background: linear-gradient(
            270deg,
            #6366f1,
            #8b5cf6,
            #c4b5fd,
            #8b5cf6,
            #6366f1
          );
          background-size: 400% 400%;
          animation: shilpGradient 3.5s ease infinite;
        }
      `}</style>

      <div className="relative">
        {/* Soft animated glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-[2px] rounded-[19px]",
            "blur-[7px]",
            "transition-all duration-500",
            isFocused
              ? "shilp-gradient-border-fast opacity-45"
              : "shilp-gradient-border opacity-20",
          )}
        />

        {/* Animated border */}
        <div
          className={cn(
            "relative rounded-[18px] p-[1px]",
            isFocused
              ? "shilp-gradient-border-fast"
              : "shilp-gradient-border",
            disabled && "opacity-50",
          )}
        >
          {/* Inner surface */}
          <div className="relative overflow-hidden rounded-[17px] bg-[#09090b]">
            {/* Subtle inner ambient glow */}
            <div
              className={cn(
                "pointer-events-none absolute -top-16 left-1/2",
                "h-24 w-56 -translate-x-1/2",
                "rounded-full bg-violet-500/[0.08] blur-3xl",
                "transition-opacity duration-500",
                isFocused ? "opacity-100" : "opacity-0",
              )}
            />

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

            {/* Bottom hint */}
            <div className="relative flex items-center justify-between px-3 pb-2.5">
              <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
                <Sparkles className="size-3 text-violet-500/60" />
                <span>Shilp AI</span>
              </div>

              <span className="hidden text-[9px] text-zinc-700 sm:block">
                Enter to send · Shift + Enter for new line
              </span>
            </div>

            {/* Send button */}
            <button
              type="button"
              disabled={!value.trim() || disabled}
              onClick={handleSubmit}
              aria-label="Send message"
              className={cn(
                "absolute bottom-2.5 right-2.5",
                "flex size-8 items-center justify-center rounded-lg",
                "transition-all duration-300",
                value.trim()
                  ? [
                      "bg-white text-black",
                      "shadow-[0_4px_18px_rgba(255,255,255,0.08)]",
                      "hover:bg-zinc-200",
                      "hover:shadow-[0_5px_22px_rgba(139,92,246,0.25)]",
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
      </div>
    </div>
  );
}