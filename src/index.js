import React from "react";
import { render } from "react-dom";
import Collapsible from "react-collapsible";

//importing the test runner
import Test from "./Test";

//importing some code I want to test
import QuickSort from "./QuickSort";
import BubbleSort from "./BubbleSort";
const testData = [
  {
    title: "Simple Equality Tests...",
    tests: [
      { name: "numbers", input: 1, output: 1 },
      { name: "strings", input: "alice", output: "alice" },
      { name: "arrays", input: [1, 2], output: [1, 2] },
      {
        name: "objects",
        input: { name: "alice", loc: "paris" },
        output: { name: "alice", loc: "paris" }
      }
    ]
  },
  {
    title: "Simple Equality Tests Failing...",
    tests: [
      { name: "numbers", input: 1, output: 0 },
      { name: "strings", input: "alice", output: "alicea" },
      { name: "arrays", input: [1, 2], output: [1, 1] },
      {
        name: "objects",
        input: { name: "alice", loc: "pari1s" },
        output: { name: "alice", loc: "paris" }
      }
    ]
  },
  {
    title: "Testing Bubble Sort...",
    tests: [
      { name: "empty array test", input: BubbleSort([]), output: [] },
      { name: "single array test", input: BubbleSort([1]), output: [1] },
      {
        name: "two elements array test",
        input: BubbleSort([2, 1]),
        output: [1, 2]
      },
      {
        name: "many elements array test",
        input: BubbleSort([10, 5, 6, 2, 1]),
        output: [1, 2, 5, 6, 10]
      }
    ]
  },
  {
    title: "Testing Quick Sort...",
    tests: [
      { name: "empty array test", input: QuickSort([]), output: [] },
      { name: "single array test", input: QuickSort([1]), output: [1] },
      {
        name: "two elements array test",
        input: QuickSort([2, 1]),
        output: [1, 2]
      },
      {
        name: "many elements array test",
        input: QuickSort([10, 5, 6, 2, 1]),
        output: [1, 2, 5, 6, 10]
      }
    ]
  }
];

const TestReturn = ({ title, tests }) => (
  <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
    <h4>{title}</h4>
    {tests.map(test => (
      <Test input={test.input} output={test.output} name={test.name} />
    ))}
  </div>
);

const TestMapper = testData => {
  let out = {};
  if (Array.isArray(testData)) {
    out = testData.map(dataItem => TestReturn(dataItem));
  } else {
    out = TestReturn(testData);
  }

  return out;
};

const TestMapperDemo = () => TestMapper(testData);
render(<TestMapperDemo />, document.getElementById("root"));
