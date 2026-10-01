import type { SVGProps } from "react";

export default function CommandIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9 9V6a3 3 0 1 0-3 3h3Zm6 0V6a3 3 0 1 1 3 3h-3Zm0 6v3a3 3 0 1 0 3-3h-3Zm-6 0v3a3 3 0 1 1-3-3h3Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9 9h6v6H9z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}