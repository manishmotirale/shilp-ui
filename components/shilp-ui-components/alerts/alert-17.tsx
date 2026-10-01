"use client";

import { useState } from "react";
import { Check, Rocket, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface OnboardingStep {
  id: string;
  title: string;
  completed: boolean;
}

interface Alert17Props {
  title?: string;
  description?: string;
  steps?: OnboardingStep[];
  onStepClick?: (id: string) => void;
  onDismiss?: () => void;
  onSkip?: () => void;
  className?: string;
}

const defaultSteps: OnboardingStep[] = [
  { id: "1", title: "Create your profile", completed: true },
  { id: "2", title: "Add your first project", completed: true },
  { id: "3", title: "Invite your team", completed: false },
  { id: "4", title: "Customize your workspace", completed: false },
];

export default function Alert17({
  title = "Complete your setup",
  description = "Finish these steps to get the most out of your workspace.",
  steps = defaultSteps,
  onStepClick,
  onDismiss,
  onSkip,
  className,
}: Alert17Props) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [localSteps, setLocalSteps] = useState(steps);

  const completedCount = localSteps.filter((step) => step.completed).length;
  const progress = localSteps.length
    ? (completedCount / localSteps.length) * 100
    : 0;

  const handleDismiss = () => {
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 200);
  };

  const handleStepClick = (id: string) => {
    setLocalSteps((current) =>
      current.map((step) =>
        step.id === id
          ? { ...step, completed: !step.completed }
          : step,
      ),
    );

    onStepClick?.(id);
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#0C0C0F] backdrop-blur-xl",
        "shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
        "transition-all duration-200",
        isExiting && "translate-y-2 opacity-0",
        className,
      )}
    >
      <div className="p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/10">
            <Rocket className="size-5 text-violet-300" />
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

        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] text-zinc-600">
              {completedCount} of {localSteps.length} completed
            </span>

            <span className="text-[11px] font-medium text-violet-300">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
            <div
              className="h-full rounded-full bg-violet-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 space-y-1">
          {localSteps.map((step) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(step.id)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/40"
            >
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full border transition",
                  step.completed
                    ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                    : "border-white/[0.1] bg-white/[0.02] text-transparent",
                )}
              >
                <Check className="size-3.5" />
              </span>

              <span
                className={cn(
                  "text-sm transition",
                  step.completed
                    ? "text-zinc-500 line-through"
                    : "text-zinc-300",
                )}
              >
                {step.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <button
            onClick={onSkip}
            className="text-xs text-zinc-600 transition hover:text-zinc-300 focus-visible:outline-none"
          >
            Skip onboarding
          </button>

          <span className="text-[10px] uppercase tracking-[0.12em] text-zinc-700">
            Setup
          </span>
        </div>
      </div>
    </div>
  );
}