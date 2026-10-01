import { cn } from "@/lib/utils";
import { Users, Plus, ArrowUpRight } from "lucide-react";

interface Card07Props {
  teamName?: string;
  members?: number;
  maxMembers?: number;
  avatars?: string[];
}

export default function Card_09({
  teamName = "Design Team",
  members = 5,
  maxMembers = 10,
  avatars = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
  ],
}: Card07Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "p-5",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-white/[0.14]",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-xl",
              "border border-white/[0.08]",
              "bg-white/[0.04]",
            )}
          >
            <Users className="size-4 text-zinc-400" />
          </div>

          <div>
            <h3 className="text-sm font-medium text-zinc-100">
              {teamName}
            </h3>
            <p className="mt-0.5 text-[11px] text-zinc-600">
              Team workspace
            </p>
          </div>
        </div>

        <ArrowUpRight className="size-4 text-zinc-600 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>

      <div className="mt-6">
        <div className="flex items-end justify-between">
          <p className="text-xs text-zinc-500">
            <span className="text-zinc-300">{members}</span> of {maxMembers} members
          </p>

          <span className="text-[10px] font-medium text-violet-300">
            {Math.round((members / maxMembers) * 100)}%
          </span>
        </div>

        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-violet-400/80 transition-all duration-500"
            style={{
              width: `${Math.min((members / maxMembers) * 100, 100)}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
        <div className="flex -space-x-2">
          {avatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar}
              alt={`Member ${i + 1}`}
              className="size-8 rounded-full border-2 border-[#09090b] bg-[#111113] object-cover"
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Add team member"
          className={cn(
            "flex size-8 items-center justify-center rounded-full",
            "border border-white/[0.08] bg-white/[0.03]",
            "text-zinc-500 transition-all duration-200",
            "hover:border-violet-400/25 hover:bg-violet-500/[0.08]",
            "hover:text-violet-300",
            "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
          )}
        >
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}