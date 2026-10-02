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

const items = ["Completed", "In progress", "Members", "Milestones"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="flex items-center justify-between">
        <div><span className="text-[10px] uppercase tracking-[.18em] text-zinc-600">Projects</span><h2 className="mt-2 text-2xl font-semibold text-white">Project Overview</h2><p className="mt-2 text-sm text-zinc-600">Keep progress, tasks, and team capacity visible.</p></div>
        <BarChart3 className="size-5 text-zinc-600"/>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={item} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5">
            <span className="text-xs text-zinc-600">{item}</span>
            <p className="mt-3 text-2xl font-semibold text-white">{["84K","18.4K","98.8%","₹12.4K"][index]}</p>
            <p className="mt-2 text-xs text-violet-300">+8.4%</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-2xl border border-white/[.07] p-5">
        <div className="flex items-center justify-between"><span className="text-sm text-white">Activity</span><span className="text-xs text-zinc-700">30 days</span></div>
        <div className="mt-7 flex h-32 items-end gap-1">{[30,45,38,58,52,68,55,78,64,86,74,92].map((h,i)=><div key={i} style={{height: `${h}%`}} className="flex-1 rounded-t-md bg-violet-400/20"/>)}</div>
      </div>
    </section>
  );
}
