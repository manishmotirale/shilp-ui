"use client";

import { useState } from "react";
import { Megaphone, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert11Props {
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert11({
  message = "We've just released a new feature! Check out our improved dashboard.",
  actionLabel = "Learn more",
  onAction,
  onDismiss,
  className,
}: Alert11Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2",
        "w-[min(750px,calc(100%-2rem))]",
        "overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#09090B]/95 backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.45)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative transition-all duration-200",
          isExiting && "translate-y-[-12px] opacity-0",
        )}
        role="banner"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-violet-400/50" />

        <div className="flex items-center gap-3 px-4 py-3 sm:px-5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/10">
            <Megaphone className="size-4 text-violet-300" />
          </div>

          <p className="min-w-0 flex-1 text-sm leading-5 text-zinc-300">
            {message}
          </p>

          <button
            onClick={onAction}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5",
              "rounded-full px-3.5 py-1.5",
              "bg-white text-black",
              "text-xs font-medium",
              "transition-all duration-200",
              "hover:bg-zinc-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
            )}
          >
            {actionLabel}
            <ArrowRight className="size-3.5" />
          </button>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss"
            className={cn(
              "flex size-8 shrink-0 items-center justify-center rounded-full",
              "text-zinc-500",
              "transition-all duration-200",
              "hover:bg-white/[0.06] hover:text-zinc-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40",
            )}
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}