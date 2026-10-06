import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5">
        <Image
          src="/shilp-logo-light.gif"
          alt="Shilp UI"
          width={28}
          height={28}
          unoptimized
          className="block dark:hidden"
        />

        <Image
          src="/shilp-logo-dark.gif"
          alt="Shilp UI"
          width={28}
          height={28}
          unoptimized
          className="hidden dark:block"
        />

        <span className="font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Shilp UI
        </span>
      </div>
    ),
    url: "/",
  },

  links: [
    {
      type: "main",
      text: "Home",
      url: "/",
    },
    {
      type: "main",
      text: "Docs",
      url: "/docs",
    },
    {
      type: "main",
      text: "Components",
      url: "/docs/components",
    },
  ],
};
