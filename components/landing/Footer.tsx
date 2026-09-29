import Image from "next/image";
import Link from "next/link";

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

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src="/shilp-ui.gif"
                  alt="Shilp UI"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                  unoptimized
                />
              </div>

              <span className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                Shilp UI
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Beautifully crafted, accessible components for building modern web
              applications faster.
            </p>

            {/* GitHub */}
            <Link
              href="#"
              target="_blank"
              rel="noreferrer"
              className="
                mt-5 inline-flex items-center gap-2 rounded-lg
                border border-zinc-200
                px-3 py-2
                text-sm font-medium
                text-zinc-700
                transition-colors
                hover:bg-zinc-100
                hover:text-zinc-950
                dark:border-zinc-800
                dark:text-zinc-300
                dark:hover:bg-zinc-900
                dark:hover:text-zinc-50
              "
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Resources
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Documentation
                </Link>
              </li>

              <li>
                <Link
                  href="/components"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Components
                </Link>
              </li>

              <li>
                <Link
                  href="/blocks"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Blocks
                </Link>
              </li>

              <li>
                <Link
                  href="/examples"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              Community
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Twitter / X
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Discord
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="text-sm text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Shilp UI. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
