import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";

interface Task {
  title: string;
  completed: boolean;
}

interface Card17Props {
  title?: string;
  tasks?: Task[];
  completed?: number;
}

export default function Card_19({
  title = "Project Checklist",
  tasks = [
    { title: "Design mockups", completed: true },
    { title: "Frontend development", completed: true },
    { title: "Backend integration", completed: false },
    { title: "Testing & QA", completed: false },
  ],
  completed = 2,
}: Card17Props) {
  const progress =
    tasks.length > 0
      ? Math.min((completed / tasks.length) * 100, 100)
      : 0;

  return (
    <div
      className={cn(
        "w-full max-w-sm",
        "rounded-2xl",
        "border border-white/[0.08]",
        "bg-white/[0.025]",
        "p-5",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
        "transition-all duration-300",
        "hover:border-white/[0.12]",
        "hover:bg-white/[0.035]",
      )}
    >
      <h3 className="mb-4 text-sm font-semibold tracking-tight text-white">
        {title}
      </h3>

      <div className="mb-5 border-b border-white/[0.06] pb-4">
        <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
          <div
            className="h-full rounded-full bg-violet-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-xs text-zinc-500">
          {completed} of {tasks.length} completed
        </p>
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <div key={i} className="flex items-center gap-3">
            {task.completed ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-violet-300" />
            ) : (
              <Circle className="h-4 w-4 shrink-0 text-zinc-700" />
            )}

            <span
              className={cn(
                "text-xs",
                task.completed
                  ? "text-zinc-600 line-through"
                  : "text-zinc-400",
              )}
            >
              {task.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}