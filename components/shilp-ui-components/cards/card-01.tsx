import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  Link as LinkIcon,
} from "lucide-react";

interface Card01Props {
  href: string;
  author?: {
    name?: string;
    username?: string;
    avatar?: string;
    timeAgo?: string;
  };
  content?: {
    text?: string;
    link?: {
      title?: string;
      description?: string;
      icon?: React.ReactNode;
    };
  };
  engagement?: {
    likes?: number;
    comments?: number;
    shares?: number;
    isLiked?: boolean;
    isBookmarked?: boolean;
  };
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  onBookmark?: () => void;
}

const defaultProps: Card01Props = {
  href: "",
  author: {
    name: "Dorian Baffier",
    username: "dorian_baffier",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYy_Pjw0UWMPSmVN7lL5yhod-0OhxDmeT4g&s",
    timeAgo: "2h ago",
  },
  content: {
    text: "Just launched Synapse UI! Check out the documentation and let me know what you think 🎨",
    link: {
      title: "Synapse UI Documentation",
      description: "A comprehensive guide to Synapse UI",
      icon: <LinkIcon className="size-4 text-violet-400" />,
    },
  },
  engagement: {
    likes: 128,
    comments: 32,
    shares: 24,
    isLiked: true,
    isBookmarked: false,
  },
};

export default function Card_01({
  href,
  author = defaultProps.author,
  content = defaultProps.content,
  engagement = defaultProps.engagement,
  onLike,
  onComment,
  onShare,
  onBookmark,
}: Card01Props) {
  return (
    <article
      className={cn(
        "group w-full max-w-2xl mx-auto overflow-hidden",
        "rounded-2xl border border-white/[0.08]",
        "bg-white/[0.025] backdrop-blur-xl",
        "shadow-[0_16px_50px_rgba(0,0,0,0.18)]",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-white/[0.14]",
        "hover:bg-white/[0.035]",
      )}
    >
      <a href={href} className="block">
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative shrink-0">
                <img
                  src={author?.avatar}
                  alt={author?.name || "Author"}
                  className={cn(
                    "size-10 rounded-full object-cover",
                    "border border-white/[0.10]",
                    "ring-4 ring-black/20",
                    "transition-transform duration-300",
                    "group-hover:scale-[1.03]",
                  )}
                />
                <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-[#09090b] bg-violet-400" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-sm font-medium tracking-tight text-zinc-100">
                  {author?.name}
                </h3>
                <p className="truncate text-xs text-zinc-500">
                  @{author?.username}
                  <span className="mx-1.5 text-zinc-700">·</span>
                  {author?.timeAgo}
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="More options"
              onClick={(e) => e.preventDefault()}
              className={cn(
                "shrink-0 rounded-full p-2",
                "text-zinc-500 transition-all duration-200",
                "hover:bg-white/[0.06] hover:text-zinc-200",
                "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
              )}
            >
              <MoreHorizontal className="size-4" />
            </button>
          </div>

          <p className="mt-5 text-sm leading-6 text-zinc-300">
            {content?.text}
          </p>

          {content?.link && (
            <div
              className={cn(
                "mt-5 overflow-hidden rounded-xl",
                "border border-white/[0.07]",
                "bg-black/20",
                "transition-all duration-300",
                "hover:border-violet-400/20 hover:bg-violet-500/[0.025]",
              )}
            >
              <div className="flex items-center gap-3.5 p-4">
                <div
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center",
                    "rounded-lg border border-white/[0.08]",
                    "bg-white/[0.04]",
                  )}
                >
                  {content.link.icon}
                </div>

                <div className="min-w-0">
                  <h4 className="truncate text-sm font-medium text-zinc-200">
                    {content.link.title}
                  </h4>
                  <p className="mt-0.5 truncate text-xs text-zinc-500">
                    {content.link.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </a>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-3">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onLike}
            aria-label="Like"
            className={cn(
              "group/action flex items-center gap-2 rounded-full px-3 py-2",
              "text-xs font-medium transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
              engagement?.isLiked
                ? "bg-violet-500/10 text-violet-300"
                : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-200",
            )}
          >
            <Heart
              className={cn(
                "size-4 transition-transform duration-200",
                "group-hover/action:scale-110",
                engagement?.isLiked && "fill-current",
              )}
            />
            <span>{engagement?.likes}</span>
          </button>

          <button
            type="button"
            onClick={onComment}
            aria-label="Comment"
            className={cn(
              "group/action flex items-center gap-2 rounded-full px-3 py-2",
              "text-xs font-medium text-zinc-500 transition-all duration-200",
              "hover:bg-white/[0.05] hover:text-zinc-200",
              "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
            )}
          >
            <MessageCircle className="size-4 transition-transform duration-200 group-hover/action:scale-110" />
            <span>{engagement?.comments}</span>
          </button>

          <button
            type="button"
            onClick={onShare}
            aria-label="Share"
            className={cn(
              "group/action flex items-center gap-2 rounded-full px-3 py-2",
              "text-xs font-medium text-zinc-500 transition-all duration-200",
              "hover:bg-white/[0.05] hover:text-zinc-200",
              "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
            )}
          >
            <Share2 className="size-4 transition-transform duration-200 group-hover/action:scale-110" />
            <span>{engagement?.shares}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onBookmark}
          aria-label="Bookmark"
          className={cn(
            "rounded-full p-2 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-violet-400/20",
            engagement?.isBookmarked
              ? "bg-violet-500/10 text-violet-300"
              : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-200",
          )}
        >
          <Bookmark
            className={cn(
              "size-4 transition-transform duration-200 hover:scale-110",
              engagement?.isBookmarked && "fill-current",
            )}
          />
        </button>
      </div>
    </article>
  );
}