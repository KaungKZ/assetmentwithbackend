import React from "react";

import type { SVGProps } from "react";

export function Scubaicon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M13.5 14a2 2 0 0 1-1.4-.6l-.7-.8c-.8-.8-2-.8-2.8 0l-.7.8a2 2 0 0 1-1.4.6H6a4 4 0 0 1 0-8h8a4 4 0 0 1 0 8ZM12 18a2 2 0 0 1-4 0"></path>
        <path d="M10 20a2 2 0 0 0 2 2h4c3.3 0 6-2.7 6-6V2h-4v14a2 2 0 0 1-2 2m2-8h4"></path>
        <circle cx={4.5} cy={21.5} r={0.5}></circle>
        <path d="M3 17.5h.01"></path>
      </g>
    </svg>
  );
}
