"use client";

import {
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface List13Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    name: "Olivia Chen",
    role: "CEO",
    company: "TechFlow",
    avatar:
      "https://i.pravatar.cc/150?img=47",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "2",
    name: "Marcus Johnson",
    role: "CTO",
    company: "TechFlow",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "3",
    name: "Emma Williams",
    role: "Head of Design",
    company: "TechFlow",
    avatar:
      "https://i.pravatar.cc/150?img=32",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

export default function List13({
  items = defaultItems,
  className,
}: List13Props) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          People
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          Team
        </h3>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.025]"
          >
            <div className="relative shrink-0">
              <img
                src={item.avatar}
                alt={item.name}
                className="h-11 w-11 rounded-full border border-white/[0.10] object-cover"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#09090B] bg-violet-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-100">
                {item.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-zinc-500">
                {item.role} · {item.company}
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              {item.social?.linkedin && (
                <a
                  href={item.social.linkedin}
                  aria-label={`${item.name} LinkedIn`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              )}

              {item.social?.github && (
                <a
                  href={item.social.github}
                  aria-label={`${item.name} GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}

              {item.social?.twitter && (
                <a
                  href={item.social.twitter}
                  aria-label={`${item.name} Twitter`}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}