import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface Button04Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button04({
  className,
  children = "Sparkle Button",
  ...props
}: Button04Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-violet-400/20",
        "bg-white/[0.045]",
        "text-zinc-100",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-violet-400/35",
        "hover:bg-violet-500/10",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.14)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/[0.08] to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2.5">
        <span className="flex size-6 items-center justify-center rounded-full bg-violet-500/10">
          <Sparkles className="size-3.5 text-violet-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </span>

        <span>{children}</span>
      </span>
    </Button>
  );
}