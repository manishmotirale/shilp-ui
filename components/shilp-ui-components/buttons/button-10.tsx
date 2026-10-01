import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button10Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button10({
  className,
  children = "Ripple Button",
  ...props
}: Button10Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-violet-400/20",
        "bg-violet-500/10",
        "text-zinc-100",
        "transition-all duration-300",
        "hover:border-violet-400/35",
        "hover:bg-violet-500/[0.14]",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.14)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-1/2 top-1/2 size-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/15 transition-all duration-500 group-hover:size-96" />

      <span className="relative z-10">{children}</span>
    </Button>
  );
}