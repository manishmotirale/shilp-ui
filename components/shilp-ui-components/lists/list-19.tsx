"use client";

import { useState } from "react";
import {
  Archive,
  Mail,
  MoreHorizontal,
  Reply,
  Star,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  avatar: string;
  unread: boolean;
  starred?: boolean;
}

interface List19Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "1",
    sender: "Alex Morgan",
    subject: "Your project update",
    preview: "Hey, just wanted to share the latest progress...",
    time: "10:42 AM",
    avatar: "https://i.pravatar.cc/100?img=11",
    unread: true,
    starred: true,
  },
  {
    id: "2",
    sender: "Design Team",
    subject: "New design system",
    preview: "We've published the latest components and guidelines...",
    time: "9:18 AM",
    avatar: "https://i.pravatar.cc/100?img=5",
    unread: true,
  },
  {
    id: "3",
    sender: "GitHub",
    subject: "New activity on your repository",
    preview: "There has been new activity in your repositories...",
    time: "Yesterday",
    avatar: "https://i.pravatar.cc/100?img=8",
    unread: false,
  },
];

export default function List19({
  items = defaultItems,
  className,
}: List19Props) {
  const [emails, setEmails] = useState(items);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectEmail = (id: string) => {
    setSelectedId(id);

    setEmails((current) =>
      current.map((email) =>
        email.id === id ? { ...email, unread: false } : email,
      ),
    );
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
            Inbox
          </p>
          <h3 className="mt-1 text-lg font-semibold text-white">
            Messages
          </h3>
        </div>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.05] hover:text-white"
          aria-label="More options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {emails.map((email) => {
          const selected = selectedId === email.id;

          return (
            <div
              key={email.id}
              className={cn(
                "group flex cursor-pointer items-center gap-3 px-5 py-4 transition",
                selected
                  ? "bg-violet-500/[0.06]"
                  : "hover:bg-white/[0.025]",
              )}
              onClick={() => selectEmail(email.id)}
            >
              <div className="relative shrink-0">
                <img
                  src={email.avatar}
                  alt={email.sender}
                  className="h-10 w-10 rounded-full border border-white/[0.08] object-cover"
                />
                {email.unread && (
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#09090B] bg-violet-400" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p
                    className={cn(
                      "truncate text-sm",
                      email.unread
                        ? "font-semibold text-white"
                        : "font-medium text-zinc-400",
                    )}
                  >
                    {email.sender}
                  </p>

                  <span className="shrink-0 text-[10px] text-zinc-600">
                    {email.time}
                  </span>
                </div>

                <p
                  className={cn(
                    "mt-0.5 truncate text-xs",
                    email.unread ? "text-zinc-300" : "text-zinc-600",
                  )}
                >
                  {email.subject}
                </p>

                <p className="mt-1 truncate text-xs text-zinc-700">
                  {email.preview}
                </p>
              </div>

              <div className="hidden items-center gap-0.5 opacity-0 transition group-hover:opacity-100 sm:flex">
                <button
                  type="button"
                  onClick={(event) => event.stopPropagation()}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-white/[0.05] hover:text-white"
                  aria-label="Reply"
                >
                  <Reply className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(event) => event.stopPropagation()}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-white/[0.05] hover:text-white"
                  aria-label="Archive"
                >
                  <Archive className="h-3.5 w-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(event) => event.stopPropagation()}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-zinc-600 hover:bg-rose-500/[0.08] hover:text-rose-300"
                  aria-label="Delete"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>

              <Star
                className={cn(
                  "h-3.5 w-3.5 shrink-0 transition",
                  email.starred
                    ? "fill-violet-300 text-violet-300"
                    : "text-zinc-700",
                )}
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 border-t border-white/[0.06] px-5 py-3 text-xs text-zinc-600">
        <Mail className="h-3.5 w-3.5" />
        {emails.filter((email) => email.unread).length} unread
      </div>
    </div>
  );
}