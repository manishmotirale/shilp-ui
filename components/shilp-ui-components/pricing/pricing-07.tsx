"use client";

import { useState } from "react";
import {
  ArrowRight,
  Database,
  Minus,
  Plus,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing_07() {
  const [usage, setUsage] = useState(100);

  const price = Math.round(19 + usage * 0.08);

  const decrease = () => {
    setUsage((value) => Math.max(50, value - 50));
  };

  const increase = () => {
    setUsage((value) => Math.min(1000, value + 50));
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-3xl" />

        <div className="relative border-b border-white/[0.06] p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-violet-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em]">
                  Flexible pricing
                </span>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-white">
                Pay for what you use
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                Scale usage without changing plans.
              </p>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-zinc-500">
              <Database className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="relative p-6">
          <p className="text-xs text-zinc-600">
            Monthly requests
          </p>

          <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] p-2">
            <button
              type="button"
              onClick={decrease}
              disabled={usage <= 50}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Minus className="h-4 w-4" />
            </button>

            <div className="text-center">
              <p className="text-lg font-semibold text-white">
                {usage}K
              </p>
              <p className="text-[10px] text-zinc-600">
                requests
              </p>
            </div>

            <button
              type="button"
              onClick={increase}
              disabled={usage >= 1000}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.05] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 rounded-xl border border-violet-400/[0.12] bg-violet-500/[0.045] p-5">
            <p className="text-xs text-zinc-500">
              Estimated monthly total
            </p>

            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold tracking-tight text-white">
                ${price}
              </span>
              <span className="mb-1 text-xs text-zinc-600">
                /month
              </span>
            </div>

            <p className="mt-2 text-xs text-zinc-600">
              Includes platform access and selected usage.
            </p>
          </div>

          <button
            type="button"
            className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black transition hover:bg-zinc-200"
          >
            Start building
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}