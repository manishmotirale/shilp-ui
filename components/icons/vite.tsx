import type { SVGProps } from "react";

export default function ViteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m3 4 9 16 9-16-9 2.5L3 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m10 10 2-3 2 3-2 4-2-4Z"
        fill="currentColor"
      />
    </svg>
  );
}