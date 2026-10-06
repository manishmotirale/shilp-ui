"use client";

import { useCallback, useRef, useState } from "react";

interface UseFileInputOptions {
  accept?: string;
  /** Max size in megabytes */
  maxSize?: number;
}

export function useFileInput({ accept = "*", maxSize = 10 }: UseFileInputOptions = {}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const clearFile = useCallback(() => {
    setFileName(null);
    setFileSize(0);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const validateAndSetFile = useCallback(
    (file: File) => {
      setError(null);

      if (accept !== "*" && accept !== "image/*") {
        const types = accept.split(",").map((t) => t.trim());
        if (!types.some((t) => file.type === t || file.name.toLowerCase().endsWith(t.replace(".", "")))) {
          setError(`File type not accepted. Expected: ${accept}`);
          return;
        }
      } else if (accept === "image/*" && !file.type.startsWith("image/")) {
        setError("Please select an image file.");
        return;
      }

      const maxBytes = maxSize * 1024 * 1024;
      if (file.size > maxBytes) {
        setError(`File must be smaller than ${maxSize} MB.`);
        return;
      }

      setFileName(file.name);
      setFileSize(file.size);
    },
    [accept, maxSize],
  );

  return {
    fileName,
    fileInputRef,
    clearFile,
    error,
    validateAndSetFile,
    fileSize,
  };
}