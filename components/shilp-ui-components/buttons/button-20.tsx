import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Button20Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button20({
  className,
  children = "Aurora Button",
  ...props
}: Button20Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-violet-400/25",
        "bg-violet-500/[0.08]",
        "text-zinc-100",
        "font-semibold",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(139,92,246,0.10)]",
        "transition-all duration-300",
        "hover:border-violet-400/45",
        "hover:bg-violet-500/[0.13]",
        "hover:shadow-[0_10px_45px_rgba(99,102,241,0.18)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(99,102,241,0.20),transparent_45%),radial-gradient(ellipse_at_100%_50%,rgba(139,92,246,0.18),transparent_45%)] opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />

      <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/20 to-transparent transition-transform duration-700 group-hover:translate-x-[400%]" />

      <span className="relative z-10">{children}</span>
    </Button>
  );
}
