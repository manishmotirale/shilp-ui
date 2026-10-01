"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Card02Props {
  name?: string;
  description?: string;
  price?: string;
  period?: string;
  features?: string[];
  popular?: boolean;
  onSelect?: () => void;
  className?: string;
}

export default function Card_02({
  name = "Pro",
  description = "For developers building serious products.",
  price = "$24",
  period = "/month",
  features = [
    "Unlimited components",
    "Advanced customization",
    "Priority support",
    "Commercial usage",
  ],
  popular = true,
  onSelect,
  className,
}: Card02Props) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-sm overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-white/[0.025]",
        "p-6 backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-violet-400/25 hover:bg-white/[0.04]",
        className,
      )}
    >
      {popular && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-violet-300">
          <Sparkles className="h-3 w-3" />
          Popular
        </div>
      )}

      <div className="mb-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
          Plan
        </p>

        <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>

        <p className="mt-2 max-w-[260px] text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      <div className="mb-6 flex items-end gap-1">
        <span className="text-4xl font-semibold tracking-tight text-white">
          {price}
        </span>
        <span className="mb-1 text-sm text-zinc-600">{period}</span>
      </div>

      <div className="mb-6 h-px bg-white/[0.06]" />

      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/[0.10] text-violet-300">
              <Check className="h-3 w-3" />
            </span>

            <span className="text-sm text-zinc-300">{feature}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onSelect}
        className={cn(
          "mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-full",
          "bg-white text-sm font-medium text-black",
          "transition-all duration-200",
          "hover:bg-zinc-200",
          "active:scale-[0.98]",
          "hover:shadow-[0_10px_40px_rgba(139,92,246,0.12)]",
        )}
      >
        Get started
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}