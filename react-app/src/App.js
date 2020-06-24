import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [Todos, setTodos] = useState([]);
  const [TodoText, setTodoText] = useState("");
  const handleAddTodo = () => {
    if (TodoText) {
      setTodos([...Todos, { text: TodoText, done: false }]);
      setTodoText("");
    }
  };
  const handleToggleTodo = (i) => {
    const todoWithout = Todos.filter((val, index) => {
      return index !== i;
    });

    setTodos([...todoWithout, { text: Todos[i].text, done: !Todos[i].done }]);
  };
  return (
    <div className="main-wrapper">
      <div>
        <label>
          Input some todo!
          <input
            placeholder="To do..."
            value={TodoText}
            onChange={({ target }) => setTodoText(target.value)}
          ></input>
        </label>
      </div>
      <button onClick={handleAddTodo}>Add todo!</button>
      <div className="todos-block">
        {Todos.map((todo, index) => {
          return (
            <div>
              <span className={todo.done ? "done" : ""}>{todo.text}</span>
              <button
                onClick={() => {
                  handleToggleTodo(index);
                }}
              >
                {todo.done ? "⨯" : "✔"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
