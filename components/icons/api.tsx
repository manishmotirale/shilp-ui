import type { SVGProps } from "react";

export default function ApiIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4 7h16M4 12h10M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}