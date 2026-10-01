import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";

interface Card04Props {
  author?: string;
  role?: string;
  text?: string;
  rating?: number;
  avatar?: string;
}

export default function Card_06({
  author = "Marcus Johnson",
  role = "CEO at TechCorp",
  text = "This product has transformed how we approach our workflow. Highly recommended for any team.",
  rating = 5,
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
}: Card04Props) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-sm overflow-hidden",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "p-6",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/[0.14]",
        "hover:bg-white/[0.035]",
      )}
    >
      <div className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025]">
        <Quote className="size-3.5 text-violet-400" />
      </div>

      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="size-3.5 fill-violet-400 text-violet-400"
          />
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-300">
        “{text}”
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <img
          src={avatar}
          alt={author}
          className="size-9 rounded-full border border-white/[0.08] object-cover"
        />

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-zinc-200">
            {author}
          </p>
          <p className="mt-0.5 truncate text-xs text-zinc-500">{role}</p>
        </div>
      </div>
    </div>
  );
}