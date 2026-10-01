import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button06Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button06({
  className,
  children = "Slide Button",
  ...props
}: Button06Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-white/[0.10]",
        "bg-white text-black",
        "font-medium",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:bg-zinc-100",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-violet-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-[250%]" />

      <span className="relative z-10">{children}</span>
    </Button>
  );
}