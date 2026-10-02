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

const items = ["Field", "Studio", "Pro"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex items-end justify-between">
        <div><span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Compare</span><h2 className="mt-2 text-2xl font-semibold text-white">Product Comparison</h2><p className="mt-2 text-sm text-zinc-600">Compare several products across practical attributes.</p></div>
        <button className="rounded-full border border-white/[.07] px-3 py-2 text-xs text-zinc-500">Export</button>
      </div>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/[.06]">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead><tr className="border-b border-white/[.06] text-[10px] uppercase tracking-wider text-zinc-700"><th className="p-4">Name</th><th className="p-4">Status</th><th className="p-4">Value</th><th className="p-4">Updated</th></tr></thead>
          <tbody>{items.map((item,index)=><tr key={item} className="border-b border-white/[.04] last:border-0"><td className="p-4 text-zinc-300">{item}</td><td className="p-4 text-violet-300">Active</td><td className="p-4 text-zinc-400">₹{(index+1)*1240}</td><td className="p-4 text-zinc-700">Today</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
