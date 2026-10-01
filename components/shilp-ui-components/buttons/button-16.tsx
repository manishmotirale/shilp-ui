import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Button16Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button16({
  className,
  children = "Expand Button",
  ...props
}: Button16Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-7",
        "border border-violet-400/20",
        "bg-violet-500/10",
        "text-zinc-100",
        "font-medium",
        "shadow-[0_8px_30px_rgba(139,92,246,0.08)]",
        "transition-all duration-300",
        "hover:px-10",
        "hover:border-violet-400/35",
        "hover:bg-violet-500/[0.15]",
        "hover:shadow-[0_10px_40px_rgba(139,92,246,0.16)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-50%,rgba(167,139,250,0.18),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2.5">
        <span className="transition-transform duration-300">
          {children}
        </span>

        <ArrowRight className="size-3.5 text-violet-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </span>
    </Button>
  );
}