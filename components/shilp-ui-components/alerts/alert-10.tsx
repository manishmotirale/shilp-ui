"use client";

import { useState } from "react";
import {
  Check,
  Circle,
  Copy,
  Loader2,
  Terminal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert10Props {
  command?: string;
  output?: string;
  status?: "success" | "error" | "running";
  onDismiss?: () => void;
  className?: string;
}

export default function Alert10({
  command = "npm run build",
  output = "Build completed successfully.",
  status = "success",
  onDismiss,
  className,
}: Alert10Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const statusConfig = {
    success: {
      label: "Success",
      className: "text-emerald-400",
      icon: Check,
    },
    error: {
      label: "Error",
      className: "text-red-400",
      icon: X,
    },
    running: {
      label: "Running",
      className: "text-violet-300",
      icon: Loader2,
    },
  };

  const current = statusConfig[status];
  const StatusIcon = current.icon;

  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl transition-all duration-300",
        exiting
          ? "translate-y-2 scale-[0.98] opacity-0"
          : "translate-y-0 scale-100 opacity-100",
        className
      )}
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070708] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-violet-500/70" />
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <Terminal className="h-3.5 w-3.5" />
              Terminal
            </div>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="rounded-full p-1.5 text-zinc-700 transition hover:bg-white/[0.05] hover:text-zinc-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-5">
          <div className="flex items-start gap-3">
            <span className="pt-0.5 font-mono text-sm text-violet-400">
              $
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-4">
                <code className="break-all font-mono text-sm text-zinc-200">
                  {command}
                </code>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {copied ? (
                    <Check className="h-3 w-3 text-emerald-400" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}

                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-white/[0.05] bg-black/30 p-4">
                <pre className="whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-500">
                  {output}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3">
          <div
            className={cn(
              "flex items-center gap-2 text-xs",
              current.className
            )}
          >
            <StatusIcon
              className={cn(
                "h-3.5 w-3.5",
                status === "running" && "animate-spin"
              )}
            />
            {current.label}
          </div>

          <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-zinc-700">
            <Circle className="h-2 w-2 fill-current" />
            zsh
          </div>
        </div>
      </div>
    </div>
  );
}