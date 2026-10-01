import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface Button13Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button13({
  className,
  children = "Soft Button",
  ...props
}: Button13Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-violet-400/10",
        "bg-violet-500/[0.07]",
        "text-violet-200",
        "font-medium",
        "backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-violet-400/20",
        "hover:bg-violet-500/[0.12]",
        "hover:text-white",
        "hover:shadow-[0_8px_30px_rgba(139,92,246,0.10)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,139,250,0.12),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        <Sparkles className="size-3 text-violet-400/60 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      </span>
    </Button>
  );
}