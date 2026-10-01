"use client";

import { cn } from "@/lib/utils";
import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

interface ListItem {
  id: string;
  text: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
}

interface List07Props {
  items?: ListItem[];
  className?: string;
}

const priorityColors = {
  high: "border-l-red-400",
  medium: "border-l-amber-400",
  low: "border-l-violet-400",
};

const ITEMS: ListItem[] = [
  {
    id: "1",
    text: "Review quarterly report",
    completed: false,
    priority: "high",
  },
  {
    id: "2",
    text: "Schedule team meeting",
    completed: true,
    priority: "medium",
  },
  {
    id: "3",
    text: "Update documentation",
    completed: false,
    priority: "low",
  },
  {
    id: "4",
    text: "Send client proposal",
    completed: false,
    priority: "high",
  },
];

export default function List07({ items = ITEMS, className }: List07Props) {
  const [todos, setTodos] = useState(items);

  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-md overflow-hidden rounded-2xl",
        "border border-white/[0.08]",
        "bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <h2 className="text-sm font-medium text-zinc-100">Tasks</h2>
        <p className="mt-1 text-xs text-zinc-600">
          {todos.filter((todo) => !todo.completed).length} remaining
        </p>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {todos.map((item) => (
          <div
            key={item.id}
            className={cn(
              "group flex items-center gap-3 border-l-2 p-4",
              priorityColors[item.priority],
              "transition-colors hover:bg-white/[0.025]",
            )}
          >
            <button
              onClick={() => toggleComplete(item.id)}
              aria-label={
                item.completed ? "Mark incomplete" : "Mark complete"
              }
              className={cn(
                "flex size-5 shrink-0 items-center justify-center rounded-full border transition-all",
                item.completed
                  ? "border-emerald-400 bg-emerald-400 text-black"
                  : "border-zinc-700 hover:border-violet-400",
              )}
            >
              {item.completed && <Check className="size-3" />}
            </button>

            <span
              className={cn(
                "min-w-0 flex-1 text-sm transition-colors",
                item.completed
                  ? "text-zinc-600 line-through"
                  : "text-zinc-200",
              )}
            >
              {item.text}
            </span>

            <button
              onClick={() => deleteItem(item.id)}
              aria-label={`Delete ${item.text}`}
              className="flex size-8 items-center justify-center rounded-full text-zinc-700 opacity-0 transition-all hover:bg-red-400/10 hover:text-red-400 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}