"use client";

import * as React from "react";
import {
  ArrowUp,
  X,
  Image as ImageIcon,
  FileText,
  File,
  Plus,
  Paperclip,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AttachedFile {
  id: string;
  name: string;
  type: "image" | "document" | "other";
  size: string;
}

interface AIInput07Props {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string, files: AttachedFile[]) => void;
  onAttach?: () => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  defaultFiles?: AttachedFile[];
}

const FILE_TYPE_CONFIG = {
  image: {
    icon: ImageIcon,
    accent: "text-violet-400",
    background: "bg-violet-500/[0.08]",
    border: "border-violet-400/[0.14]",
  },
  document: {
    icon: FileText,
    accent: "text-zinc-300",
    background: "bg-white/[0.035]",
    border: "border-white/[0.08]",
  },
  other: {
    icon: File,
    accent: "text-zinc-500",
    background: "bg-white/[0.025]",
    border: "border-white/[0.07]",
  },
} as const;

export function AIInput07({
  value: controlledValue,
  onChange,
  onSubmit,
  onAttach,
  placeholder = "Describe what you'd like to do with these files...",
  disabled = false,
  className,
  defaultFiles = [
    {
      id: "1",
      name: "screenshot.png",
      type: "image",
      size: "2.4 MB",
    },
    {
      id: "2",
      name: "report.pdf",
      type: "document",
      size: "1.2 MB",
    },
  ],
}: AIInput07Props) {
  const [internalValue, setInternalValue] = React.useState("");
  const [files, setFiles] = React.useState<AttachedFile[]>(defaultFiles);
  const [isFocused, setIsFocused] = React.useState(false);

  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 58,
    maxHeight: 200,
  });

  const handleSubmit = () => {
    if ((!value.trim() && files.length === 0) || disabled) return;

    onSubmit?.(value, files);
    setValue("");
    setFiles([]);
    adjustHeight(true);
  };

  const removeFile = (id: string) => {
    setFiles((previous) =>
      previous.filter((file) => file.id !== id),
    );
  };

  const canSubmit = Boolean(value.trim() || files.length > 0);

  return (
    <div className={cn("mx-auto w-full max-w-2xl", className)}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.035]">
            <Sparkles className="h-3 w-3 text-violet-400" />
          </div>

          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
            File Workspace
          </span>
        </div>

        <span className="hidden text-[10px] text-zinc-700 sm:block">
          Analyze · Transform · Create
        </span>
      </div>

      {/* Main composer */}
      <div className="group relative">
        {/* Ambient glow */}
        <div
          className={cn(
            "pointer-events-none absolute -inset-px rounded-[21px]",
            "bg-gradient-to-r from-violet-500/20 via-white/10 to-violet-500/20",
            "blur-sm transition-opacity duration-500",
            isFocused ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-[20px]",
            "border border-white/[0.09]",
            "bg-[#09090b]/95",
            "backdrop-blur-xl",
            "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
            "transition-all duration-300",
            isFocused && [
              "border-white/[0.16]",
              "shadow-[0_22px_70px_rgba(0,0,0,0.42)]",
            ],
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {/* Top highlight */}
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-0 h-px w-1/2",
              "-translate-x-1/2",
              "bg-gradient-to-r from-transparent via-violet-400/50 to-transparent",
              "transition-opacity duration-500",
              isFocused ? "opacity-100" : "opacity-0",
            )}
          />

          {/* Attached files */}
          {files.length > 0 && (
            <div className="px-3.5 pt-3.5">
              <div className="mb-2 flex items-center gap-2">
                <Paperclip className="h-3 w-3 text-zinc-700" />

                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-700">
                  Attachments
                </span>

                <span className="h-px flex-1 bg-white/[0.05]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {files.map((file) => {
                  const config = FILE_TYPE_CONFIG[file.type];
                  const Icon = config.icon;

                  return (
                    <div
                      key={file.id}
                      className={cn(
                        "group/file flex min-w-0 items-center gap-2",
                        "rounded-xl border px-2 py-1.5",
                        config.background,
                        config.border,
                        "transition-all duration-200",
                        "hover:border-white/[0.14]",
                      )}
                    >
                      {/* File icon */}
                      <div
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
                          "border border-white/[0.06]",
                          "bg-black/20",
                          config.accent,
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </div>

                      {/* File information */}
                      <div className="min-w-0">
                        <p className="max-w-[130px] truncate text-[11px] font-medium text-zinc-300">
                          {file.name}
                        </p>

                        <p className="mt-0.5 text-[9px] text-zinc-700">
                          {file.size}
                        </p>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        disabled={disabled}
                        onClick={() => removeFile(file.id)}
                        aria-label={`Remove ${file.name}`}
                        className={cn(
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-md",
                          "text-zinc-700",
                          "transition-all duration-200",
                          "hover:bg-white/[0.06]",
                          "hover:text-zinc-300",
                          "active:scale-90",
                          "opacity-0 group-hover/file:opacity-100",
                        )}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
              "block w-full resize-none bg-transparent",
              "min-h-[58px] max-h-[200px]",
              "px-4 py-4",
              "text-sm leading-6 text-zinc-200",
              "placeholder:text-zinc-700",
              "outline-none border-0 ring-0",
              "focus:outline-none focus:ring-0",
            )}
          />

          {/* Divider */}
          <div className="mx-3 border-t border-white/[0.05]" />

          {/* Bottom toolbar */}
          <div className="flex items-center justify-between px-3 py-2.5">
            {/* Attach */}
            <button
              type="button"
              disabled={disabled}
              onClick={onAttach}
              className={cn(
                "group/attach flex h-8 items-center gap-2 rounded-lg px-2.5",
                "border border-white/[0.07]",
                "bg-white/[0.025]",
                "text-zinc-600",
                "transition-all duration-200",
                "hover:border-white/[0.12]",
                "hover:bg-white/[0.05]",
                "hover:text-zinc-300",
                "active:scale-95",
              )}
            >
              <Plus className="h-3.5 w-3.5 transition-transform duration-200 group-hover/attach:rotate-90" />

              <span className="text-[10px] font-medium">
                Attach files
              </span>
            </button>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {files.length > 0 && (
                <span className="hidden text-[10px] text-zinc-700 sm:block">
                  {files.length} file{files.length > 1 ? "s" : ""}
                </span>
              )}

              {value.length > 0 && (
                <span className="text-[10px] tabular-nums text-zinc-700">
                  {value.length}
                </span>
              )}

              {/* Send */}
              <button
                type="button"
                disabled={!canSubmit || disabled}
                onClick={handleSubmit}
                aria-label="Send"
                className={cn(
                  "group/send relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl",
                  "border transition-all duration-300",
                  canSubmit && !disabled
                    ? [
                        "border-white/[0.12]",
                        "bg-white",
                        "text-black",
                        "shadow-[0_5px_20px_rgba(255,255,255,0.08)]",
                        "hover:border-violet-300/50",
                        "hover:shadow-[0_5px_28px_rgba(139,92,246,0.25)]",
                        "active:scale-90",
                      ]
                    : [
                        "cursor-not-allowed",
                        "border-white/[0.05]",
                        "bg-white/[0.035]",
                        "text-zinc-700",
                      ],
                )}
              >
                {canSubmit && (
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-violet-200/30 to-transparent transition-transform duration-500 group-hover/send:translate-x-full" />
                )}

                <ArrowUp className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover/send:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Helper */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="text-[10px] text-zinc-700">
          Add files and describe what you need
        </span>

        <span className="h-1 w-1 rounded-full bg-zinc-800" />

        <span className="text-[10px] text-zinc-700">
          Enter to send
        </span>
      </div>
    </div>
  );
}