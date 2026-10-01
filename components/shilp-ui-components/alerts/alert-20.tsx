"use client";

import { useState, type FormEvent } from "react";
import {
  Check,
  Search,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  online: boolean;
}

interface Alert20Props {
  title?: string;
  description?: string;
  members?: TeamMember[];
  onInvite?: (email: string) => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Morgan",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/100?img=11",
    role: "Owner",
    online: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/100?img=47",
    role: "Editor",
    online: true,
  },
  {
    id: "3",
    name: "Mike Ross",
    email: "mike@example.com",
    avatar: "https://i.pravatar.cc/100?img=12",
    role: "Viewer",
    online: false,
  },
];

export default function Alert20({
  title = "Team members",
  description = "Invite people to collaborate in your workspace.",
  members = defaultMembers,
  onInvite,
  onDismiss,
  className,
}: Alert20Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [email, setEmail] = useState("");
  const [isInviting, setIsInviting] = useState(false);
  const [inviteSent, setInviteSent] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMembers = members.filter((member) => {
    const query = searchQuery.toLowerCase();

    return (
      member.name.toLowerCase().includes(query) ||
      member.email.toLowerCase().includes(query)
    );
  });

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleInvite = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || isInviting) return;

    setIsInviting(true);

    setTimeout(() => {
      onInvite?.(email);
      setIsInviting(false);
      setInviteSent(true);

      setTimeout(() => {
        setInviteSent(false);
        setEmail("");
      }, 2000);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_24px_70px_rgba(0,0,0,0.5)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="flex items-start gap-4 border-b border-white/[0.06] p-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/10">
          <Users className="size-5 text-violet-300" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {description}
              </p>
            </div>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss"
              className="flex size-7 shrink-0 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-5">
        <form onSubmit={handleInvite}>
          <div className="flex gap-2">
            <div className="relative min-w-0 flex-1">
              <UserPlus className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                className={cn(
                  "h-10 w-full rounded-xl border border-white/[0.08]",
                  "bg-white/[0.025] pl-9 pr-3",
                  "text-sm text-zinc-200 placeholder:text-zinc-700",
                  "transition-all duration-200",
                  "focus:border-violet-400/30 focus:bg-white/[0.04]",
                  "focus:outline-none focus:ring-2 focus:ring-violet-400/10",
                )}
              />
            </div>

            <button
              type="submit"
              disabled={isInviting || !email.trim()}
              className={cn(
                "inline-flex h-10 shrink-0 items-center gap-2 rounded-full px-4",
                "text-xs font-medium",
                "transition-all duration-200",
                inviteSent
                  ? "bg-emerald-400/10 text-emerald-400"
                  : "bg-white text-black hover:bg-zinc-200",
                "disabled:cursor-not-allowed disabled:opacity-40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50",
              )}
            >
              {inviteSent ? (
                <>
                  <Check className="size-3.5" />
                  Sent
                </>
              ) : (
                <>
                  <UserPlus className="size-3.5" />
                  {isInviting ? "Inviting..." : "Invite"}
                </>
              )}
            </button>
          </div>
        </form>

        <div className="relative mt-5">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search members..."
            className="h-9 w-full rounded-xl border border-white/[0.06] bg-white/[0.02] pl-9 pr-3 text-xs text-zinc-300 placeholder:text-zinc-700 transition focus:border-violet-400/30 focus:outline-none focus:ring-2 focus:ring-violet-400/10"
          />
        </div>

        <div className="mt-4 space-y-1">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-white/[0.025]"
            >
              <div className="relative shrink-0">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="size-8 rounded-full border border-white/[0.08] object-cover"
                />

                <span
                  className={cn(
                    "absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-[#0C0C0F]",
                    member.online ? "bg-emerald-400" : "bg-zinc-700",
                  )}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-200">
                  {member.name}
                </p>
                <p className="truncate text-[11px] text-zinc-600">
                  {member.email}
                </p>
              </div>

              <span
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                  member.role === "Owner"
                    ? "border-violet-400/15 bg-violet-400/10 text-violet-300"
                    : member.role === "Editor"
                      ? "border-white/[0.08] bg-white/[0.035] text-zinc-400"
                      : "border-white/[0.06] text-zinc-600",
                )}
              >
                {member.role}
              </span>
            </div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="py-8 text-center">
              <p className="text-xs text-zinc-600">No members found.</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3">
        <span className="text-[11px] text-zinc-600">
          {members.length} member{members.length === 1 ? "" : "s"}
        </span>

        <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-700">
          Workspace
        </span>
      </div>
    </div>
  );
}