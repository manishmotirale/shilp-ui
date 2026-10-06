// @ts-nocheck
import * as __fd_glob_12 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/hooks/useAutoResizeTextArea.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/text.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/profile.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/pricing.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/list.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/input.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/faqs.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/card.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/button.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/block.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/components/alert.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/components/ai-input.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();

export const docs = await create.doc("docs", "content/docs", {"components/ai-input.mdx": __fd_glob_0, "components/alert.mdx": __fd_glob_1, "components/block.mdx": __fd_glob_2, "components/button.mdx": __fd_glob_3, "components/card.mdx": __fd_glob_4, "components/faqs.mdx": __fd_glob_5, "components/input.mdx": __fd_glob_6, "components/list.mdx": __fd_glob_7, "components/pricing.mdx": __fd_glob_8, "components/profile.mdx": __fd_glob_9, "components/text.mdx": __fd_glob_10, "hooks/useAutoResizeTextArea.mdx": __fd_glob_11, "index.mdx": __fd_glob_12, });

export const meta = await create.meta("meta", "content/meta", {});