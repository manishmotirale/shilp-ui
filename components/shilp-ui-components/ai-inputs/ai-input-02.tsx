"use client";

import * as React from "react";
import {
  ArrowUp,
  Paperclip,
  Globe,
  Image as ImageIcon,
  ChevronDown,
  Sparkles,
  Square,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

const MODELS = [
  { id: "claude-sonnet", name: "Claude Sonnet", tag: "Smart" },
  { id: "claude-haiku", name: "Claude Haiku", tag: "Fast" },
  { id: "gpt-4o", name: "GPT-4o", tag: "Balanced" },
  { id: "gemini-pro", name: "Gemini Pro", tag: "Creative" },
] as const;

interface AIInput02Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onStop?: () => void;
  className?: string;
  defaultModel?: string;
}

export function AIInput02({
  value: controlledValue,
  onChange,
  onSubmit,
  onAttach,
  placeholder = "Message Shilp...",
  disabled = false,
  isLoading = false,
  onStop,
  className,
  defaultModel = "Claude Sonnet",
}: AIInput02Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState(defaultModel);
  const [isModelOpen, setIsModelOpen] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 72,
    maxHeight: 200,
  });

  const currentModel =
    MODELS.find((model) => model.name === selectedModel) ?? MODELS[0];

  const handleSubmit = () => {
    if (!value.trim() || disabled || isLoading) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      {/* Label */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.035]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            Shilp AI
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          Intelligent workspace
        </span>
      </div>

      {/* Main container */}
      <div className="group relative">
        {/* Outer glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            "opacity-0 blur-sm transition-opacity duration-500",
            "group-focus-within:opacity-100",
          )}
        />

        <div
          className={cn(
            "relative overflow-visible rounded-[20px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.28)]",
            "transition-all duration-300",
            "focus-within:border-white/[0.16]",
            "focus-within:shadow-[0_20px_70px_rgba(0,0,0,0.42)]",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top line */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />

          {/* Top toolbar */}
          <div className="flex items-center justify-between px-3.5 pt-3">
            {/* Model selector */}
            <div className="relative">
              <button
                type="button"
                disabled={disabled || isLoading}
                onClick={() => setIsModelOpen((open) => !open)}
                className={cn(
                  "group/model flex h-8 items-center gap-2 rounded-lg px-2.5",
                  "border border-white/[0.07]",
                  "bg-white/[0.025]",
                  "text-xs font-medium text-zinc-400",
                  "transition-all duration-200",
                  "hover:border-white/[0.12]",
                  "hover:bg-white/[0.05]",
                  "hover:text-zinc-200",
                  "active:scale-[0.98]",
                )}
              >
                <Sparkles className="h-3.5 w-3.5 text-violet-400 transition-colors duration-200 group-hover/model:text-violet-300" />

                <span>{currentModel.name}</span>

                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-zinc-600 transition-transform duration-200",
                    isModelOpen && "rotate-180",
                  )}
                />
              </button>

              {/* Dropdown */}
              {isModelOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close model selector"
                    className="fixed inset-0 z-40 cursor-default"
                    onClick={() => setIsModelOpen(false)}
                  />

                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 mt-2 w-56 overflow-hidden",
                      "rounded-xl",
                      "border border-white/[0.09]",
                      "bg-[#0c0c0f]/98",
                      "backdrop-blur-2xl",
                      "shadow-[0_20px_60px_rgba(0,0,0,0.55)]",
                    )}
                  >
                    <div className="border-b border-white/[0.06] px-3 py-2.5">
                      <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                        Select model
                      </p>
                    </div>

                    <div className="p-1.5">
                      {MODELS.map((model) => {
                        const isSelected = selectedModel === model.name;

                        return (
                          <button
                            key={model.id}
                            type="button"
                            onClick={() => {
                              setSelectedModel(model.name);
                              setIsModelOpen(false);
                            }}
                            className={cn(
                              "group/item flex w-full items-center justify-between rounded-lg px-2.5 py-2.5",
                              "text-left transition-all duration-150",
                              isSelected
                                ? "bg-white/[0.06]"
                                : "hover:bg-white/[0.045]",
                            )}
                          >
                            <div className="flex items-center gap-2.5">
                              <div
                                className={cn(
                                  "flex h-7 w-7 items-center justify-center rounded-md",
                                  "border border-white/[0.06]",
                                  isSelected
                                    ? "bg-violet-500/10 text-violet-400"
                                    : "bg-white/[0.025] text-zinc-600",
                                )}
                              >
                                <Sparkles className="h-3.5 w-3.5" />
                              </div>

                              <div>
                                <p
                                  className={cn(
                                    "text-xs font-medium",
                                    isSelected
                                      ? "text-zinc-200"
                                      : "text-zinc-400",
                                  )}
                                >
                                  {model.name}
                                </p>

                                <p className="mt-0.5 text-[9px] text-zinc-700">
                                  {model.tag}
                                </p>
                              </div>
                            </div>

                            {isSelected && (
                              <Check className="h-3.5 w-3.5 text-violet-400" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Status */}
            <div className="flex items-center gap-1.5">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isLoading
                    ? "animate-pulse bg-violet-400"
                    : "bg-emerald-400/60",
                )}
              />

              <span className="text-[10px] text-zinc-700">
                {isLoading ? "Generating" : "Ready"}
              </span>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            placeholder={placeholder}
            disabled={disabled || isLoading}
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
              "min-h-[72px] max-h-[200px]",
              "px-4 pb-3 pt-4",
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
            {/* Tools */}
            <div className="flex items-center gap-0.5">
              <ToolButton
                icon={<Paperclip className="h-4 w-4" />}
                label="Attach files"
                onClick={onAttach}
                disabled={disabled || isLoading}
              />

              <ToolButton
                icon={<ImageIcon className="h-4 w-4" />}
                label="Add image"
                disabled={disabled || isLoading}
              />

              <ToolButton
                icon={<Globe className="h-4 w-4" />}
                label="Search web"
                disabled={disabled || isLoading}
              />
            </div>

            {/* Send area */}
            <div className="flex items-center gap-2">
              {value.length > 0 && !isLoading && (
                <span className="text-[10px] tabular-nums text-zinc-700">
                  {value.length}
                </span>
              )}

              {isLoading ? (
                <button
                  type="button"
                  onClick={onStop}
                  className={cn(
                    "group/stop flex h-9 items-center gap-2 rounded-xl px-3.5",
                    "border border-white/[0.07]",
                    "bg-white/[0.035]",
                    "text-xs font-medium text-zinc-400",
                    "transition-all duration-200",
                    "hover:border-red-400/20",
                    "hover:bg-red-500/10",
                    "hover:text-red-400",
                    "active:scale-95",
                  )}
                >
                  <Square className="h-3 w-3 fill-current" />
                  Stop
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!value.trim() || disabled}
                  onClick={handleSubmit}
                  className={cn(
                    "group/send relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
                    "border transition-all duration-300",
                    value.trim() && !disabled
                      ? [
                          "border-white/[0.12]",
                          "bg-white text-black",
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
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-[9px] text-zinc-700">
          Enter
        </kbd>

        <span className="text-[10px] text-zinc-700">to send</span>

        <span className="mx-1 h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          Shift + Enter for new line
        </span>
      </div>
    </div>
  );
}

interface ToolButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

function ToolButton({
  icon,
  label,
  onClick,
  disabled = false,
}: ToolButtonProps) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-lg",
        "border border-transparent",
        "text-zinc-600",
        "transition-all duration-200",
        "hover:border-white/[0.06]",
        "hover:bg-white/[0.045]",
        "hover:text-zinc-300",
        "active:scale-95",
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      {icon}
    </button>
  );
}
