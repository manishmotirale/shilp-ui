import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

interface Button14Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button14({
  className,
  children = "Electric Button",
  ...props
}: Button14Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-violet-400/25",
        "bg-violet-500/[0.10]",
        "text-zinc-100",
        "font-semibold",
        "shadow-[0_8px_30px_rgba(139,92,246,0.10)]",
        "transition-all duration-300",
        "hover:border-violet-400/45",
        "hover:bg-violet-500/[0.17]",
        "hover:shadow-[0_10px_40px_rgba(139,92,246,0.20)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-violet-300/[0.08] to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-2">
        <Zap className="size-4 text-violet-400 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        <span>{children}</span>
      </span>
    </Button>
  );
}