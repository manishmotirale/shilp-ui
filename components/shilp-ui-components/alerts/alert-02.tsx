"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  RefreshCw,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert02Props {
  title?: string;
  message?: string;
  code?: string;
  onDismiss?: () => void;
  onRetry?: () => void;
  className?: string;
}

export default function Alert02({
  title = "AI response generated",
  message = "Your component has been generated successfully.",
  code = `const Button = () => {
  return <button>Click me</button>;
};`,
  onDismiss,
  onRetry,
  className,
}: Alert02Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  const handleRetry = () => {
    if (retrying) return;

    setRetrying(true);

    setTimeout(() => {
      setRetrying(false);
      onRetry?.();
    }, 1000);
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
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0F] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

        <div className="flex items-start gap-3 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08]">
            <Sparkles className="h-5 w-5 text-violet-300" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-white">
                {title}
              </h3>

              <span className="rounded-full border border-violet-400/15 bg-violet-500/[0.08] px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-violet-300">
                AI
              </span>
            </div>

            <p className="mt-1 text-sm leading-5 text-zinc-500">
              {message}
            </p>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Dismiss"
            className="rounded-full p-1.5 text-zinc-600 transition-colors duration-200 hover:bg-white/[0.05] hover:text-zinc-300"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mx-5 overflow-hidden rounded-xl border border-white/[0.06] bg-[#070708]">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-3 py-2">
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-600">
              Generated code
            </span>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] text-zinc-500 transition hover:bg-white/[0.05] hover:text-zinc-200"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <pre className="overflow-x-auto p-4 font-mono text-xs leading-6 text-zinc-400">
            <code>{code}</code>
          </pre>
        </div>

        <div className="flex items-center justify-between gap-3 p-5">
          <button
            type="button"
            onClick={handleRetry}
            disabled={retrying}
            className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white disabled:opacity-50"
          >
            <RefreshCw
              className={cn(
                "h-3.5 w-3.5",
                retrying && "animate-spin"
              )}
            />
            {retrying ? "Regenerating..." : "Regenerate"}
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200"
          >
            <Copy className="h-3.5 w-3.5" />
            Copy code
          </button>
        </div>
      </div>
    </div>
  );
}