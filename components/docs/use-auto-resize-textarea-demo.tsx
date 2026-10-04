"use client";

import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

export function UseAutoResizeTextareaDemo() {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 52,
    maxHeight: 200,
  });

  return (
    <textarea
      ref={textareaRef}
      onInput={adjustHeight}
      placeholder="Type a message — the textarea grows with your content..."
      className="
        w-full
        max-w-md
        resize-none
        rounded-xl
        border
        border-zinc-200
        bg-white
        px-4
        py-3
        text-sm
        text-zinc-950
        shadow-sm
        outline-none
        transition-all
        duration-200
        placeholder:text-zinc-400
        hover:border-zinc-300
        focus:border-zinc-400
        focus:ring-2
        focus:ring-zinc-200
        dark:border-zinc-800
        dark:bg-zinc-950
        dark:text-zinc-50
        dark:shadow-none
        dark:placeholder:text-zinc-600
        dark:hover:border-zinc-700
        dark:focus:border-zinc-700
        dark:focus:ring-zinc-800
      "
    />
  );
}