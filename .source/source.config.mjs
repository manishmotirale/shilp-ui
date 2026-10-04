// source.config.ts
import {
  defineCollections,
  frontmatterSchema,
  metaSchema
} from "fumadocs-mdx/config";
var docs = defineCollections({
  type: "doc",
  dir: "content/docs",
  schema: frontmatterSchema
});
var meta = defineCollections({
  type: "meta",
  dir: "content/meta",
  schema: metaSchema
});
export {
  docs,
  meta
};
