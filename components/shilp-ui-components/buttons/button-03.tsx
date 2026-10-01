import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button03Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button03({
  className,
  children = "Ghost Button",
  ...props
}: Button03Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-white/[0.10]",
        "bg-transparent",
        "text-zinc-400",
        "font-medium",
        "transition-all duration-300",
        "hover:border-white/[0.18]",
        "hover:bg-white/[0.05]",
        "hover:text-white",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.14),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10">{children}</span>
    </Button>
  );
}