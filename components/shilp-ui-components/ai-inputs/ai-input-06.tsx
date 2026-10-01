"use client";

import * as React from "react";
import { ArrowUp, ChevronRight, CornerDownLeft, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const COMMANDS = [
  "/help",
  "/new",
  "/clear",
  "/export",
  "/settings",
] as const;

interface AIInput06Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput06({
  value: controlledValue,
  onChange,
  onSubmit,
  placeholder = "Type a command or ask a question...",
  disabled = false,
  className,
}: AIInput06Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const filteredCommands = value.startsWith("/")
    ? COMMANDS.filter((command) => command.startsWith(value))
    : [];

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
  };

  return (
    <div className={cn("mx-auto w-full max-w-xl", className)}>
      {/* Command suggestions */}
      {filteredCommands.length > 0 && (
        <div
          className={cn(
            "mb-2 overflow-hidden rounded-xl",
            "border border-white/[0.09]",
            "bg-[#0b0b0e]/98",
            "backdrop-blur-xl",
            "shadow-[0_-12px_45px_rgba(0,0,0,0.45)]",
          )}
        >
          <div className="border-b border-white/[0.05] px-3 py-2">
            <div className="flex items-center gap-2">
              <Terminal className="h-3 w-3 text-violet-400" />
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                Commands
              </span>
            </div>
          </div>

          <div className="p-1.5">
            {filteredCommands.map((command) => (
              <button
                key={command}
                type="button"
                onClick={() => setValue(`${command} `)}
                className={cn(
                  "group/command flex w-full items-center justify-between rounded-lg",
                  "px-2.5 py-2",
                  "text-left",
                  "transition-all duration-150",
                  "hover:bg-white/[0.045]",
                )}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-md",
                      "border border-white/[0.06]",
                      "bg-white/[0.025]",
                      "text-violet-400",
                    )}
                  >
                    <ChevronRight className="h-3 w-3" />
                  </div>

                  <span className="font-mono text-xs text-zinc-300">
                    {command}
                  </span>
                </div>

                <span className="text-[9px] text-zinc-700 transition-colors group-hover/command:text-zinc-500">
                  command
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Terminal surface */}
      <div className="group relative">
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[18px]",
            "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            "blur-sm transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-[17px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/98",
            "backdrop-blur-xl",
            "shadow-[0_18px_55px_rgba(0,0,0,0.35)]",
            "transition-all duration-300",
            isFocused && [
              "border-white/[0.16]",
              "shadow-[0_22px_65px_rgba(0,0,0,0.45)]",
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

          {/* Terminal header */}
          <div className="flex h-10 items-center border-b border-white/[0.06] bg-white/[0.015] px-3.5">
            {/* Window controls */}
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/[0.08]" />
            </div>

            {/* Title */}
            <div className="ml-3 flex items-center gap-2">
              <Terminal className="h-3.5 w-3.5 text-zinc-600" />

              <span className="font-mono text-[10px] text-zinc-600">
                shilp — command
              </span>
            </div>

            {/* Status */}
            <div className="ml-auto flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />

              <span className="font-mono text-[9px] text-zinc-600">
                ready
              </span>
            </div>
          </div>

          {/* Input */}
          <div className="flex min-h-[58px] items-center gap-2.5 px-4">
            {/* Prompt */}
            <span
              className={cn(
                "select-none font-mono text-sm transition-colors duration-200",
                isFocused ? "text-violet-400" : "text-zinc-600",
              )}
            >
              $
            </span>

            <input
              type="text"
              placeholder={placeholder}
              disabled={disabled}
              value={value}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleSubmit();
                }

                if (event.key === "Escape") {
                  setValue("");
                }
              }}
              className={cn(
                "min-w-0 flex-1 bg-transparent",
                "font-mono text-sm",
                "text-zinc-200",
                "placeholder:text-zinc-700",
                "outline-none",
                "disabled:cursor-not-allowed",
              )}
            />

            {/* Return hint */}
            <kbd
              className={cn(
                "hidden items-center gap-1 sm:flex",
                "h-6 rounded-md px-2",
                "border border-white/[0.06]",
                "bg-white/[0.025]",
                "font-mono text-[9px]",
                "text-zinc-600",
                "transition-all duration-200",
                value.trim()
                  ? "opacity-100"
                  : "opacity-40",
              )}
            >
              <CornerDownLeft className="h-3 w-3" />
              return
            </kbd>

            {/* Submit */}
            <button
              type="button"
              disabled={!value.trim() || disabled}
              onClick={handleSubmit}
              aria-label="Execute command"
              className={cn(
                "group/send flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg",
                "border transition-all duration-300",
                value.trim() && !disabled
                  ? [
                      "border-white/[0.12]",
                      "bg-white",
                      "text-black",
                      "shadow-[0_5px_20px_rgba(255,255,255,0.06)]",
                      "hover:border-violet-300/50",
                      "hover:shadow-[0_5px_25px_rgba(139,92,246,0.22)]",
                      "active:scale-90",
                    ]
                  : [
                      "cursor-not-allowed",
                      "border-white/[0.05]",
                      "bg-white/[0.025]",
                      "text-zinc-700",
                    ],
              )}
            >
              <ArrowUp
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-300",
                  value.trim() && "group-hover/send:-translate-y-0.5",
                )}
              />
            </button>
          </div>

          {/* Quick commands */}
          <div className="flex items-center gap-1.5 overflow-x-auto border-t border-white/[0.05] bg-white/[0.012] px-3.5 py-2.5 scrollbar-none">
            <span className="mr-1 shrink-0 font-mono text-[9px] uppercase tracking-wider text-zinc-700">
              quick
            </span>

            {COMMANDS.slice(0, 4).map((command) => (
              <button
                key={command}
                type="button"
                disabled={disabled}
                onClick={() => setValue(`${command} `)}
                className={cn(
                  "shrink-0 rounded-md px-2 py-1",
                  "border border-white/[0.06]",
                  "bg-white/[0.02]",
                  "font-mono text-[9px]",
                  "text-zinc-600",
                  "transition-all duration-200",
                  "hover:border-white/[0.11]",
                  "hover:bg-white/[0.05]",
                  "hover:text-zinc-300",
                  "active:scale-95",
                  disabled && "cursor-not-allowed opacity-50",
                )}
              >
                {command}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">
          Run a command or ask Shilp
        </span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="font-mono text-[10px] text-zinc-700">
          / for commands
        </span>
      </div>
    </div>
  );
}