import type { SVGProps } from "react";

export default function NodejsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2.5 21 7.7v8.6l-9 5.2-9-5.2V7.7l9-5.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.2 15.8c.7.5 1.5.7 2.3.7 1.3 0 2.2-.7 2.2-1.8 0-2.5-3.9-1.4-3.9-3.6 0-1 .8-1.7 2-1.7.8 0 1.5.2 2 .6M15.8 9.4v5.3c0 1-.6 1.7-1.5 1.7"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}