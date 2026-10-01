import type { SVGProps } from "react";

export default function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="3" fill="currentColor" />
      <path
        fill="none"
        stroke="var(--shilp-icon-bg, #050506)"
        strokeWidth="2"
        d="M4.5 10h6m-3 0v7m5-1.2c.6.8 1.5 1.2 2.6 1.2 1.3 0 2.4-.7 2.4-1.8 0-2.5-4.8-1.3-4.8-3.8 0-1.1 1-1.9 2.3-1.9 1 0 1.8.3 2.4 1"
      />
    </svg>
  );
}