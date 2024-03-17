import React from "react";

import { generateStructuredDataJson } from "./generate-structured-data-json";

import type { Data } from "./types";

interface StructuredDataProps {
  data: Data;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script type="application/ld+json">
      {JSON.stringify(generateStructuredDataJson(data))}
    </script>
  );
}
