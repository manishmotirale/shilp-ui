"use client";

import { ComponentDemo } from "./component-demo";
import { demos, type DemoCategory } from "./registry";

interface ComponentShowcaseProps {
  category: DemoCategory;
}

export function ComponentShowcase({ category }: ComponentShowcaseProps) {
  const items = demos[category];

  if (!items?.length) {
    return null;
  }

  return (
    <div>
      {items.map((demo) => (
        <ComponentDemo key={demo.id} demo={demo} />
      ))}
    </div>
  );
}