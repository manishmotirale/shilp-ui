"use client";

import type React from "react";
import {
  useState,
  useEffect,
  useRef,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  Send,
  BarChart2,
  Video,
  PlaneTakeoff,
  AudioLines,
  LayoutGrid,
  Command,
  Settings,
  FileText,
  Calendar,
  Mail,
  MessageSquare,
  Globe,
  Zap,
  Sparkles,
  Palette,
  Bookmark,
  ArrowUpRight,
  Clock3,
  Pin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  shortcut?: string;
  category?: string;
  tags?: string[];
  color?: string;
  isNew?: boolean;
  isPinned?: boolean;
  execute?: () => void;
}

interface ActionCategory {
  name: string;
  actions: Action[];
}

interface SearchResult {
  categories: ActionCategory[];
  recentActions: Action[];
  suggestedActions: Action[];
}

const allActions: Action[] = [
  {
    id: "1",
    label: "Book tickets",
    icon: <PlaneTakeoff className="size-4" />,
    description: "Find and book travel tickets",
    shortcut: "⌘B",
    category: "Travel",
    tags: ["booking", "travel", "tickets"],
    color: "#8B5CF6",
  },
  {
    id: "2",
    label: "Summarize document",
    icon: <BarChart2 className="size-4" />,
    description: "AI-powered document summary",
    shortcut: "⌘S",
    category: "AI Tools",
    tags: ["ai", "summary", "document"],
    color: "#A78BFA",
    isNew: true,
  },
  {
    id: "3",
    label: "Screen Studio",
    icon: <Video className="size-4" />,
    description: "Record and edit screen captures",
    shortcut: "⌘R",
    category: "Media",
    tags: ["video", "recording", "screen"],
    color: "#8B5CF6",
  },
  {
    id: "4",
    label: "Talk to Assistant",
    icon: <AudioLines className="size-4" />,
    description: "Voice-enabled AI assistant",
    shortcut: "⌘T",
    category: "AI Tools",
    tags: ["voice", "ai", "assistant"],
    color: "#A78BFA",
    isPinned: true,
  },
  {
    id: "5",
    label: "Component Library",
    icon: <LayoutGrid className="size-4" />,
    description: "Browse UI component collection",
    shortcut: "⌘L",
    category: "Design",
    tags: ["ui", "components", "design"],
    color: "#8B5CF6",
  },
  {
    id: "6",
    label: "System Settings",
    icon: <Settings className="size-4" />,
    description: "Configure system preferences",
    shortcut: "⌘,",
    category: "System",
    tags: ["settings", "preferences", "config"],
    color: "#71717A",
  },
  {
    id: "7",
    label: "Create Document",
    icon: <FileText className="size-4" />,
    description: "Create a new document",
    shortcut: "⌘N",
    category: "Productivity",
    tags: ["document", "create", "new"],
    color: "#8B5CF6",
  },
  {
    id: "8",
    label: "Schedule Meeting",
    icon: <Calendar className="size-4" />,
    description: "Add event to calendar",
    shortcut: "⌘M",
    category: "Productivity",
    tags: ["calendar", "meeting", "schedule"],
    color: "#A78BFA",
    isNew: true,
  },
  {
    id: "9",
    label: "Compose Email",
    icon: <Mail className="size-4" />,
    description: "Write a new email",
    shortcut: "⌘E",
    category: "Communication",
    tags: ["email", "compose", "write"],
    color: "#8B5CF6",
  },
  {
    id: "10",
    label: "Start Chat",
    icon: <MessageSquare className="size-4" />,
    description: "Begin a new conversation",
    shortcut: "⌘C",
    category: "Communication",
    tags: ["chat", "message", "conversation"],
    color: "#A78BFA",
  },
  {
    id: "11",
    label: "Browse Internet",
    icon: <Globe className="size-4" />,
    description: "Open web browser",
    shortcut: "⌘I",
    category: "Web",
    tags: ["browser", "internet", "web"],
    color: "#8B5CF6",
  },
  {
    id: "12",
    label: "Quick Actions",
    icon: <Zap className="size-4" />,
    description: "Access frequently used tools",
    shortcut: "⌘Q",
    category: "System",
    tags: ["quick", "actions", "tools"],
    color: "#A78BFA",
    isPinned: true,
  },
  {
    id: "13",
    label: "Generate Image",
    icon: <Sparkles className="size-4" />,
    description: "AI image generation",
    shortcut: "⌘G",
    category: "AI Tools",
    tags: ["ai", "image", "generate"],
    color: "#8B5CF6",
    isNew: true,
  },
  {
    id: "14",
    label: "Theme Settings",
    icon: <Palette className="size-4" />,
    description: "Customize appearance",
    shortcut: "⌘P",
    category: "Design",
    tags: ["theme", "appearance", "customize"],
    color: "#A78BFA",
  },
  {
    id: "15",
    label: "Saved Items",
    icon: <Bookmark className="size-4" />,
    description: "View bookmarked content",
    shortcut: "⌘D",
    category: "Productivity",
    tags: ["saved", "bookmarks", "favorites"],
    color: "#8B5CF6",
  },
];

