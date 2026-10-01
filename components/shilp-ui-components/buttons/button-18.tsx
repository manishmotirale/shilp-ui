import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Layers3 } from "lucide-react";

interface Button18Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button18({
  className,
  children = "Metal Button",
  ...props
}: Button18Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-xl px-8",
        "border border-white/[0.14]",
        "bg-gradient-to-b from-zinc-500/30 via-zinc-700/20 to-zinc-900/60",
        "text-zinc-100",
        "font-semibold",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_30px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:border-violet-400/25",
        "hover:from-zinc-400/35",
        "hover:via-zinc-600/25",
        "hover:to-zinc-800/70",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_12px_35px_rgba(139,92,246,0.10)]",
        "active:translate-y-px",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.08)_45%,transparent_70%)] -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">
        <Layers3 className="size-3.5 text-zinc-500 transition-colors duration-300 group-hover:text-violet-400" />
        <span>{children}</span>
      </span>
    </Button>
  );
}