"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-60 dark:opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(161,161,170,0.13) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(161,161,170,0.13) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(circle at center, black 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 20%, transparent 78%)",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-300/20 blur-[100px] dark:bg-zinc-700/10"
        animate={{
          scale: [0.8, 1, 0.85],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center px-6">
        {/* Construction area */}
        <div className="relative h-64 w-full max-w-md">
          {/* Outer blueprint box */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 border border-zinc-200 dark:border-zinc-800"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          />

          {/* Corner marks */}
          <motion.div
            className="absolute left-[calc(50%-96px)] top-[calc(50%-96px)] h-5 w-5 border-l border-t border-zinc-500 dark:border-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />

          <motion.div
            className="absolute right-[calc(50%-96px)] top-[calc(50%-96px)] h-5 w-5 border-r border-t border-zinc-500 dark:border-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          <motion.div
            className="absolute bottom-[calc(50%-96px)] left-[calc(50%-96px)] h-5 w-5 border-b border-l border-zinc-500 dark:border-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />

          <motion.div
            className="absolute bottom-[calc(50%-96px)] right-[calc(50%-96px)] h-5 w-5 border-b border-r border-zinc-500 dark:border-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />

          {/* Horizontal measurement */}
          <motion.div
            className="absolute left-1/2 top-[calc(50%-118px)] flex w-44 -translate-x-1/2 items-center justify-between text-[8px] font-mono tracking-widest text-zinc-400"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 176 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span>0</span>
            <span>240px</span>
            <span>0</span>
          </motion.div>

          {/* Vertical measurement */}
          <motion.div
            className="absolute left-[calc(50%-118px)] top-1/2 flex h-44 -translate-y-1/2 flex-col items-center justify-between text-[8px] font-mono tracking-widest text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span>0</span>
            <span className="[writing-mode:vertical-rl]">240px</span>
            <span>0</span>
          </motion.div>

          {/* Floating construction pieces */}
          <motion.div
            className="absolute left-[20%] top-[30%] h-8 w-8 border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900"
            initial={{ opacity: 0, x: -35, y: 20, rotate: -15 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />

          <motion.div
            className="absolute right-[19%] top-[32%] h-5 w-12 rounded-full border border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-900"
            initial={{ opacity: 0, x: 35, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Main Shilp mark */}
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[26px] border border-zinc-300 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            initial={{
              opacity: 0,
              scale: 0.6,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* S */}
            <motion.span
              className="text-4xl font-semibold tracking-[-0.08em]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.4 }}
            >
              S
            </motion.span>

            {/* Inner construction ring */}
            <motion.div
              className="absolute inset-3 rounded-[20px] border border-dashed border-zinc-200 dark:border-zinc-700"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Scan line */}
          <motion.div
            className="absolute left-1/2 top-8 h-48 w-px bg-gradient-to-b from-transparent via-zinc-400 to-transparent dark:via-zinc-500"
            initial={{ y: -80, opacity: 0 }}
            animate={{
              y: 80,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Small coordinates */}
          <motion.div
            className="absolute bottom-7 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.25em] text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            X 120 · Y 120
          </motion.div>
        </div>

        {/* Text */}
        <motion.div
          className="mt-2 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-950 dark:bg-zinc-100" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-500">
              Shilp UI
            </span>
          </div>

          <h1 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
            Crafting your experience.
          </h1>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Precision in every component.
          </p>
        </motion.div>

        {/* Progress */}
        <motion.div
          className="mt-8 w-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-400">
            <span>Building interface</span>
            <span>100%</span>
          </div>

          <div className="mt-2 h-[2px] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <motion.div
              className="h-full bg-zinc-950 dark:bg-zinc-100"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Bottom philosophy */}
        <motion.div
          className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span>Craft</span>
          <span className="h-px w-5 bg-zinc-300 dark:bg-zinc-700" />
          <span>Compose</span>
          <span className="h-px w-5 bg-zinc-300 dark:bg-zinc-700" />
          <span>Create</span>
        </motion.div>
      </div>
    </main>
  );
}
