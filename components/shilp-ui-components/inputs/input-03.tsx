"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Upload, X, FileText, CheckCircle2 } from "lucide-react";
import { useFileInput } from "@/hooks/use-file-input";

export default function Input_03() {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    fileName,
    fileInputRef,
    clearFile,
    error,
    validateAndSetFile,
    fileSize,
  } = useFileInput({
    accept: "image/*",
    maxSize: 5,
  });

  function handleFile(file: File) {
    validateAndSetFile(file);
    simulateUpload(file);
  }

  function simulateUpload(file: File) {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 10;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(interval);

        if (file.type.startsWith("image/")) {
          const reader = new FileReader();

          reader.onloadend = () => {
            setPreview(reader.result as string);
          };

          reader.readAsDataURL(file);
        }
      }
    }, 100);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;

    handleFile(droppedFile);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    handleFile(selectedFile);
  }

  function removeFile() {
    clearFile();
    setPreview(null);
    setUploadProgress(0);
  }

  return (
    <div className="w-full max-w-md space-y-2">
      <label className="text-xs font-medium text-zinc-300">
        Upload file
      </label>

      <div
        role="button"
        tabIndex={0}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        aria-label="Upload file"
        className={cn(
          "group relative cursor-pointer overflow-hidden",
          "rounded-2xl border border-dashed",
          "backdrop-blur-xl",
          "transition-all duration-300",
          isDragging
            ? "border-violet-400/50 bg-violet-400/[0.06]"
            : "border-white/[0.10] bg-white/[0.02] hover:border-violet-400/30 hover:bg-white/[0.035]",
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />

        <div className="p-7">
          {!fileName ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl",
                  "border border-white/[0.08] bg-white/[0.035]",
                  "transition-all duration-300",
                  "group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.06]",
                )}
              >
                <Upload className="h-5 w-5 text-zinc-500 group-hover:text-violet-300" />
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-300">
                  Drop your file here
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  or click to browse · Max 5 MB
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              {preview ? (
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-white/[0.08]">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035]">
                  <FileText className="h-5 w-5 text-zinc-500" />
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-zinc-200">
                  {fileName}
                </p>

                <p className="mt-0.5 text-xs text-zinc-600">
                  {fileSize
                    ? `${(fileSize / 1024 / 1024).toFixed(2)} MB`
                    : "0 MB"}
                </p>

                {uploadProgress < 100 ? (
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-violet-400 transition-all duration-200"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                ) : (
                  <div className="mt-1.5 flex items-center gap-1 text-[10px] text-emerald-400">
                    <CheckCircle2 className="h-3 w-3" />
                    Ready
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                aria-label="Remove file"
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                  "text-zinc-600 transition-colors",
                  "hover:bg-white/[0.06] hover:text-zinc-300",
                )}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}