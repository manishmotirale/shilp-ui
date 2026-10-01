"use client";

import { useState } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Feature {
  name: string;
  included: "starter" | "pro" | "all" | null;
}

const features: Feature[] = [
  { name: "Basic Analytics", included: "starter" },
  { name: "Up to 5 team members", included: "starter" },
  { name: "Basic support", included: "starter" },
  { name: "Advanced Analytics", included: "pro" },
  { name: "Up to 20 team members", included: "pro" },
  { name: "Priority support", included: "pro" },
  { name: "Custom integrations", included: "all" },
  { name: "Unlimited team members", included: "all" },
  { name: "24/7 phone support", included: "all" },
];

const plans = [
  {
    name: "Starter",
    price: { monthly: 15, yearly: 144 },
    level: "starter" as const,
  },
  {
    name: "Pro",
    price: { monthly: 49, yearly: 470 },
    level: "pro" as const,
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    level: "all" as const,
  },
];

export default function Pricing_03() {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="mb-6 flex justify-center sm:justify-end">
        <div className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.025] p-1">
          {["Monthly", "Yearly"].map((period) => {
            const active =
              period === "Yearly" ? isYearly : !isYearly;

            return (
              <button
                key={period}
                type="button"
                onClick={() => setIsYearly(period === "Yearly")}
                className={cn(
                  "rounded-full px-4 py-1.5 text-xs transition",
                  active
                    ? "bg-white text-black"
                    : "text-zinc-500 hover:text-zinc-200",
                )}
              >
                {period}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {plans.map((plan) => {
          const selected = selectedPlan === plan.level;

          return (
            <button
              key={plan.level}
              type="button"
              onClick={() => setSelectedPlan(plan.level)}
              className={cn(
                "relative rounded-xl border p-4 text-left transition",
                selected
                  ? "border-violet-400/[0.28] bg-violet-500/[0.06] shadow-[0_0_30px_rgba(139,92,246,0.06)]"
                  : "border-white/[0.07] bg-[#09090B] hover:border-white/[0.12]",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">
                  {plan.name}
                </span>

                {plan.level === "pro" && (
                  <span className="rounded-full bg-violet-500/[0.10] px-2 py-0.5 text-[9px] text-violet-300">
                    Popular
                  </span>
                )}
              </div>

              <div className="mt-3">
                <span className="text-2xl font-semibold text-white">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="ml-1 text-xs text-zinc-600">
                  /{isYearly ? "year" : "month"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]">
        <div className="overflow-x-auto">
          <div className="min-w-[650px]">
            <div className="grid grid-cols-[1fr_repeat(3,90px)] items-center border-b border-white/[0.06] bg-white/[0.018] px-5 py-4">
              <span className="text-xs font-medium text-zinc-400">
                Features
              </span>

              {plans.map((plan) => (
                <span
                  key={plan.level}
                  className={cn(
                    "text-center text-xs",
                    selectedPlan === plan.level
                      ? "font-medium text-violet-300"
                      : "text-zinc-600",
                  )}
                >
                  {plan.name}
                </span>
              ))}
            </div>

            {features.map((feature) => (
              <div
                key={feature.name}
                className="grid grid-cols-[1fr_repeat(3,90px)] items-center border-b border-white/[0.045] px-5 py-4 last:border-0"
              >
                <span className="text-sm text-zinc-500">
                  {feature.name}
                </span>

                {plans.map((plan) => {
                  const included = shouldShowCheck(
                    feature.included,
                    plan.level,
                  );

                  return (
                    <div
                      key={plan.level}
                      className="flex justify-center"
                    >
                      {included ? (
                        <div
                          className={cn(
                            "flex h-5 w-5 items-center justify-center rounded-full",
                            selectedPlan === plan.level
                              ? "bg-violet-500/[0.12] text-violet-300"
                              : "text-zinc-500",
                          )}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </div>
                      ) : (
                        <Minus className="h-3.5 w-3.5 text-zinc-800" />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="button"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition hover:bg-zinc-200 sm:w-auto"
        >
          Get started with{" "}
          {plans.find((plan) => plan.level === selectedPlan)?.name}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function shouldShowCheck(
  included: Feature["included"],
  level: string,
): boolean {
  if (included === "all") return true;

  if (
    included === "pro" &&
    (level === "pro" || level === "all")
  ) {
    return true;
  }

  if (
    included === "starter" &&
    (level === "starter" || level === "pro" || level === "all")
  ) {
    return true;
  }

  return false;
}