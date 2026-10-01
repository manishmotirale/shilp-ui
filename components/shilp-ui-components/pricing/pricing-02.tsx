"use client";

import { ArrowRight, Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  highlight?: boolean;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: Feature[];
  highlight?: boolean;
  cta?: string;
}

const defaultTiers: PricingTier[] = [
  {
    name: "SELF",
    price: 299,
    description: "For small teams and growing businesses",
    features: [
      { name: "Up to 20 team members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "24/7 email support", included: true },
      { name: "API access", included: true, highlight: true },
      { name: "Custom integrations", included: false },
      { name: "Enterprise features", included: false },
    ],
    cta: "Get started",
  },
  {
    name: "TEAM",
    price: 999,
    description: "For large organizations and enterprises",
    highlight: true,
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Advanced analytics", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Unlimited API access", included: true, highlight: true },
      { name: "Custom integrations", included: true },
      { name: "Enterprise features", included: true },
    ],
    cta: "Get started",
  },
];

export default function Pricing_02({
  tiers = defaultTiers,
}: {
  tiers?: PricingTier[];
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-[#09090B] transition duration-300",
              tier.highlight
                ? "border-violet-400/[0.22] shadow-[0_20px_60px_rgba(124,58,237,0.08)]"
                : "border-white/[0.08] hover:border-white/[0.13]",
            )}
          >
            {tier.highlight && (
              <>
                <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
                <div className="pointer-events-none absolute -right-20 -top-24 h-52 w-52 rounded-full bg-violet-500/[0.08] blur-3xl" />
              </>
            )}

            <div className="relative flex h-full flex-col p-7 sm:p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium tracking-[0.16em] text-zinc-500">
                    {tier.name}
                  </p>

                  {tier.highlight && (
                    <span className="rounded-full border border-violet-400/[0.15] bg-violet-500/[0.08] px-2.5 py-1 text-[10px] text-violet-300">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-medium tracking-[-0.05em] text-white">
                    ${tier.price}
                  </span>
                  <span className="mb-1.5 text-xs text-zinc-600">
                    one-time
                  </span>
                </div>

                <p className="mt-3 border-b border-white/[0.06] pb-6 text-sm leading-6 text-zinc-500">
                  {tier.description}
                </p>
              </div>

              <div className="mt-6 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-center gap-3"
                  >
                    <div
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                        feature.included
                          ? feature.highlight
                            ? "border-violet-400/[0.25] bg-violet-500/[0.10] text-violet-300"
                            : "border-white/[0.10] bg-white/[0.04] text-zinc-300"
                          : "border-white/[0.05] text-zinc-700",
                      )}
                    >
                      {feature.included ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Minus className="h-3 w-3" />
                      )}
                    </div>

                    <span
                      className={cn(
                        "text-sm",
                        feature.included
                          ? "text-zinc-400"
                          : "text-zinc-700",
                      )}
                    >
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className={cn(
                  "mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition",
                  tier.highlight
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/[0.09] bg-white/[0.035] text-zinc-200 hover:bg-white/[0.07]",
                )}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}