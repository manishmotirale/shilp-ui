"use client";

import { useState } from "react";
import {
  AlertCircle,
  Lock,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SecurityEvent {
  id: string;
  type: "login" | "device" | "password";
  title: string;
  description: string;
  time: string;
  icon: typeof Lock;
}

interface Alert19Props {
  title?: string;
  events?: SecurityEvent[];
  onReviewActivity?: () => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultEvents: SecurityEvent[] = [
  {
    id: "1",
    type: "login",
    title: "New login detected",
    description: "A new login was detected from Chrome on Windows.",
    time: "2 minutes ago",
    icon: Lock,
  },
  {
    id: "2",
    type: "device",
    title: "New device added",
    description: "A Windows device was added to your account.",
    time: "1 hour ago",
    icon: Smartphone,
  },
  {
    id: "3",
    type: "password",
    title: "Password updated",
    description: "Your account password was recently changed.",
    time: "Yesterday",
    icon: Lock,
  },
];

export default function Alert19({
  title = "Security activity",
  events = defaultEvents,
  onReviewActivity,
  onDismiss,
  className,
}: Alert19Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
        <div className="flex size-9 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/10">
          <ShieldCheck className="size-4.5 text-emerald-400" />
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-medium text-zinc-100">{title}</h3>
          <p className="mt-0.5 text-[11px] text-zinc-600">
            Review recent changes to your account.
          </p>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="flex size-7 items-center justify-center rounded-full text-zinc-600 transition hover:bg-white/[0.06] hover:text-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="space-y-2 p-4">
        {events.map((event) => {
          const Icon = event.icon;

          return (
            <div
              key={event.id}
              className="flex gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/[0.04] text-zinc-400">
                <Icon className="size-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  {event.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-zinc-600">
                  {event.description}
                </p>

                <p className="mt-1.5 text-[10px] uppercase tracking-[0.08em] text-zinc-700">
                  {event.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-3">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 text-xs text-red-400 transition hover:text-red-300 focus-visible:outline-none"
        >
          <AlertCircle className="size-3.5" />
          Wasn't you? Secure account
        </button>

        <button
          onClick={onReviewActivity}
          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/50"
        >
          Review activity
        </button>
      </div>
    </div>
  );
}