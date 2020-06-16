import React, { useState } from "react";
import "./Style.css";

const validators = {
  name: (value) => {
    return Boolean(value) ? undefined : "Required";
  },
  surname: (value) => {
    return Boolean(value) ? undefined : "Required";
  },
  password: (value) => {
    return Boolean(value) ? undefined : "Required";
  },
  email: (value) => {
    return Boolean(value) ? undefined : "Required";
  },
};

export const Form = () => {
  const [form, setForm] = useState({
    name: {
      value: "",
      error: false,
    },
    surname: {
      value: "",
      error: false,
    },
    password: {
      value: "",
      error: false,
    },
    email: {
      value: "",
      error: false,
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target);
    const isInValid = Object.keys(form).find((key) => {
      return form[key].error;
    });
    if (!isInValid) {
        // send request to server
    }
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: {
        value,
        error: validators[id](value),
      },
    });
  };
  console.log(form);
  return (
    <div className="Form">
      <form onSubmit={console.log()}>
        <label>
          Name:
          <input type="text" id="name" onChange={handleChange}></input>
          {form.name.error && <div className="error">{form.name.error}</div>}
        </label>
        <label>
          Surname:
          <input type="text" id="surname" onChange={handleChange}></input>
          {form.surname.error && (
            <div className="error">{form.surname.error}</div>
          )}
        </label>
        <label>
          Password:
          <input type="password" id="password" onChange={handleChange}></input>
          {form.password.error && (
            <div className="error">{form.password.error}</div>
          )}
        </label>
        <label>
          Email:
          <input type="email" id="email" onChange={handleChange}></input>
          {form.email.error && <div className="error">{form.email.error}</div>}
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
