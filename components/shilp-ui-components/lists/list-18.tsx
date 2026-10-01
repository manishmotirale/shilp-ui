"use client";

import { ShoppingCart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
}

interface List18Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    name: "Studio Headphones",
    price: "$129",
    originalPrice: "$159",
    rating: 4.8,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    badge: "Popular",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    price: "$149",
    rating: 4.9,
    reviews: 86,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80",
  },
  {
    id: "3",
    name: "4K Monitor",
    price: "$399",
    originalPrice: "$449",
    rating: 4.7,
    reviews: 64,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    badge: "Sale",
  },
];

export default function List18({
  items = defaultItems,
  className,
}: List18Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          Store
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          Products
        </h3>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex gap-4 p-4 transition hover:bg-white/[0.025] sm:p-5"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {item.badge && (
                <span className="absolute left-1.5 top-1.5 rounded-full bg-black/70 px-2 py-1 text-[9px] font-medium text-white backdrop-blur">
                  {item.badge}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-medium text-zinc-100">
                {item.name}
              </h4>

              <div className="mt-1.5 flex items-center gap-1.5">
                <div className="flex items-center gap-0.5 text-violet-300">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs">{item.rating}</span>
                </div>

                <span className="text-[10px] text-zinc-600">
                  ({item.reviews})
                </span>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {item.price}
                </span>

                {item.originalPrice && (
                  <span className="text-xs text-zinc-600 line-through">
                    {item.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center self-center rounded-full border border-white/[0.08] bg-white/[0.025] text-zinc-500 transition hover:border-violet-400/[0.25] hover:bg-violet-500/[0.08] hover:text-violet-300"
              aria-label={`Add ${item.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}