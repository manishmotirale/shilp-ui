import { cn } from "@/lib/utils";
import { Check, X, Sparkles } from "lucide-react";

interface Feature {
  name: string;
  included: boolean;
}

interface Card14Props {
  title?: string;
  price?: string;
  billing?: string;
  features?: Feature[];
  cta?: string;
  highlighted?: boolean;
}

export default function Card_16({
  title = "Professional",
  price = "$29",
  billing = "/month",
  features = [
    { name: "Unlimited projects", included: true },
    { name: "Advanced analytics", included: true },
    { name: "API access", included: false },
  ],
  cta = "Get Started",
  highlighted = false,
}: Card14Props) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-sm overflow-hidden",
        "rounded-2xl",
        "border",
        highlighted
          ? "border-violet-400/25 bg-violet-400/[0.035]"
          : "border-white/[0.08] bg-white/[0.025]",
        "p-6",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        highlighted
          ? "hover:border-violet-400/35"
          : "hover:border-white/[0.12]",
      )}
    >
      {highlighted && (
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.09] blur-3xl" />
      )}

      <div className="relative">
        {highlighted && (
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300">
            <Sparkles className="h-3 w-3" />
            Popular
          </div>
        )}

        <h3 className="text-lg font-semibold tracking-tight text-white">
          {title}
        </h3>

        <div className="mb-6 mt-3">
          <span className="text-4xl font-semibold tracking-tight text-white">
            {price}
          </span>
          <span className="ml-1 text-sm text-zinc-500">
            {billing}
          </span>
        </div>

        <button
          className={cn(
            "mb-6 w-full rounded-full px-4 py-2.5",
            "text-sm font-medium",
            "transition-all duration-200",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40",
            highlighted
              ? "bg-white text-black hover:bg-zinc-200"
              : "border border-white/[0.10] bg-white/[0.04] text-zinc-200 hover:bg-white/[0.07]",
          )}
        >
          {cta}
        </button>

        <div className="space-y-3.5 border-t border-white/[0.06] pt-5">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  feature.included
                    ? "bg-violet-400/[0.10]"
                    : "bg-white/[0.03]",
                )}
              >
                {feature.included ? (
                  <Check className="h-3 w-3 text-violet-300" />
                ) : (
                  <X className="h-3 w-3 text-zinc-700" />
                )}
              </div>

              <span
                className={cn(
                  "text-sm",
                  feature.included
                    ? "text-zinc-300"
                    : "text-zinc-600",
                )}
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}