"use client";

import { useState } from "react";
import { Check, Download, RefreshCw, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert15Props {
  version?: string;
  currentVersion?: string;
  releaseNotes?: string;
  onUpdate?: () => void;
  onRemindLater?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert15({
  version = "2.4.0",
  currentVersion = "2.3.1",
  releaseNotes = "This update includes performance improvements, new components, and important bug fixes.",
  onUpdate,
  onRemindLater,
  onDismiss,
  className,
}: Alert15Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateProgress, setUpdateProgress] = useState(0);

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleRemindLater = () => {
    onRemindLater?.();
    handleDismiss();
  };

  const handleUpdate = () => {
    if (isUpdating) return;

    setIsUpdating(true);
    setUpdateProgress(0);

    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUpdateProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUpdating(false);
          onUpdate?.();
        }, 300);
      }
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/10">
            {isUpdating ? (
              <RefreshCw className="size-5 animate-spin text-violet-300" />
            ) : (
              <Download className="size-5 text-violet-300" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-medium text-zinc-100">
                  Update available
                </h3>

                <div className="mt-1 flex items-center gap-2 text-xs">
                  <span className="text-zinc-600">{currentVersion}</span>
                  <span className="text-zinc-700">→</span>
                  <span className="font-medium text-violet-300">{version}</span>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                aria-label="Dismiss"
                className="flex size-7 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="mt-3 text-sm leading-5 text-zinc-500">
              {releaseNotes}
            </p>
          </div>
        </div>

        {isUpdating && (
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-[11px]">
              <span className="text-zinc-600">Installing update</span>
              <span className="text-zinc-400">{updateProgress}%</span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-violet-400 transition-all duration-200"
                style={{ width: `${updateProgress}%` }}
              />
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-end gap-2">
          <button
            onClick={handleRemindLater}
            disabled={isUpdating}
            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-zinc-200 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
          >
            Remind later
          </button>

          <button
            onClick={handleUpdate}
            disabled={isUpdating}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            {isUpdating ? (
              <>
                <RefreshCw className="size-3.5 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Check className="size-3.5" />
                Update now
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}