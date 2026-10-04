"use client";

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, CheckCheck, Copy, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { copyComponent } from "@/lib/action";
import { cn } from "@/lib/utils";
import { OpenInV0Button } from "../open-in-v0-button";

interface PreviewContentProps {
  link: string;
  prePath: string;
  isBlock?: boolean;
}

const PARTICLES = [
  { x: -28, y: -34 },
  { x: 24, y: -42 },
  { x: -42, y: -18 },
  { x: 38, y: -22 },
  { x: -20, y: -48 },
  { x: 32, y: -52 },
];

export default function PreviewContent({
  link,
  prePath,
  isBlock = false,
}: PreviewContentProps) {
  const [isPending, startTransition] = useTransition();

  const [state, formAction] = useActionState(copyComponent, {
    error: "",
    content: "",
    success: false,
  });

  const [isCopied, setIsCopied] = useState(false);
  const [isTerminalCopied, setIsTerminalCopied] = useState(false);

  const terminalButtonRef = useRef<HTMLButtonElement>(null);
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  const getFileName = () => {
    const parts = link.split("/");
    return parts[parts.length - 1] || parts[0];
  };

  const getComponentName = () => {
    const parts = link.split("/");
    return parts[parts.length - 1] || parts[0];
  };

  const handleCopyClick = () => {
    const [folder, ...rest] = link.split("/");
    const filename = rest.join("/");

    startTransition(() => {
      const formData = new FormData();

      formData.append("folder", folder);
      formData.append("fileName", filename);

      formAction(formData);
    });
  };

  const handleTerminalClick = async () => {
    const componentName = getComponentName();

    const command = `npx shilp-ui@latest add ${componentName}`;

    try {
      await navigator.clipboard.writeText(command);

      setIsTerminalCopied(true);

      setTimeout(() => {
        setIsTerminalCopied(false);
      }, 1500);
    } catch {
      setIsTerminalCopied(false);
    }
  };

  const openInV0 = () => {
    return getFileName();
  };

  useEffect(() => {
    if (state.success && state.content) {
      navigator.clipboard.writeText(state.content);

      setIsCopied(true);

      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [state]);

  function SuccessParticles({
    buttonRef,
  }: {
    buttonRef: React.RefObject<HTMLButtonElement | null>;
  }) {
    const rect = buttonRef.current?.getBoundingClientRect();

    if (!rect) {
      return null;
    }

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    return (
      <AnimatePresence>
        {PARTICLES.map((particle, index) => (
          <motion.div
            key={index}
            className="
              pointer-events-none
              fixed
              z-[100]
              h-1
              w-1
              rounded-full
              bg-zinc-950
              dark:bg-zinc-50
            "
            style={{
              left: centerX,
              top: centerY,
            }}
            initial={{
              opacity: 1,
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [1, 1, 0],
              scale: [0, 1, 0.4],
              x: particle.x,
              y: particle.y,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.65,
              delay: index * 0.04,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    );
  }

  return (
    <>
      {/* Copy Success Animation */}
      {isCopied && <SuccessParticles buttonRef={copyButtonRef} />}

      {/* Terminal Success Animation */}
      {isTerminalCopied && <SuccessParticles buttonRef={terminalButtonRef} />}

      {/* Preview Toolbar */}
      <div className="relative mt-4 w-full">
        <div
          className="
            flex
            flex-col
            gap-3
            rounded-xl
            border
            border-zinc-200
            bg-white
            p-3
            dark:border-zinc-800
            dark:bg-zinc-950
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Live Preview */}
          <a
            href={`${prePath}/preview/${link}`}
            target="_blank"
            rel="noreferrer"
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-2
              text-sm
              font-medium
              text-zinc-700
              no-underline
              transition-colors
              hover:text-zinc-950
              dark:text-zinc-300
              dark:hover:text-zinc-50
            "
          >
            <span>Live Preview</span>

            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* V0 */}
            <OpenInV0Button name={openInV0()} />

            {/* CLI */}
            <Button
              ref={terminalButtonRef}
              type="button"
              onClick={handleTerminalClick}
              variant="outline"
              size="sm"
              className={cn(
                `
                  h-8
                  rounded-lg
                  border-zinc-200
                  bg-white
                  px-3
                  text-xs
                  font-medium
                  text-zinc-700
                  shadow-none
                  transition-all
                  hover:bg-zinc-100
                  hover:text-zinc-950
                  dark:border-zinc-800
                  dark:bg-zinc-950
                  dark:text-zinc-300
                  dark:hover:bg-zinc-900
                  dark:hover:text-zinc-50
                `,
                isTerminalCopied &&
                  "border-zinc-300 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900",
              )}
            >
              {isTerminalCopied ? (
                <CheckCheck className="mr-1.5 h-3.5 w-3.5" />
              ) : (
                <Terminal className="mr-1.5 h-3.5 w-3.5" />
              )}

              <span>
                {isTerminalCopied
                  ? "Copied"
                  : `npx shilp-ui add ${getFileName()}`}
              </span>
            </Button>

            {/* Copy */}
            {!isBlock && (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  handleCopyClick();
                }}
              >
                <Button
                  ref={copyButtonRef}
                  type="submit"
                  variant="outline"
                  size="sm"
                  disabled={isPending}
                  className={cn(
                    `
                      h-8
                      rounded-lg
                      border-zinc-950
                      bg-zinc-950
                      px-3
                      text-xs
                      font-medium
                      text-white
                      shadow-none
                      transition-all
                      hover:bg-zinc-800
                      hover:text-white
                      dark:border-zinc-100
                      dark:bg-zinc-100
                      dark:text-zinc-950
                      dark:hover:bg-zinc-200
                      dark:hover:text-zinc-950
                    `,
                    isPending && "cursor-wait opacity-60",
                  )}
                >
                  {isCopied ? (
                    <CheckCheck className="mr-1.5 h-3.5 w-3.5" />
                  ) : (
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                  )}

                  <span>
                    {isPending ? "Copying..." : isCopied ? "Copied" : "Copy"}
                  </span>
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
