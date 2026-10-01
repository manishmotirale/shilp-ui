"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { X, Check } from "lucide-react";

interface SimpleInputProps {
  label?: string;
  placeholder?: string;
  error?: string;
  success?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  type?: "text" | "email" | "password" | "search";
}

export default function Input_01({
  label = "Label",
  placeholder = "Type something...",
  error,
  success,
  onChange,
  onClear,
  type = "text",
}: SimpleInputProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setValue("");
    onClear?.();
    inputRef.current?.focus();
  };

  return (
    <div className="w-full max-w-xs space-y-2">
      <label
        htmlFor={label}
        className="text-xs font-medium text-zinc-300"
      >
        {label}
      </label>

      <div className="relative">
        <input
          ref={inputRef}
          id={label}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange?.(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={cn(
            "h-11 w-full rounded-xl border px-3.5 pr-10",
            "bg-white/[0.025] backdrop-blur-xl",
            "text-sm text-white",
            "placeholder:text-zinc-600",
            "transition-all duration-200",
            "focus:outline-none",
            error
              ? "border-red-400/40 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/10"
              : success
                ? "border-emerald-400/40 focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/10"
                : cn(
                    "border-white/[0.08]",
                    "hover:border-white/[0.12]",
                    "focus:border-violet-400/50",
                    "focus:ring-2 focus:ring-violet-500/10",
                  ),
            isFocused && !error && !success && "bg-white/[0.035]",
          )}
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear input"
            className={cn(
              "absolute right-2.5 top-1/2 -translate-y-1/2",
              "flex h-7 w-7 items-center justify-center rounded-lg",
              "text-zinc-600 transition-colors",
              "hover:bg-white/[0.06] hover:text-zinc-300",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/30",
            )}
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}

        <div
          className={cn(
            "absolute -right-5 top-1/2 -translate-y-1/2",
            "transition-opacity duration-200",
            !error && !success && "opacity-0",
          )}
        >
          {error ? (
            <X className="h-4 w-4 text-red-400" />
          ) : success ? (
            <Check className="h-4 w-4 text-emerald-400" />
          ) : null}
        </div>
      </div>

      {(error || success) && (
        <p
          className={cn(
            "text-xs",
            error ? "text-red-400" : "text-emerald-400",
          )}
        >
          {error || success}
        </p>
      )}
    </div>
  );
}