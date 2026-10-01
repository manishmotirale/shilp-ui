import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

interface Card16Props {
  status?: "online" | "offline" | "idle";
  name?: string;
  activity?: string;
  lastSeen?: string;
}

export default function Card_18({
  status = "online",
  name = "Alex Thompson",
  activity = "In a meeting",
  lastSeen = "Active now",
}: Card16Props) {
  const statusColors = {
    online: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)]",
    offline: "bg-zinc-600",
    idle: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.35)]",
  };

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
      <div className="mb-5 flex items-center gap-4">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05]">
            <span className="text-sm font-semibold text-zinc-300">
              {name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>

          <div
            className={cn(
              "absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full",
              "border-2 border-[#09090b]",
              statusColors[status],
            )}
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold tracking-tight text-white">
            {name}
          </h3>

          <p className="mt-0.5 text-xs text-zinc-500">
            {activity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-zinc-500">
        <Activity className="h-3.5 w-3.5 text-violet-300" />
        <span>{lastSeen}</span>
      </div>
    </div>
  );
}