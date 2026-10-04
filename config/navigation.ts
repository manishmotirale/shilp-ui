export interface NavItem {
  id: string;
  title: string;
  href: string;
  description?: string;
  count?: number | string;
  isComingSoon?: boolean;
  isNew?: boolean;
  isLab?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        id: "introduction",
        title: "Introduction",
        href: "/docs",
        description: "Learn what Shilp UI is and how to use it.",
      },
      {
        id: "installation",
        title: "Installation",
        href: "/docs/installation",
        description: "Install and configure Shilp UI in your project.",
      },
      {
        id: "theming",
        title: "Theming",
        href: "/docs/theming",
        description: "Customize colors, typography, spacing, and themes.",
      },
    ],
  },

  {
    title: "Foundations",
    items: [
      {
        id: "colors",
        title: "Colors",
        href: "/docs/foundations/colors",
        description: "The Shilp UI color system and design tokens.",
      },
      {
        id: "typography",
        title: "Typography",
        href: "/docs/foundations/typography",
        description: "Typography guidelines and type styles.",
      },
      {
        id: "icons",
        title: "Icons",
        href: "/docs/foundations/icons",
        description: "Icon usage and visual guidelines.",
      },
    ],
  },

  {
    title: "Components",
    items: [
      {
        id: "ai-input",
        title: "AI Input",
        href: "/docs/components/ai-input",
        description: "Inputs and interfaces for AI-powered experiences.",
        count: 16,
      },
      {
        id: "alert",
        title: "Alert",
        href: "/docs/components/alert",
        description: "Communicate important information and status.",
        count: 7,
      },
      {
        id: "button",
        title: "Button",
        href: "/docs/components/button",
        description: "Actions and interactive controls.",
        count: 10,
      },
      {
        id: "card",
        title: "Card",
        href: "/docs/components/card",
        description: "Flexible surfaces for displaying content.",
        count: 7,
      },
      {
        id: "faq",
        title: "FAQ",
        href: "/docs/components/faq",
        description: "Expandable question and answer interfaces.",
        count: 4,
      },
      {
        id: "input",
        title: "Input",
        href: "/docs/components/input",
        description: "Form inputs and data entry components.",
        count: 10,
      },
      {
        id: "list",
        title: "List",
        href: "/docs/components/list",
        description: "Structured content and collection layouts.",
        count: 6,
      },
      {
        id: "pricing",
        title: "Pricing",
        href: "/docs/components/pricing",
        description: "Pricing tables and subscription interfaces.",
        count: 4,
        isNew: true,
      },
      {
        id: "profile",
        title: "Profile",
        href: "/docs/components/profile",
        description: "User profiles and account information.",
        count: 5,
        isNew: true,
      },
      {
        id: "text",
        title: "Text",
        href: "/docs/components/text",
        description: "Typography and animated text components.",
        count: 6,
        isNew: true,
      },
    ],
  },

  {
    title: "Hooks",
    items: [
      {
        id: "use-auto-resize-textarea",
        title: "useAutoResizeTextarea",
        href: "/docs/hooks/useAutoResizeTextarea",
        description: "Automatically resize a textarea based on its content.",
      },
    ],
  },

  {
    title: "Blocks",
    items: [
      {
        id: "block-01",
        title: "Block 01",
        href: "/docs/blocks/block-01",
        description: "A complete interface composition built with Shilp UI.",
        isLab: true,
      },
    ],
  },

  {
    title: "Resources",
    items: [
      {
        id: "examples",
        title: "Examples",
        href: "/examples",
        description: "Explore complete interfaces built with Shilp UI.",
      },
      {
        id: "templates",
        title: "Templates",
        href: "/templates",
        description: "Ready-to-use layouts for modern applications.",
        isComingSoon: true,
      },
      {
        id: "changelog",
        title: "Changelog",
        href: "/changelog",
        description: "See what's new and what has changed in Shilp UI.",
      },
    ],
  },
];