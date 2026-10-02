"use client";

import { useState } from "react";
import { Check, CreditCard, Lock, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function CheckoutInteraction() {
  const [paid, setPaid] = useState(false);

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-white/[0.08] bg-[#0c0c0f] p-5 shadow-[0_12px_40px_rgba(0,0,0,.25)]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] pb-5">
        <div className="grid size-10 place-items-center rounded-xl bg-white/[0.05] text-violet-300">
          <ShoppingBag className="size-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Shilp Pro</p>
          <p className="text-xs text-zinc-500">Annual license</p>
        </div>
        <span className="ml-auto text-sm font-medium text-white">₹2,999</span>
      </div>

      <div className="py-5">
        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Lock className="size-3.5" /> Secure checkout
        </div>
        <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
          <div className="flex items-center gap-3">
            <CreditCard className="size-5 text-zinc-500" />
            <span className="text-sm text-zinc-300">•••• •••• •••• 4242</span>
          </div>
        </div>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => setPaid(true)}
        disabled={paid}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-default"
      >
        {paid ? <><Check className="size-4" /> Payment complete</> : "Pay ₹2,999"}
      </motion.button>
    </div>
  );
}
