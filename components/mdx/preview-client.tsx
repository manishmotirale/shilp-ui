"use client";

import * as React from "react";

import { Preview } from "./preview";
import { RefreshButton } from "./refresh-button";

interface PreviewClientProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

export function PreviewClient({
  children,
  className,
  isPremium,
  link,
  useIframe = false,
  height,
  compact = false,
  comment = [],
  isBlock = false,
}: PreviewClientProps) {
  const [key, setKey] = React.useState(0);

  const handleRefresh = () => {
    setKey((previousKey) => previousKey + 1);
  };

  return (
    <div className="relative w-full">
      {/* Refresh */}
      <div className="absolute right-3 top-3 z-20">
        <RefreshButton onRefresh={handleRefresh} />
      </div>

      {/* Preview */}
      <div key={key} className="w-full">
        <Preview
          className={className}
          isPremium={isPremium}
          link={link}
          useIframe={useIframe}
          height={height}
          compact={compact}
          comment={comment}
          isBlock={isBlock}
        >
          {children}
        </Preview>
      </div>
    </div>
  );
}
