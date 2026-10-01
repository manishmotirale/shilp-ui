import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveUpRight } from "lucide-react";

interface Button09Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button09({
  className,
  children = "Scale Button",
  ...props
}: Button09Props) {
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
        "hover:border-violet-400/35",
        "hover:bg-violet-500/[0.16]",
        "hover:scale-105",
        "hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)]",
        "active:scale-95",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-50%,rgba(167,139,250,0.2),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>

        <MoveUpRight className="size-3.5 text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Button>
  );
}