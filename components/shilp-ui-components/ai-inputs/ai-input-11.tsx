"use client";

import * as React from "react";
import {
  ArrowUp,
  MessageSquare,
  Image as ImageIcon,
  Code,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

type InputMode = "chat" | "image" | "code";

const MODES = [
  {
    id: "chat" as const,
    icon: MessageSquare,
    label: "Chat",
    placeholder: "Ask Shilp anything...",
  },
  {
    id: "image" as const,
    icon: ImageIcon,
    label: "Image",
    placeholder: "Describe the image you want to create...",
  },
  {
    id: "code" as const,
    icon: Code,
    label: "Code",
    placeholder: "Describe the code you need...",
  },
] as const;

interface AIInput11Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, mode: InputMode) => void;
  disabled?: boolean;
  className?: string;
}

export function AIInput11({
  value: controlledValue,
  onChange,
  onSubmit,
  disabled = false,
  className,
}: AIInput11Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [mode, setMode] = React.useState<InputMode>("chat");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const currentMode = MODES.find((item) => item.id === mode) ?? MODES[0];
  const ModeIcon = currentMode.icon;

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value, mode);
    setValue("");
    adjustHeight(true);
  };

  const handleModeChange = (nextMode: InputMode) => {
    if (disabled) return;

    setMode(nextMode);

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
      adjustHeight();
    });
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {/* Header */}
      <div className="mb-2.5 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04]">
            <Sparkles className="size-3 text-violet-400" />
          </div>

          <span className="text-xs font-medium text-zinc-400">
            Shilp Composer
          </span>
        </div>

        <span className="text-[11px] text-zinc-600">
          {mode === "chat"
            ? "Conversation"
            : mode === "image"
              ? "Image generation"
              : "Code generation"}
        </span>
      </div>

      {/* Mode selector */}
      <div className="mb-2.5 flex w-fit items-center rounded-xl border border-white/[0.08] bg-white/[0.025] p-1 backdrop-blur-xl">
        {MODES.map((item) => {
          const Icon = item.icon;
          const active = mode === item.id;

          return (
            <button
              key={item.id}
              type="button"
              disabled={disabled}
              onClick={() => handleModeChange(item.id)}
              className={cn(
                "relative flex items-center gap-2 rounded-lg px-3.5 py-2",
                "text-xs font-medium",
                "transition-all duration-300",
                "disabled:pointer-events-none disabled:opacity-50",
                active
                  ? [
                      "bg-white/[0.08]",
                      "text-white",
                      "shadow-[0_4px_18px_rgba(0,0,0,0.2)]",
                    ]
                  : [
                      "text-zinc-500",
                      "hover:bg-white/[0.04]",
                      "hover:text-zinc-300",
                    ],
              )}
            >
              <Icon
                className={cn(
                  "size-3.5 transition-colors duration-300",
                  active ? "text-violet-400" : "text-zinc-500",
                )}
              />

              <span>{item.label}</span>

              {active && (
                <span className="absolute inset-x-3 -bottom-px h-px bg-violet-400/70" />
              )}
            </button>
          );
        })}
      </div>

      {/* Composer */}
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border border-white/[0.09]",
          "bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "transition-all duration-300",
          isFocused
            ? [
                "border-violet-400/30",
                "shadow-[0_0_0_3px_rgba(139,92,246,0.08),0_20px_60px_rgba(0,0,0,0.35)]",
              ]
            : "shadow-[0_16px_50px_rgba(0,0,0,0.25)]",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-20 left-1/2 h-32 w-64 -translate-x-1/2",
            "rounded-full bg-violet-500/[0.08] blur-3xl",
            "transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Top mode indicator */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <div className="flex size-6 items-center justify-center rounded-md bg-violet-500/10">
              <ModeIcon className="size-3.5 text-violet-400" />
            </div>

            <span className="text-[11px] font-medium text-zinc-400">
              {currentMode.label} mode
            </span>
          </div>

          <span className="text-[10px] text-zinc-600">
            Shift + Enter for new line
          </span>
        </div>

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          placeholder={currentMode.placeholder}
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
            mode === "code" && "font-mono text-[13px]",
          )}
        />

        {/* Bottom toolbar */}
        <div className="relative flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[10px] text-zinc-600">
              <span className="size-1.5 rounded-full bg-violet-400/70" />
              Ready
            </span>

            {value.length > 0 && (
              <span className="text-[10px] text-zinc-700">
                {value.length} chars
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden rounded-md border border-white/[0.07] bg-white/[0.025] px-1.5 py-1 text-[9px] text-zinc-600 sm:inline-flex">
              Enter
            </kbd>

            <button
              type="button"
              disabled={!value.trim() || disabled}
              onClick={handleSubmit}
              aria-label={`Send ${currentMode.label.toLowerCase()} request`}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                "transition-all duration-300",
                value.trim()
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
      </div>

      {/* Footer hint */}
      <div className="mt-2.5 flex items-center justify-center gap-2 text-[10px] text-zinc-600">
        <ModeIcon className="size-3 text-zinc-700" />
        <span>
          {mode === "chat"
            ? "Ask questions, brainstorm, or explore ideas"
            : mode === "image"
              ? "Describe what you want Shilp to create"
              : "Explain what you want to build"}
        </span>
      </div>
    </div>
  );
}