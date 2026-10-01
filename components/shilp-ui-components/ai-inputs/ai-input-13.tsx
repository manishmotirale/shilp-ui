"use client";

import * as React from "react";
import {
  ArrowUp,
  Paperclip,
  Image as ImageIcon,
  Mic,
  Globe,
  Settings,
  Sparkles,
  Loader2,
  Eye,
  ChevronDown,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput13Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  agentName?: string;
}

export function AIInput13({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "How can I help you today?",
  disabled = false,
  isLoading = false,
  className,
  agentName = "AI Assistant",
}: AIInput13Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [settingsOpen, setSettingsOpen] = React.useState(false);
  const [webSearch, setWebSearch] = React.useState(true);
  const [preview, setPreview] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled || isLoading) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      <div
        className={cn(
          "group relative overflow-visible rounded-2xl",
          "border border-white/[0.09]",
          "bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "shadow-[0_18px_60px_rgba(0,0,0,0.3)]",
          "transition-all duration-300",
          "focus-within:border-violet-400/30",
          "focus-within:shadow-[0_0_0_3px_rgba(139,92,246,0.07),0_22px_70px_rgba(0,0,0,0.4)]",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-36 w-72 -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-3xl transition-opacity duration-500 group-focus-within:opacity-100" />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2.5">
            {/* Agent avatar */}
            <div className="relative flex size-8 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10">
              <Sparkles className="size-3.5 text-violet-400" />

              <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full border-2 border-[#09090b] bg-emerald-400" />
            </div>

            <div>
              <p className="text-[13px] font-medium leading-none text-zinc-100">
                {agentName}
              </p>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="text-[10px] text-zinc-600">
                  {isLoading ? "Generating response" : "Ready to assist"}
                </span>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="relative">
            <button
              type="button"
              disabled={disabled}
              onClick={() => setSettingsOpen((open) => !open)}
              aria-label="Open AI settings"
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                "border border-transparent",
                "text-zinc-500",
                "transition-all duration-200",
                "hover:border-white/[0.07]",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
                settingsOpen &&
                  "border-white/[0.08] bg-white/[0.06] text-zinc-200",
              )}
            >
              <Settings
                className={cn(
                  "size-3.5 transition-transform duration-300",
                  settingsOpen && "rotate-45",
                )}
              />
            </button>

            {/* Settings dropdown */}
            {settingsOpen && (
              <div
                className={cn(
                  "absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden",
                  "rounded-xl border border-white/[0.09]",
                  "bg-[#0d0d0f]/98",
                  "shadow-[0_18px_60px_rgba(0,0,0,0.5)]",
                  "backdrop-blur-2xl",
                )}
              >
                <div className="border-b border-white/[0.06] px-3.5 py-2.5">
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                    Composer settings
                  </p>
                </div>

                {/* Web search */}
                <button
                  type="button"
                  onClick={() => setWebSearch((value) => !value)}
                  className={cn(
                    "flex w-full items-center justify-between px-3.5 py-3",
                    "border-b border-white/[0.06]",
                    "transition-colors duration-150",
                    "hover:bg-white/[0.035]",
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-white/[0.04]">
                      <Globe className="size-3.5 text-zinc-500" />
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-medium text-zinc-300">
                        Web search
                      </p>
                      <p className="text-[10px] text-zinc-600">
                        Search current information
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "relative h-[18px] w-8 rounded-full",
                      "transition-colors duration-200",
                      webSearch ? "bg-violet-500" : "bg-white/[0.1]",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-0.5 size-3.5 rounded-full bg-white",
                        "shadow-sm transition-all duration-200",
                        webSearch ? "left-[18px]" : "left-0.5",
                      )}
                    />
                  </div>
                </button>

                {/* Preview */}
                <button
                  type="button"
                  onClick={() => setPreview((value) => !value)}
                  className={cn(
                    "flex w-full items-center justify-between px-3.5 py-3",
                    "transition-colors duration-150",
                    "hover:bg-white/[0.035]",
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-white/[0.04]">
                      <Eye className="size-3.5 text-zinc-500" />
                    </div>

                    <div className="text-left">
                      <p className="text-xs font-medium text-zinc-300">
                        Preview mode
                      </p>
                      <p className="text-[10px] text-zinc-600">
                        Preview generated output
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "relative h-[18px] w-8 rounded-full",
                      "transition-colors duration-200",
                      preview ? "bg-violet-500" : "bg-white/[0.1]",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute top-0.5 size-3.5 rounded-full bg-white",
                        "shadow-sm transition-all duration-200",
                        preview ? "left-[18px]" : "left-0.5",
                      )}
                    />
                  </div>
                </button>
              </div>
            )}
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
            "relative w-full resize-none bg-transparent",
            "min-h-[60px] max-h-[200px]",
            "px-4 py-4",
            "text-sm leading-relaxed text-zinc-100",
            "placeholder:text-zinc-600",
            "outline-none",
            "selection:bg-violet-500/30",
          )}
        />

        {/* Active settings */}
        {(webSearch || preview) && (
          <div className="relative flex flex-wrap items-center gap-1.5 px-4 pb-1">
            {webSearch && (
              <span className="flex items-center gap-1.5 rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-2.5 py-1 text-[10px] font-medium text-violet-300">
                <Globe className="size-3" />
                Web search
                <Check className="size-2.5 text-violet-400" />
              </span>
            )}

            {preview && (
              <span className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] font-medium text-zinc-400">
                <Eye className="size-3" />
                Preview
                <Check className="size-2.5 text-zinc-500" />
              </span>
            )}
          </div>
        )}

        {/* Bottom toolbar */}
        <div className="relative mt-1 flex items-center justify-between px-3 pb-3 pt-2">
          <div className="flex items-center gap-1">
            {/* Attach */}
            <button
              type="button"
              title="Attach file"
              disabled={disabled}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                "text-zinc-500",
                "transition-all duration-200",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
              )}
            >
              <Paperclip className="size-3.5" />
            </button>

            {/* Image */}
            <button
              type="button"
              title="Add image"
              disabled={disabled}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                "text-zinc-500",
                "transition-all duration-200",
                "hover:bg-white/[0.05]",
                "hover:text-violet-300",
              )}
            >
              <ImageIcon className="size-3.5" />
            </button>

            {/* Voice */}
            <button
              type="button"
              title="Voice input"
              disabled={disabled}
              className={cn(
                "flex size-8 items-center justify-center rounded-lg",
                "text-zinc-500",
                "transition-all duration-200",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
              )}
            >
              <Mic className="size-3.5" />
            </button>

            <div className="mx-1 h-4 w-px bg-white/[0.06]" />

            <span className="hidden text-[10px] text-zinc-700 sm:block">
              Shift + Enter for new line
            </span>
          </div>

          {/* Send */}
          <button
            type="button"
            disabled={!value.trim() || disabled || isLoading}
            onClick={handleSubmit}
            className={cn(
              "flex h-9 items-center gap-2 rounded-xl px-3.5",
              "text-[11px] font-medium",
              "transition-all duration-300",
              value.trim() && !isLoading
                ? [
                    "bg-white text-black",
                    "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                    "hover:bg-zinc-200",
                    "hover:shadow-[0_6px_25px_rgba(139,92,246,0.18)]",
                    "active:scale-[0.97]",
                  ]
                : [
                    "cursor-not-allowed",
                    "bg-white/[0.05]",
                    "text-zinc-700",
                  ],
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                <span>Thinking...</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <ArrowUp className="size-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}