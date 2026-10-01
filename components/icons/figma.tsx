import type { SVGProps } from "react";

export default function FigmaIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8 2.5h4v6H8a3 3 0 1 1 0-6Zm4 0h4a3 3 0 1 1 0 6h-4v-6Zm0 6h4a3 3 0 1 1 0 6h-4v-6Zm0 6h4a3 3 0 1 1-3 3v-3Zm-4-6h4v6H8a3 3 0 1 1 0-6Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}