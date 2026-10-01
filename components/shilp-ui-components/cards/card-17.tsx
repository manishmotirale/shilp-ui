import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface Card15Props {
  title?: string;
  message?: string;
  fields?: { label: string; value: string }[];
}

export default function Card_17({
  title = "Security Alert",
  message = "Your account has unusual activity detected. Review and confirm actions below.",
  fields = [
    { label: "Email", value: "user@example.com" },
    { label: "Last Login", value: "2 hours ago" },
  ],
}: Card15Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm",
        "relative overflow-hidden",
        "rounded-2xl",
        "border border-red-400/15",
        "bg-white/[0.025]",
        "p-5",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:border-red-400/25",
      )}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-500/[0.06] blur-3xl" />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-400/15 bg-red-400/[0.06]">
            <AlertCircle className="h-4 w-4 text-red-400" />
          </div>

          <h3 className="text-sm font-semibold tracking-tight text-white">
            {title}
          </h3>
        </div>

        <p className="mb-5 text-xs leading-relaxed text-zinc-500">
          {message}
        </p>

        <div className="mb-5 space-y-3">
          {fields.map((field, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-4"
            >
              <span className="text-xs text-zinc-500">
                {field.label}
              </span>

              <span className="truncate text-xs font-medium text-zinc-300">
                {field.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 border-t border-white/[0.06] pt-4">
          <button
            className={cn(
              "flex-1 rounded-full px-3 py-2",
              "bg-red-500 text-xs font-medium text-white",
              "transition-all duration-200",
              "hover:bg-red-400",
              "active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40",
            )}
          >
            Confirm
          </button>

          <button
            className={cn(
              "flex-1 rounded-full border border-white/[0.08]",
              "bg-white/[0.035] px-3 py-2",
              "text-xs font-medium text-zinc-300",
              "transition-all duration-200",
              "hover:bg-white/[0.06]",
              "active:scale-[0.98]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
            )}
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
}