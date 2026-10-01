"use client";

import { useState } from "react";
import { CreditCard, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert18Props {
  planName?: string;
  daysRemaining?: number;
  amount?: string;
  renewalDate?: string;
  onUpgrade?: () => void;
  onManageBilling?: () => void;
  onDismiss?: () => void;
  className?: string;
}

export default function Alert18({
  planName = "Pro",
  daysRemaining = 3,
  amount = "$24",
  renewalDate = "Oct 4, 2026",
  onUpgrade,
  onManageBilling,
  onDismiss,
  className,
}: Alert18Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const isUrgent = daysRemaining <= 3;

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
        "w-full max-w-lg overflow-hidden rounded-2xl",
        "border",
        isUrgent ? "border-amber-400/15" : "border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      {isUrgent && (
        <div className="border-b border-amber-400/10 bg-amber-400/[0.06] px-5 py-2.5">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-amber-400">
            Action required · Subscription expiring soon
          </p>
        </div>
      )}

      <div className="p-5">
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-xl border",
              isUrgent
                ? "border-amber-400/15 bg-amber-400/10"
                : "border-violet-400/15 bg-violet-400/10",
            )}
          >
            <CreditCard
              className={cn(
                "size-5",
                isUrgent ? "text-amber-400" : "text-violet-300",
              )}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-medium text-zinc-100">
                  {planName} plan
                </h3>

                <p className="mt-1 text-sm leading-5 text-zinc-500">
                  {daysRemaining} day{daysRemaining === 1 ? "" : "s"} remaining
                  before your subscription renews.
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

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-600">
                  Next payment
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-200">
                  {amount}
                  <span className="text-zinc-600"> / month</span>
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                <p className="text-[10px] uppercase tracking-[0.1em] text-zinc-600">
                  Renewal
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-200">
                  {renewalDate}
                </p>
              </div>
            </div>

            <p className="mt-3 text-xs text-zinc-600">
              Payment method <span className="text-zinc-400">•••• 4242</span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-end gap-2 border-t border-white/[0.06] pt-4">
          <button
            onClick={onManageBilling}
            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.06] hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
          >
            Manage billing
          </button>

          <button
            onClick={onUpgrade}
            className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  );
}