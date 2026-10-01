"use client";

import { cn } from "@/lib/utils";
import {
  Calendar,
  ChevronRight,
  MapPin,
  Users,
} from "lucide-react";

interface ListItem {
  id: string;
  title: string;
  location: string;
  date: string;
  attendees: number;
  image: string;
}

interface List08Props {
  items?: ListItem[];
  className?: string;
}

const ITEMS: ListItem[] = [
  {
    id: "1",
    title: "Design Systems Workshop",
    location: "San Francisco, CA",
    date: "Mar 25, 2024",
    attendees: 156,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    title: "React Conference",
    location: "New York, NY",
    date: "Apr 12, 2024",
    attendees: 842,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    location: "Austin, TX",
    date: "Apr 28, 2024",
    attendees: 234,
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=200&h=200&fit=crop",
  },
];

export default function List08({ items = ITEMS, className }: List08Props) {
  return (
    <div className={cn("mx-auto w-full max-w-lg space-y-2", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "group flex gap-4 rounded-2xl border border-white/[0.07] p-3",
            "bg-[#0C0C0F]",
            "transition-all duration-300",
            "hover:border-violet-400/15 hover:bg-white/[0.025]",
            "cursor-pointer",
          )}
        >
          <div className="size-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.06]">
            <img
              src={item.image}
              alt={item.title}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="min-w-0 flex-1 py-1">
            <h3 className="mb-2 truncate text-sm font-medium text-zinc-100">
              {item.title}
            </h3>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <MapPin className="size-3.5 shrink-0" />
                <span className="truncate">{item.location}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <Calendar className="size-3.5" />
                  <span>{item.date}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <Users className="size-3.5" />
                  <span>{item.attendees}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <ChevronRight className="size-4 text-zinc-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-violet-300" />
          </div>
        </div>
      ))}
    </div>
  );
}