import Link from "next/link";
import { cn } from "@/lib/utils";
import type { NavSection } from "@/config/navigation";

interface DesktopNavProps {
  sections: NavSection[];
  pathname: string;
}

export function DesktopNav({ sections, pathname }: DesktopNavProps) {
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
    <div className="hidden md:block w-full z-40">
      <div
        className="
          rounded-[28px]
          border border-white/[0.08]
          bg-white/[0.035]
          p-2
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all duration-300
          hover:border-white/[0.12]
          hover:bg-white/[0.045]
        "
      >
        {sections.map((section, index) => (
          <div key={section.title} className={cn(index > 0 && "mt-6")}>
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

            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item);

                return (
                  <Link
                    key={item.id}
                    href={item.isComingSoon ? "#" : item.href}
                    onClick={(e) => {
                      if (item.isComingSoon) {
                        e.preventDefault();
                      }
                    }}
                    className={cn(
                      "group relative flex items-center justify-between",
                      "rounded-xl px-3 py-2",
                      "text-sm font-medium",
                      "transition-all duration-200",
                      "outline-none",
                      "focus-visible:ring-1",
                      "focus-visible:ring-violet-400/50",

                      item.isComingSoon
                        ? "cursor-not-allowed opacity-40"
                        : active
                          ? "bg-white/[0.055] text-white"
                          : "text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200",
                    )}
                  >
                    {active && (
                      <span
                        className="
                          absolute
                          -left-px
                          top-1/2
                          h-4
                          w-0.5
                          -translate-y-1/2
                          rounded-full
                          bg-violet-400
                          shadow-[0_0_12px_rgba(139,92,246,0.45)]
                        "
                      />
                    )}

                    <span className="flex min-w-0 items-center gap-2">
                      {active && (
                        <span
                          className="
                            h-1
                            w-1
                            shrink-0
                            rounded-full
                            bg-violet-300
                          "
                        />
                      )}

                      <span className="truncate">{item.title}</span>
                    </span>

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
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
