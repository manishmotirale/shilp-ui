"use client";

import { CalendarDays, Clock3, MapPin, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventItem {
  id: string;
  title: string;
  time: string;
  location?: string;
  duration?: string;
}

interface Card23Props {
  date?: string;
  month?: string;
  events?: EventItem[];
  onAdd?: () => void;
  onEventClick?: (event: EventItem) => void;
  className?: string;
}

export default function Card_23({
  date = "24",
  month = "SEP 2026",
  events = [
    {
      id: "1",
      title: "Design review",
      time: "10:30 AM",
      duration: "45 min",
      location: "Studio 02",
    },
    {
      id: "2",
      title: "Component planning",
      time: "02:00 PM",
      duration: "1 hr",
      location: "Remote",
    },
    {
      id: "3",
      title: "Product sync",
      time: "05:30 PM",
      duration: "30 min",
    },
  ],
  onAdd,
  onEventClick,
  className,
}: Card23Props) {
  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-white/[0.025]",
        "backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] p-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/[0.07]">
            <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-violet-300">
              {month}
            </span>
            <span className="mt-0.5 text-xl font-semibold text-white">
              {date}
            </span>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-600">
              Schedule
            </p>
            <h3 className="mt-1 text-base font-medium text-white">
              Today&apos;s agenda
            </h3>
          </div>
        </div>

        <button
          type="button"
          onClick={onAdd}
          aria-label="Add event"
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-zinc-400 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        {events.map((event, index) => (
          <button
            key={event.id}
            type="button"
            onClick={() => onEventClick?.(event)}
            className={cn(
              "relative flex w-full gap-4 rounded-xl p-3 text-left",
              "transition-colors duration-200 hover:bg-white/[0.035]",
              index !== events.length - 1 && "mb-1",
            )}
          >
            <div className="flex w-16 shrink-0 flex-col pt-0.5">
              <span className="text-xs font-medium text-zinc-300">
                {event.time}
              </span>
              <span className="mt-1 text-[10px] text-zinc-600">
                {event.duration}
              </span>
            </div>

            <div className="relative flex min-w-0 flex-1 border-l border-white/[0.08] pl-4">
              <span className="absolute -left-[4px] top-1.5 h-2 w-2 rounded-full border border-[#09090b] bg-violet-400" />

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-zinc-200">
                  {event.title}
                </p>

                {event.location && (
                  <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-zinc-600">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </div>
                )}
              </div>

              <Clock3 className="ml-auto mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-700" />
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-white/[0.06] px-5 py-3">
        <button
          type="button"
          className="flex items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-zinc-200"
        >
          <CalendarDays className="h-3.5 w-3.5" />
          Open calendar
        </button>
      </div>
    </div>
  );
}