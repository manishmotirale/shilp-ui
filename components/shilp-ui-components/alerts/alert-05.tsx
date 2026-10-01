"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert05Props {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert05({
  title = "New update available",
  message = "A new version of your project is ready to use.",
  actionLabel = "View update",
  onAction,
  onDismiss,
  className,
}: Alert05Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleAction = () => {
    onAction?.();
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
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0F] shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
        <div className="absolute inset-y-0 left-0 w-px bg-violet-400/70" />

        <div className="flex gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08]">
            <Bell className="h-5 w-5 text-violet-300" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium text-white">
              {title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              {message}
            </p>

            <button
              type="button"
              onClick={handleAction}
              className="mt-3 flex items-center gap-1.5 text-xs font-medium text-violet-300 transition hover:text-violet-200"
            >
              {actionLabel}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="self-start rounded-full p-1.5 text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}