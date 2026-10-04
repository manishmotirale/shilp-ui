"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Settings2, Image as ImageIcon,
  Code2, Presentation, FileText, Palette, Video, UserRound, Send,
  Bot, Plus, Search, ShieldCheck, KeyRound, BarChart3, Users, Activity,
  Filter, Mail, CreditCard, Wallet, ShoppingBag, Truck, Heart,
  Star, Trash2, Minus, Check, Package
} from "lucide-react";

const items = ["Minimal", "Studio", "Futuristic"];

export default function AICardGeneration09Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex items-end justify-between gap-4">
        <div><span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Identity Studio</span><h2 className="mt-2 text-2xl font-semibold text-white">AI Avatar Generator</h2><p className="mt-2 text-sm text-zinc-600">Explore visual personalities for profile imagery.</p></div>
        <Filter className="size-4 text-zinc-600"/>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item} className="group">
            <div className="aspect-square rounded-2xl border border-white/[.06] bg-gradient-to-br from-white/[.07] to-violet-500/[.04] transition group-hover:border-violet-400/20"/>
            <div className="mt-3 flex items-center justify-between"><span className="text-sm text-zinc-300">{item}</span><span className="text-xs text-zinc-600">0{index + 1}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}
