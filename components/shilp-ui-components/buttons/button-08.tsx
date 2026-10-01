import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Button08Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button08({
  className,
  children = "Outline Button",
  ...props
}: Button08Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-violet-400/30",
        "bg-transparent",
        "text-violet-300",
        "font-medium",
        "transition-all duration-300",
        "hover:border-violet-400/50",
        "hover:bg-violet-500/10",
        "hover:text-white",
        "hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.18),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2.5">
        <span>{children}</span>

        <ArrowUpRight className="size-3.5 text-violet-400/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300" />
      </span>
    </Button>
  );
}