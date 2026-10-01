import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface Button11Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Button11({
  className,
  children = "Chevron Button",
  ...props
}: Button11Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-white/[0.10]",
        "bg-white text-black",
        "font-medium",
        "transition-all duration-300",
        "hover:bg-zinc-100",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.15)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>

        <ChevronRight className="size-4 text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-violet-500" />
      </span>
    </Button>
  );
}