"use client";

import { useState } from "react";
import {
  Check,
  Loader2,
  Settings,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface SettingOption {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface Alert07Props {
  title?: string;
  options?: SettingOption[];
  onSave?: (settings: SettingOption[]) => void;
  onDismiss?: () => void;
  className?: string;
}

const defaultOptions: SettingOption[] = [
  {
    id: "notifications",
    label: "Notifications",
    description: "Receive important project updates.",
    enabled: true,
  },
  {
    id: "updates",
    label: "Product updates",
    description: "Get notified about new features.",
    enabled: false,
  },
  {
    id: "activity",
    label: "Activity summary",
    description: "Receive a weekly activity summary.",
    enabled: true,
  },
];

export default function Alert07({
  title = "Quick settings",
  options = defaultOptions,
  onSave,
  onDismiss,
  className,
}: Alert07Props) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [settings, setSettings] = useState(options);
  const [saving, setSaving] = useState(false);

  const handleDismiss = () => {
    setExiting(true);

    setTimeout(() => {
      setVisible(false);
      onDismiss?.();
    }, 200);
  };

  const toggleSetting = (id: string) => {
    setSettings((current) =>
      current.map((setting) =>
        setting.id === id
          ? { ...setting, enabled: !setting.enabled }
          : setting
      )
    );
  };

  const handleSave = () => {
    if (saving) return;

    setSaving(true);

    setTimeout(() => {
      onSave?.(settings);
      setSaving(false);
      handleDismiss();
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-lg transition-all duration-300",
        exiting
          ? "translate-y-2 scale-[0.98] opacity-0"
          : "translate-y-0 scale-100 opacity-100",
        className
      )}
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0C0C0F] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/[0.08]">
              <Settings className="h-4 w-4 text-violet-300" />
            </div>

            <h3 className="text-sm font-medium text-white">
              {title}
            </h3>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            disabled={saving}
            aria-label="Close"
            className="rounded-full p-1.5 text-zinc-600 transition hover:bg-white/[0.05] hover:text-white disabled:opacity-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="divide-y divide-white/[0.05]">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between gap-4 px-5 py-4"
            >
              <div>
                <p className="text-sm font-medium text-zinc-200">
                  {setting.label}
                </p>

                <p className="mt-0.5 text-xs leading-5 text-zinc-500">
                  {setting.description}
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-checked={setting.enabled}
                onClick={() => toggleSetting(setting.id)}
                disabled={saving}
                className={cn(
                  "relative h-6 w-10 shrink-0 rounded-full border p-0.5 transition-all duration-200",
                  setting.enabled
                    ? "border-violet-400/30 bg-violet-500"
                    : "border-white/[0.1] bg-white/[0.05]",
                  saving && "cursor-not-allowed opacity-50"
                )}
              >
                <span
                  className={cn(
                    "block h-4.5 w-4.5 rounded-full bg-white shadow-sm transition-transform duration-200",
                    setting.enabled
                      ? "translate-x-4"
                      : "translate-x-0"
                  )}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 border-t border-white/[0.06] p-4">
          <button
            type="button"
            onClick={handleDismiss}
            disabled={saving}
            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs font-medium text-zinc-400 transition hover:bg-white/[0.05] hover:text-white disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:bg-zinc-200 disabled:opacity-60"
          >
            {saving ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Check className="h-3.5 w-3.5" />
            )}

            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>
    </div>
  );
}