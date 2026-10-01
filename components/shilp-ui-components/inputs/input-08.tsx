"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

const OTP_LENGTH = 6;

export default function Input_06() {
  const [code, setCode] = useState<string[]>(
    Array(OTP_LENGTH).fill(""),
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, OTP_LENGTH);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveIndex(index - 1);
    } else if (
      e.key === "ArrowRight" &&
      index < OTP_LENGTH - 1
    ) {
      inputRefs.current[index + 1]?.focus();
      setActiveIndex(index + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();

    const pastedData = e.clipboardData
      .getData("text/plain")
      .slice(0, OTP_LENGTH);

    if (!/^\d+$/.test(pastedData)) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }

    const newCode = [...code];

    pastedData.split("").forEach((digit, index) => {
      newCode[index] = digit;
    });

    setCode(newCode);

    const focusIndex = Math.min(
      pastedData.length,
      OTP_LENGTH - 1,
    );

    inputRefs.current[focusIndex]?.focus();
    setActiveIndex(focusIndex);
  };

  const setInputRef = useCallback(
    (index: number) => (el: HTMLInputElement | null) => {
      inputRefs.current[index] = el;
    },
    [],
  );

  return (
    <div className="w-full max-w-sm space-y-3">
      <fieldset
        className={cn(
          "flex flex-col gap-3",
          shake && "animate-shake",
        )}
      >
        <legend className="text-xs font-medium text-zinc-300">
          Verification Code
        </legend>

        <div className="flex items-center justify-start gap-2">
          {Array.from({ length: OTP_LENGTH }).map((_, index) => (
            <div
              key={`otp-input-${index}`}
              className="relative"
            >
              <input
                id={`otp-input-${index}`}
                ref={setInputRef(index)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={code[index]}
                onChange={(e) =>
                  handleChange(index, e.target.value)
                }
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                onFocus={() => setActiveIndex(index)}
                aria-label={`Verification digit ${index + 1}`}
                className={cn(
                  "h-14 w-12 rounded-xl border text-center",
                  "bg-white/[0.025] backdrop-blur-xl",
                  "text-lg font-semibold text-white",
                  "border-white/[0.08]",
                  "transition-all duration-200",
                  "focus:outline-none",
                  "focus:ring-2 focus:ring-violet-500/10",
                  activeIndex === index &&
                    "border-violet-400/60 bg-violet-400/[0.035]",
                )}
              />

              {index !== OTP_LENGTH - 1 && (
                <div className="absolute -right-1.5 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-zinc-700" />
              )}
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}