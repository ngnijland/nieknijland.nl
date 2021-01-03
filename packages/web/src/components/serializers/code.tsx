import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface CodeProps {
  node: {
    language: string;
    code: string;
  };
}

export function Code({ node: { language, code } }: CodeProps): JSX.Element {
  return (
    <SyntaxHighlighter
      language={language === "html" ? "markdown" : language}
      style={tomorrow}
      customStyle={{
        fontSize: "0.8em",
        borderRadius: "1rem",
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
