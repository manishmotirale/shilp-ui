import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface Btn01Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export default function Btn01({
  className,
  children = "Continue",
  ...props
}: Btn01Props) {
  return (
    <Button
      className={cn(
        "group relative h-11 overflow-hidden rounded-full px-6",
        "border border-white/[0.10]",
        "bg-white text-black",
        "font-medium",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "transition-all duration-300",
        "hover:bg-zinc-100",
        "hover:shadow-[0_10px_35px_rgba(139,92,246,0.18)]",
        "active:scale-[0.98]",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10 flex items-center gap-3">
        <span>{children}</span>

        <span className="flex size-6 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-violet-600">
          <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </span>
    </Button>
  );
}