import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";

import { getMDXComponents } from "@/components/mdx";
import { source } from "@/lib/source";

type PageParams = {
  slug?: string[];
};

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;

  const page = source.getPage(slug ?? []);

  if (!page) {
    return {};
  }

  return {
    title: page.data.title,
    description:
      page.data.description ??
      "Beautifully crafted UI components for modern React and Next.js applications.",
  };
}

export default async function Page({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;

  const page = source.getPage(slug ?? []);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>

      {page.data.description && (
        <DocsDescription>
          {page.data.description}
        </DocsDescription>
      )}

      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}