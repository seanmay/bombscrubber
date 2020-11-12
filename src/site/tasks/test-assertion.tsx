import React, { FC } from "react";

type TestAssertionProps = {
  expression: string;
  output: string;
  passed: boolean;
};

const TestAssertion: FC<TestAssertionProps> = ({ expression, output, passed }) =>
  <span style={{ display: "inline-block", color: "var(--theme-subdued)" }}>
    <code>{expression}</code>
    <code> //{`-->`}(</code><output style={{ fontWeight: passed ? 600 : 900, color: `var(--theme-${passed ? "accent" : "warning" })` }}>{output}</output><code>)</code>
  </span>;

export default TestAssertion;
