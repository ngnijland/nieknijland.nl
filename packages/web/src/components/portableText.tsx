import React from "react";
import BasePortableText from "@sanity/block-content-to-react";

import { Code, Figure } from "./serializers";

export interface PortableTextProps {
  blocks: unknown;
}

function PortableText({ blocks }: PortableTextProps): JSX.Element {
  return (
    <BasePortableText
      blocks={blocks}
      serializers={{
        container: "section",
        types: {
          postImage: Figure,
          code: Code,
        },
      }}
      projectId={process.env.SANITY_API_PROJECT_ID}
      dataset={process.env.SANITY_API_DATASET}
    />
  );
}

export default PortableText;
