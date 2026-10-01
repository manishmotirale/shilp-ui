import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Button02Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button02({
  className,
  children = "Premium Button",
  ...props
}: Button02Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-violet-400/20",
        "bg-violet-500/10",
        "text-zinc-100",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(139,92,246,0.08)]",
        "transition-all duration-300",
        "hover:border-violet-400/35",
        "hover:bg-violet-500/[0.16]",
        "hover:shadow-[0_10px_40px_rgba(139,92,246,0.16)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-80%,rgba(167,139,250,0.22),transparent_65%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2.5">
        <Sparkles className="size-3.5 text-violet-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

        <span>{children}</span>

        <ArrowUpRight className="size-3.5 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
      </span>
    </Button>
  );
}