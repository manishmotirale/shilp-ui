"use client";

import {
  ArrowRight,
  Check,
  Pencil,
  Sparkles,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  icon: React.ReactNode;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  color: string;
}

const sampleTiers: PricingTier[] = [
  {
    name: "Creator",
    icon: <Pencil className="h-4 w-4" />,
    price: 29,
    description: "Perfect for short video beginners",
    color: "amber",
    features: [
      "60-second Video Export",
      "10 Trending Templates",
      "Auto Text-to-Speech",
      "Basic Transitions",
    ],
  },
  {
    name: "Influencer",
    icon: <Star className="h-4 w-4" />,
    price: 79,
    description: "For serious content creators",
    color: "blue",
    features: [
      "3-minute Video Export",
      "Voice Effects & Filters",
      "Trending Sound Library",
      "Auto Captions & Subtitles",
    ],
    popular: true,
  },
  {
    name: "Pro Studio",
    icon: <Sparkles className="h-4 w-4" />,
    price: 149,
    description: "For viral content masters",
    color: "purple",
    features: [
      "Multi-clip Editing",
      "Green Screen Effects",
      "Viral Sound Detection",
      "Engagement Analytics",
    ],
  },
];

export default function Pricing_06({
  tag = "Simple Pricing",
  title = "Make Short Videos That Pop",
  description = "Edit, enhance, and go viral in minutes",
  tiers = sampleTiers,
}: {
  tag?: string;
  title?: string;
  description?: string;
  tiers?: PricingTier[];
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/[0.15] bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-violet-300">
          <Sparkles className="h-3 w-3" />
          {tag}
        </div>

        <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={cn(
              "relative overflow-hidden rounded-2xl border bg-[#09090B] p-6 transition duration-300",
              tier.popular
                ? "border-violet-400/[0.22] shadow-[0_20px_60px_rgba(124,58,237,0.07)]"
                : "border-white/[0.08] hover:border-white/[0.13]",
            )}
          >
            {tier.popular && (
              <>
                <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full bg-violet-500/[0.10] px-2.5 py-1 text-[9px] font-medium text-violet-300">
                  Popular
                </div>
              </>
            )}

            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl border",
                tier.popular
                  ? "border-violet-400/[0.15] bg-violet-500/[0.08] text-violet-300"
                  : "border-white/[0.08] bg-white/[0.03] text-zinc-500",
              )}
            >
              {tier.icon}
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">
              {tier.name}
            </h3>

            <p className="mt-1 text-xs leading-5 text-zinc-600">
              {tier.description}
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                ${tier.price}
              </span>
              <span className="mb-1 text-xs text-zinc-600">
                /month
              </span>
            </div>

            <div className="my-6 h-px bg-white/[0.06]" />

            <div className="space-y-3.5">
              {tier.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div
                    className={cn(
                      "flex h-5 w-5 items-center justify-center rounded-full",
                      tier.popular
                        ? "bg-violet-500/[0.10] text-violet-300"
                        : "bg-white/[0.035] text-zinc-500",
                    )}
                  >
                    <Check className="h-3 w-3" />
                  </div>

                  <span className="text-sm text-zinc-400">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={cn(
                "mt-7 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-medium transition",
                tier.popular
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "border border-white/[0.08] bg-white/[0.025] text-zinc-300 hover:bg-white/[0.06]",
              )}
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}