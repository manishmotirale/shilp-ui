"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, CircleDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  name: string;
  price: string;
  change: string;
  marketCap: string;
  volume: string;
  symbol: string;
  color?: string;
}

interface List14Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: "$67,421.20",
    change: "+2.41%",
    marketCap: "$1.33T",
    volume: "$28.4B",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,482.16",
    change: "+1.18%",
    marketCap: "$418.2B",
    volume: "$14.8B",
  },
  {
    id: "3",
    name: "Solana",
    symbol: "SOL",
    price: "$184.72",
    change: "-0.82%",
    marketCap: "$85.7B",
    volume: "$3.2B",
  },
];

export default function List14({
  items = defaultItems,
  className,
}: List14Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
              Markets
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Crypto
            </h3>
          </div>

          <CircleDollarSign className="h-5 w-5 text-zinc-600" />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[650px]">
          <div className="grid grid-cols-[2fr_1.2fr_1fr_1.2fr_1.2fr] border-b border-white/[0.05] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-600">
            <span>Asset</span>
            <span>Price</span>
            <span>24h</span>
            <span>Market Cap</span>
            <span>Volume</span>
          </div>

          {items.map((item) => {
            const positive = item.change.startsWith("+");
            const hovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  "grid grid-cols-[2fr_1.2fr_1fr_1.2fr_1.2fr] items-center px-5 py-4 transition",
                  hovered ? "bg-white/[0.025]" : "",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-xs font-semibold text-zinc-300">
                    {item.symbol.slice(0, 1)}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[10px] text-zinc-600">
                      {item.symbol}
                    </p>
                  </div>
                </div>

                <span className="text-sm tabular-nums text-zinc-300">
                  {item.price}
                </span>

                <span
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium tabular-nums",
                    positive ? "text-emerald-400" : "text-rose-400",
                  )}
                >
                  {positive ? (
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5" />
                  )}
                  {item.change}
                </span>

                <span className="text-sm text-zinc-500">
                  {item.marketCap}
                </span>

                <span className="text-sm text-zinc-500">
                  {item.volume}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}