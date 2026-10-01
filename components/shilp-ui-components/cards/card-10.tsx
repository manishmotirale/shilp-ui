"use client";

import { useState } from "react";
import {
  Heart,
  MoreHorizontal,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Card10Props {
  title?: string;
  artist?: string;
  album?: string;
  image?: string;
  duration?: string;
  onPlayChange?: (playing: boolean) => void;
  className?: string;
}

export default function Card_10({
  title = "Midnight Signals",
  artist = "Shilp Audio",
  album = "After Dark",
  image,
  duration = "3:42",
  onPlayChange,
  className,
}: Card10Props) {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);

  const togglePlay = () => {
    const next = !playing;
    setPlaying(next);
    onPlayChange?.(next);
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-white/[0.025]",
        "p-4 backdrop-blur-xl",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl border border-white/[0.06] bg-[#0c0c0f]">
        {image ? (
          <img
            src={image}
            alt={`${title} cover`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-48 w-48 rounded-full bg-violet-500/[0.08] blur-3xl" />
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035]">
              <div className="h-16 w-16 rounded-full border border-violet-400/20 bg-violet-500/[0.08]" />
            </div>
          </div>
        )}

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
          <span className="rounded-full border border-white/[0.08] bg-black/50 px-2.5 py-1 text-[10px] text-zinc-400 backdrop-blur-md">
            {album}
          </span>

          <button
            type="button"
            onClick={() => setLiked(!liked)}
            aria-label={liked ? "Unlike track" : "Like track"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-black/50 backdrop-blur-md transition-colors hover:bg-white/[0.08]"
          >
            <Heart
              className={cn(
                "h-3.5 w-3.5",
                liked ? "fill-violet-400 text-violet-400" : "text-zinc-300",
              )}
            />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-white">{title}</h3>
          <p className="mt-1 text-sm text-zinc-500">{artist}</p>
        </div>

        <button
          type="button"
          aria-label="More options"
          className="shrink-0 text-zinc-600 transition-colors hover:text-zinc-300"
        >
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5">
        <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full w-[38%] rounded-full bg-violet-400" />
        </div>

        <div className="mt-2 flex justify-between text-[10px] text-zinc-600">
          <span>1:24</span>
          <span>{duration}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous track"
          className="text-zinc-500 transition-colors hover:text-white"
        >
          <SkipBack className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-200 hover:bg-zinc-200 active:scale-95"
        >
          {playing ? (
            <Pause className="h-4 w-4 fill-current" />
          ) : (
            <Play className="ml-0.5 h-4 w-4 fill-current" />
          )}
        </button>

        <button
          type="button"
          aria-label="Next track"
          className="text-zinc-500 transition-colors hover:text-white"
        >
          <SkipForward className="h-4 w-4" />
        </button>

        <Volume2 className="h-4 w-4 text-zinc-600" />
      </div>
    </div>
  );
}