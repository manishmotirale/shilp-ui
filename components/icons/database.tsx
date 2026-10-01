import type { SVGProps } from "react";

export default function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="12"
        cy="5"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 5v7c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 12v7c0 1.7 3.1 3 7 3s7-1.3 7-3v-7"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}