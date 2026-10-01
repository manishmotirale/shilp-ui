import type { SVGProps } from "react";

export default function JavascriptIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 10h6m-3 0v7m5.5-1c.5.6 1.2 1 2.1 1 1.1 0 1.9-.6 1.9-1.5 0-2-4-1.1-4-3.3 0-1 .8-1.7 1.9-1.7.9 0 1.5.3 2 .8"
      />
    </svg>
  );
}