import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

interface Card18Props {
  title?: string;
  description?: string;
}

export default function Card_20({
  title = "Loading Data",
  description = "Fetching your information...",
}: Card18Props) {
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
      )}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06]">
          <Loader className="h-5 w-5 animate-spin text-violet-300" />
        </div>

        <h3 className="mb-1 text-sm font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="text-xs text-zinc-500">{description}</p>
      </div>
    </div>
  );
}
