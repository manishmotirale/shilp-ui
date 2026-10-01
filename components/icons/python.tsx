import type { SVGProps } from "react";

export default function PythonIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2.5c-3.1 0-3.8 1.5-3.8 3.4v2.4h7.6v1.2H5.7C3.5 9.5 2.5 11 2.5 14s1.2 4.5 3.4 4.5h2v-2.8c0-2.2 1.3-3.7 3.7-3.7h3.7c2.1 0 3.7-1.3 3.7-3.6V5.9c0-2-1.8-3.4-4.4-3.4H12Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M12 21.5c3.1 0 3.8-1.5 3.8-3.4v-2.4H8.2v-1.2h10.1c2.2 0 3.2-1.5 3.2-4.5s-1.2-4.5-3.4-4.5h-2v2.8c0 2.2-1.3 3.7-3.7 3.7H8.7c-2.1 0-3.7 1.3-3.7 3.6v2.5c0 2 1.8 3.4 4.4 3.4H12Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}