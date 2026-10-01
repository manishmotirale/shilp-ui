"use client";

import { useState } from "react";
import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  title: string;
  artist: string;
  duration: string;
  cover: string;
  playing?: boolean;
}

interface List11Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    title: "Midnight City",
    artist: "M83",
    duration: "4:03",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    playing: true,
  },
  {
    id: "2",
    title: "Electric Feel",
    artist: "MGMT",
    duration: "3:49",
    cover:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
  {
    id: "3",
    title: "Do I Wanna Know?",
    artist: "Arctic Monkeys",
    duration: "4:32",
    cover:
      "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80",
  },
];

export default function List11({
  items = defaultItems,
  className,
}: List11Props) {
  const [tracks, setTracks] = useState(items);
  const currentTrack = tracks.find((track) => track.playing) ?? tracks[0];

  const togglePlay = (id: string) => {
    setTracks((current) =>
      current.map((track) => ({
        ...track,
        playing: track.id === id ? !track.playing : false,
      })),
    );
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)]",
        className,
      )}
    >
      <div className="relative overflow-hidden border-b border-white/[0.06] p-5 sm:p-6">
        <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-3xl" />

        <div className="relative flex items-center gap-4">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03]">
            <img
              src={currentTrack?.cover}
              alt={currentTrack?.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
              Now Playing
            </p>
            <h3 className="truncate text-lg font-semibold tracking-tight">
              {currentTrack?.title}
            </h3>
            <p className="mt-1 truncate text-sm text-zinc-500">
              {currentTrack?.artist}
            </p>
          </div>
        </div>

        <div className="relative mt-6">
          <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[42%] rounded-full bg-violet-500" />
          </div>

          <div className="mt-2 flex justify-between text-[10px] text-zinc-600">
            <span>1:42</span>
            <span>{currentTrack?.duration}</span>
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-center gap-5">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
            aria-label="Previous track"
          >
            <SkipBack className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() =>
              currentTrack && togglePlay(currentTrack.id)
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-[1.04] hover:bg-zinc-200 active:scale-95"
            aria-label={currentTrack?.playing ? "Pause" : "Play"}
          >
            {currentTrack?.playing ? (
              <Pause className="h-4 w-4 fill-current" />
            ) : (
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            )}
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
            aria-label="Next track"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute right-5 top-5 hidden items-center gap-2 text-zinc-500 sm:flex">
          <Volume2 className="h-4 w-4" />
          <div className="h-1 w-16 overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-[65%] rounded-full bg-zinc-500" />
          </div>
        </div>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {tracks.map((track) => {
          const isPlaying = track.playing;

          return (
            <button
              key={track.id}
              type="button"
              onClick={() => togglePlay(track.id)}
              className={cn(
                "group flex w-full items-center gap-3 px-5 py-3.5 text-left transition sm:px-6",
                isPlaying
                  ? "bg-violet-500/[0.06]"
                  : "hover:bg-white/[0.025]",
              )}
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/[0.08]">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="h-full w-full object-cover"
                />

                {isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Pause className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate text-sm font-medium",
                    isPlaying ? "text-white" : "text-zinc-300",
                  )}
                >
                  {track.title}
                </p>
                <p className="mt-0.5 truncate text-xs text-zinc-600">
                  {track.artist}
                </p>
              </div>

              <span className="text-xs tabular-nums text-zinc-600">
                {track.duration}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}