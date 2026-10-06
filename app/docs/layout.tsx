import "fumadocs-ui/style.css";

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { source } from "@/lib/source";
import { baseOptions } from "../layout.config";

export const metadata: Metadata = {
  title: {
    template: "%s | Shilp UI",
    default: "Shilp UI — Craft, Compose, Create.",
  },
  description:
    "Beautifully crafted React and Next.js components for building modern web interfaces.",
};

export default function DocsRootLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      className="
        bg-white
        text-zinc-950
        dark:bg-zinc-950
        dark:text-zinc-50
      "
    >
      {children}
    </DocsLayout>
  );
}
