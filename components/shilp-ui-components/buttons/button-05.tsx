import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface Button05Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button05({
  className,
  children = "Glowing Button",
  ...props
}: Button05Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-7",
        "border border-violet-400/25",
        "bg-violet-500/[0.08]",
        "text-zinc-100",
        "backdrop-blur-xl",
        "shadow-[0_0_25px_rgba(139,92,246,0.10)]",
        "transition-all duration-300",
        "hover:border-violet-400/40",
        "hover:bg-violet-500/[0.14]",
        "hover:shadow-[0_0_35px_rgba(139,92,246,0.22)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.18),transparent_65%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="size-3.5 text-violet-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
        <span>{children}</span>
      </span>
    </Button>
  );
}