const groupActionsByCategory = (
  actions: Action[],
): ActionCategory[] => {
  const categories: Record<string, Action[]> = {};

  actions.forEach((action) => {
    const category = action.category || "Uncategorized";

    if (!categories[category]) {
      categories[category] = [];
    }

    categories[category].push(action);
  });

  return Object.entries(categories).map(([name, actions]) => ({
    name,
    actions,
  }));
};

export default function ActionSearchBar({
  defaultOpen = false,
  className,
}: {
  defaultOpen?: boolean;
  className?: string;
}) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(defaultOpen);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(
    null,
  );

  const [recentActions] = useState<Action[]>(
    allActions.filter((action) => action.isPinned).slice(0, 3),
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const getSearchResults = (): SearchResult => {
    if (!query.trim()) {
      return {
        categories: groupActionsByCategory(allActions),
        recentActions,
        suggestedActions: allActions
          .filter((action) => action.isNew)
          .slice(0, 3),
      };
    }

    const normalizedQuery = query.toLowerCase().trim();

    const filteredActions = allActions.filter((action) => {
      const searchableText = [
        action.label.toLowerCase(),
        action.description?.toLowerCase() || "",
        ...(action.tags || []).map((tag) => tag.toLowerCase()),
      ].join(" ");

      return searchableText.includes(normalizedQuery);
    });

    if (activeCategory) {
      const categoryActions = filteredActions.filter(
        (action) => action.category === activeCategory,
      );

      return {
        categories: [
          {
            name: activeCategory,
            actions: categoryActions,
          },
        ],
        recentActions: [],
        suggestedActions: [],
      };
    }

    return {
      categories: groupActionsByCategory(filteredActions),
      recentActions: [],
      suggestedActions: [],
    };
  };

  const searchResults = getSearchResults();

  const getAllVisibleActions = (): Action[] => {
    const visible: Action[] = [];

    if (searchResults.recentActions.length > 0) {
      visible.push(...searchResults.recentActions);
    }

    if (searchResults.suggestedActions.length > 0) {
      visible.push(...searchResults.suggestedActions);
    }

    searchResults.categories.forEach((category) => {
      visible.push(...category.actions);
    });

    return visible;
  };

  const visibleActions = getAllVisibleActions();

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, activeCategory]);

  const executeAction = (action: Action) => {
    console.log(`Executing action: ${action.label}`);

    if (action.execute) {
      action.execute();
    }

    setIsFocused(false);
    setQuery("");
    inputRef.current?.blur();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        if (visibleActions.length > 0) {
          setSelectedIndex(
            (previous) =>
              (previous + 1) % visibleActions.length,
          );
        }

        break;

      case "ArrowUp":
        event.preventDefault();

        if (visibleActions.length > 0) {
          setSelectedIndex(
            (previous) =>
              (previous - 1 + visibleActions.length) %
              visibleActions.length,
          );
        }

        break;

      case "Enter":
        event.preventDefault();

        if (visibleActions[selectedIndex]) {
          executeAction(visibleActions[selectedIndex]);
        }

        break;

      case "Escape":
        event.preventDefault();
        setIsFocused(false);
        inputRef.current?.blur();
        break;
    }
  };

  useEffect(() => {
    if (!resultsRef.current) return;

    const selectedElement =
      resultsRef.current.querySelector(
        `[data-index="${selectedIndex}"]`,
      );

    if (selectedElement) {
      selectedElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleGlobalKeyDown = (event: globalThis.KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        inputRef.current?.focus();
        setIsFocused(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleGlobalKeyDown,
      );
    };
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory((previous) =>
      previous === category ? null : category,
    );
  };

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -8,
      scale: 0.985,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      height: "auto",
      transition: {
        duration: 0.22,
        staggerChildren: 0.025,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.985,
      height: 0,
      transition: {
        duration: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.18,
      },
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: {
        duration: 0.1,
      },
    },
  };

  const renderAction = (
    action: Action,
    index: number,
  ) => {
    const isSelected = selectedIndex === index;

    return (
      <motion.li
        key={action.id}
        data-index={index}
        variants={itemVariants}
        onMouseEnter={() => setSelectedIndex(index)}
        onClick={() => executeAction(action)}
        className={cn(
          "group mx-1 my-0.5 flex cursor-pointer items-center justify-between gap-4 rounded-xl px-3 py-2.5",
          "transition-colors duration-150",
          isSelected
            ? "bg-white/[0.07]"
            : "hover:bg-white/[0.045]",
        )}
      >
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-lg",
              "border border-white/[0.07] bg-white/[0.035]",
              "transition-colors duration-150",
              isSelected &&
                "border-violet-400/20 bg-violet-400/[0.08]",
            )}
            style={{
              color: action.color || "#A1A1AA",
            }}
          >
            {action.icon}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="truncate text-sm font-medium text-zinc-200 group-hover:text-white">
                {action.label}
              </span>

              {action.isNew && (
                <span className="rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-violet-300">
                  New
                </span>
              )}
            </div>

            <p className="mt-0.5 truncate text-xs text-zinc-600 group-hover:text-zinc-500">
              {action.description}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {action.isPinned && (
            <Pin className="hidden size-3.5 text-violet-400/60 sm:block" />
          )}

          {action.shortcut && (
            <kbd
              className={cn(
                "rounded-md border px-1.5 py-1 font-mono text-[10px]",
                "border-white/[0.07] bg-black/20 text-zinc-600",
                isSelected && "text-zinc-400",
              )}
            >
              {action.shortcut}
            </kbd>
          )}

          <ArrowUpRight
            className={cn(
              "hidden size-3.5 transition-all duration-150 sm:block",
              isSelected
                ? "translate-x-0 text-zinc-300 opacity-100"
                : "text-zinc-700 opacity-0 group-hover:opacity-100",
            )}
          />
        </div>
      </motion.li>
    );
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-2xl",
        className,
      )}
    >
      <div className="relative">
        {/* Search header */}
        <div className="relative z-20">
          <div className="mb-2 flex items-center justify-between px-1">
            <label
              htmlFor="action-search"
              className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-600"
            >
              Command Search
            </label>

            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="text-[10px] text-zinc-700">
                Open
              </span>

              <kbd className="rounded-md border border-white/[0.07] bg-white/[0.025] px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                ⌘K
              </kbd>
            </div>
          </div>

          <div
            className={cn(
              "group relative flex items-center rounded-2xl",
              "border border-white/[0.08] bg-[#0c0c0f]/95",
              "shadow-[0_12px_40px_rgba(0,0,0,0.28)]",
              "backdrop-blur-xl",
              "transition-all duration-200",
              isFocused &&
                "border-violet-400/25 shadow-[0_12px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(139,92,246,0.06)]",
            )}
          >
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Command
                className={cn(
                  "size-4 transition-colors",
                  isFocused
                    ? "text-violet-300"
                    : "text-zinc-600",
                )}
              />
            </div>

            <Input
              ref={inputRef}
              id="action-search"
              type="text"
              placeholder="Search components, commands..."
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() =>
                setTimeout(
                  () => setIsFocused(false),
                  200,
                )
              }
              onKeyDown={handleKeyDown}
              className={cn(
                "h-12 border-0 bg-transparent pl-11 pr-12",
                "text-sm text-white shadow-none",
                "placeholder:text-zinc-600",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
              )}
            />

            <div className="pointer-events-none absolute right-4 top-1/2 flex size-4 -translate-y-1/2 items-center justify-center">
              <AnimatePresence mode="wait">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.14 }}
                  >
                    <Send className="size-4 text-violet-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0.7,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.14 }}
                  >
                    <Search className="size-4 text-zinc-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Results */}
        <div
          ref={resultsRef}
          className="relative z-10 w-full"
        >
          <AnimatePresence>
            {isFocused && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={cn(
                  "mt-2 max-h-[70vh] overflow-y-auto",
                  "overflow-x-hidden rounded-2xl",
                  "border border-white/[0.08]",
                  "bg-[#0a0a0c]/98",
                  "shadow-[0_24px_70px_rgba(0,0,0,0.45)]",
                  "backdrop-blur-2xl",
                )}
              >
                {/* Ambient glow */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_70%)]" />

                <div className="relative">
                  {/* Category filters */}
                  {searchResults.categories.length > 1 && (
                    <motion.div
                      variants={itemVariants}
                      className="flex gap-1.5 overflow-x-auto border-b border-white/[0.06] p-2.5"
                    >
                      {searchResults.categories.map(
                        (category) => {
                          const active =
                            activeCategory ===
                            category.name;

                          return (
                            <button
                              key={category.name}
                              onMouseDown={(event) =>
                                event.preventDefault()
                              }
                              onClick={() =>
                                handleCategoryClick(
                                  category.name,
                                )
                              }
                              className={cn(
                                "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium transition",
                                active
                                  ? "border-violet-400/20 bg-violet-400/[0.08] text-violet-200"
                                  : "border-white/[0.06] bg-white/[0.02] text-zinc-600 hover:border-white/[0.1] hover:text-zinc-300",
                              )}
                            >
                              {category.name}
                            </button>
                          );
                        },
                      )}
                    </motion.div>
                  )}

                  {/* Recent */}
                  {searchResults.recentActions.length > 0 && (
                    <motion.div
                      variants={itemVariants}
                      className="pt-2"
                    >
                      <div className="flex items-center gap-2 px-4 py-2">
                        <Clock3 className="size-3 text-zinc-700" />
                        <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                          Recent
                        </h3>
                      </div>

                      <ul>
                        {searchResults.recentActions.map(
                          (action, index) =>
                            renderAction(
                              action,
                              index,
                            ),
                        )}
                      </ul>
                    </motion.div>
                  )}

                  {/* Suggested */}
                  {searchResults.suggestedActions.length > 0 && (
                    <motion.div
                      variants={itemVariants}
                      className="pt-2"
                    >
                      <div className="flex items-center gap-2 px-4 py-2">
                        <Sparkles className="size-3 text-violet-400/70" />
                        <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                          Suggested
                        </h3>
                      </div>

                      <ul>
                        {searchResults.suggestedActions.map(
                          (action, index) => {
                            const actionIndex =
                              searchResults
                                .recentActions
                                .length + index;

                            return renderAction(
                              action,
                              actionIndex,
                            );
                          },
                        )}
                      </ul>
                    </motion.div>
                  )}

                  {/* Categories */}
                  {searchResults.categories.map(
                    (category, categoryIndex) => {
                      const startingIndex =
                        searchResults.recentActions
                          .length +
                        searchResults.suggestedActions
                          .length;

                      let categoryOffset =
                        startingIndex;

                      for (
                        let i = 0;
                        i < categoryIndex;
                        i++
                      ) {
                        categoryOffset +=
                          searchResults.categories[
                            i
                          ].actions.length;
                      }

                      return (
                        <motion.div
                          key={category.name}
                          variants={itemVariants}
                          className="pt-2"
                        >
                          <div className="flex items-center justify-between px-4 py-2">
                            <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-600">
                              {category.name}
                            </h3>

                            <span className="text-[10px] text-zinc-700">
                              {category.actions.length}
                            </span>
                          </div>

                          {category.actions.length > 0 ? (
                            <ul>
                              {category.actions.map(
                                (action, index) =>
                                  renderAction(
                                    action,
                                    categoryOffset +
                                      index,
                                  ),
                              )}
                            </ul>
                          ) : (
                            <p className="px-4 py-4 text-xs text-zinc-700">
                              No commands found.
                            </p>
                          )}
                        </motion.div>
                      );
                    },
                  )}

                  {/* Empty search */}
                  {query.trim() &&
                    visibleActions.length === 0 && (
                      <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center justify-center px-6 py-14 text-center"
                      >
                        <div className="grid size-10 place-items-center rounded-xl border border-white/[0.07] bg-white/[0.025]">
                          <Search className="size-4 text-zinc-700" />
                        </div>

                        <p className="mt-4 text-sm font-medium text-zinc-400">
                          No results found
                        </p>

                        <p className="mt-1 max-w-xs text-xs leading-5 text-zinc-700">
                          Try another command, component,
                          or keyword.
                        </p>
                      </motion.div>
                    )}

                  {/* Footer */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-2 flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5 text-[10px] text-zinc-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="hidden items-center gap-1 sm:flex">
                        <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-zinc-600">
                          ↑
                        </kbd>
                        <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-zinc-600">
                          ↓
                        </kbd>
                        <span>navigate</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-zinc-600">
                          enter
                        </kbd>
                        <span>select</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <kbd className="rounded-md border border-white/[0.06] bg-white/[0.025] px-1.5 py-0.5 font-mono text-zinc-600">
                        esc
                      </kbd>
                      <span>close</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}