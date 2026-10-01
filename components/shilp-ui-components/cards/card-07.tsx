import { cn } from "@/lib/utils";
import { Package, ShoppingCart, ArrowUpRight } from "lucide-react";

interface Card05Props {
  name?: string;
  category?: string;
  price?: string;
  image?: string;
  inStock?: boolean;
}

export default function Card_07({
  name = "Premium Wireless Headphones",
  category = "Electronics",
  price = "$199.99",
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  inStock = true,
}: Card05Props) {
  return (
    <div
      className={cn(
        "group w-full max-w-sm overflow-hidden",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-white/[0.14]",
        "hover:bg-white/[0.035]",
        "shadow-[0_12px_40px_rgba(0,0,0,0.15)]",
      )}
    >
      <div className="relative h-52 overflow-hidden bg-[#0c0c0f]">
        <img
          src={image}
          alt={name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {inStock && (
          <div
            className={cn(
              "absolute left-4 top-4",
              "rounded-full border border-violet-400/20",
              "bg-[#09090b]/75 px-2.5 py-1",
              "text-[10px] font-medium uppercase tracking-[0.12em]",
              "text-violet-300 backdrop-blur-xl",
            )}
          >
            In stock
          </div>
        )}

        <div className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">
          <ArrowUpRight className="size-3.5 text-zinc-200" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-500">
              {category}
            </p>

            <h3 className="mt-2 truncate text-sm font-medium text-zinc-100">
              {name}
            </h3>
          </div>

          <Package className="mt-0.5 size-4 shrink-0 text-zinc-600" />
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <p className="text-lg font-medium tracking-tight text-white">
            {price}
          </p>

          <button
            type="button"
            aria-label="Add to cart"
            className={cn(
              "flex size-9 items-center justify-center rounded-full",
              "border border-white/[0.08]",
              "bg-white/[0.04] text-zinc-400",
              "transition-all duration-200",
              "hover:border-violet-400/25 hover:bg-violet-500/[0.08]",
              "hover:text-violet-300",
              "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
            )}
          >
            <ShoppingCart className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}