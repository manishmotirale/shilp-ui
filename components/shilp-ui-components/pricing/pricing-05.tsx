"use client";

import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  highlight?: boolean;
}

const defaultTiers: PricingTier[] = [
  {
    name: "Basic",
    price: 9,
    description: "Essential features for small teams",
    features: [
      "5 Team Members",
      "Basic Analytics",
      "Community Support",
      "1GB Storage",
    ],
  },
  {
    name: "Pro",
    price: 29,
    description: "Everything you need to scale",
    highlight: true,
    features: [
      "Unlimited Members",
      "Advanced Analytics",
      "Priority Support",
      "Unlimited Storage",
      "Custom Integrations",
    ],
  },
];

export default function Pricing_05() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {defaultTiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-[#09090B] transition",
              tier.highlight
                ? "border-violet-400/[0.20]"
                : "border-white/[0.08] hover:border-white/[0.13]",
            )}
          >
            {tier.highlight && (
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
            )}

            <div className="border-b border-white/[0.06] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-500">
                  {tier.name}
                </h3>

                {tier.highlight && (
                  <span className="rounded-full bg-violet-500/[0.10] px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-violet-300">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-5 flex items-end gap-1">
                <span className="text-3xl font-semibold text-white">
                  ${tier.price}
                </span>
                <span className="mb-1 text-xs text-zinc-600">
                  /month
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                {tier.description}
              </p>
            </div>

            <div className="p-6">
              <div className="space-y-3.5">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className={cn(
                        "h-3.5 w-3.5",
                        tier.highlight
                          ? "text-violet-300"
                          : "text-zinc-500",
                      )}
                    />
                    <span className="text-sm text-zinc-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={cn(
                  "mt-7 flex h-10 w-full items-center justify-center gap-2 rounded-full text-xs font-medium transition",
                  tier.highlight
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/[0.08] bg-white/[0.025] text-zinc-300 hover:bg-white/[0.06]",
                )}
              >
                Get started
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}