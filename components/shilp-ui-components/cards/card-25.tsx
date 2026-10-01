"use client";

import { Calendar, Code2, ExternalLink, Share2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
}

interface Card02Props {
  name?: string;
  role?: string;
  image?: string;
  status?: string;
  skills?: Skill[];
  portfolio?: string;
}

const defaultProfile = {
  name: "Eugene K",
  role: "Senior Developer",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYy_Pjw0UWMPSmVN7lL5yhod-0OhxDmeT4g&s",
  status: "Open to Work",
  skills: [
    { name: "Frontend", level: 5 },
    { name: "Backend", level: 4 },
    { name: "DevOps", level: 4 },
  ],
  portfolio: "github.com/alexchen",
} satisfies Required<Card02Props>;

export default function Card_25({
  name = defaultProfile.name,
  role = defaultProfile.role,
  image = defaultProfile.image,
  status = defaultProfile.status,
  skills = defaultProfile.skills,
  portfolio = defaultProfile.portfolio,
}: Card02Props = defaultProfile) {
  return (
    <div className="mx-auto w-full max-w-xs">
      <div
        className={cn(
          "group relative overflow-hidden",
          "rounded-2xl",
          "border border-white/[0.08]",
          "bg-white/[0.025]",
          "backdrop-blur-xl",
          "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
          "transition-all duration-300",
          "hover:border-violet-400/20",
          "hover:bg-white/[0.035]",
        )}
      >
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-3xl" />

        <div className="relative p-5">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04]">
              <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-base font-semibold tracking-tight text-white">
                {name}
              </h3>

              <p className="mb-2 text-xs text-zinc-500">
                {role}
              </p>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                <Calendar className="h-3 w-3" />
                {status}
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-5 pb-5">
          <div className="space-y-2.5">
            {skills?.map((skill) => (
              <div
                key={skill.name}
                className={cn(
                  "flex items-center gap-3",
                  "rounded-xl",
                  "border border-white/[0.05]",
                  "bg-white/[0.02]",
                  "p-2.5",
                  "transition-all duration-200",
                  "hover:border-white/[0.08]",
                  "hover:bg-white/[0.04]",
                )}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Code2 className="h-3.5 w-3.5 text-violet-300" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 text-xs font-medium text-zinc-300">
                    {skill.name}
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-1 flex-1 rounded-full",
                          i < skill.level
                            ? "bg-violet-400"
                            : "bg-white/[0.08]",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex gap-2 border-t border-white/[0.06] px-5 py-4">
          <Button
            variant="default"
            size="sm"
            className={cn(
              "w-full rounded-full",
              "bg-white text-black",
              "hover:bg-zinc-200",
              "transition-all duration-200",
              "active:scale-[0.98]",
            )}
          >
            <ExternalLink className="mr-2 h-3.5 w-3.5" />
            View Portfolio
          </Button>

          <Button
            variant="ghost"
            className={cn(
              "shrink-0 rounded-full",
              "border border-white/[0.06]",
              "bg-white/[0.025]",
              "px-3",
              "hover:bg-white/[0.06]",
            )}
          >
            <Share2 className="h-3.5 w-3.5 text-zinc-300" />
            <span className="ml-1.5 text-xs text-zinc-300">Share</span>
          </Button>
        </div>
      </div>
    </div>
  );
}