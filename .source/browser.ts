// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"components/ai-input.mdx": () => import("../content/docs/components/ai-input.mdx?collection=docs"), "components/alert.mdx": () => import("../content/docs/components/alert.mdx?collection=docs"), "components/block.mdx": () => import("../content/docs/components/block.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "components/card.mdx": () => import("../content/docs/components/card.mdx?collection=docs"), "components/faqs.mdx": () => import("../content/docs/components/faqs.mdx?collection=docs"), "components/input.mdx": () => import("../content/docs/components/input.mdx?collection=docs"), "components/list.mdx": () => import("../content/docs/components/list.mdx?collection=docs"), "components/pricing.mdx": () => import("../content/docs/components/pricing.mdx?collection=docs"), "components/profile.mdx": () => import("../content/docs/components/profile.mdx?collection=docs"), "components/text.mdx": () => import("../content/docs/components/text.mdx?collection=docs"), "hooks/useAutoResizeTextArea.mdx": () => import("../content/docs/hooks/useAutoResizeTextArea.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), }),
};
export default browserCollections;