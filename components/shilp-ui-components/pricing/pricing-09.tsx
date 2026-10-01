"use client";

import {
  ArrowRight,
  Braces,
  Check,
  Gauge,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  description: string;
  price: string;
  unit: string;
  icon: React.ReactNode;
  features: string[];
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Hobby",
    description: "For experiments and personal projects.",
    price: "$0",
    unit: "forever",
    icon: <Braces className="h-4 w-4" />,
    features: ["10K API calls", "1 project", "Community support"],
  },
  {
    name: "Developer",
    description: "For applications moving into production.",
    price: "$24",
    unit: "/month",
    icon: <Gauge className="h-4 w-4" />,
    features: ["1M API calls", "Unlimited projects", "Usage analytics"],
    featured: true,
  },
  {
    name: "Infrastructure",
    description: "For demanding and high-volume systems.",
    price: "Custom",
    unit: "pricing",
    icon: <Server className="h-4 w-4" />,
    features: ["Custom limits", "Dedicated capacity", "SLA & support"],
  },
];

export default function Pricing_09() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]">
        <div className="border-b border-white/[0.06] px-6 py-5">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-violet-300">
            Developer pricing
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            From prototype to production
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Predictable plans for every stage of your API workload.
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-3 md:divide-x md:divide-y-0">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-6",
                plan.featured && "bg-violet-500/[0.035]",
              )}
            >
              {plan.featured && (
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
              )}

              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl border",
                  plan.featured
                    ? "border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300"
                    : "border-white/[0.08] bg-white/[0.025] text-zinc-500",
                )}
              >
                {plan.icon}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-zinc-200">
                {plan.name}
              </h3>

              <p className="mt-1 min-h-10 text-xs leading-5 text-zinc-600">
                {plan.description}
              </p>

              <div className="mt-5 flex items-end gap-1.5">
                <span className="text-3xl font-semibold text-white">
                  {plan.price}
                </span>
                <span className="mb-1 text-[10px] text-zinc-600">
                  {plan.unit}
                </span>
              </div>

              <div className="my-5 h-px bg-white/[0.06]" />

              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2.5"
                  >
                    <Check className="h-3.5 w-3.5 text-zinc-500" />
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
                  plan.featured
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/[0.08] bg-white/[0.025] text-zinc-300 hover:bg-white/[0.06]",
                )}
              >
                {plan.name === "Infrastructure"
                  ? "Contact sales"
                  : "Get started"}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}