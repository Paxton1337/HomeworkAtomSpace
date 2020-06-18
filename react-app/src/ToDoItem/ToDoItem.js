import React from "react";

const ToDoItem = (props) => {
  const completedClass = {
    textDecoration: "line-through",
  };
  const uncompletedClass = {
    textDecoration: "none",
  };
  return (
    <div className="todo-item">
      <div className="description-wrapper">
        <span style={props.completed == true ? completedClass : {}}>{props.description}</span>
        <input
          type="checkbox"
          defaultChecked={props.completed}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
