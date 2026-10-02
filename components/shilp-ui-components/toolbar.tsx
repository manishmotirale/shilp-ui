"use client";

import { useState } from "react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Link2,
  MoreHorizontal,
  Underline,
} from "lucide-react";

export default function Toolbar() {
  const [active, setActive] = useState("left");

  const items = [
    ["bold", Bold],
    ["italic", Italic],
    ["underline", Underline],
    ["left", AlignLeft],
    ["center", AlignCenter],
    ["right", AlignRight],
    ["link", Link2],
  ] as const;

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-white/[0.08] bg-[#0c0c0f] p-1.5 shadow-[0_8px_30px_rgba(0,0,0,.2)]">
      {items.map(([id, Icon]) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className={`grid size-9 place-items-center rounded-lg transition ${
            active === id
              ? "bg-white/[0.09] text-white"
              : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-200"
          }`}
          aria-label={id}
        >
          <Icon className="size-4" />
        </button>
      ))}
      <div className="mx-1 h-5 w-px bg-white/[0.07]" />
      <button className="grid size-9 place-items-center rounded-lg text-zinc-500 transition hover:bg-white/[0.05] hover:text-white">
        <MoreHorizontal className="size-4" />
      </button>
    </div>
  );
}
