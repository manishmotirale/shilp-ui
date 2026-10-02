"use client";

import * as React from "react";
import {
  ArrowUp,
  FileText,
  Code,
  Image as ImageIcon,
  Brain,
  Wand2,
  Sparkles,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { motion } from "framer-motion";

const QUICK_ACTIONS = [
  {
    id: "write",
    icon: FileText,
    label: "Write",
    description: "Create content",
  },
  {
    id: "code",
    icon: Code,
    label: "Code",
    description: "Build something",
  },
  {
    id: "image",
    icon: ImageIcon,
    label: "Image",
    description: "Generate visuals",
  },
  {
    id: "analyze",
    icon: Brain,
    label: "Analyze",
    description: "Understand data",
  },
  {
    id: "improve",
    icon: Wand2,
    label: "Improve",
    description: "Refine your idea",
  },
] as const;

interface AIInput04Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  onActionClick?: (action: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput04({
  value: controlledValue,
  onChange,
  onSubmit,
  onActionClick,
  placeholder = "What would you like to create?",
  disabled = false,
  className,
}: AIInput04Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [activeAction, setActiveAction] = React.useState<string | null>(null);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if (!value.trim() || disabled) return;

    onSubmit?.(value);
    setValue("");
    setActiveAction(null);
    adjustHeight(true);
  };

  const handleActionClick = (id: string) => {
    setActiveAction((current) => (current === id ? null : id));
    onActionClick?.(id);
  };

  const currentAction = QUICK_ACTIONS.find(
    (action) => action.id === activeAction,
  );

  return (
    <div className={cn("mx-auto w-full max-w-3xl", className)}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
            Shilp AI
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          Press Enter to send
        </span>
      </div>

      {/* Quick Actions */}
      <div className="mb-3 flex flex-wrap gap-2">
        {QUICK_ACTIONS.map((action) => {
          const Icon = action.icon;
          const isActive = activeAction === action.id;

          return (
            <MotionButton
              key={action.id}
              type="button"
              disabled={disabled}
              onClick={() => handleActionClick(action.id)}
              isActive={isActive}
              icon={<Icon className="h-3.5 w-3.5" />}
              label={action.label}
            />
          );
        })}
      </div>

      {/* Main Input */}
      <div
        className={cn(
          "group relative overflow-hidden rounded-[20px]",
          "border border-white/[0.09]",
          "bg-[#09090b]/95",
          "shadow-[0_20px_70px_rgba(0,0,0,0.3)]",
          "backdrop-blur-xl",
          "transition-all duration-300",
          "focus-within:border-white/[0.15]",
          "focus-within:shadow-[0_20px_80px_rgba(0,0,0,0.4)]",
          disabled && "opacity-50",
        )}
      >
        {/* Top highlight */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />

        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-600/[0.06] blur-3xl opacity-0 transition-opacity duration-500 group-focus-within:opacity-100" />

        {/* Active Action */}
        {currentAction && (
          <div className="relative flex items-center justify-between px-4 pt-3">
            <div className="flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.06] px-2.5 py-1">
              <currentAction.icon className="h-3 w-3 text-violet-400" />

              <span className="text-[10px] font-medium text-violet-300">
                {currentAction.label} mode
              </span>
            </div>

            <button
              type="button"
              onClick={() => setActiveAction(null)}
              className="group/clear flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] text-zinc-600 transition-colors hover:bg-white/[0.04] hover:text-zinc-300"
            >
              <X className="h-3 w-3" />
              Clear
            </button>
          </div>
        )}

        {/* Textarea */}
        <textarea
          ref={textareaRef}
          placeholder={
            currentAction ? `${currentAction.label} something...` : placeholder
          }
          disabled={disabled}
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            adjustHeight();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              handleSubmit();
            }
          }}
          rows={1}
          className={cn(
            "relative block w-full resize-none bg-transparent",
            "min-h-[58px] max-h-[200px]",
            "py-4 pl-5 pr-16",
            "text-sm leading-6 text-zinc-200",
            "placeholder:text-zinc-700",
            "outline-none",
            "border-0",
            "ring-0",
            "focus:outline-none",
            "focus:ring-0",
            currentAction && "pt-3",
          )}
        />

        {/* Bottom Controls */}
        <div className="relative flex items-center justify-between border-t border-white/[0.05] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-[10px] text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
              Ready
            </span>

            {value.length > 0 && (
              <span className="text-[10px] text-zinc-700">
                {value.length} characters
              </span>
            )}
          </div>

          {/* Send Button */}
          <button
            type="button"
            disabled={!value.trim() || disabled}
            onClick={handleSubmit}
            aria-label="Send"
            className={cn(
              "group/send relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
              "border transition-all duration-300",
              value.trim()
                ? [
                    "border-white/[0.12]",
                    "bg-white",
                    "text-black",
                    "shadow-[0_5px_25px_rgba(255,255,255,0.08)]",
                    "hover:border-violet-300/50",
                    "hover:shadow-[0_5px_30px_rgba(139,92,246,0.25)]",
                    "active:scale-95",
                  ]
                : [
                    "cursor-not-allowed",
                    "border-white/[0.05]",
                    "bg-white/[0.035]",
                    "text-zinc-700",
                  ],
            )}
          >
            {value.trim() && (
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-violet-200/30 to-transparent -translate-x-full transition-transform duration-500 group-hover/send:translate-x-full" />
            )}

            <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/send:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   QUICK ACTION BUTTON
------------------------------------------------------- */

interface MotionButtonProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  disabled: boolean;
  onClick: () => void;
  type: "button";
}

function MotionButton({
  icon,
  label,
  isActive,
  disabled,
  onClick,
  type,
}: MotionButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group/action relative flex items-center gap-2 overflow-hidden rounded-full",
        "border px-3 py-1.5",
        "text-[11px] font-medium",
        "transition-all duration-300",
        isActive
          ? [
              "border-violet-400/20",
              "bg-violet-400/[0.08]",
              "text-violet-300",
              "shadow-[0_5px_25px_rgba(139,92,246,0.08)]",
            ]
          : [
              "border-white/[0.07]",
              "bg-white/[0.025]",
              "text-zinc-600",
              "hover:border-white/[0.13]",
              "hover:bg-white/[0.05]",
              "hover:text-zinc-300",
            ],
      )}
    >
      <span
        className={cn(
          "transition-colors duration-300",
          isActive ? "text-violet-400" : "text-zinc-600",
        )}
      >
        {icon}
      </span>

      <span>{label}</span>

      {isActive && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-300/[0.06] to-transparent" />
      )}
    </motion.button>
  );
}
