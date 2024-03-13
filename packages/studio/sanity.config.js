import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
import { dashboardTool, projectInfoWidget } from "@sanity/dashboard";
import { visionTool } from "@sanity/vision";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

import schemas from "./schemas/schema";

let sites = [];

if (
  process.env.SANITY_STUDIO_BUILD_HOOK_ID_STUDIO &&
  process.env.SANITY_STUDIO_NAME_STUDIO &&
  process.env.SANITY_STUDIO_API_ID_STUDIO
) {
  sites.push({
    buildHookId: process.env.SANITY_STUDIO_BUILD_HOOK_ID_STUDIO,
    title: "CMS",
    name: process.env.SANITY_STUDIO_NAME_STUDIO,
    apiId: process.env.SANITY_STUDIO_API_ID_STUDIO,
  });
}

if (
  process.env.SANITY_STUDIO_BUILD_HOOK_ID_WEB &&
  process.env.SANITY_STUDIO_NAME_WEB &&
  process.env.SANITY_STUDIO_API_ID_WEB
) {
  sites.push({
    buildHookId: process.env.SANITY_STUDIO_BUILD_HOOK_ID_WEB,
    title: "Website",
    name: process.env.SANITY_STUDIO_NAME_WEB,
    apiId: process.env.SANITY_STUDIO_API_ID_WEB,
  });
}

export default defineConfig({
  title: "nieknijland.nl",
  projectId: "kq5iz0cu",
  dataset: "development",
  plugins: [
    codeInput(),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Netlify deploys",
          sites,
        }),
        documentListWidget({
          title: "Recent blog posts",
          order: "_createdAt desc",
          types: ["post"],
          layout: { width: "medium", height: "large" },
        }),
        projectInfoWidget(),
      ],
    }),
    structureTool(),
    visionTool(),
  ],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }

    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schemas,
  },
});
