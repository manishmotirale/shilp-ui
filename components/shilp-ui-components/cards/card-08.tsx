import { cn } from "@/lib/utils";
import { Code2, GitBranch, Star, ArrowUpRight } from "lucide-react";

interface Card06Props {
  name?: string;
  description?: string;
  language?: string;
  stars?: number;
  url?: string;
}

export default function Card_08({
  name = "React Query",
  description = "Powerful asynchronous state management library for data fetching and caching.",
  language = "TypeScript",
  stars = 42100,
  url = "github.com/example/repo",
}: Card06Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm",
        "rounded-2xl border border-white/[0.08]",
        "bg-[#09090b]",
        "p-5",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-violet-400/20",
        "hover:bg-white/[0.025]",
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-xl",
            "border border-violet-400/15",
            "bg-violet-500/[0.07]",
          )}
        >
          <Code2 className="size-4 text-violet-300" />
        </div>

        <a
          href={`https://${url}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Open repository"
          className={cn(
            "flex size-8 items-center justify-center rounded-full",
            "text-zinc-600 transition-all duration-200",
            "hover:bg-white/[0.05] hover:text-zinc-200",
          )}
        >
          <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-medium text-zinc-100">{name}</h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-500">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-violet-400" />
          <span className="text-xs text-zinc-400">{language}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500">
          <Star className="size-3.5 text-zinc-500" />
          <span>{stars.toLocaleString()}</span>
        </div>

        <GitBranch className="size-3.5 text-zinc-600" />
      </div>
    </div>
  );
}