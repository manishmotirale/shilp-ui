"use client";

import * as React from "react";
import {
  ArrowUp,
  Lock,
  Globe,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput10Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, isPrivate: boolean) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput10({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder,
  disabled = false,
  className,
}: AIInput10Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isPrivate, setIsPrivate] = React.useState(true);
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value, isPrivate);
    setValue("");
    adjustHeight(true);
  };

  const derivedPlaceholder =
    placeholder ??
    (isPrivate
      ? "Your conversation is private..."
      : "This conversation will be visible to others...");

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-md",
              "border border-white/[0.08]",
              "bg-white/[0.035]",
            )}
          >
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            {isPrivate ? "Private Workspace" : "Shared Workspace"}
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          {isPrivate ? "Protected" : "Team visible"}
        </span>
      </div>

      {/* Composer */}
      <div className="group relative">
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "blur-sm transition-opacity duration-500",
            isPrivate
              ? "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20"
              : "bg-gradient-to-r from-violet-500/25 via-violet-300/10 to-violet-500/25",
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

          {/* Privacy toolbar */}
          <div className="flex items-center justify-between px-3.5 pt-3.5">
            {/* Privacy toggle */}
            <button
              type="button"
              disabled={disabled}
              onClick={() => setIsPrivate((previous) => !previous)}
              className={cn(
                "group/privacy flex h-8 items-center gap-2 rounded-lg px-2.5",
                "border transition-all duration-300",
                isPrivate
                  ? [
                      "border-white/[0.08]",
                      "bg-white/[0.035]",
                      "text-zinc-400",
                      "hover:border-violet-400/[0.18]",
                      "hover:bg-violet-500/[0.05]",
                      "hover:text-zinc-200",
                    ]
                  : [
                      "border-violet-400/[0.18]",
                      "bg-violet-500/[0.07]",
                      "text-violet-300",
                      "hover:border-violet-400/[0.28]",
                      "hover:bg-violet-500/[0.1]",
                    ],
                "active:scale-[0.98]",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-md",
                  "border transition-all duration-300",
                  isPrivate
                    ? "border-white/[0.06] bg-white/[0.035]"
                    : "border-violet-400/[0.15] bg-violet-500/[0.1]",
                )}
              >
                {isPrivate ? (
                  <Lock
                    className={cn(
                      "h-2.5 w-2.5",
                      "text-violet-400",
                    )}
                  />
                ) : (
                  <Globe className="h-2.5 w-2.5 text-violet-400" />
                )}
              </span>

              <span className="text-[10px] font-medium">
                {isPrivate ? "Private" : "Shared"}
              </span>
            </button>

            {/* Visibility indicator */}
            <div
              className={cn(
                "flex items-center gap-1.5",
                "text-[10px]",
                isPrivate ? "text-zinc-700" : "text-violet-400/70",
              )}
            >
              {isPrivate ? (
                <EyeOff className="h-3 w-3" />
              ) : (
                <Eye className="h-3 w-3" />
              )}

              <span>
                {isPrivate ? "Only you" : "Visible to team"}
              </span>
            </div>
          </div>

          {/* Privacy explanation */}
          <div className="px-4 pt-3">
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2",
                "transition-all duration-300",
                isPrivate
                  ? "border-white/[0.05] bg-white/[0.02]"
                  : "border-violet-400/[0.1] bg-violet-500/[0.035]",
              )}
            >
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-md",
                  isPrivate
                    ? "bg-white/[0.04]"
                    : "bg-violet-500/[0.08]",
                )}
              >
                {isPrivate ? (
                  <Lock className="h-2.5 w-2.5 text-zinc-600" />
                ) : (
                  <Globe className="h-2.5 w-2.5 text-violet-400" />
                )}
              </div>

              <span
                className={cn(
                  "text-[10px]",
                  isPrivate ? "text-zinc-600" : "text-violet-300/70",
                )}
              >
                {isPrivate
                  ? "Only you can see this conversation."
                  : "This conversation can be viewed by your team."}
              </span>
            </div>
          </div>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            placeholder={derivedPlaceholder}
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
              "px-4 py-4 pr-[62px]",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
            )}
          />

          {/* Divider */}
          <div className="mx-3 border-t border-white/[0.05]" />

          {/* Bottom bar */}
          <div className="flex items-center justify-between px-3 py-2.5">
            {/* Status */}
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isPrivate
                    ? "bg-emerald-400/60"
                    : "bg-violet-400/70",
                )}
              />

              <span className="text-[10px] text-zinc-700">
                {isPrivate
                  ? "Private conversation"
                  : "Shared conversation"}
              </span>
            </div>

            {/* Send */}
            <button
              type="button"
              disabled={!value.trim() || disabled}
              onClick={handleSubmit}
              aria-label="Send message"
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

      {/* Footer */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">
          {isPrivate
            ? "Your conversation stays private"
            : "Your conversation is visible to your team"}
        </span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          Enter to send
        </span>
      </div>
    </div>
  );
}