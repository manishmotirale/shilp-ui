"use server";

import path from "path";
import { promises as fs } from "node:fs";
import { cache } from "react";

const COMPONENTS_DIR = path.join(
  process.cwd(),
  "components",
  "shilp-ui",
);

const readFileCache = cache(async (filePath: string) => {
  return await fs.readFile(filePath, "utf-8");
});

export const getComponent = async (
  fileName: string | null,
  folder: string,
) => {
  if (!folder || folder === "undefined") {
    throw new Error("Component folder not found");
  }

  const safeFolder = folder.trim();

  if (!fileName || fileName === "undefined") {
    const fullPath = path.join(
      COMPONENTS_DIR,
      `${safeFolder}.tsx`,
    );

    return await readFileCache(fullPath);
  }

  const safeFileName = fileName.trim();

  const fullPath = path.join(
    COMPONENTS_DIR,
    safeFolder,
    `${safeFileName}.tsx`,
  );

  return await readFileCache(fullPath);
};

export type CopyComponentState = {
  error: string;
  content: string;
  success: boolean;
};

export const copyComponent = async (
  _prevState: CopyComponentState,
  formData: FormData,
): Promise<CopyComponentState> => {
  try {
    const folder = formData.get("folder");
    const fileName = formData.get("fileName");

    if (typeof folder !== "string" || !folder.trim()) {
      return {
        error: "Component folder not found",
        content: "",
        success: false,
      };
    }

    if (
      fileName !== null &&
      typeof fileName !== "string"
    ) {
      return {
        error: "Invalid component file name",
        content: "",
        success: false,
      };
    }

    const content = await getComponent(
      fileName,
      folder,
    );

    if (!content) {
      return {
        error: "Component not found",
        content: "",
        success: false,
      };
    }

    return {
      error: "",
      content,
      success: true,
    };
  } catch (error) {
    console.error("Failed to read component:", error);

    return {
      error: "Failed to copy component",
      content: "",
      success: false,
    };
  }
};