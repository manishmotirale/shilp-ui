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

const items = ["Topic", "Audience", "Slide count"];

export default function Block() {
  return (
    <section className="mx-auto w-full max-w-5xl rounded-3xl border border-white/[.07] bg-[#09090b] p-5 shadow-[0_20px_70px_rgba(0,0,0,.25)] md:p-8">
      
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <div className="mx-auto grid size-11 place-items-center rounded-2xl bg-violet-500/10 text-violet-300"><Settings2 className="size-5"/></div>
          <h2 className="mt-5 text-2xl font-semibold text-white">AI Presentation Generator</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Turn a topic into a structured presentation.</p>
        </div>
        <div className="mt-7 space-y-3">
          {items.map((label) => (
            <label key={label} className="block rounded-2xl border border-white/[.07] bg-white/[.025] p-4">
              <span className="text-xs text-zinc-600">{label}</span>
              <input className="mt-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-700" placeholder="Enter details..." />
            </label>
          ))}
        </div>
        <button className="mt-4 w-full rounded-xl bg-white py-3 text-sm font-medium text-black">Generate deck</button>
      </div>
    </section>
  );
}
