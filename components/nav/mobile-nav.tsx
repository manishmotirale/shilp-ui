"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/config/navigation";

interface MobileNavProps {
  sections: NavSection[];
  pathname: string;
  isExpanded: boolean;
  currentPage?: {
    title: string;
  };
  totalItems: number;
  onExpandToggle: () => void;
  onItemClick: () => void;
}

export function MobileNav({
  sections,
  pathname,
  isExpanded,
  currentPage,
  totalItems,
  onExpandToggle,
  onItemClick,
}: MobileNavProps) {
  const isActive = (item: NavSection["items"][number]) => {
    if (item.isComingSoon) {
      return false;
    }

    if (item.href === "/docs") {
      return pathname === "/docs" || pathname === "/docs/introduction";
    }

    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <div className="w-full md:hidden">
      <div
        className="
          overflow-hidden
          rounded-2xl
          border border-white/[0.08]
          bg-white/[0.035]
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
        "
      >
        {/* Mobile navigation trigger */}
        <button
          type="button"
          onClick={onExpandToggle}
          aria-expanded={isExpanded}
          className="
            flex
            w-full
            items-center
            justify-between
            gap-3
            px-4
            py-3.5
            text-left
            outline-none
            transition-colors
            duration-200
            hover:bg-white/[0.035]
            focus-visible:ring-1
            focus-visible:ring-inset
            focus-visible:ring-violet-400/50
          "
        >
          <span className="flex min-w-0 items-center gap-3">
            {/* Menu icon */}
            <span
              className="
                flex
                size-8
                shrink-0
                items-center
                justify-center
                rounded-xl
                border border-white/[0.08]
                bg-white/[0.035]
                text-zinc-400
              "
            >
              <Menu className="size-4" strokeWidth={1.8} />
            </span>

            {/* Current page */}
            <span className="min-w-0">
              <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-600">
                Documentation
              </span>

              <span className="mt-0.5 block truncate text-sm font-medium text-white">
                {currentPage?.title ?? "Navigation"}
              </span>
            </span>
          </span>

          <span className="flex shrink-0 items-center gap-2">
            {/* Item count */}
            {totalItems > 0 && (
              <span
                className="
                  hidden
                  rounded-full
                  border border-white/[0.07]
                  bg-white/[0.025]
                  px-2
                  py-1
                  text-[10px]
                  font-medium
                  tabular-nums
                  text-zinc-500
                  sm:inline-flex
                "
              >
                {totalItems}
              </span>
            )}

            {/* Expand icon */}
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-lg",
                "text-zinc-500 transition-all duration-200",
                isExpanded && "bg-white/[0.05] text-zinc-300",
              )}
            >
              <ChevronDown
                className={cn(
                  "size-4 transition-transform duration-300",
                  isExpanded && "rotate-180",
                )}
                strokeWidth={1.8}
              />
            </span>
          </span>
        </button>

        {/* Expanded navigation */}
        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300",
            isExpanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="border-t border-white/[0.06] px-2 pb-2 pt-3">
              <nav className="space-y-5">
                {sections.map((section, index) => (
                  <div
                    key={section.title}
                    className={cn(
                      index > 0 && "border-t border-white/[0.06] pt-5",
                    )}
                  >
                    {/* Section title */}
                    <div className="px-3 pb-2">
                      <h2
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-zinc-600
                        "
                      >
                        {section.title}
                      </h2>
                    </div>

                    {/* Section items */}
                    <div className="space-y-0.5">
                      {section.items.map((item) => {
                        const active = isActive(item);

                        return (
                          <Link
                            key={item.id}
                            href={item.isComingSoon ? "#" : item.href}
                            aria-disabled={item.isComingSoon}
                            onClick={(event) => {
                              if (item.isComingSoon) {
                                event.preventDefault();
                                return;
                              }

                              onItemClick();
                            }}
                            className={cn(
                              "group relative flex min-h-10",
                              "items-center justify-between",
                              "rounded-xl px-3 py-2.5",
                              "text-sm font-medium",
                              "outline-none",
                              "transition-all duration-200",
                              "focus-visible:ring-1",
                              "focus-visible:ring-violet-400/50",

                              item.isComingSoon
                                ? "cursor-not-allowed opacity-40"
                                : active
                                  ? "bg-white/[0.055] text-white"
                                  : "text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200",
                            )}
                          >
                            {/* Active indicator */}
                            {active && (
                              <span
                                className="
                                  absolute
                                  -left-px
                                  top-1/2
                                  h-5
                                  w-0.5
                                  -translate-y-1/2
                                  rounded-full
                                  bg-violet-400
                                  shadow-[0_0_12px_rgba(139,92,246,0.45)]
                                "
                              />
                            )}

                            {/* Title */}
                            <span className="flex min-w-0 items-center gap-2.5">
                              {active && (
                                <span
                                  className="
                                    size-1.5
                                    shrink-0
                                    rounded-full
                                    bg-violet-300
                                  "
                                />
                              )}

                              <span className="truncate">{item.title}</span>
                            </span>

                            {/* Metadata */}
                            <span className="ml-2 flex shrink-0 items-center gap-1.5">
                              {item.isNew && !active && (
                                <span
                                  className="
                                    rounded-full
                                    border border-violet-400/15
                                    bg-violet-500/[0.08]
                                    px-1.5
                                    py-0.5
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.08em]
                                    text-violet-300
                                  "
                                >
                                  New
                                </span>
                              )}

                              {item.isLab && !active && (
                                <span
                                  className="
                                    rounded-full
                                    border border-violet-400/15
                                    bg-violet-500/[0.06]
                                    px-1.5
                                    py-0.5
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.08em]
                                    text-violet-300/90
                                  "
                                >
                                  Lab
                                </span>
                              )}

                              {item.isComingSoon && (
                                <span
                                  className="
                                    rounded-full
                                    border border-white/[0.06]
                                    bg-white/[0.025]
                                    px-1.5
                                    py-0.5
                                    text-[9px]
                                    font-medium
                                    uppercase
                                    tracking-[0.08em]
                                    text-zinc-600
                                  "
                                >
                                  Soon
                                </span>
                              )}

                              {item.count !== undefined && (
                                <span
                                  className={cn(
                                    "text-xs tabular-nums",
                                    active ? "text-zinc-400" : "text-zinc-600",
                                  )}
                                >
                                  {item.count}
                                </span>
                              )}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
