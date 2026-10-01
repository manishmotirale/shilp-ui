"use client";

import { CheckCircle2 } from "lucide-react";

export default function Alert01() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C0F] p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-y-0 left-0 w-px bg-violet-400/60" />

        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.035]">
            <CheckCircle2 className="h-5 w-5 text-violet-300" />
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-medium text-white">Synapse UI</h3>

            <p className="text-[13px] leading-5 text-zinc-500">
              Use the CLI to install this!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
