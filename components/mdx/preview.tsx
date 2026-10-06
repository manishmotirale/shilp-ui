import { cn } from "@/lib/utils";
import PreviewContent from "./preview-content";

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
  isBlock?: boolean;
}

const prePath = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://ui.shilp.com";

export function Preview({
  children,
  className = "",
  link,
  useIframe = false,
  compact = false,
  comment = [],
  isBlock = false,
  height = "600px",
}: PreviewProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      {/* Preview Header */}
      <PreviewContent link={link} prePath={prePath} isBlock={isBlock} />

      {/* Preview Area */}
      {useIframe ? (
        <div className="my-4 w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="relative w-full overflow-hidden" style={{ height }}>
            <iframe
              title={`Preview of ${link}`}
              src={`${prePath}/preview/${link}`}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            `
              relative my-4 flex w-full
              items-center justify-center
              overflow-hidden
              rounded-2xl
              border border-zinc-200
              bg-white
              p-3
              dark:border-zinc-800
              dark:bg-zinc-950
              not-prose
            `,
            compact ? "min-h-[100px] md:p-4" : "min-h-[400px] md:p-8",
            isBlock && "md:p-0",
          )}
        >
          {/* Subtle Preview Grid */}
          {!compact && !isBlock && (
            <div
              className="
                pointer-events-none
                absolute inset-0
                bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
                bg-[size:32px_32px]
                opacity-30
                dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
                dark:opacity-20
              "
            />
          )}

          {/* Component */}
          <div className="relative z-10 w-full">{children}</div>
        </div>
      )}

      {/* Comments / Notes */}
      {comment.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {comment.map((text, index) => (
            <div
              key={`${text}-${index}`}
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-zinc-200
                bg-zinc-50
                px-3
                py-1.5
                text-xs
                font-medium
                text-zinc-600
                transition-colors
                hover:bg-zinc-100
                hover:text-zinc-900
                dark:border-zinc-800
                dark:bg-zinc-900/50
                dark:text-zinc-400
                dark:hover:bg-zinc-900
                dark:hover:text-zinc-200
              "
            >
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
