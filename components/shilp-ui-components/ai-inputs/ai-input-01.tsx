"use client";

import * as React from "react";
import { ArrowUp, Mic, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput01Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput01({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Ask anything...",
  disabled = false,
  className,
}: AIInput01Props) {
  const [internalValue, setInternalValue] = React.useState("");

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
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      {/* Label */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Ask Shilp
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          AI Assistant
        </span>
      </div>

      {/* Input Wrapper */}
      <div className="group relative">
        {/* Ambient Focus Glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            "opacity-0 blur-sm transition-opacity duration-500",
            "group-focus-within:opacity-100",
          )}
        />

        {/* Main Input */}
        <div
          className={cn(
            "relative overflow-hidden rounded-[20px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.28)]",
            "transition-all duration-300",
            "focus-within:border-white/[0.16]",
            "focus-within:shadow-[0_20px_70px_rgba(0,0,0,0.4)]",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top Highlight */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
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
              "min-h-[58px] max-h-[200px]",
              "py-4 pl-5 pr-[105px]",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
            )}
          />

          {/* Actions */}
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5">
            {/* Mic */}
            <button
              type="button"
              disabled={disabled}
              aria-label="Voice input"
              className={cn(
                "group/mic flex h-9 w-9 items-center justify-center rounded-xl",
                "border border-transparent",
                "text-zinc-600",
                "transition-all duration-200",
                "hover:border-white/[0.07]",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
                "active:scale-95",
                disabled && "cursor-not-allowed",
              )}
            >
              <Mic className="h-4 w-4 transition-transform duration-200 group-hover/mic:scale-110" />
            </button>

            {/* Send */}
            <button
              type="button"
              disabled={!value.trim() || disabled}
              onClick={handleSubmit}
              aria-label="Send message"
              className={cn(
                "group/send relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
                "border transition-all duration-300",
                value.trim()
                  ? [
                      "border-white/[0.12]",
                      "bg-white",
                      "text-black",
                      "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                      "hover:border-violet-300/50",
                      "hover:shadow-[0_5px_28px_rgba(139,92,246,0.25)]",
                      "active:scale-95",
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

              <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/send:-translate-y-0.5" />
            </button>
          </div>

          {/* Bottom Status */}
          <div className="flex items-center justify-between border-t border-white/[0.05] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-[10px] text-zinc-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                Ready
              </span>

              {value.length > 0 && (
                <span className="text-[10px] text-zinc-700">
                  {value.length} characters
                </span>
              )}
            </div>

            <div className="hidden items-center gap-1 text-[10px] text-zinc-700 sm:flex">
              <kbd className="rounded border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-zinc-600">
                Enter
              </kbd>

              <span>to send</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hint */}
      <p className="mt-3 text-center text-[10px] text-zinc-700">
        Ask a question, describe an idea, or start creating
      </p>
    </div>
  );
}