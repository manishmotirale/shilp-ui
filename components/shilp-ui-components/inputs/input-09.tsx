"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const MAX_TEAM_SIZE = 4;

const animations = {
  container: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -12,
      transition: { duration: 0.2 },
    },
  },
  avatar: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.15 },
    },
  },
} as const;

const avatarUrls = [
  "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-01-n0x8HFv8EUetf9z6ht0wScJKoTHqf8.png",
  "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-02-albo9B0tWOSLXCVZh9rX9KFxXIVWMr.png",
  "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-03-JateJIUhtd3PXynaMG9TDWQ55j5AVP.png",
  "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/avatar-04-uuYHWIRvVPi01gEt6NwnGyjqLeeZhz.png",
] as const;

export default function Input_09() {
  const [peopleCount, setPeopleCount] = useState(1);
  const [isVibrating, setIsVibrating] = useState(false);

  function triggerVibration() {
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 300);
  }

  function handleIncrement(e: React.MouseEvent) {
    e.preventDefault();

    if (peopleCount < MAX_TEAM_SIZE) {
      setPeopleCount(peopleCount + 1);
    } else {
      triggerVibration();
    }
  }

  function handleDecrement(e: React.MouseEvent) {
    e.preventDefault();

    if (peopleCount > 1) {
      setPeopleCount(peopleCount - 1);
    } else {
      triggerVibration();
    }
  }

  function renderAvatars() {
    return Array.from({ length: peopleCount }, (_, i) => (
      <motion.div
        key={i}
        variants={animations.avatar}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex items-center justify-center"
        style={{
          zIndex: peopleCount - i,
          marginLeft: i === 0 ? 0 : -20,
        }}
      >
        <div className="rounded-full border-2 border-[#09090b]">
          <Image
            src={avatarUrls[i % avatarUrls.length]}
            width={72}
            height={72}
            alt={`Team member ${i + 1}`}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      </motion.div>
    ));
  }

  return (
    <motion.div
      variants={animations.container}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex w-full flex-col items-center justify-center gap-7"
    >
      <div className="flex h-20 w-full justify-center">
        <AnimatePresence>{renderAvatars()}</AnimatePresence>
      </div>

      <motion.div
        initial={{ x: 0 }}
        animate={
          isVibrating
            ? {
                x: [0, -5, 5, -5, 5, 0],
                transition: { duration: 0.3 },
              }
            : { x: 0 }
        }
        className="flex items-center gap-5"
      >
        <button
          type="button"
          onClick={handleDecrement}
          aria-label="Decrease team size"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-xl text-zinc-400 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white active:scale-95"
        >
          −
        </button>

        <motion.span
          key={peopleCount}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-8 text-center text-2xl font-semibold tracking-tight text-white"
        >
          {peopleCount}
        </motion.span>

        <button
          type="button"
          onClick={handleIncrement}
          aria-label="Increase team size"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/[0.07] text-xl text-violet-300 transition-all duration-200 hover:border-violet-400/30 hover:bg-violet-400/[0.12] active:scale-95"
        >
          +
        </button>
      </motion.div>

      <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-600">
        Team size · {MAX_TEAM_SIZE} max
      </p>
    </motion.div>
  );
}