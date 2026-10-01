import type { SVGProps } from "react";

export default function PrismaIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m13.1 3.1 7.1 14.2a1.5 1.5 0 0 1-1.2 2.2l-10.6 1a1.5 1.5 0 0 1-1.4-.7L3.3 14a1.5 1.5 0 0 1 .1-1.6l7.2-9.3a1.5 1.5 0 0 1 2.5 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m12.7 5.2-1.8 13.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}