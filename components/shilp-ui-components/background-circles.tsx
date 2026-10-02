import type { ReactNode } from "react";

interface BackgroundCirclesProps {
  children?: ReactNode;
  className?: string;
}

export default function BackgroundCircles({
  children,
  className = "",
}: BackgroundCirclesProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#050506] ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/[0.08]" />
        <div className="absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
        <div className="absolute left-1/2 top-1/2 size-[58rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
        <div className="absolute left-1/2 top-1/2 size-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.07] blur-[100px]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
