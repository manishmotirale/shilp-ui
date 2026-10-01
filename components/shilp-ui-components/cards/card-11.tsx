import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";

interface Card09Props {
  title?: string;
  message?: string;
  type?: "alert" | "success";
  action?: string;
}

export default function Card_11({
  title = "Update Available",
  message = "A new version of our software is ready to download.",
  type = "alert",
  action = "Update Now",
}: Card09Props) {
  const isAlert = type === "alert";

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
      <div
        className={cn(
          "absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl",
          isAlert ? "bg-amber-500/[0.07]" : "bg-emerald-500/[0.07]",
        )}
      />

      <div className="relative flex gap-4">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center",
            "rounded-xl border",
            isAlert
              ? "border-amber-400/15 bg-amber-400/[0.06]"
              : "border-emerald-400/15 bg-emerald-400/[0.06]",
          )}
        >
          {isAlert ? (
            <AlertCircle className="h-4 w-4 text-amber-400" />
          ) : (
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-sm font-semibold tracking-tight text-white">
            {title}
          </h3>

          <p className="mb-4 text-xs leading-relaxed text-zinc-400">
            {message}
          </p>

          <button
            className={cn(
              "inline-flex items-center gap-1.5",
              "text-xs font-medium",
              "transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
              isAlert
                ? "text-amber-300 hover:text-amber-200"
                : "text-emerald-300 hover:text-emerald-200",
            )}
          >
            {action}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}