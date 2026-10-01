import Image from "next/image";
import Link from "next/link";

import { AnimatedThemeToggler } from "../ui/theme-toggle";

function GitHubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.031 1.532 1.031.892 1.53 2.341 1.088 2.91.832.091-.647.349-1.088.635-1.339-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.002 10.002 0 0 0 22 12C22 6.477 17.523 2 12 2Z"
      />
    </svg>
  );
}

function Header() {
  return (
    <>
      {/* Top Promo Bar */}
      <div className="w-full border-b border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
        <Link
          href="/docs"
          className="group flex items-center justify-center gap-3 px-4 py-2 text-sm"
        >
          <span className="font-medium tracking-tight text-zinc-600 dark:text-zinc-400">
            Explore beautifully crafted components
          </span>

          <div
            className="
              relative inline-flex items-center gap-2
              rounded-lg
              bg-zinc-950
              px-3 py-1
              text-xs font-medium
              text-white
              shadow-sm
              transition-all duration-300
              group-hover:scale-105
              dark:bg-white
              dark:text-zinc-950
            "
          >
            <span>Explore Shilp UI</span>
            <span>→</span>
          </div>
        </Link>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-transparent">
        <div className="flex justify-center px-3 py-2">
          <div
            className="
              flex w-full max-w-6xl
              items-center justify-between
              rounded-2xl
              border border-zinc-200/70
              bg-white/70
              px-5 py-3
              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              backdrop-blur-md
              transition-all duration-300

              dark:border-zinc-800/70
              dark:bg-zinc-950/70
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]
            "
          >
            {/* Left Section */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href="/" className="group flex items-center gap-2.5">
                <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg">
                  {/* Light Mode Logo */}
                  <Image
                    src="/shilp-logo-light.gif"
                    alt="Shilp UI"
                    width={32}
                    height={32}
                    unoptimized
                    priority
                    className="
                      block
                      h-8 w-8
                      object-contain
                      dark:hidden
                    "
                  />

                  {/* Dark Mode Logo */}
                  <Image
                    src="/shilp-logo-dark.gif"
                    alt="Shilp UI"
                    width={32}
                    height={32}
                    unoptimized
                    className="
                      hidden
                      h-8 w-8
                      object-contain
                      dark:block
                    "
                  />
                </div>

                <span
                  className="
                    hidden
                    font-semibold
                    tracking-tight
                    text-zinc-950
                    sm:block
                    dark:text-zinc-50
                  "
                >
                  Shilp UI
                </span>
              </Link>

              {/* Divider */}
              <div className="hidden h-5 w-px bg-zinc-200 sm:block dark:bg-zinc-800" />

              {/* Navigation */}
              <nav className="hidden items-center gap-5 sm:flex">
                <Link
                  href="/docs"
                  className="
                    text-sm font-medium
                    text-zinc-600
                    transition-colors
                    hover:text-zinc-950
                    dark:text-zinc-400
                    dark:hover:text-zinc-50
                  "
                >
                  Docs
                </Link>

                <Link
                  href="/components"
                  className="
                    text-sm font-medium
                    text-zinc-600
                    transition-colors
                    hover:text-zinc-950
                    dark:text-zinc-400
                    dark:hover:text-zinc-50
                  "
                >
                  Components
                </Link>

                <Link
                  href="/blocks"
                  className="
                    text-sm font-medium
                    text-zinc-600
                    transition-colors
                    hover:text-zinc-950
                    dark:text-zinc-400
                    dark:hover:text-zinc-50
                  "
                >
                  Blocks
                </Link>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <Link
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  hidden
                  rounded-lg
                  p-2
                  text-zinc-500
                  transition-all
                  hover:bg-zinc-100
                  hover:text-zinc-950
                  sm:flex
                  dark:text-zinc-400
                  dark:hover:bg-zinc-900
                  dark:hover:text-zinc-50
                "
              >
                <GitHubIcon className="h-4 w-4" />
              </Link>

              {/* Divider */}
              <div className="hidden h-5 w-px bg-zinc-200 sm:block dark:bg-zinc-800" />

              {/* Theme Toggle */}
              <AnimatedThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
