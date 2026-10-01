"use client";

import * as React from "react";
import {
  ArrowUp,
  Bold,
  Italic,
  Code,
  List,
  Link2,
  BarChart2,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const APPROX_TOKENS_PER_CHAR = 0.25;

interface AIInput20Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  maxTokens?: number;
  className?: string;
}

export function AIInput20({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Write your prompt... Markdown supported.",
  disabled = false,
  maxTokens = 2000,
  className,
}: AIInput20Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 80,
    maxHeight: 320,
  });

  const estimatedTokens = Math.round(
    value.length * APPROX_TOKENS_PER_CHAR,
  );

  const tokenPct = Math.min(
    estimatedTokens / maxTokens,
    1,
  );

  const isNearLimit = tokenPct >= 0.75;
  const isOverLimit = estimatedTokens > maxTokens;

  const handleSubmit = () => {
    if (!value.trim() || disabled || isOverLimit) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const insertMarkdown = (
    prefix: string,
    suffix = prefix,
    block = false,
  ) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.slice(start, end);
    const separator = block ? "\n" : "";

    const newText =
      value.slice(0, start) +
      separator +
      prefix +
      selected +
      suffix +
      separator +
      value.slice(end);

    setValue(newText);

    setTimeout(() => {
      const newPosition =
        start +
        separator.length +
        prefix.length +
        selected.length +
        suffix.length;

      textarea.setSelectionRange(newPosition, newPosition);
      textarea.focus();
    }, 0);
  };

  const TOOLS = [
    {
      icon: Bold,
      label: "Bold",
      action: () => insertMarkdown("**", "**"),
    },
    {
      icon: Italic,
      label: "Italic",
      action: () => insertMarkdown("_", "_"),
    },
    {
      icon: Code,
      label: "Code",
      action: () => insertMarkdown("`", "`"),
    },
    {
      icon: List,
      label: "List",
      action: () => insertMarkdown("- ", "", true),
    },
    {
      icon: Link2,
      label: "Link",
      action: () => insertMarkdown("[", "](url)"),
    },
  ];

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "transition-all duration-300",
          isOverLimit
            ? "border-red-400/30 shadow-[0_0_0_3px_rgba(239,68,68,0.05),0_18px_50px_rgba(0,0,0,0.3)]"
            : isFocused
              ? "border-violet-400/30 shadow-[0_0_0_3px_rgba(139,92,246,0.07),0_18px_55px_rgba(0,0,0,0.35)]"
              : "border-white/[0.09] shadow-[0_14px_45px_rgba(0,0,0,0.25)]",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2",
            "h-32 w-72 -translate-x-1/2 rounded-full",
            "bg-violet-500/[0.07] blur-3xl",
            "transition-opacity duration-500",
            isFocused && !isOverLimit
              ? "opacity-100"
              : "opacity-0",
          )}
        />

        {/* Toolbar */}
        <div className="relative flex items-center gap-0.5 border-b border-white/[0.06] bg-white/[0.015] px-3 py-2">
          {TOOLS.map(({ icon: Icon, label, action }) => (
            <button
              key={label}
              type="button"
              title={label}
              disabled={disabled}
              onMouseDown={(event) => {
                event.preventDefault();
                action();
              }}
              className={cn(
                "flex size-7 items-center justify-center rounded-lg",
                "text-zinc-600",
                "transition-all duration-200",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
                "disabled:opacity-50",
              )}
            >
              <Icon className="size-3.5" />
            </button>
          ))}

          <div className="mx-2 h-4 w-px bg-white/[0.06]" />

          <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
            <Sparkles className="size-3 text-violet-500/50" />
            <span>Markdown</span>
          </div>

          {/* Token meter */}
          <div className="ml-auto flex items-center gap-2">
            <BarChart2
              className={cn(
                "size-3.5",
                isOverLimit
                  ? "text-red-400"
                  : isNearLimit
                    ? "text-violet-400"
                    : "text-zinc-600",
              )}
            />

            <div className="hidden h-1.5 w-20 overflow-hidden rounded-full bg-white/[0.07] sm:block">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-300",
                  isOverLimit
                    ? "bg-red-400"
                    : isNearLimit
                      ? "bg-violet-400"
                      : "bg-zinc-500",
                )}
                style={{
                  width: `${tokenPct * 100}%`,
                }}
              />
            </div>

            <span
              className={cn(
                "text-[10px] font-medium tabular-nums",
                isOverLimit
                  ? "text-red-400"
                  : isNearLimit
                    ? "text-violet-400"
                    : "text-zinc-600",
              )}
            >
              ~{estimatedTokens}
              <span className="text-zinc-800">
                /{maxTokens}
              </span>
            </span>
          </div>
        </div>

        {/* Editor */}
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
            if (
              event.key === "Enter" &&
              (event.metaKey || event.ctrlKey)
            ) {
              event.preventDefault();
              handleSubmit();
            }
          }}
          rows={1}
          className={cn(
            "relative w-full resize-none bg-transparent",
            "min-h-[80px] max-h-[320px]",
            "overflow-y-auto",
            "px-5 py-4",
            "text-sm leading-relaxed text-zinc-100",
            "placeholder:text-zinc-600",
            "outline-none",
            "selection:bg-violet-500/30",
            "caret-violet-400",
          )}
        />

        {/* Footer */}
        <div className="relative flex items-center justify-between border-t border-white/[0.06] bg-white/[0.015] px-4 py-2.5">
          <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
            <kbd className="rounded border border-white/[0.07] bg-white/[0.035] px-1.5 py-1 font-mono text-[9px] text-zinc-600">
              ⌘ Enter
            </kbd>

            <span>to send</span>

            <span className="mx-1 text-zinc-800">·</span>

            <kbd className="rounded border border-white/[0.07] bg-white/[0.035] px-1.5 py-1 font-mono text-[9px] text-zinc-600">
              Enter
            </kbd>

            <span>newline</span>
          </div>

          <button
            type="button"
            disabled={
              !value.trim() ||
              disabled ||
              isOverLimit
            }
            onClick={handleSubmit}
            className={cn(
              "flex h-8 items-center gap-1.5 rounded-lg px-3",
              "text-[10px] font-medium",
              "transition-all duration-300",
              value.trim() && !isOverLimit
                ? [
                    "bg-white text-black",
                    "hover:bg-zinc-200",
                    "hover:shadow-[0_5px_20px_rgba(139,92,246,0.18)]",
                    "active:scale-95",
                  ]
                : "cursor-not-allowed bg-white/[0.05] text-zinc-700",
            )}
          >
            <span>Send</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
}