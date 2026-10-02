"use client";

import { useRef, useState } from "react";
import { Camera, ImagePlus, Trash2 } from "lucide-react";

interface AvatarPickerProps {
  initialImage?: string;
  onChange?: (file: File | null) => void;
  size?: "sm" | "md" | "lg";
}

export default function AvatarPicker({
  initialImage,
  onChange,
  size = "md",
}: AvatarPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(initialImage ?? "");

  const sizes = {
    sm: "size-16",
    md: "size-24",
    lg: "size-32",
  };

  const choose = (file?: File) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    onChange?.(file);
  };

  const remove = () => {
    setPreview("");
    if (inputRef.current) inputRef.current.value = "";
    onChange?.(null);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={`group relative ${sizes[size]}`}>
        <div className="size-full overflow-hidden rounded-full border border-white/[0.1] bg-white/[0.04]">
          {preview ? (
            <img src={preview} alt="Avatar preview" className="size-full object-cover" />
          ) : (
            <div className="grid size-full place-items-center text-zinc-600">
              <ImagePlus className="size-7" />
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="absolute bottom-0 right-0 grid size-8 place-items-center rounded-full border border-white/10 bg-zinc-900 text-white shadow-lg transition hover:bg-violet-600"
          aria-label="Choose avatar"
        >
          <Camera className="size-4" />
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => choose(e.target.files?.[0])}
      />

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-violet-400/30 hover:text-white"
        >
          Change avatar
        </button>
        {preview && (
          <button
            type="button"
            onClick={remove}
            className="grid size-9 place-items-center rounded-full border border-red-400/15 bg-red-400/[0.05] text-red-300 transition hover:bg-red-400/10"
            aria-label="Remove avatar"
          >
            <Trash2 className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}
