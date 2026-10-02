"use client";

import { Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";
import { useState } from "react";

interface TweetCardProps {
  name?: string;
  handle?: string;
  content?: string;
  avatar?: string;
}

export default function TweetCard({
  name = "Manish Motirale",
  handle = "@manish",
  content = "Building Shilp UI — a premium component system for modern React applications.",
  avatar,
}: TweetCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="w-full max-w-xl rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl">
      <div className="flex gap-3">
        {avatar ? (
          <img src={avatar} alt="" className="size-10 rounded-full object-cover" />
        ) : (
          <div className="grid size-10 place-items-center rounded-full bg-violet-500/15 text-sm font-semibold text-violet-200">
            {name.slice(0, 1)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-white">{name}</span>
            <span className="text-sm text-zinc-600">{handle}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-300">{content}</p>
          <div className="mt-5 flex max-w-sm items-center justify-between text-zinc-600">
            <button className="flex items-center gap-2 text-xs transition hover:text-violet-300"><MessageCircle className="size-4" /> 12</button>
            <button className="flex items-center gap-2 text-xs transition hover:text-violet-300"><Repeat2 className="size-4" /> 8</button>
            <button onClick={() => setLiked(!liked)} className={`flex items-center gap-2 text-xs transition ${liked ? "text-violet-300" : "hover:text-violet-300"}`}><Heart className={`size-4 ${liked ? "fill-current" : ""}`} /> {liked ? 24 : 23}</button>
            <button className="transition hover:text-violet-300" aria-label="Share"><Share2 className="size-4" /></button>
          </div>
        </div>
      </div>
    </article>
  );
}
