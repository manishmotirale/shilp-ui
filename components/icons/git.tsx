import type { SVGProps } from "react";

export default function GitIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m20.5 10.5-7-7a2 2 0 0 0-2.8 0l-1.4 1.4 1.9 1.9a2.3 2.3 0 0 1 2.8 2.8l1.9 1.9a2.3 2.3 0 1 1-1.2 1.2l-1.9-1.9v5a2.3 2.3 0 1 1-1.6 0V12a2.3 2.3 0 0 1-1.2-1.2L8.1 8.9 3.5 13.5a2 2 0 0 0 0 2.8l4.2 4.2a2 2 0 0 0 2.8 0l10-10a2 2 0 0 0 0-2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}