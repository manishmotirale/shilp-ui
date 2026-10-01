"use client";

import { ArrowRight, Check, Coins, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CreditPlan {
  name: string;
  credits: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

const plans: CreditPlan[] = [
  {
    name: "Launch",
    credits: "5,000",
    price: 12,
    description: "For side projects and prototypes.",
    features: ["5K credits", "Standard models", "Community support"],
  },
  {
    name: "Build",
    credits: "25,000",
    price: 39,
    description: "For products shipping every week.",
    features: ["25K credits", "Premium models", "Priority queue"],
    popular: true,
  },
  {
    name: "Scale",
    credits: "100,000",
    price: 119,
    description: "For high-volume production workloads.",
    features: ["100K credits", "All models", "Priority support"],
  },
];

export default function Pricing_08() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-violet-300">
            <Coins className="h-3.5 w-3.5" />
            <span className="text-[10px] font-medium uppercase tracking-[0.16em]">
              Credits
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Choose your capacity
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Simple credit bundles with no hidden fees.
          </p>
        </div>

        <Sparkles className="hidden h-5 w-5 text-zinc-700 sm:block" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-[#09090B] p-6",
              plan.popular
                ? "border-violet-400/[0.22]"
                : "border-white/[0.08]",
            )}
          >
            {plan.popular && (
              <div className="absolute right-4 top-4 rounded-full bg-violet-500/[0.10] px-2.5 py-1 text-[9px] font-medium text-violet-300">
                Best value
              </div>
            )}

            <p className="text-sm font-medium text-zinc-300">
              {plan.name}
            </p>

            <div className="mt-5">
              <p className="text-3xl font-semibold tracking-tight text-white">
                {plan.credits}
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                credits included
              </p>
            </div>

            <div className="my-5 h-px bg-white/[0.06]" />

            <div className="flex items-end gap-1">
              <span className="text-2xl font-semibold text-white">
                ${plan.price}
              </span>
              <span className="mb-0.5 text-xs text-zinc-600">
                /month
              </span>
            </div>

            <p className="mt-2 min-h-10 text-xs leading-5 text-zinc-600">
              {plan.description}
            </p>

            <div className="mt-5 space-y-3">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2.5"
                >
                  <Check
                    className={cn(
                      "h-3.5 w-3.5",
                      plan.popular
                        ? "text-violet-300"
                        : "text-zinc-600",
                    )}
                  />
                  <span className="text-xs text-zinc-500">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={cn(
                "mt-6 flex h-10 w-full items-center justify-center gap-2 rounded-full text-xs font-medium transition",
                plan.popular
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border border-white/[0.08] bg-white/[0.025] text-zinc-300 hover:bg-white/[0.06]",
              )}
            >
              Choose plan
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}