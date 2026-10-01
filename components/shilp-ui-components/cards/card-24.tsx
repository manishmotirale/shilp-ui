"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Copy,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Card24Props {
  orderId?: string;
  product?: string;
  amount?: string;
  status?: "completed" | "pending";
  date?: string;
  reference?: string;
  onView?: () => void;
  className?: string;
}

export default function Card_24({
  orderId = "#SH-28491",
  product = "Shilp Pro License",
  amount = "$24.00",
  status = "completed",
  date = "Sep 24, 2026",
  reference = "shp_8f42a91",
  onView,
  className,
}: Card24Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const completed = status === "completed";

  return (
    <div
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-white/[0.025]",
        "backdrop-blur-xl",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-600">Order</span>
              <span className="text-xs font-medium text-zinc-400">
                {orderId}
              </span>
            </div>

            <h3 className="mt-3 text-base font-medium text-white">
              {product}
            </h3>

            <p className="mt-1 text-xs text-zinc-600">{date}</p>
          </div>

          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border",
              completed
                ? "border-white/[0.08] bg-white/[0.035]"
                : "border-amber-400/15 bg-amber-500/[0.06]",
            )}
          >
            {completed ? (
              <CheckCircle2 className="h-4 w-4 text-zinc-300" />
            ) : (
              <Clock3 className="h-4 w-4 text-amber-300" />
            )}
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-600">
              Total
            </p>
            <p className="mt-1 text-2xl font-semibold text-white">{amount}</p>
          </div>

          <span
            className={cn(
              "rounded-full border px-2.5 py-1 text-[10px] font-medium",
              completed
                ? "border-white/[0.08] bg-white/[0.035] text-zinc-400"
                : "border-amber-400/15 bg-amber-500/[0.06] text-amber-300",
            )}
          >
            {completed ? "Completed" : "Pending"}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.06] bg-black/10 px-3 py-2.5">
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-600">
              Reference
            </p>
            <p className="mt-1 truncate font-mono text-xs text-zinc-400">
              {reference}
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy reference"
            className="ml-3 shrink-0 text-zinc-600 transition-colors hover:text-zinc-300"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
        </div>

        {copied && (
          <p className="mt-2 text-right text-[10px] text-violet-300">
            Copied
          </p>
        )}

        <button
          type="button"
          onClick={onView}
          className={cn(
            "mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-full",
            "border border-white/[0.08] bg-white/[0.035]",
            "text-xs font-medium text-zinc-300",
            "transition-all duration-200",
            "hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white",
          )}
        >
          View transaction
          <ExternalLink className="h-3.5 w-3.5" />
          <ArrowUpRight className="h-3 w-3 text-zinc-600" />
        </button>
      </div>
    </div>
  );
}