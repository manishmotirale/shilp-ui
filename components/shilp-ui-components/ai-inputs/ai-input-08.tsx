"use client";

import * as React from "react";
import {
  ArrowUp,
  AtSign,
  Hash,
  FileText,
  Code,
  Globe,
  Database,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const MENTION_SOURCES = [
  {
    id: "docs",
    icon: FileText,
    label: "Docs",
    color: "text-zinc-300",
  },
  {
    id: "code",
    icon: Code,
    label: "Codebase",
    color: "text-violet-400",
  },
  {
    id: "web",
    icon: Globe,
    label: "Web",
    color: "text-zinc-400",
  },
  {
    id: "db",
    icon: Database,
    label: "Database",
    color: "text-zinc-500",
  },
] as const;

interface AIInput08Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput08({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Type @ to mention a source, # to add a tag...",
  disabled = false,
  className,
}: AIInput08Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const tokens = React.useMemo(() => {
    const parts = value.split(/(@\w+|#\w+)/g);

    return parts.map((part, index) => ({
      text: part,
      isMention: part.startsWith("@"),
      isTag: part.startsWith("#"),
      key: index,
    }));
  }, [value]);

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const insertToken = (token: string) => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    const position = textarea.selectionStart;
    const before = value.slice(0, position);
    const after = value.slice(position);

    const newValue = before + token + after;

    setValue(newValue);

    setTimeout(() => {
      const nextPosition = position + token.length;

      textarea.setSelectionRange(nextPosition, nextPosition);
      textarea.focus();
    }, 0);
  };

  const mentionCount = (value.match(/@\w+/g) ?? []).length;
  const tagCount = (value.match(/#\w+/g) ?? []).length;

  const hasContext = mentionCount > 0 || tagCount > 0;

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.035]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Context Composer
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          Add context to your prompt
        </span>
      </div>

      {/* Composer */}
      <div className="group relative">
        {/* Ambient focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            "blur-sm transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-[20px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
            "transition-all duration-300",
            isFocused && [
              "border-white/[0.16]",
              "shadow-[0_22px_70px_rgba(0,0,0,0.42)]",
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

          {/* Context source toolbar */}
          <div className="flex flex-wrap items-center gap-1.5 px-3.5 pt-3.5">
            <div className="mr-1 flex items-center gap-1.5">
              <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-700">
                Context
              </span>
            </div>

            {MENTION_SOURCES.map((source) => {
              const Icon = source.icon;

              return (
                <button
                  key={source.id}
                  type="button"
                  disabled={disabled}
                  onClick={() => insertToken(`@${source.id} `)}
                  className={cn(
                    "group/source flex h-7 items-center gap-1.5 rounded-lg px-2",
                    "border border-white/[0.06]",
                    "bg-white/[0.025]",
                    "text-zinc-600",
                    "transition-all duration-200",
                    "hover:border-white/[0.12]",
                    "hover:bg-white/[0.05]",
                    "hover:text-zinc-300",
                    "active:scale-95",
                    disabled && "cursor-not-allowed opacity-50",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3 w-3 transition-colors duration-200",
                      source.color,
                    )}
                  />

                  <span className="text-[10px] font-medium">
                    {source.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Token preview */}
          {hasContext && (
            <div className="px-4 pt-3">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[9px] uppercase tracking-[0.15em] text-zinc-700">
                  Active
                </span>

                {tokens
                  .filter(
                    (token) =>
                      token.isMention || token.isTag,
                  )
                  .map((token) => (
                    <span
                      key={token.key}
                      className={cn(
                        "rounded-md border px-1.5 py-0.5",
                        "font-mono text-[10px]",
                        token.isMention
                          ? "border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300"
                          : "border-white/[0.08] bg-white/[0.035] text-zinc-400",
                      )}
                    >
                      {token.text}
                    </span>
                  ))}
              </div>
            </div>
          )}

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
              "block w-full resize-none bg-transparent",
              "min-h-[58px] max-h-[200px]",
              "px-4 py-4",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
            )}
          />

          {/* Divider */}
          <div className="mx-3 border-t border-white/[0.05]" />

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between px-3 py-2.5">
            {/* Token controls */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={disabled}
                onClick={() => insertToken("@")}
                title="Add mention"
                className={cn(
                  "group/mention flex h-8 items-center gap-1.5 rounded-lg px-2",
                  "border border-transparent",
                  "text-zinc-600",
                  "transition-all duration-200",
                  "hover:border-violet-400/[0.12]",
                  "hover:bg-violet-500/[0.06]",
                  "hover:text-violet-300",
                  "active:scale-95",
                )}
              >
                <AtSign className="h-3.5 w-3.5" />

                <span className="text-[10px] font-medium">
                  Mention
                </span>

                {mentionCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-violet-500/10 px-1 text-[9px] text-violet-400">
                    {mentionCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                disabled={disabled}
                onClick={() => insertToken("#")}
                title="Add tag"
                className={cn(
                  "group/tag flex h-8 items-center gap-1.5 rounded-lg px-2",
                  "border border-transparent",
                  "text-zinc-600",
                  "transition-all duration-200",
                  "hover:border-white/[0.1]",
                  "hover:bg-white/[0.04]",
                  "hover:text-zinc-300",
                  "active:scale-95",
                )}
              >
                <Hash className="h-3.5 w-3.5" />

                <span className="text-[10px] font-medium">
                  Tag
                </span>

                {tagCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-white/[0.06] px-1 text-[9px] text-zinc-400">
                    {tagCount}
                  </span>
                )}
              </button>
            </div>

            {/* Character count + send */}
            <div className="flex items-center gap-2">
              {value.length > 0 && (
                <span className="text-[10px] tabular-nums text-zinc-700">
                  {value.length}
                </span>
              )}

              <button
                type="button"
                disabled={!value.trim() || disabled}
                onClick={handleSubmit}
                aria-label="Send prompt"
                className={cn(
                  "group/send relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
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

                <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/send:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Helper */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">
          @ for context
        </span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          # for tags
        </span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          Enter to send
        </span>
      </div>
    </div>
  );
}