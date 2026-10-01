"use client";

import {
  ArrowRight,
  Check,
  Globe2,
  Headphones,
  LockKeyhole,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: LockKeyhole,
    title: "Enterprise security",
    description: "SSO, SCIM, audit logs and advanced access controls.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    description: "Priority assistance with a dedicated success team.",
  },
  {
    icon: Globe2,
    title: "Global scale",
    description: "Infrastructure designed for large distributed teams.",
  },
];

export default function Pricing_10() {
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]">
        <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full bg-violet-500/[0.09] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-40 w-80 bg-violet-500/[0.03] blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-white/[0.06] p-7 sm:p-9 lg:border-b-0 lg:border-r">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/[0.15] bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-violet-300">
              <Sparkles className="h-3 w-3" />
              Enterprise
            </div>

            <h2 className="mt-6 max-w-md text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Built for teams operating at scale.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
              Get custom limits, enterprise controls and dedicated
              support tailored to your organization.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Contact sales
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="h-11 rounded-full border border-white/[0.08] bg-white/[0.025] px-6 text-sm text-zinc-300 transition hover:bg-white/[0.06]"
              >
                View documentation
              </button>
            </div>
          </div>

          <div className="relative p-7 sm:p-9">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
              Everything you need
            </p>

            <div className="mt-6 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-zinc-500">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-zinc-200">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-zinc-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-xl border border-violet-400/[0.12] bg-violet-500/[0.045] p-4">
              <div className="flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-violet-300" />
                <span className="text-xs font-medium text-zinc-300">
                  Custom pricing
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-zinc-600">
                Pricing is tailored to your usage, team size and
                infrastructure requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}