import React, { FC, Fragment } from "react";
import TestAssertion from "./test-assertion";

type Test = {
  expression: string;
  output: string;
  passed: boolean;
};

type TestSuiteProps = {
  tests: Test[]
};

const TestSuite: FC<TestSuiteProps> = ({ tests }) =>
  <pre className="lh4">
    {tests.map(test => <Fragment key={test.expression}><TestAssertion {...test} />{"\n"}</Fragment>)}
  </pre>;

export default TestSuite;
