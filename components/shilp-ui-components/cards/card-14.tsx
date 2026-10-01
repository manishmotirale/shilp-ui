import { cn } from "@/lib/utils";
import { Folder, MoreVertical, Users } from "lucide-react";

interface Card12Props {
  name?: string;
  description?: string;
  files?: number;
  collaborators?: number;
  lastModified?: string;
}

export default function Card_14({
  name = "Design System v2.0",
  description = "Comprehensive design tokens and components",
  files = 48,
  collaborators = 6,
  lastModified = "2 hours ago",
}: Card12Props) {
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
        "hover:border-white/[0.12]",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="mb-5 flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.035]">
          <Folder className="h-5 w-5 text-violet-300" />
        </div>

        <button
          aria-label="More options"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-lg",
            "text-zinc-500 transition-colors duration-200",
            "hover:bg-white/[0.06] hover:text-zinc-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
          )}
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      <h3 className="mb-1 text-sm font-semibold tracking-tight text-white">
        {name}
      </h3>

      <p className="mb-5 text-xs leading-relaxed text-zinc-500">
        {description}
      </p>

      <div className="border-t border-white/[0.06] pt-4">
        <div className="flex items-center justify-between text-xs">
          <span className="text-zinc-500">
            {files} files
          </span>

          <div className="flex items-center gap-1.5 text-zinc-500">
            <Users className="h-3.5 w-3.5" />
            <span>{collaborators}</span>
          </div>
        </div>

        <p className="mt-2 text-[10px] text-zinc-600">
          Modified {lastModified}
        </p>
      </div>
    </div>
  );
}