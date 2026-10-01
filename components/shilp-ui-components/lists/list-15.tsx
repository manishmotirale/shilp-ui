"use client";

import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  tags: string[];
}

interface List15Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    company: "Stripe",
    logo: "S",
    location: "Remote",
    salary: "$120k – $165k",
    type: "Full-time",
    posted: "2d ago",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: "2",
    title: "Product Designer",
    company: "Figma",
    logo: "F",
    location: "San Francisco, CA",
    salary: "$110k – $150k",
    type: "Full-time",
    posted: "4d ago",
    tags: ["Figma", "Design Systems", "UI"],
  },
  {
    id: "3",
    title: "Software Engineer",
    company: "Vercel",
    logo: "V",
    location: "Remote",
    salary: "$125k – $175k",
    type: "Full-time",
    posted: "1w ago",
    tags: ["React", "Node.js", "AWS"],
  },
];

export default function List15({
  items = defaultItems,
  className,
}: List15Props) {
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
              Opportunities
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Latest jobs
            </h3>
          </div>

          <BriefcaseBusiness className="h-5 w-5 text-zinc-600" />
        </div>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {items.map((item) => (
          <div
            key={item.id}
            className="group p-5 transition hover:bg-white/[0.025]"
          >
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm font-semibold text-zinc-300">
                {item.logo}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-100">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-500">
                      {item.company}
                    </p>
                  </div>

                  <span className="text-[10px] text-zinc-600">
                    {item.posted}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-zinc-600" />
                    {item.location}
                  </span>
                  <span>{item.salary}</span>
                  <span>{item.type}</span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white sm:flex"
                aria-label={`Open ${item.title}`}
              >
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}