"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChartNoAxesColumn,
  Check,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  description: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: Feature[];
}

const tiers: PricingTier[] = [
  {
    name: "Pro",
    icon: <ChartNoAxesColumn className="h-4 w-4" />,
    price: { monthly: 49, yearly: 470 },
    description: "Perfect for growing teams and businesses",
    features: [
      {
        name: "Team Management",
        description: "Add up to 20 team members",
        included: true,
      },
      {
        name: "Advanced Analytics",
        description: "Get detailed insights and reports",
        included: true,
      },
      {
        name: "Priority Support",
        description: "24/7 email and chat support",
        included: true,
      },
      {
        name: "API Access",
        description: "Full access to our REST API",
        included: true,
      },
    ],
  },
  {
    name: "Enterprise",
    icon: <Sparkles className="h-4 w-4" />,
    price: { monthly: 99, yearly: 990 },
    description: "For organizations that need more",
    features: [
      {
        name: "Unlimited Teams",
        description: "No limit on team members",
        included: true,
      },
      {
        name: "Custom Analytics",
        description: "Tailored reports and insights",
        included: true,
      },
      {
        name: "Dedicated Support",
        description: "Personal account manager",
        included: true,
      },
      {
        name: "Advanced Security",
        description: "Enhanced security features",
        included: true,
      },
      {
        name: "Custom Integrations",
        description: "Build custom workflows",
        included: true,
      },
      {
        name: "SLA Guarantee",
        description: "99.9% uptime guarantee",
        included: true,
      },
    ],
  },
];

export default function Pricing_04() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.025] p-1">
          {["Monthly", "Yearly"].map((period) => {
            const active =
              (period === "Yearly") === isYearly;

            return (
              <button
                key={period}
                type="button"
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "rounded-full px-5 py-2 text-xs font-medium transition",
                  active
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-white",
                )}
              >
                {period}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-[#09090B]",
              index === 1
                ? "border-violet-400/[0.20]"
                : "border-white/[0.08]",
            )}
          >
            {index === 1 && (
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/[0.08] blur-3xl" />
            )}

            <div className="relative p-7">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl border",
                    index === 1
                      ? "border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300"
                      : "border-white/[0.08] bg-white/[0.03] text-zinc-500",
                  )}
                >
                  {tier.icon}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
              </div>

              <div className="mt-6">
                <div className="flex items-end gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-white">
                    ${isYearly ? tier.price.yearly : tier.price.monthly}
                  </span>
                  <span className="mb-1 text-xs text-zinc-600">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-500">
                  {tier.description}
                </p>
              </div>

              <button
                type="button"
                className={cn(
                  "mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition",
                  index === 1
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/[0.08] bg-white/[0.035] text-zinc-200 hover:bg-white/[0.07]",
                )}
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative border-t border-white/[0.06] p-7">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
                Everything included
              </p>

              <div className="space-y-4">
                {tier.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-violet-400/[0.15] bg-violet-500/[0.07] text-violet-300">
                      <Check className="h-3 w-3" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-zinc-300">
                        {feature.name}
                      </p>
                      <p className="mt-0.5 text-xs leading-5 text-zinc-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}