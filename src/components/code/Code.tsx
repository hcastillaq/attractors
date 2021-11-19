import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {
  children: React.ReactNode;
};
const Code: React.FC<Props> = ({ children }) => {
  return (
    <SyntaxHighlighter language="javascript">{children}</SyntaxHighlighter>
  );
};
export default Code;
