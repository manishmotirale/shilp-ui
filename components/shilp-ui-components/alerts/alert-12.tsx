"use client";

import { useCallback, useEffect, useState } from "react";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ToastType = "success" | "error" | "info" | "warning";

interface Alert12Props {
  type?: ToastType;
  title?: string;
  message?: string;
  duration?: number;
  onDismiss?: () => void;
  className?: string;
}

const config = {
  success: {
    icon: CheckCircle2,
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-400/10 border-emerald-400/15",
    progress: "bg-emerald-400",
  },
  error: {
    icon: AlertCircle,
    iconClass: "text-red-400",
    iconBg: "bg-red-400/10 border-red-400/15",
    progress: "bg-red-400",
  },
  info: {
    icon: Info,
    iconClass: "text-violet-300",
    iconBg: "bg-violet-400/10 border-violet-400/15",
    progress: "bg-violet-400",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-400/10 border-amber-400/15",
    progress: "bg-amber-400",
  },
};

export default function Alert12({
  type = "info",
  title = "Information",
  message = "Something important happened.",
  duration = 5000,
  onDismiss,
  className,
}: Alert12Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(100);

  const handleDismiss = useCallback(() => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  }, [onDismiss]);

  useEffect(() => {
    if (!duration) return;

    const startedAt = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);

      setProgress(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [duration, handleDismiss]);

  if (!isVisible) return null;

  const Icon = config[type].icon;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "relative w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F]/95 backdrop-blur-xl",
        "shadow-[0_18px_50px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="flex gap-3 p-4">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-xl border",
            config[type].iconBg,
          )}
        >
          <Icon className={cn("size-4", config[type].iconClass)} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-zinc-100">{title}</p>

          <p className="mt-1 text-sm leading-5 text-zinc-500">{message}</p>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className={cn(
            "flex size-7 shrink-0 items-center justify-center rounded-full",
            "text-zinc-600 transition-colors",
            "hover:bg-white/[0.06] hover:text-zinc-300",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40",
          )}
        >
          <X className="size-4" />
        </button>
      </div>

      {duration > 0 && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.05]">
          <div
            className={cn("h-full transition-[width] duration-75", config[type].progress)}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}