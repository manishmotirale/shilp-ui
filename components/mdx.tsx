import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { ComponentShowcase } from "@/components/docs/component-showcase";

export function getMDXComponents(
  components?: MDXComponents,
): MDXComponents {
  return {
    ...defaultMdxComponents,

    // Shilp UI components
    ComponentShowcase,

    // Allow individual pages to override components
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<
    typeof getMDXComponents
  >;
}