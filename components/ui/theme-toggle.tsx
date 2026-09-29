"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";

import { cn } from "@/lib/utils";

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current;

    if (!button) return;

    const nextTheme = isDark ? "light" : "dark";

    const { top, left, width, height } = button.getBoundingClientRect();

    const x = left + width / 2;
    const y = top + height / 2;

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;

    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;

    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y),
    );

    const applyTheme = () => {
      setTheme(nextTheme);
    };

    // Fallback for browsers that don't support View Transitions.
    if (typeof document.startViewTransition !== "function") {
      applyTheme();
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [isDark, duration, setTheme]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        `
        inline-flex
        h-9
        w-9
        items-center
        justify-center
        rounded-lg
        border
        border-transparent
        text-zinc-500
        transition-all
        duration-200
        hover:bg-zinc-100
        hover:text-zinc-950
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-zinc-400
        focus-visible:ring-offset-2
        focus-visible:ring-offset-white
        dark:text-zinc-400
        dark:hover:bg-zinc-900
        dark:hover:text-zinc-50
        dark:focus-visible:ring-zinc-600
        dark:focus-visible:ring-offset-zinc-950
        `,
        className,
      )}
      {...props}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )
      ) : (
        <Moon className="h-4 w-4 opacity-0" />
      )}

      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </button>
  );
};
