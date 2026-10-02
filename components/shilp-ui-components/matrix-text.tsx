"use client";

import { useEffect, useState } from "react";

interface MatrixTextProps {
  text?: string;
  className?: string;
}

const chars = "01{}[]<>/\\$#@*";

export default function MatrixText({
  text = "SHILP",
  className = "",
}: MatrixTextProps) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const timer = window.setInterval(() => {
      frame++;
      setDisplay(
        text
          .split("")
          .map((char, i) =>
            frame < i * 2 + 5
              ? chars[Math.floor(Math.random() * chars.length)]
              : char
          )
          .join("")
      );
      if (frame > text.length * 2 + 8) {
        window.clearInterval(timer);
        setDisplay(text);
      }
    }, 55);
    return () => window.clearInterval(timer);
  }, [text]);

  return (
    <div className={`font-mono text-5xl font-semibold tracking-[0.18em] text-violet-300 ${className}`}>
      {display}
    </div>
  );
}
