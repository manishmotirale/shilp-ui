"use client";

import { useMemo, useState } from "react";
import { ArrowDownUp, ChevronDown, Repeat2 } from "lucide-react";

const rates: Record<string, number> = { USD: 83.5, EUR: 90.8, GBP: 108.4, INR: 1 };

export default function CurrencyTransfer() {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  const converted = useMemo(() => {
    const value = Number(amount) || 0;
    return ((value * rates[from]) / rates[to]).toFixed(2);
  }, [amount, from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-5">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white">Currency transfer</p>
          <p className="mt-1 text-xs text-zinc-500">Simple, transparent conversion</p>
        </div>
        <Repeat2 className="size-4 text-zinc-600" />
      </div>

      <div className="space-y-2">
        <label className="block rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 focus-within:border-violet-400/30">
          <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">You send</span>
          <div className="mt-2 flex items-center gap-3">
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-2xl font-medium text-white outline-none"
            />
            <select value={from} onChange={(e) => setFrom(e.target.value)} className="bg-transparent text-sm font-medium text-zinc-300 outline-none">
              {Object.keys(rates).map((x) => <option key={x} value={x} className="bg-zinc-900">{x}</option>)}
            </select>
          </div>
        </label>

        <button onClick={swap} className="mx-auto grid size-9 place-items-center rounded-full border border-white/[0.08] bg-[#111113] text-zinc-400 transition hover:border-violet-400/30 hover:text-white">
          <ArrowDownUp className="size-4" />
        </button>

        <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">You receive</span>
          <div className="mt-2 flex items-center gap-3">
            <span className="flex-1 text-2xl font-medium text-white">{converted}</span>
            <span className="text-sm font-medium text-zinc-300">{to}</span>
            <ChevronDown className="size-3.5 text-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
