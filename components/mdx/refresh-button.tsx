"use client";

import * as React from "react";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface RefreshButtonProps {
  onRefresh: () => void;
  className?: string;
}

export function RefreshButton({ onRefresh, className }: RefreshButtonProps) {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    onRefresh();

    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <button
      type="button"
      onClick={handleRefresh}
      aria-label="Refresh preview"
      title="Refresh preview"
      className={cn(
        `
          group
          inline-flex
          h-8
          items-center
          gap-1.5
          rounded-lg
          border
          border-zinc-200
          bg-white/90
          px-2.5
          text-xs
          font-medium
          text-zinc-600
          shadow-sm
          backdrop-blur
          transition-all
          duration-200
          hover:border-zinc-300
          hover:bg-zinc-50
          hover:text-zinc-950
          active:scale-95
          dark:border-zinc-800
          dark:bg-zinc-950/90
          dark:text-zinc-400
          dark:hover:border-zinc-700
          dark:hover:bg-zinc-900
          dark:hover:text-zinc-50
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-zinc-400
          focus-visible:ring-offset-2
          focus-visible:ring-offset-white
          dark:focus-visible:ring-zinc-600
          dark:focus-visible:ring-offset-zinc-950
        `,
        className,
      )}
    >
      <RefreshCw
        size={14}
        className={cn(
          "transition-transform duration-500",
          isRefreshing ? "animate-spin" : "group-hover:rotate-180",
        )}
      />

      <span>Refresh</span>
    </button>
  );
}
