"use client";

import { useCallback, useEffect, useState } from "react";
import { Check, RotateCcw, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert03Props {
  title?: string;
  message?: string;
  undoLabel?: string;
  undoDuration?: number;
  onUndo?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert03({
  title = "Item deleted",
  message = "The item was moved to trash.",
  undoLabel = "Undo",
  undoDuration = 5000,
  onUndo,
  onDismiss,
  className,
}: Alert03Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(100);
  const [undoing, setUndoing] = useState(false);

  const handleDismiss = useCallback(() => {
    if (!visible) return;

    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  }, [onDismiss, visible]);

  useEffect(() => {
    if (!visible || undoing) return;

    const startedAt = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(
        0,
        100 - (elapsed / undoDuration) * 100
      );

      setProgress(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [handleDismiss, undoDuration, undoing, visible]);

  const handleUndo = () => {
    if (undoing) return;

    setUndoing(true);
    onUndo?.();
    handleDismiss();
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md transition-all duration-300",
        exiting
          ? "translate-y-2 scale-[0.98] opacity-0"
          : "translate-y-0 scale-100 opacity-100",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C0F] shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-y-0 left-0 w-px bg-emerald-400/60" />

        <div className="flex items-center gap-3 p-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-400/15 bg-emerald-400/[0.08]">
            <Check className="h-4 w-4 text-emerald-400" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium text-white">
              {title}
            </h3>

            <p className="mt-0.5 text-xs text-zinc-500">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="rounded-full p-1.5 text-zinc-600 transition hover:bg-white/[0.05] hover:text-zinc-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3">
          <button
            type="button"
            onClick={handleUndo}
            disabled={undoing}
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white disabled:opacity-50"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {undoing ? "Undoing..." : undoLabel}
          </button>

          <span className="text-[9px] uppercase tracking-[0.14em] text-zinc-700">
            Undo available
          </span>
        </div>

        <div className="h-px bg-white/[0.04]">
          <div
            className="h-full bg-emerald-400/70 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}