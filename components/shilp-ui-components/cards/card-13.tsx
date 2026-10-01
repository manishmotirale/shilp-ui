import { cn } from "@/lib/utils";
import { Award, Zap } from "lucide-react";

interface Card11Props {
  title?: string;
  points?: number;
  level?: number;
  progress?: number;
}

export default function Card_13({
  title = "Pro Member",
  points = 2450,
  level = 5,
  progress = 75,
}: Card11Props) {
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
        "hover:border-violet-400/20",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.07]">
            <Award className="h-5 w-5 text-violet-300" />
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-tight text-white">
              {title}
            </h3>
            <p className="mt-0.5 text-xs text-zinc-500">
              Level {level}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs text-zinc-500">
              Progress to Level {level + 1}
            </span>
            <span className="text-xs font-medium text-zinc-300">
              {progress}%
            </span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-violet-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-500">
          <Zap className="h-3.5 w-3.5 text-violet-300" />
          <span>
            <span className="font-semibold text-zinc-200">{points}</span>{" "}
            points earned
          </span>
        </div>
      </div>
    </div>
  );
}