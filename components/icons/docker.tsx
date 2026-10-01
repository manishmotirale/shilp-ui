import type { SVGProps } from "react";

export default function DockerIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3 12.5h18M5 9.5h3m1 0h3m1 0h3M7 6.5h3m1 0h3M9 15.5h3m1 0h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.5 12.5c.5 4.5 3.3 7 8.2 7 4.4 0 7.3-2.1 8.8-6.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}