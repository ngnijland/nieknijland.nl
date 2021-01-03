import React from "react";

export interface CodeProps {
  node: {
    language: string;
    code: string;
  };
}

export function Code({ node: { language, code } }: CodeProps): JSX.Element {
  return (
    <pre data-language={language}>
      <code>{code}</code>
    </pre>
  );
}
