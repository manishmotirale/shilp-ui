"use client";

import * as React from "react";
import {
  ArrowUp,
  Mic,
  MicOff,
  Type,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInput16Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput16({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Speak or type your message...",
  disabled = false,
  className,
}: AIInput16Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isRecording, setIsRecording] = React.useState(false);
  const [mode, setMode] = React.useState<"voice" | "text">("voice");

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const waveform = React.useMemo(
    () => [
      18, 28, 22, 34, 25, 38, 20, 30, 42, 24,
      36, 28, 44, 21, 32, 26, 40, 23, 34, 20,
    ],
    [],
  );

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 160,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    adjustHeight(true);
  };

  const toggleRecording = () => {
    if (disabled) return;
    setIsRecording((recording) => !recording);
  };

  const handleModeChange = (nextMode: "voice" | "text") => {
    if (disabled) return;

    setMode(nextMode);

    if (nextMode === "text") {
      setIsRecording(false);

      requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });
    }
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      <style>{`
        @keyframes shilp-wave {
          0%, 100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1);
          }
        }

        @keyframes shilp-recording-pulse {
          0%, 100% {
            box-shadow:
              0 0 0 0 rgba(139, 92, 246, 0.18),
              0 10px 35px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow:
              0 0 0 9px rgba(139, 92, 246, 0.04),
              0 14px 40px rgba(139, 92, 246, 0.14);
          }
        }
      `}</style>

      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl",
          "border border-white/[0.09]",
          "bg-[#09090b]/95",
          "backdrop-blur-2xl",
          "shadow-[0_18px_55px_rgba(0,0,0,0.3)]",
          "transition-all duration-300",
          isRecording
            ? "border-violet-400/30 shadow-[0_0_0_3px_rgba(139,92,246,0.06),0_20px_60px_rgba(0,0,0,0.4)]"
            : "focus-within:border-violet-400/25",
          disabled && "pointer-events-none opacity-50",
        )}
      >
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 left-1/2",
            "h-36 w-72 -translate-x-1/2 rounded-full",
            "bg-violet-500/[0.08] blur-3xl",
            "transition-opacity duration-500",
            isRecording ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg border border-violet-400/15 bg-violet-500/10">
              {mode === "voice" ? (
                <Mic className="size-3.5 text-violet-400" />
              ) : (
                <Type className="size-3.5 text-violet-400" />
              )}
            </div>

            <div>
              <p className="text-[12px] font-medium text-zinc-200">
                {mode === "voice" ? "Voice Input" : "Text Input"}
              </p>

              <p className="mt-0.5 text-[10px] text-zinc-600">
                {isRecording
                  ? "Listening..."
                  : mode === "voice"
                    ? "Speak naturally to Shilp"
                    : "Type your message"}
              </p>
            </div>
          </div>

          {/* Recording status */}
          {isRecording && (
            <div className="flex items-center gap-1.5 rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-2.5 py-1">
              <span className="size-1.5 animate-pulse rounded-full bg-violet-400" />
              <span className="text-[10px] font-medium text-violet-300">
                Recording
              </span>
            </div>
          )}
        </div>

        {/* Voice / Text switch */}
        <div className="relative px-4 pt-3">
          <div className="flex w-fit items-center rounded-lg border border-white/[0.07] bg-white/[0.025] p-1">
            {(["voice", "text"] as const).map((item) => {
              const active = mode === item;
              const Icon = item === "voice" ? Mic : Type;

              return (
                <button
                  key={item}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleModeChange(item)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-md px-3 py-1.5",
                    "text-[11px] font-medium",
                    "transition-all duration-300",
                    active
                      ? "bg-white/[0.08] text-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                      : "text-zinc-600 hover:text-zinc-400",
                  )}
                >
                  <Icon
                    className={cn(
                      "size-3.5",
                      active ? "text-violet-400" : "text-zinc-600",
                    )}
                  />
                  {item === "voice" ? "Voice" : "Text"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Voice mode */}
        {mode === "voice" ? (
          <div className="relative flex flex-col items-center px-4 py-7">
            {/* Waveform */}
            <div className="flex h-12 items-center gap-[3px]">
              {waveform.map((height, index) => (
                <span
                  key={index}
                  className={cn(
                    "w-[3px] origin-center rounded-full",
                    "transition-all duration-300",
                    isRecording
                      ? "bg-violet-400"
                      : "bg-white/[0.09]",
                  )}
                  style={{
                    height: `${height}px`,
                    animation: isRecording
                      ? `shilp-wave ${
                          0.55 + (index % 5) * 0.1
                        }s ease-in-out ${(index % 6) * 0.08}s infinite`
                      : "none",
                  }}
                />
              ))}
            </div>

            {/* Microphone */}
            <button
              type="button"
              disabled={disabled}
              onClick={toggleRecording}
              aria-label={
                isRecording ? "Stop recording" : "Start recording"
              }
              className={cn(
                "mt-6 flex size-14 items-center justify-center rounded-full",
                "border transition-all duration-300",
                isRecording
                  ? [
                      "border-violet-400/30",
                      "bg-violet-500",
                      "text-white",
                      "shadow-[0_8px_30px_rgba(139,92,246,0.28)]",
                    ]
                  : [
                      "border-white/[0.09]",
                      "bg-white/[0.045]",
                      "text-zinc-400",
                      "hover:border-violet-400/20",
                      "hover:bg-violet-500/10",
                      "hover:text-violet-300",
                    ],
              )}
              style={
                isRecording
                  ? {
                      animation:
                        "shilp-recording-pulse 2s ease-in-out infinite",
                    }
                  : undefined
              }
            >
              {isRecording ? (
                <MicOff className="size-5" />
              ) : (
                <Mic className="size-5" />
              )}
            </button>

            <p className="mt-4 text-[10px] text-zinc-600">
              {isRecording
                ? "Tap the microphone to stop"
                : "Tap the microphone to start speaking"}
            </p>
          </div>
        ) : (
          /* Text mode */
          <div className="relative">
            <textarea
              ref={textareaRef}
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onFocus={() => {}}
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
                "w-full resize-none bg-transparent",
                "min-h-[58px] max-h-[160px]",
                "px-4 py-4",
                "text-sm leading-relaxed text-zinc-100",
                "placeholder:text-zinc-600",
                "outline-none",
                "selection:bg-violet-500/30",
              )}
            />

            {/* Text toolbar */}
            <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5">
              <div className="flex items-center gap-1.5 text-[9px] text-zinc-700">
                <Sparkles className="size-3 text-violet-500/60" />
                <span>Shilp AI</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden text-[9px] text-zinc-700 sm:block">
                  Enter to send
                </span>

                <button
                  type="button"
                  disabled={!value.trim() || disabled}
                  onClick={handleSubmit}
                  aria-label="Send message"
                  className={cn(
                    "flex size-8 items-center justify-center rounded-lg",
                    "transition-all duration-300",
                    value.trim()
                      ? [
                          "bg-white text-black",
                          "hover:bg-zinc-200",
                          "active:scale-95",
                        ]
                      : "cursor-not-allowed bg-white/[0.05] text-zinc-700",
                  )}
                >
                  <ArrowUp className="size-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}