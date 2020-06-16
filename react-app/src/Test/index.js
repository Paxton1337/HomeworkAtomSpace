import React, { useState } from "react";
import { Lists } from "./Lists";
import { Form } from "./Form";

const Test = ({ testLabel, submit, children }) => {
  const [value, setValues] = useState("");
  const handleOnChange = (e) => {
    setValues(e.target.value);
  };
  const handleClickLink = (e) => {
      e.preventDefault();
    console.log(e);
    
  };
  return (
    <div>
      {testLabel}
      <label>
        Input text
        <input type="text" onChange={handleOnChange} placeholder="text"></input>
      </label>
      <button onClick={submit}>Submit</button>
      <a href="http://facebook.com" target="_blank" onClick={handleClickLink}>
        Facebook
      </a>
      {children}
      <p>{value}</p>
      {/* <Lists></Lists> */}
      <Form></Form>
    </div>
  );
};

export { Test };
