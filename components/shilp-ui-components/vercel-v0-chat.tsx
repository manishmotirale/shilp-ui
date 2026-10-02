"use client";

import { FormEvent, useState } from "react";
import { ArrowUp, Bot, Paperclip, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function VercelV0Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; text: string }[]>([]);

  const send = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { role: "user", text }, { role: "assistant", text: "I’d turn that idea into a clean Shilp component with a focused API and restrained motion." }]);
    setInput("");
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090b] shadow-[0_12px_50px_rgba(0,0,0,.3)]">
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
        <div className="grid size-8 place-items-center rounded-lg bg-violet-500/10 text-violet-300">
          <Sparkles className="size-4" />
        </div>
        <div>
          <p className="text-sm font-medium text-white">Shilp AI</p>
          <p className="text-[11px] text-zinc-600">Component assistant</p>
        </div>
      </div>

      <div className="min-h-52 space-y-4 p-5">
        {messages.length === 0 ? (
          <div className="flex h-44 flex-col items-center justify-center text-center">
            <Bot className="size-6 text-zinc-700" />
            <p className="mt-3 text-sm text-zinc-500">Describe the component you want to build.</p>
          </div>
        ) : (
          messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                m.role === "user"
                  ? "ml-auto bg-white text-black"
                  : "border border-white/[0.07] bg-white/[0.03] text-zinc-300"
              }`}
            >
              {m.text}
            </motion.div>
          ))
        )}
      </div>

      <form onSubmit={send} className="m-3 flex items-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-2 focus-within:border-violet-400/30">
        <button type="button" className="grid size-9 place-items-center rounded-xl text-zinc-600 transition hover:text-white" aria-label="Attach">
          <Paperclip className="size-4" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Shilp AI..."
          className="min-w-0 flex-1 bg-transparent px-1 text-sm text-white outline-none placeholder:text-zinc-600"
        />
        <button type="submit" className="grid size-9 place-items-center rounded-xl bg-white text-black transition hover:bg-zinc-200" aria-label="Send">
          <ArrowUp className="size-4" />
        </button>
      </form>
    </div>
  );
}
