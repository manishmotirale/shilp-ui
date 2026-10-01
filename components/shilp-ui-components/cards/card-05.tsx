import { cn } from "@/lib/utils";
import { TrendingUp, ArrowUpRight } from "lucide-react";

interface Card03Props {
  title?: string;
  value?: string;
  change?: number;
  period?: string;
}

export default function Card_05({
  title = "Total Revenue",
  value = "$45,231.89",
  change = 12.5,
  period = "from last month",
}: Card03Props) {
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
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">
            {title}
          </p>

          <h3 className="mt-3 truncate text-3xl font-medium tracking-tight text-white">
            {value}
          </h3>
        </div>

        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center",
            "rounded-xl border border-violet-400/15",
            "bg-violet-500/[0.07]",
            "transition-all duration-300",
            "group-hover:border-violet-400/25",
            "group-hover:bg-violet-500/[0.10]",
          )}
        >
          <TrendingUp className="size-4 text-violet-300" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-1 rounded-full bg-violet-500/[0.07] px-2 py-1 text-xs font-medium text-violet-300">
          <ArrowUpRight className="size-3.5" />
          <span>{change}%</span>
        </div>

        <span className="text-xs text-zinc-500">{period}</span>
      </div>
    </div>
  );
}