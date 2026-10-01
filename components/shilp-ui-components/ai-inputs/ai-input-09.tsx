"use client";

import * as React from "react";
import { ArrowUp, Square, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput09Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onStop?: () => void;
  placeholder?: string;
  disabled?: boolean;
  isStreaming?: boolean;
  streamingText?: string;
  className?: string;
}

export function AIInput09({
  value: controlledValue,
  onChange,
  onSubmit,
  onStop,
  placeholder = "Ask me anything...",
  disabled = false,
  isStreaming = false,
  streamingText = "Generating response",
  className,
}: AIInput09Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled || isStreaming) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

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
              isStreaming && "border-violet-400/20 bg-violet-500/[0.06]",
            )}
          >
            <Sparkles
              className={cn(
                "h-3 w-3 transition-colors duration-300",
                isStreaming
                  ? "animate-pulse text-violet-400"
                  : "text-violet-400",
              )}
            />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            {isStreaming ? "Shilp AI · Working" : "Shilp AI"}
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          {isStreaming ? "Processing your request" : "Ready"}
        </span>
      </div>

      {/* Composer */}
      <div className="group relative">
        {/* Streaming / focus glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "blur-sm transition-opacity duration-500",
            isStreaming
              ? "bg-gradient-to-r from-violet-500/30 via-violet-300/10 to-violet-500/30 opacity-100"
              : "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            !isStreaming && !isFocused && "opacity-0",
          )}
        />

        {/* Animated streaming ring */}
        {isStreaming && (
          <div
            className={cn(
              "pointer-events-none absolute -inset-px rounded-[21px]",
              "opacity-90",
            )}
          >
            <div className="streaming-ring absolute inset-0 rounded-[21px]" />
          </div>
        )}

        <div
          className={cn(
            "relative overflow-hidden rounded-[20px]",
            "border",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
            "transition-all duration-300",
            isStreaming
              ? "border-violet-400/[0.18]"
              : [
                  "border-white/[0.09]",
                  isFocused && "border-white/[0.16]",
                ],
            isFocused &&
              !isStreaming &&
              "shadow-[0_22px_70px_rgba(0,0,0,0.42)]",
            isStreaming &&
              "shadow-[0_22px_75px_rgba(109,40,217,0.12)]",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top highlight */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-0 h-px w-1/2",
              "-translate-x-1/2",
              "bg-gradient-to-r from-transparent via-violet-400/60 to-transparent",
              "transition-opacity duration-500",
              isStreaming || isFocused ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Streaming indicator */}
          {isStreaming && (
            <div className="flex items-center gap-2.5 px-4 pt-3.5">
              {/* Animated dots */}
              <div className="flex items-center gap-1">
                <span className="stream-dot h-1.5 w-1.5 rounded-full bg-violet-400" />
                <span className="stream-dot h-1.5 w-1.5 rounded-full bg-violet-400 [animation-delay:120ms]" />
                <span className="stream-dot h-1.5 w-1.5 rounded-full bg-violet-400 [animation-delay:240ms]" />
              </div>

              <span className="text-[10px] font-medium text-violet-400/80">
                {streamingText}
              </span>

              <span className="h-px flex-1 bg-gradient-to-r from-violet-400/15 to-transparent" />
            </div>
          )}

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            placeholder={isStreaming ? "" : placeholder}
            disabled={disabled || isStreaming}
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
              "py-4 pl-4 pr-[110px]",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
              isStreaming && "cursor-not-allowed",
            )}
          />

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between border-t border-white/[0.05] px-3 py-2.5">
            {/* Status */}
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isStreaming
                    ? "animate-pulse bg-violet-400"
                    : "bg-emerald-400/60",
                )}
              />

              <span className="text-[10px] text-zinc-700">
                {isStreaming ? "Streaming response" : "Ready"}
              </span>

              {!isStreaming && value.length > 0 && (
                <>
                  <span className="h-1 w-1 rounded-full bg-zinc-800" />

                  <span className="text-[10px] tabular-nums text-zinc-700">
                    {value.length}
                  </span>
                </>
              )}
            </div>

            {/* Action */}
            {isStreaming ? (
              <button
                type="button"
                onClick={onStop}
                className={cn(
                  "group/stop flex h-8 items-center gap-2 rounded-lg px-3",
                  "border border-white/[0.07]",
                  "bg-white/[0.025]",
                  "text-[10px] font-medium text-zinc-500",
                  "transition-all duration-200",
                  "hover:border-red-400/20",
                  "hover:bg-red-500/[0.07]",
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
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {isStreaming ? (
          <span className="text-[10px] text-zinc-700">
            AI is generating a response
          </span>
        ) : (
          <>
            <span className="text-[10px] text-zinc-700">
              Enter to send
            </span>

            <span className="h-1 w-1 rounded-full bg-zinc-800" />

            <span className="text-[10px] text-zinc-700">
              Shift + Enter for new line
            </span>
          </>
        )}
      </div>

      <style jsx>{`
        .streaming-ring {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(139, 92, 246, 0.15) 20%,
            rgba(167, 139, 250, 0.7) 50%,
            rgba(139, 92, 246, 0.15) 80%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: streamingBorder 2.4s linear infinite;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
        }

        .stream-dot {
          display: block;
          animation: streamBounce 1.2s ease-in-out infinite;
        }

        @keyframes streamingBorder {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes streamBounce {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          30% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}