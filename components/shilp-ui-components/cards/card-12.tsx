import { cn } from "@/lib/utils";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface Card08Props {
  title?: string;
  date?: string;
  time?: string;
  category?: string;
}

export default function Card_12({
  title = "Product Launch Event",
  date = "March 15, 2024",
  time = "2:00 PM - 4:00 PM",
  category = "Conference",
}: Card08Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "p-5",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-violet-400/20",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "rounded-full border border-violet-400/15",
            "bg-violet-500/[0.07]",
            "px-2.5 py-1",
            "text-[10px] font-medium uppercase tracking-[0.12em]",
            "text-violet-300",
          )}
        >
          {category}
        </span>

        <div className="flex size-8 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025]">
          <ArrowUpRight className="size-3.5 text-zinc-500 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>

      <h3 className="mt-5 text-base font-medium tracking-tight text-zinc-100">
        {title}
      </h3>

      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.025] px-3 py-2.5">
          <Calendar className="size-4 text-zinc-500" />
          <span className="text-xs text-zinc-400">{date}</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/[0.025] px-3 py-2.5">
          <Clock className="size-4 text-zinc-500" />
          <span className="text-xs text-zinc-400">{time}</span>
        </div>
      </div>

      <button
        type="button"
        className={cn(
          "mt-5 flex w-full items-center justify-center gap-2",
          "rounded-full border border-white/[0.08]",
          "bg-white/[0.04] px-4 py-2.5",
          "text-xs font-medium text-zinc-300",
          "transition-all duration-200",
          "hover:border-white/[0.14] hover:bg-white/[0.07]",
          "hover:text-white",
        )}
      >
        View event
        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}