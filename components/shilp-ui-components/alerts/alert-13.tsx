"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert13Props {
  title?: string;
  summary?: string;
  details?: string;
  onDownload?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert13({
  title = "Monthly Report",
  summary = "Your latest analytics report is ready to download.",
  details = "The report contains detailed information about your performance, traffic, conversions, and recent activity.",
  onDownload,
  onDismiss,
  className,
}: Alert13Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      onDownload?.();
    }, 1500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="flex items-start gap-4 p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/10">
          <FileText className="size-5 text-violet-300" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
              <p className="mt-1 text-sm leading-5 text-zinc-500">
                {summary}
              </p>
            </div>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
            >
              <X className="size-4" />
            </button>
          </div>

          {isExpanded && (
            <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
              <p className="text-xs leading-5 text-zinc-500">{details}</p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2",
                "bg-white text-xs font-medium text-black",
                "transition-all duration-200",
                "hover:bg-zinc-200",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
              )}
            >
              <Download className="size-3.5" />
              {isDownloading ? "Preparing..." : "Download"}
            </button>

            <button
              onClick={() => setIsExpanded((value) => !value)}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
            >
              {isExpanded ? (
                <>
                  Hide details
                  <ChevronUp className="size-3.5" />
                </>
              ) : (
                <>
                  Details
                  <ChevronDown className="size-3.5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}