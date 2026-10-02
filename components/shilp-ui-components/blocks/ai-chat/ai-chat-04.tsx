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

const items = ["Compare server and client rendering."];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex min-h-[420px] flex-col">
        <div className="flex items-center gap-3 border-b border-white/[.06] pb-4">
          <div className="grid size-10 place-items-center rounded-xl bg-violet-500/10 text-violet-300"><Bot className="size-5"/></div>
          <div><h2 className="text-sm font-medium text-white">Research Chat</h2><p className="text-[10px] text-zinc-600">Research</p></div>
        </div>
        <div className="flex-1 space-y-4 py-6">
          <div className="ml-auto max-w-[75%] rounded-2xl bg-white px-4 py-3 text-sm text-black">{items[0]}</div>
          <div className="max-w-[80%] rounded-2xl border border-white/[.06] bg-white/[.025] px-4 py-3 text-sm leading-6 text-zinc-400">Ask questions while keeping research context visible.</div>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-white/[.07] bg-white/[.02] p-2">
          <button className="grid size-9 place-items-center rounded-xl text-zinc-600"><Plus className="size-4"/></button>
          <input placeholder="Message..." className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white outline-none placeholder:text-zinc-700"/>
          <button className="grid size-9 place-items-center rounded-xl bg-white text-black"><Send className="size-4"/></button>
        </div>
      </div>
    </section>
  );
}
