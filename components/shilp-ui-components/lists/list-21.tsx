"use client";

import { useState } from "react";
import {
  Bluetooth,
  Check,
  Moon,
  Signal,
  Wifi,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ListItem {
  id: string;
  label: string;
  icon: LucideIcon;
  enabled: boolean;
  description?: string;
}

interface List21Props {
  items?: ListItem[];
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    id: "wifi",
    label: "Wi-Fi",
    icon: Wifi,
    enabled: true,
    description: "HomeNetwork_5G",
  },
  {
    id: "bluetooth",
    label: "Bluetooth",
    icon: Bluetooth,
    enabled: true,
    description: "2 devices connected",
  },
  {
    id: "cellular",
    label: "Cellular",
    icon: Signal,
    enabled: false,
    description: "Disabled",
  },
  {
    id: "dark-mode",
    label: "Dark Mode",
    icon: Moon,
    enabled: false,
  },
];

export default function List21({
  items = defaultItems,
  className,
}: List21Props) {
  const [settings, setSettings] = useState(items);

  const toggleSetting = (id: string) => {
    setSettings((current) =>
      current.map((setting) =>
        setting.id === id
          ? {
              ...setting,
              enabled: !setting.enabled,
            }
          : setting,
      ),
    );
  };

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#09090B]",
        className,
      )}
    >
      <div className="border-b border-white/[0.06] px-5 py-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
          Preferences
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">
          Connectivity
        </h3>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {settings.map((setting) => {
          const Icon = setting.icon;

          return (
            <div
              key={setting.id}
              className="flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.025]"
            >
              <div
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition",
                  setting.enabled
                    ? "border-violet-400/[0.15] bg-violet-500/[0.07] text-violet-300"
                    : "border-white/[0.07] bg-white/[0.025] text-zinc-600",
                )}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  {setting.label}
                </p>

                {setting.description && (
                  <p className="mt-1 truncate text-xs text-zinc-600">
                    {setting.description}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => toggleSetting(setting.id)}
                aria-label={`Toggle ${setting.label}`}
                aria-pressed={setting.enabled}
                className={cn(
                  "relative h-6 w-10 shrink-0 rounded-full border p-0.5 transition",
                  setting.enabled
                    ? "border-violet-400/30 bg-violet-500"
                    : "border-white/[0.10] bg-white/[0.05]",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
                    setting.enabled
                      ? "translate-x-4"
                      : "translate-x-0",
                  )}
                >
                  {setting.enabled && (
                    <Check className="h-3 w-3 text-violet-600" />
                  )}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}