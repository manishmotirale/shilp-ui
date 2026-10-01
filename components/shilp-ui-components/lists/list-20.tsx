"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarDay {
  date: number;
  day: string;
  events: {
    title: string;
    color: string;
  }[];
}

interface List20Props {
  className?: string;
}

const generateDays = (): CalendarDay[] => [
  {
    date: 10,
    day: "Sun",
    events: [],
  },
  {
    date: 11,
    day: "Mon",
    events: [
      {
        title: "Team Standup",
        color: "violet",
      },
    ],
  },
  {
    date: 12,
    day: "Tue",
    events: [
      {
        title: "Design Review",
        color: "violet",
      },
    ],
  },
  {
    date: 13,
    day: "Wed",
    events: [
      {
        title: "Client Call",
        color: "violet",
      },
    ],
  },
  {
    date: 14,
    day: "Thu",
    events: [],
  },
  {
    date: 15,
    day: "Fri",
    events: [
      {
        title: "Sprint Planning",
        color: "violet",
      },
    ],
  },
  {
    date: 16,
    day: "Sat",
    events: [],
  },
];

export default function List20({ className }: List20Props) {
  const [days] = useState(generateDays);
  const [selectedDay, setSelectedDay] = useState("3");

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
            Schedule
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            March 2024
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
            aria-label="Next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 border-b border-white/[0.06]">
        {days.map((day) => {
          const selected = selectedDay === String(day.date);

          return (
            <button
              key={day.date}
              type="button"
              onClick={() => setSelectedDay(String(day.date))}
              className={cn(
                "relative min-w-0 border-r border-white/[0.05] px-1 py-4 text-center transition last:border-r-0",
                selected
                  ? "bg-white/[0.035]"
                  : "hover:bg-white/[0.02]",
              )}
            >
              <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-600">
                {day.day}
              </p>

              <div
                className={cn(
                  "mx-auto mt-2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium",
                  selected
                    ? "bg-white text-black"
                    : "text-zinc-400",
                )}
              >
                {day.date}
              </div>

              {day.events.length > 0 && (
                <div className="mt-2 flex justify-center gap-1">
                  {day.events.slice(0, 2).map((event) => (
                    <span
                      key={event.title}
                      className="h-1 w-1 rounded-full bg-violet-400"
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="p-5">
        {days
          .filter((day) => String(day.date) === selectedDay)
          .map((day) => (
            <div key={day.date}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-200">
                    {day.day}, March {day.date}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">
                    {day.events.length} scheduled event
                    {day.events.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>

              {day.events.length > 0 ? (
                <div className="space-y-2">
                  {day.events.map((event) => (
                    <div
                      key={event.title}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                    >
                      <span className="h-8 w-1 rounded-full bg-violet-400" />
                      <span className="text-sm text-zinc-300">
                        {event.title}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-white/[0.08] p-5 text-center">
                  <p className="text-xs text-zinc-600">
                    No events scheduled
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}