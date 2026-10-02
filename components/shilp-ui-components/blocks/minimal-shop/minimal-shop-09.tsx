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

const items = ["Order confirmed", "Packed", "In transit", "Delivered"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex items-end justify-between gap-4">
        <div><span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Orders</span><h2 className="mt-2 text-2xl font-semibold text-white">Order Tracking</h2><p className="mt-2 text-sm text-zinc-600">Give customers a calm view of delivery progress.</p></div>
        <button className="rounded-full border border-white/[.07] px-3 py-2 text-xs text-zinc-500">View all</button>
      </div>
      <div className="mt-6 divide-y divide-white/[.05]">
        {items.map((item, index) => (
          <div key={item} className="flex items-center gap-4 py-4">
            <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/[.06] bg-white/[.025] text-violet-300">{index + 1}</div>
            <div className="min-w-0 flex-1"><p className="text-sm text-zinc-300">{item}</p><p className="mt-1 text-xs text-zinc-700">Updated recently</p></div>
            <ArrowUpRight className="size-4 text-zinc-700"/>
          </div>
        ))}
      </div>
    </section>
  );
}
