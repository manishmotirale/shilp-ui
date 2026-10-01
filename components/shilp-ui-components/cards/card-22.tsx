import { cn } from "@/lib/utils";

interface CardSetting {
  title: string;
  description: string;
  enabled: boolean;
}

interface Card20Props {
  title?: string;
  settings?: CardSetting[];
}

export default function Card_22({
  title = "Notification Settings",
  settings = [
    {
      title: "Email Notifications",
      description: "Get notified via email",
      enabled: true,
    },
    {
      title: "Push Notifications",
      description: "Receive push alerts",
      enabled: false,
    },
    {
      title: "SMS Updates",
      description: "Text message reminders",
      enabled: true,
    },
  ],
}: Card20Props) {
  return (
    <div
      className={cn(
        "w-full max-w-sm",
        "rounded-2xl",
        "border border-white/[0.08]",
        "bg-white/[0.025]",
        "p-6",
        "backdrop-blur-xl",
        "shadow-[0_8px_30px_rgba(0,0,0,0.22)]",
      )}
    >
      <div className="mb-6">
        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-violet-300">
          Preferences
        </p>

        <h3 className="text-base font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-relaxed text-zinc-500">
          Control how you receive updates and alerts.
        </p>
      </div>

      <div className="space-y-3">
        {settings.map((setting, i) => (
          <div
            key={i}
            className={cn(
              "group flex items-center justify-between gap-4",
              "rounded-xl",
              "border border-white/[0.06]",
              "bg-white/[0.02]",
              "px-4 py-3.5",
              "transition-all duration-300",
              "hover:border-white/[0.10]",
              "hover:bg-white/[0.035]",
            )}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-zinc-200">
                {setting.title}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                {setting.description}
              </p>
            </div>

            <button
              className={cn(
                "relative inline-flex h-8 min-w-[76px] items-center justify-center",
                "rounded-full border px-3",
                "text-[10px] font-semibold uppercase tracking-wide",
                "transition-all duration-300",
                "active:scale-[0.97]",
                setting.enabled
                  ? [
                      "border-violet-400/20",
                      "bg-violet-400/[0.10]",
                      "text-violet-300",
                      "hover:bg-violet-400/[0.15]",
                    ]
                  : [
                      "border-white/[0.08]",
                      "bg-white/[0.035]",
                      "text-zinc-500",
                      "hover:bg-white/[0.06]",
                      "hover:text-zinc-300",
                    ],
              )}
            >
              {setting.enabled ? "Enabled" : "Disabled"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}