import type { ReactNode } from "react";

interface BeamsBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export default function BeamsBackground({
  children,
  className = "",
}: BeamsBackgroundProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#050506] ${className}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[-20%] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-violet-400/20 to-transparent blur-[1px]" />
        <div className="absolute left-[38%] top-[-20%] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute left-[64%] top-[-20%] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-violet-400/15 to-transparent blur-[1px]" />
        <div className="absolute left-[88%] top-[-20%] h-[140%] w-px rotate-[24deg] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(139,92,246,.09),transparent_45%)]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
