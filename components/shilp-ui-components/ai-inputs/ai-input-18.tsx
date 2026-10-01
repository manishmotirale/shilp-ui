"use client";

import * as React from "react";
import {
  ArrowUp,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput18Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, context: string) => void;
  placeholder?: string;
  contextPlaceholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput18({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Ask your question...",
  contextPlaceholder = "Add context or system instructions (optional)...",
  disabled = false,
  className,
}: AIInput18Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [context, setContext] = React.useState("");
  const [contextOpen, setContextOpen] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const {
    textareaRef: mainRef,
    adjustHeight: adjustMain,
  } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 160,
  });

  const {
    textareaRef: contextRef,
    adjustHeight: adjustContext,
  } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 120,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value, context);

    setValue("");
    setContext("");
    adjustMain(true);
    adjustContext(true);
  };

  const toggleContext = () => {
    if (disabled) return;

    setContextOpen((open) => !open);

    if (!contextOpen) {
      requestAnimationFrame(() => {
        contextRef.current?.focus();
      });
    }
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border border-white/[0.09]",
          "bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "shadow-[0_16px_50px_rgba(0,0,0,0.28)]",
          "transition-all duration-300",
          isFocused
            ? [
                "border-violet-400/30",
                "shadow-[0_0_0_3px_rgba(139,92,246,0.07),0_20px_60px_rgba(0,0,0,0.35)]",
              ]
            : "",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2",
            "h-32 w-64 -translate-x-1/2 rounded-full",
            "bg-violet-500/[0.07] blur-3xl",
            "transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Context panel */}
        <div
          className={cn(
            "relative overflow-hidden",
            "border-b border-white/[0.06]",
            "transition-all duration-300",
            contextOpen ? "max-h-[180px]" : "max-h-0 border-b-0",
          )}
        >
          <div className="flex items-center justify-between px-4 pt-3">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-md bg-violet-500/10">
                <SlidersHorizontal className="size-3 text-violet-400" />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                System Context
              </span>
            </div>

            {context && (
              <span className="flex items-center gap-1 text-[9px] text-violet-400">
                <Check className="size-3" />
                Added
              </span>
            )}
          </div>

          <textarea
            ref={contextRef}
            placeholder={contextPlaceholder}
            disabled={disabled}
            value={context}
            onChange={(event) => {
              setContext(event.target.value);
              adjustContext();
            }}
            rows={1}
            className={cn(
              "w-full resize-none bg-transparent",
              "min-h-[52px] max-h-[120px]",
              "px-4 py-3",
              "font-mono text-[11px] leading-relaxed",
              "text-zinc-400",
              "placeholder:text-zinc-700",
              "outline-none",
              "selection:bg-violet-500/30",
            )}
          />
        </div>

        {/* Main input */}
        <div className="relative">
          <textarea
            ref={mainRef}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => {
              setValue(event.target.value);
              adjustMain();
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
              "min-h-[58px] max-h-[160px]",
              "px-4 py-4 pr-16",
              "text-sm leading-relaxed text-zinc-100",
              "placeholder:text-zinc-600",
              "outline-none",
              "selection:bg-violet-500/30",
            )}
          />

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

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5">
          <button
            type="button"
            disabled={disabled}
            onClick={toggleContext}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-2 py-1.5",
              "text-[10px] font-medium",
              "transition-all duration-200",
              contextOpen
                ? "bg-violet-500/10 text-violet-300"
                : "text-zinc-600 hover:bg-white/[0.04] hover:text-zinc-400",
            )}
          >
            <SlidersHorizontal className="size-3.5" />

            <span>System context</span>

            {context && (
              <span className="size-1.5 rounded-full bg-violet-400" />
            )}

            <ChevronDown
              className={cn(
                "size-3 transition-transform duration-300",
                contextOpen && "rotate-180",
              )}
            />
          </button>

          <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
            <Sparkles className="size-3 text-violet-500/50" />
            <span>Shift + Enter for newline</span>
          </div>
        </div>
      </div>
    </div>
  );
}