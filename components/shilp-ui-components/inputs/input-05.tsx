"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface NumericInputProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
}

export default function Input_04({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 50,
}: NumericInputProps) {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const percentage =
    max === min ? 0 : ((value - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number.parseFloat(e.target.value);

    if (
      !Number.isNaN(newValue) &&
      newValue >= min &&
      newValue <= max
    ) {
      setValue(newValue);
    }
  };

  const incrementValue = () => {
    setValue(Math.min(value + step, max));
  };

  const decrementValue = () => {
    setValue(Math.max(value - step, min));
  };

  return (
    <div className="w-full max-w-xs">
      <div
        className={cn(
          "flex h-11 items-center overflow-hidden rounded-xl border",
          "bg-white/[0.025] backdrop-blur-xl",
          "transition-all duration-200",
          isFocused
            ? "border-violet-400/50 ring-2 ring-violet-500/10"
            : "border-white/[0.08] hover:border-white/[0.12]",
        )}
      >
        <button
          type="button"
          onClick={decrementValue}
          disabled={value <= min}
          aria-label="Decrement value"
          className={cn(
            "flex h-full w-11 items-center justify-center",
            "border-r border-white/[0.06]",
            "text-lg text-zinc-500 transition-colors",
            "hover:bg-white/[0.05] hover:text-zinc-200",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          −
        </button>

        <input
          type="number"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          min={min}
          max={max}
          step={step}
          className={cn(
            "w-full bg-transparent text-center",
            "text-sm font-medium text-white",
            "focus:outline-none",
            "[-moz-appearance:textfield]",
            "[&::-webkit-inner-spin-button]:appearance-none",
            "[&::-webkit-outer-spin-button]:appearance-none",
          )}
        />

        <button
          type="button"
          onClick={incrementValue}
          disabled={value >= max}
          aria-label="Increment value"
          className={cn(
            "flex h-full w-11 items-center justify-center",
            "border-l border-white/[0.06]",
            "text-lg text-zinc-500 transition-colors",
            "hover:bg-white/[0.05] hover:text-zinc-200",
            "disabled:cursor-not-allowed disabled:opacity-30",
          )}
        >
          +
        </button>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className="h-full rounded-full bg-violet-400 transition-all duration-200"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-1.5 flex justify-between text-[10px] text-zinc-600">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}