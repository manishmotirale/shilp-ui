"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Settings2, Image as ImageIcon,
  Code2, Presentation, FileText, Palette, Video, UserRound, Send,
  Bot, Plus, Search, ShieldCheck, KeyRound, BarChart3, Users, Activity,
  Filter, Github, Mail, CreditCard, Wallet, ShoppingBag, Truck, Heart,
  Star, Trash2, Minus, Check, Package
} from "lucide-react";

const items = ["Open workspace"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="grid items-center gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <span className="text-[10px] font-medium uppercase tracking-[.18em] text-violet-300">Onboarding</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] text-white">Welcome to your workspace</h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-500">Give new users a clear next step after authentication.</p>
          <div className="mt-7 flex gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black">Open workspace<ArrowRight className="size-4"/></button>
            <button className="rounded-full border border-white/[.08] px-5 py-3 text-sm text-zinc-400">Learn more</button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/[.07] bg-gradient-to-br from-violet-500/[.12] via-white/[.04] to-transparent">
          <div className="absolute inset-8 rounded-2xl border border-white/[.06] bg-black/20"/>
          <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-violet-400/20 bg-violet-400/[.06] text-violet-300"><Sparkles className="size-7"/></div>
        </div>
      </div>
    </section>
  );
}
