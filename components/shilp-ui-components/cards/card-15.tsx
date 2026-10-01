import { cn } from "@/lib/utils";
import { BookOpen, Clock } from "lucide-react";

interface Card13Props {
  title?: string;
  category?: string;
  readTime?: number;
  excerpt?: string;
  date?: string;
}

export default function Card_15({
  title = "Getting Started with Next.js 14",
  category = "Tutorial",
  readTime = 8,
  excerpt = "Learn the fundamentals of Next.js 14 and build your first application with server components and more.",
  date = "Mar 10, 2024",
}: Card13Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm",
        "relative overflow-hidden",
        "rounded-2xl",
        "border border-white/[0.08]",
        "bg-white/[0.025]",
        "p-5",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:border-violet-400/15",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-violet-300">
          {category}
        </span>

        <span className="text-[10px] text-zinc-600">
          {date}
        </span>
      </div>

      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035]">
        <BookOpen className="h-4 w-4 text-zinc-400" />
      </div>

      <h3 className="mb-2 text-base font-semibold leading-snug tracking-tight text-white">
        {title}
      </h3>

      <p className="mb-5 line-clamp-2 text-xs leading-relaxed text-zinc-500">
        {excerpt}
      </p>

      <div className="flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-500">
        <Clock className="h-3.5 w-3.5" />
        <span>{readTime} min read</span>
      </div>
    </div>
  );
}