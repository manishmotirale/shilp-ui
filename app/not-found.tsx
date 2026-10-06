"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Grid2X2,
} from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        relative
        flex
        min-h-[80vh]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-white
        text-zinc-950
        dark:bg-zinc-950
        dark:text-zinc-50
      "
    >
      {/* Grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          dark:opacity-20
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
          [background-size:48px_48px]
          dark:[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)]
        "
      />

      {/* Center fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.72)_72%,#fff_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,0.65)_72%,#09090b_100%)]
        "
      />

      <div className="relative z-10 w-full max-w-4xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          {/* 404 construction */}
          <div className="relative">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-8 bg-zinc-400 dark:bg-zinc-600" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Error / 404
              </span>
            </div>

            <div className="relative select-none">
              <motion.div
                className="
                  text-[clamp(7rem,20vw,14rem)]
                  font-semibold
                  leading-[0.75]
                  tracking-[-0.09em]
                  text-zinc-100
                  dark:text-zinc-900
                "
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                404
              </motion.div>

              {/* Blueprint 404 */}
              <div className="absolute inset-0 flex items-center">
                <motion.div
                  className="
                    ml-2
                    h-px
                    w-[78%]
                    bg-zinc-950
                    dark:bg-zinc-100
                  "
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.7,
                  }}
                />
              </div>

              {/* Measurement label */}
              <motion.div
                className="
                  absolute
                  right-[8%]
                  top-[10%]
                  hidden
                  items-center
                  gap-2
                  sm:flex
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="h-px w-10 bg-zinc-300 dark:bg-zinc-700" />
                <span className="font-mono text-[9px] text-zinc-400">
                  0x404
                </span>
              </motion.div>
            </div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-zinc-200
                bg-zinc-50
                px-3
                py-1.5
                dark:border-zinc-800
                dark:bg-zinc-900
              "
            >
              <Compass className="h-3.5 w-3.5 text-zinc-500" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                Piece not found
              </span>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              This piece doesn't exist.
            </h1>

            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              The page you're looking for may have moved, been
              renamed, or never made it into the composition.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="
                  group
                  inline-flex
                  h-10
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-zinc-950
                  bg-zinc-950
                  px-4
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  hover:bg-zinc-800
                  dark:border-zinc-100
                  dark:bg-zinc-100
                  dark:text-zinc-950
                  dark:hover:bg-zinc-200
                "
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back home
              </Link>

              <Link
                href="/docs"
                className="
                  group
                  inline-flex
                  h-10
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-zinc-200
                  bg-white
                  px-4
                  text-sm
                  font-medium
                  text-zinc-700
                  transition-all
                  hover:border-zinc-300
                  hover:bg-zinc-50
                  hover:text-zinc-950
                  dark:border-zinc-800
                  dark:bg-zinc-950
                  dark:text-zinc-300
                  dark:hover:border-zinc-700
                  dark:hover:bg-zinc-900
                  dark:hover:text-zinc-50
                "
              >
                <Grid2X2 className="h-4 w-4" />
                Browse components
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom technical information */}
        <motion.div
          className="
            mt-20
            flex
            flex-col
            gap-4
            border-t
            border-zinc-200
            pt-5
            dark:border-zinc-800
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              Shilp UI
            </span>

            <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-800" />

            <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
              Craft · Compose · Create
            </span>
          </div>

          <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
            STATUS: PAGE_NOT_FOUND
          </span>
        </motion.div>
      </div>
    </main>
  );
}