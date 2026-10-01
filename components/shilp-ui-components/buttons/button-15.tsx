import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Layers3 } from "lucide-react";

interface Button15Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button15({
  className,
  children = "Glass Button",
  ...props
}: Button15Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-8",
        "border border-white/[0.10]",
        "bg-white/[0.045]",
        "text-zinc-200",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
        "transition-all duration-300",
        "hover:border-violet-400/25",
        "hover:bg-white/[0.07]",
        "hover:text-white",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.10)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-50%,rgba(139,92,246,0.14),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative z-10 flex items-center gap-2">
        <Layers3 className="size-3.5 text-zinc-600 transition-colors duration-300 group-hover:text-violet-400" />
        <span>{children}</span>
      </span>
    </Button>
  );
}