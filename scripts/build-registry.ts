import { registry } from "@/registry";
import { promises as fs } from "fs";
import type { z } from "zod";
import type { registryItemFileSchema } from "@/registry/schema";
import path from "path";

const REGISTRY_BASE_PATH = process.cwd();
const PUBLIC_FOLDER_BASE_PATH = "public/r";

type File = z.infer<typeof registryItemFileSchema>;

async function writeFileRecursively(
  filePath: string,
  data: string
) {
  const dir = path.dirname(filePath);

  try {
    await fs.mkdir(dir, { recursive: true });

    await fs.writeFile(filePath, data, "utf-8");

    console.log(`File written successfully: ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${filePath}`, error);
    throw error;
  }
}

function getTargetPath(
  type: string,
  fileName: string
) {
  switch (type) {
    case "registry:hook":
      return `/hooks/${fileName}`;

    case "registry:component":
      return `/components/shilp-ui-components/${fileName}`;

    case "registry:lib":
      return `/lib/${fileName}`;

    case "registry:block":
      return `/blocks/${fileName}`;

    default:
      return `/components/shilp-ui-components/${fileName}`;
  }
}

const getComponentsFiles = async (
  files: File[],
  registryType: string
) => {
  const fileArrayPromises = (files ?? []).map(async (file) => {
    let normalizedPath: string;
    let fileType: string;

    if (typeof file === "string") {
      normalizedPath = file.startsWith("/")
        ? file
        : `/${file}`;

      fileType = registryType;
    } else {
      normalizedPath = file.path.startsWith("/")
        ? file.path
        : `/${file.path}`;

      fileType = file.type || registryType;
    }

    const filePath = path.join(
      REGISTRY_BASE_PATH,
      normalizedPath
    );

    const fileContent = await fs.readFile(
      filePath,
      "utf-8"
    );

    const fileName =
      normalizedPath.split("/").pop() || "";

    return {
      type: fileType,
      content: fileContent,
      path: normalizedPath,
      target: getTargetPath(
        fileType,
        fileName
      ),
    };
  });

  return Promise.all(fileArrayPromises);
};

const main = async () => {
  for (let i = 0; i < registry.length; i++) {
    const component = registry[i];

    if (!component) {
      throw new Error(
        `No registry component found at index ${i}`
      );
    }

    const files = component.files ?? [];

    const fileArray = await getComponentsFiles(
      files,
      component.type
    );

    const json = JSON.stringify(
      {
        ...component,
        files: fileArray,
      },
      null,
      2
    );

    const jsonPath = path.join(
      REGISTRY_BASE_PATH,
      PUBLIC_FOLDER_BASE_PATH,
      `${component.name}.json`
    );

    await writeFileRecursively(
      jsonPath,
      json
    );

    console.log(
      `Registry generated: ${component.name}.json`
    );
  }
};

main()
  .then(() => {
    console.log(
      "Registry files built successfully"
    );
  })
  .catch((error) => {
    console.error(
      "Error building registry files:",
      error
    );

    process.exit(1);
  });