import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface Button12Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button12({
  className,
  children = "Neon Button",
  ...props
}: Button12Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-violet-400/40",
        "bg-black",
        "text-violet-300",
        "font-semibold",
        "shadow-[0_0_18px_rgba(139,92,246,0.14)]",
        "transition-all duration-300",
        "hover:border-violet-300/70",
        "hover:bg-violet-500/[0.06]",
        "hover:text-violet-200",
        "hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-violet-400/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="size-3.5 text-violet-400 transition-transform duration-300 group-hover:rotate-12" />
        <span>{children}</span>
      </span>
    </Button>
  );
}