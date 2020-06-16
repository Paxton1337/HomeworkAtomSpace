import React from "react";
import "./App.css";
import { Test } from "./Test";

const App = () => {
  const label = "Test text";
  const obj = {
    hello: "world",
    hello1: "world",
  };
  return (
    <Test
      label={label}
      {...obj}
      testLabel="Test component label"
      submit={() => {
        console.log("SUBMIT");
      }}
    >
      <button>Props Button</button>
    </Test>
  );
};

export default App;
