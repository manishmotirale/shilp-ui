import "fumadocs-ui/style.css";

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { baseOptions } from "@/lib/layout.shared";

import { source } from "@/lib/source";
export const metadata: Metadata = {
  title: {
    template: "%s | Shilp UI",
    default: "Shilp UI — Premium React Components",
  },
  description:
    "Shilp UI is a premium collection of modern, reusable React and Next.js components.",
};

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      className="bg-[#050506] text-zinc-100"
    >
      {children}
    </DocsLayout>
  );
}
