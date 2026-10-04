"use client";

import {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { cn } from "@/lib/utils";

import type { DemoEntry } from "./registry";

interface ComponentDemoProps {
  demo: DemoEntry;
  className?: string;
}

export function ComponentDemo({ demo, className }: ComponentDemoProps) {
  const Component = demo.component;

  return (
    <figure className={cn("not-prose my-8", className)}>
      <figcaption className="mb-3 text-sm font-medium text-fd-foreground">{demo.title}</figcaption>
      <CodeBlockTabs defaultValue="preview">
        <CodeBlockTabsList>
          <CodeBlockTabsTrigger value="preview">Preview</CodeBlockTabsTrigger>
          <CodeBlockTabsTrigger value="code">Code</CodeBlockTabsTrigger>
        </CodeBlockTabsList>
        <CodeBlockTab value="preview">
          <div
            className={cn(
              "flex items-center justify-center p-6",
              demo.previewClassName ?? "min-h-[120px]",
            )}
          >
            <Component {...(demo.props ?? {})} />
          </div>
        </CodeBlockTab>
        <CodeBlockTab value="code">
          <DynamicCodeBlock lang="tsx" code={demo.code} />
        </CodeBlockTab>
      </CodeBlockTabs>
    </figure>
  );
}