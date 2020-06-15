import React from "react";
import "./App.css";
import SuperButton from "./SuperButton";

const App = () => {
  console.log("app");
  const [notHidden, setNotHidden] = React.useState(true);
  return (
    <div>
      <button onClick={() => setNotHidden(false)}>Set hidden</button>
      {notHidden && <SuperButton />}
    </div>
  );
};

export default App;
