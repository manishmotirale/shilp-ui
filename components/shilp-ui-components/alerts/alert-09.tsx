"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

type AlertType =
  | "success"
  | "info"
  | "warning"
  | "error";

interface Alert09Props {
  type?: AlertType;
  title?: string;
  message?: string;
  onDismiss?: () => void;
  className?: string;
}

const config = {
  success: {
    icon: CheckCircle2,
    iconClass: "text-emerald-400",
    iconBg: "bg-emerald-400/[0.08]",
    iconBorder: "border-emerald-400/15",
    accent: "bg-emerald-400",
  },
  info: {
    icon: Info,
    iconClass: "text-violet-300",
    iconBg: "bg-violet-500/[0.08]",
    iconBorder: "border-violet-400/15",
    accent: "bg-violet-400",
  },
  warning: {
    icon: TriangleAlert,
    iconClass: "text-amber-400",
    iconBg: "bg-amber-400/[0.08]",
    iconBorder: "border-amber-400/15",
    accent: "bg-amber-400",
  },
  error: {
    icon: AlertCircle,
    iconClass: "text-red-400",
    iconBg: "bg-red-400/[0.08]",
    iconBorder: "border-red-400/15",
    accent: "bg-red-400",
  },
};

export default function Alert09({
  type = "info",
  title = "Information",
  message = "Here is some useful information for you.",
  onDismiss,
  className,
}: Alert09Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  const current = config[type];
  const Icon = current.icon;

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-xl transition-all duration-300",
        exiting
          ? "translate-y-2 scale-[0.98] opacity-0"
          : "translate-y-0 scale-100 opacity-100",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C0F] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-0.5",
            current.accent
          )}
        />

        <div className="flex gap-3">
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
              current.iconBg,
              current.iconBorder
            )}
          >
            <Icon className={cn("h-4 w-4", current.iconClass)} />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium text-white">
              {title}
            </h3>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              {message}
            </p>
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