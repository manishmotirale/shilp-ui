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

const items = ["Professional", "Concise", "Friendly"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex items-center justify-between gap-4">
        <div><span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Writing Studio</span><h2 className="mt-2 text-2xl font-semibold text-white">AI Copy Generator</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">Rewrite product language for different contexts and tones.</p></div>
        <Sparkles className="size-5 text-violet-300"/>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {items.map((item,index)=><div key={item} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5"><div className="grid size-9 place-items-center rounded-xl bg-white/[.04] text-violet-300">{index+1}</div><h3 className="mt-5 text-sm font-medium text-white">{item}</h3><p className="mt-2 text-xs leading-5 text-zinc-600">Rewrite product language for different contexts and tones.</p></div>)}
      </div>
      <div className="mt-5"><button className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black">Rewrite <ArrowRight className="ml-1 inline size-4"/></button></div>
    </section>
  );
}
