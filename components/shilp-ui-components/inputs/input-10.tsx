"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft } from "lucide-react";

const moodStates = [
  { value: 0, label: "Not Happy", color: "#EF4444" },
  { value: 50, label: "Good", color: "#F59E0B" },
  { value: 100, label: "Very Good", color: "#10B981" },
] as const;

function EmotionFace({ value }: { value: number }) {
  const getFaceConfig = () => {
    if (value === 0) {
      return {
        color: "#EF4444",
        eyes: {
          left: "M6 10 Q8 8 10 10",
          right: "M14 10 Q16 8 18 10",
        },
        mouth: "M8 16 Q12 13 16 16",
      };
    }

    if (value === 50) {
      return {
        color: "#F59E0B",
        eyes: {
          left: "M6 9 L10 9",
          right: "M14 9 L18 9",
        },
        mouth: "M8 16 L16 16",
      };
    }

    return {
      color: "#10B981",
      eyes: {
        left: "M6 10 Q8 12 10 10",
        right: "M14 10 Q16 12 18 10",
      },
      mouth: "M8 16 Q12 19 16 16",
    };
  };

  const face = getFaceConfig();

  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-300 ease-in-out"
    >
      <title>Face Mood</title>

      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={face.color}
        strokeOpacity="0.12"
        strokeWidth="0.7"
      />

      <path
        d={face.eyes.left}
        stroke={face.color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d={face.eyes.right}
        stroke={face.color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d={face.mouth}
        stroke={face.color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Input_10() {
  const [value, setValue] = useState(100);

  const adjustValue = (direction: "left" | "right") => {
    const currentIndex = moodStates.findIndex(
      (state) => state.value === value,
    );

    const newIndex =
      direction === "left"
        ? Math.max(0, currentIndex - 1)
        : Math.min(
            moodStates.length - 1,
            currentIndex + 1,
          );

    setValue(moodStates[newIndex].value);
  };

  const currentMood =
    moodStates.find((state) => state.value === value) ??
    moodStates[1];

  return (
    <div className="w-full max-w-sm">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border",
          "border-white/[0.08]",
          "bg-white/[0.025]",
          "p-5",
          "backdrop-blur-xl",
          "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        )}
      >
        <div className="mb-3 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-600">
            Mood
          </p>

          <p
            className="mt-1 text-sm font-medium transition-colors duration-300"
            style={{ color: currentMood.color }}
          >
            {currentMood.label}
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-5 py-3">
          <button
            type="button"
            onClick={() => adjustValue("left")}
            disabled={value === 0}
            aria-label="Previous mood"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-white/[0.06] bg-white/[0.025]",
              "text-zinc-500 transition-all duration-200",
              "hover:bg-white/[0.06] hover:text-zinc-200",
              "disabled:cursor-not-allowed disabled:opacity-20",
            )}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            className="rounded-full"
            style={{
              filter: `drop-shadow(0 0 20px ${currentMood.color}18)`,
            }}
          >
            <EmotionFace value={value} />
          </div>

          <button
            type="button"
            onClick={() => adjustValue("right")}
            disabled={value === 100}
            aria-label="Next mood"
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full",
              "border border-white/[0.06] bg-white/[0.025]",
              "text-zinc-500 transition-all duration-200",
              "hover:bg-white/[0.06] hover:text-zinc-200",
              "disabled:cursor-not-allowed disabled:opacity-20",
            )}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-2 flex justify-center gap-1.5">
          {moodStates.map((state) => (
            <button
              key={state.value}
              type="button"
              onClick={() => setValue(state.value)}
              aria-label={state.label}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                value === state.value
                  ? "w-6"
                  : "w-1.5 bg-white/[0.10]",
              )}
              style={
                value === state.value
                  ? { backgroundColor: state.color }
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}