"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Command, Search, X } from "lucide-react";

interface ActionSearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function ActionSearchBar({
  placeholder = "Search components, blocks, patterns...",
  onSearch,
}: ActionSearchBarProps) {
  const [value, setValue] = useState("");

  const submit = () => {
    if (value.trim()) onSearch?.(value.trim());
  };

  return (
    <motion.div
      whileFocus={{ scale: 1.01 }}
      className="mx-auto flex w-full max-w-2xl items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,.2)] backdrop-blur-xl focus-within:border-violet-400/30 focus-within:bg-white/[0.05]"
    >
      <Search className="size-4 shrink-0 text-zinc-500" />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
      />
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setValue("")}
            className="text-zinc-500 transition hover:text-white"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <button
        onClick={submit}
        className="hidden items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-zinc-400 transition hover:border-violet-400/30 hover:text-white sm:flex"
      >
        <Command className="size-3.5" /> K
      </button>
      <button
        onClick={submit}
        className="rounded-lg bg-white p-2 text-black transition hover:bg-zinc-200"
        aria-label="Search"
      >
        <ArrowUpRight className="size-4" />
      </button>
    </motion.div>
  );
}
