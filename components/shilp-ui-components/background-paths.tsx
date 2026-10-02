import type { ReactNode } from "react";

interface BackgroundPathsProps {
  children?: ReactNode;
  className?: string;
}

export default function BackgroundPaths({
  children,
  className = "",
}: BackgroundPathsProps) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#050506] ${className}`}>
      <svg
        className="pointer-events-none absolute inset-0 size-full opacity-40"
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M-50 540C180 220 340 680 570 310S930 30 1250 220" fill="none" stroke="white" strokeOpacity=".06" />
        <path d="M-80 620C160 330 350 760 610 380S950 100 1280 300" fill="none" stroke="#8B5CF6" strokeOpacity=".11" />
        <path d="M-40 430C210 100 390 590 630 260S980 20 1240 170" fill="none" stroke="white" strokeOpacity=".035" />
      </svg>
      <div className="relative">{children}</div>
    </div>
  );
}
