import { cn } from "@/lib/utils";
import { InboxIcon } from "lucide-react";

interface Card19Props {
  title?: string;
  message?: string;
  actionText?: string;
  icon?: React.ReactNode;
}

export default function Card_21({
  title = "No Results",
  message = "Try adjusting your search or filters to find what you're looking for.",
  actionText = "Clear Filters",
  icon = <InboxIcon className="h-12 w-12 text-zinc-700" />,
}: Card19Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm",
        "rounded-2xl",
        "border border-white/[0.08]",
        "bg-white/[0.025]",
        "p-8",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:border-white/[0.12]",
      )}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.03]">
          {icon}
        </div>

        <h3 className="mb-1 text-sm font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mb-4 max-w-xs text-xs leading-relaxed text-zinc-500">
          {message}
        </p>

        <button
          className={cn(
            "rounded-full px-3.5 py-1.5",
            "text-xs font-medium text-zinc-300",
            "border border-white/[0.08] bg-white/[0.035]",
            "transition-all duration-200",
            "hover:bg-white/[0.07] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
          )}
        >
          {actionText}
        </button>
      </div>
    </div>
  );
}