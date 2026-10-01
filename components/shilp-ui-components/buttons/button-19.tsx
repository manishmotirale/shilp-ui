import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight } from "lucide-react";

interface Button19Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button19({
  className,
  children = "Border Button",
  ...props
}: Button19Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-violet-400/30",
        "bg-transparent",
        "text-zinc-200",
        "font-medium",
        "transition-all duration-300",
        "hover:border-violet-400/60",
        "hover:bg-violet-500/[0.08]",
        "hover:text-white",
        "hover:shadow-[0_0_30px_rgba(139,92,246,0.14)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full border border-violet-300/0 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-violet-300/20" />

      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>

        <SquareArrowOutUpRight className="size-3.5 text-zinc-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
      </span>
    </Button>
  );
}