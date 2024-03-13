import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./schemas/schema";
import { codeInput } from "@sanity/code-input";

export default defineConfig({
  title: "nieknijland.nl",
  projectId: "kq5iz0cu",
  dataset: "development",
  plugins: [codeInput(), structureTool()],
  schema: {
    types: schemas,
  },
});
